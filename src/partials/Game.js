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
        this.board.setBackground(id, 0);

        this.p1 = new Paddle(this.height, paddleVariables.distFromEdge, 'white', 'red', player1Keys);
        this.p2 = new Paddle(this.height, this.width - paddleVariables.distFromEdge, 'white', 'blue', player2Keys);

        this.ballArray = [];
        this.ballArray.push(new Ball(this.height / 2, this.width / 2, ballVariables.radius, ballVariables.color));
        this.scoreboard = new Scoreboard(10, this.width / 2, '#FF0');

        document.addEventListener('keydown', event => this.keyListener(event));
    }

    resetGame() {
        this.gameOver = false;
        this.p1.playerReset(this.height);
        this.p2.playerReset(this.height);

        for (let ball of this.ballArray) {
            ball.ballReset(this.height, this.width);
        }
    }

    keyListener(event) {
        switch (event.keyCode) {
            case this.keys.reset:
                if (this.gameOver) {
                    this.resetGame();
                }
                else {
                    this.ballArray.push(new Ball(this.height / 2, this.width / 2, ballVariables.radius, ballVariables.color));
                }
                break;
            default:
                return;
        }
    }

    update() {
        if (this.p1.score >= gameVariables.pointsToWin || this.p2.score >= gameVariables.pointsToWin) {
            let winner = '';
            if (this.p1.score >= gameVariables.pointsToWin) {
                winner = 'P1';
            } else {
                winner = 'P2';
            }
            this.board.render(this.context);
            this.scoreboard.printText(this.context, `Game Over: ${winner} wins!`);
            this.gameOver = true;
        }

        for (let ball of this.ballArray) {
            ball.update(this.height, this.width, this.p1, this.p2);
        }
    }

    render() {
        if (!this.gameOver) {
            this.board.render(this.context);
            this.p1.render(this.context);
            this.p2.render(this.context);
            for (let ball of this.ballArray) {
                ball.render(this.context);
            }
            this.scoreboard.render(this.context, this.p1, this.p2);
        }
    }
}