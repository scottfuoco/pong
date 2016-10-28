export default class Paddle {
    constructor(boardHeight, x, color, keys){
        this.height = 50;
        this.width = 5;
        this.x = x;
        this.y = (boardHeight/2) - (this.height/2);
        this.color = color;
        this.keys = keys;
        this.speed = 5;
        this.score = 0;
        document.addEventListener('keydown', event => this.keyListener(event, boardHeight));
    }
    
    keyListener(event, boardHeight) {
        switch(event.keyCode){
            case this.keys.up:
               this.moveUp();
               break;
            case this.keys.down:
                this.moveDown(boardHeight);
                break;
            default:
                return;
        }
    }
    
    moveUp(){
        if(this.y - this.speed >= 0){
            this.y -= this.speed;
        }
    }
    
    moveDown(boardHeight){
        if(this.y + this.height + this.speed <= boardHeight){
            this.y += this.speed;
        }
    }
    
    playerReset(boardHeight){
        this.y = (boardHeight/2) - (this.height/2);
        this.score = 0;
    }
    
    
    render (context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y,
                         this.width, this.height);                  
    };
}