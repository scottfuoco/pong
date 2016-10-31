import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import Scoreboard from './Scoreboard';

import { player1Keys, player2Keys, gameKeys, boardKeys } from './keys';
import { ballVariables, boardVariables, paddleVariables, scoreboardVariables, gameVariables, characterVariables, player1Variables, player2Variables } from './variables';


export default class Game {
    constructor(id) {
        this.id = id;
        const canvas = document.getElementById(this.id);
        this.context = canvas.getContext('2d');
        this.height = canvas.height;
        this.width = canvas.width;
        this.gameOver = false;
        this.ballHits = 0;

        this.keys = gameKeys;

        this.board = new Board(this.height, this.width, boardVariables.backgrounds);
        this.board.setBackground(id, 0);

        this.playerArray = [];
        this.playerArray.push(new Paddle(this.height, paddleVariables.distFromEdge, player1Keys, characterVariables.pongku, player1Variables.kiVX, player1Variables.kiVY));
        this.playerArray.push(new Paddle(this.height, this.width - paddleVariables.distFromEdge, player2Keys, characterVariables.pongolo, player2Variables.kiVX, player2Variables.kiVY));

        this.ballArray = [];
        this.ballArray.push(new Ball(this.height / 2, this.width / 2, ballVariables.radius, ballVariables.color, ballVariables.speed, ballVariables.vx, ballVariables.vy, false)); 1
        this.scoreboard = new Scoreboard(10, this.width / 2, '#42f445');

        document.addEventListener('keydown', ev => { return this.keyListener(ev, ev.keyCode, true); }, false);
        document.addEventListener('keyup', ev => { return this.keyListener(ev, ev.keyCode, false); }, false);

        this.previousKeys = {};
    }

    playSound(file) {
        let snd = new Audio(file);
        snd.play();
    }

    keyListener(ev, key, pressed) {
        if (this.keys.reset === key) {
            if (this.gameOver) {
                this.resetGame();
            }
            else if (!this.previousKeys[key]) {
                this.spawnBall();
            }
        }

        if (boardKeys.map.includes(key) && (!this.previousKeys[key])) {
            this.board.setBackground(this.id, boardKeys.map.indexOf(key));
        }

        // run through all players and check if one of their event keys was pressed
        // if it was set that input on that player to true.
        // the action will be called in the update() for that player/

        for (let player of this.playerArray) {
            if (player.keys.fire === key && player.kiAttacksLeft >= 0 && (!this.previousKeys[key])) {
                this.ballArray.push(new Ball(player.y + (player.height / 2),
                    player.x + player.width * player.kiVX + ballVariables.kiRadius * player.kiVX + player.kiVX,
                    ballVariables.kiRadius,
                    player.kiColor,
                    ballVariables.speed,
                    player.kiVX,
                    player.kiVY,
                    true));
                player.kiAttacksLeft--;

                this.playSound("pong/sounds/kiBlast.wav");
            }
            if (player.keys.up === key) {
                player.input.up = pressed;
            }
            else if (player.keys.down === key) {
                player.input.down = pressed;
            }
        }
        this.previousKeys[key] = pressed;
    }

    resetGame() {
        this.gameOver = false;
        this.playerArray[0].playerReset(this.height);
        this.playerArray[1].playerReset(this.height);

        this.ballArray.splice(0, 1);
        for (let ball of this.ballArray) {
            ball.ballReset(this.height, this.width);
        }
    }

    spawnBall() {
        this.ballArray.push(new Ball(this.height / 2, this.width / 2, ballVariables.radius, ballVariables.color));
    }

    collision() {
        this.ballArray.forEach((ball, index) => {
            if (ball.x - ball.radius <= 0) {
                ball.playerScore(this.playerArray[1]);
                this.playerArray.forEach(player => {
                    player.kiAttacksLeft = player.kiAttacks;
                    player.speed = 6;
                });
                if (ball.isKi) {
                    this.ballArray.splice(index, 1);
                }
                ball.ballReset(this.height, this.width);
            }

            if (ball.x + ball.radius >= this.width) {
                ball.playerScore(this.playerArray[0]);
                this.playerArray.forEach(player => {
                    player.kiAttacksLeft = player.kiAttacks;
                    player.speed = 6;
                });
                if (ball.isKi) {
                    this.ballArray.splice(index, 1);
                }
                ball.ballReset(this.height, this.width);
            }

            if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= this.height) {
                ball.vy *= -1;
                ball.playSound("pong/sounds/pong-01.wav");
            }

            if (ball.x + ball.radius >= this.playerArray[1].x && ball.x + ball.radius <= this.playerArray[1].x + this.playerArray[1].width) {
                if (ball.y >= this.playerArray[1].y && ball.y <= this.playerArray[1].y + this.playerArray[1].height) {
                    if (ball.isKi) {
                        this.ballArray.splice(index, 1);
                    }

                    ball.x = this.playerArray[1].x - ball.radius;

                    ball.color = this.playerArray[1].kiColor;
                    ball.playSound("pong/sounds/pong-02.wav");
                    ball.vx *= -1;
                    this.ballHits++;
                }
            }

            if (ball.x - ball.radius <= this.playerArray[0].x + this.playerArray[0].width && ball.x - ball.radius >= this.playerArray[0].x) {
                if (ball.y >= this.playerArray[0].y && ball.y <= this.playerArray[0].y + this.playerArray[0].height) {
                    if (ball.isKi) {
                        this.ballArray.splice(index, 1);
                    }

                    ball.x = this.playerArray[0].x + this.playerArray[0].width + ball.radius;

                    ball.color = this.playerArray[0].kiColor;
                    ball.playSound("pong/sounds/pong-02.wav");
                    ball.vx *= -1;
                    this.ballHits++;
                }
            }

            ball.x += ball.vx * ball.speed;
            ball.y += ball.vy * ball.speed;
        });
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

        /*        for (let ball of this.ballArray) {
                    ball.update(this.height, this.width, this.playerArray[0], this.playerArray[1]);
                }*/
        this.playerArray[0].update(this.height);
        this.playerArray[1].update(this.height);

        switch (this.ballHits) {
            case 6:
                this.playerArray[0].speed = 4;
                this.playerArray[1].speed = 4;
                break;
            case 8:
                this.playerArray[0].speed = 3;
                this.playerArray[1].speed = 3;
                break;
            case 10:
                this.playerArray[0].speed = 2;
                this.playerArray[1].speed = 2;
                break;
            case 12:
                this.playerArray[0].speed = 1;
                this.playerArray[1].speed = 1;
                break;
        }

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