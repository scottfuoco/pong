import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import Scoreboard from './Scoreboard';

import {player1Keys, player2Keys, gameKeys} from './keys';
import {ballVariables, paddleVariables, scoreboardVariables} from './variables';



export default class Game {
    constructor(id){
        const canvas = document.getElementById(id);
        this.context = canvas.getContext('2d');
        this.height = canvas.height;
        this.width = canvas.width;
        this.gameOver = false;
        
        this.keys = gameKeys;
        
        this.board = new Board(this.height, this.width, 'black');
        this.p1 = new Paddle(this.height, paddleVariables.distFromEdge, 'white', player1Keys);
        this.p2 = new Paddle(this.height, this.width - paddleVariables.distFromEdge, 'white', player2Keys);
        this.ball = new Ball(this.height/2, this.width/2, ballVariables.radius, ballVariables.color);
        this.scoreboard = new Scoreboard(10, this.width/2, '#FF0');
        
         document.addEventListener('keydown', event => this.keyListener(event));
    }
    
    resetGame(){
        console.log('hi');
        this.gameOver = false;
        this.p1.playerReset(this.height);
        this.p2.playerReset(this.height);
        this.ball.ballReset(this.height, this.width);
    }
    
    keyListener(event){
        if(this.gameOver){
            switch(event.keyCode){
                case this.keys.reset:
                    this.resetGame();
                break;
                default:
                    return;
            }           
        }                
    }

    update(){
        if (this.p1.score >= 3 || this.p2.score >=3){
            let winner = '';
            if (this.p1.score >=3){
                winner = 'P1';
            }else{
                winner = 'P2';
            }                
             this.board.render(this.context);
             this.scoreboard.printText(this.context, `Game Over: ${winner} wins!`);
             this.gameOver = true;
        }
        
        this.ball.update(this.height, this.width, this.p1, this.p2);

    }

    render () {
        if(!this.gameOver){
        this.board.render(this.context);
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.ball.render(this.context);
        this.scoreboard.render(this.context, this.p1, this.p2);
    }
    }
}