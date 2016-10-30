import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import Scoreboard from './Scoreboard';

import { player1Keys, player2Keys, gameKeys } from './keys';
import { ballVariables, boardVariables, paddleVariables, scoreboardVariables, gameVariables } from './variables';


export default class Game {
    constructor(id) {
        const canvas = document.getElementById(id);
        this.context = canvas.getContext('2d');
        this.height = canvas.height;
        this.width = canvas.width;
        this.gameOver = false;

        this.keys = gameKeys;

        this.board = new Board(this.height, this.width, boardVariables.backgrounds);
        this.board.setBackground(id, 3);

        this.playerArray = [];
        this.playerArray.push(new Paddle(this.height, paddleVariables.distFromEdge, 'white', 'red', player1Keys));
        this.playerArray.push(new Paddle(this.height, this.width - paddleVariables.distFromEdge, 'white', 'blue', player2Keys));

        this.ballArray = [];
        this.ballArray.push(new Ball(this.height / 2, this.width / 2, ballVariables.radius, ballVariables.color));
        this.scoreboard = new Scoreboard(10, this.width / 2, '#FF0');

        document.addEventListener('keydown', ev => { return this.keyListener(ev, ev.keyCode, true); }, false);
        document.addEventListener('keyup', ev => { return this.keyListener(ev, ev.keyCode, false); }, false);

    }

    keyListener(ev, key, pressed) {
        switch (key) {
            case this.keys.reset:
                if (this.gameOver) {
                    this.resetGame();
                }
                else {
                    this.ballArray.push(new Ball(this.height / 2, this.width / 2, ballVariables.radius, ballVariables.color));
                }
                break;
        }

        for (let player of this.playerArray) {
            if (player.keys.up === key) {
                player.input.up = pressed;
            }
            else if (player.keys.down === key) {
                player.input.down = pressed;
            }
        }
    }

    resetGame() {
        this.gameOver = false;
        this.playerArray[0].playerReset(this.height);
        this.playerArray[1].playerReset(this.height);

        for (let ball of this.ballArray) {
            ball.ballReset(this.height, this.width);
        }
    }

    update() {
        if (this.playerArray[0].score >= gameVariables.pointsToWin || this.playerArray[1].score >= gameVariables.pointsToWin) {
            let winner = '';
            if (this.playerArray[0].score >= gameVariables.pointsToWin) {
                winner = 'P1';
            } else {
                winner = 'P2';
            }
            this.board.render(this.context);
            this.scoreboard.printText(this.context, `Game Over: ${winner} wins!`);
            this.gameOver = true;
        }

        for (let ball of this.ballArray) {
            ball.update(this.height, this.width, this.playerArray[0], this.playerArray[1]);
        }
        this.playerArray[0].update(this.height);
        this.playerArray[1].update(this.height);
    }

    render() {
        if (!this.gameOver) {
            this.board.render(this.context);
            this.playerArray[0].render(this.context);
            this.playerArray[1].render(this.context);
            for (let ball of this.ballArray) {
                ball.render(this.context);
            }
            this.scoreboard.render(this.context, this.playerArray[0], this.playerArray[1]);
        }
    }
}