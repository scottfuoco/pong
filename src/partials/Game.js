import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import {player1Keys, player2Keys} from './keys';


export default class Game {
    constructor(id){
        const canvas = document.getElementById(id);
        this.context = canvas.getContext('2d');
        this.height = canvas.height;
        this.width = canvas.width;
        
        this.board = new Board(this.height, this.width, 'black');
        this.p1 = new Paddle(this.height, 30, 'white', player1Keys);
        this.p2 = new Paddle(this.height, this.width - 35, 'white', player2Keys);
        this.ball = new Ball(this.height/2, this.width/2, 5, 'red');
    }
    
    update(){
        this.ball.update(this.height, this.width, this.p1, this.p2);
    }

    render () {
        this.board.render(this.context);
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.ball.render(this.context);
    }
}