export default class Paddle {
    constructor(boardHeight, x, color, keys){
        this.height = 50;
        this.width = 5;
        this.x = x;
        this.y = (boardHeight /2) - (this.height /2);
        this.boardHeight = boardHeight;
        this.color = color;
        this.keys = keys;
        document.addEventListener('keydown', event => this.keyListener(event));
    }
    
    keyListener(event) {
        switch(event.keyCode){
            case this.keys.up:
               this.moveUp();
               break;
            case this.keys.down:
                this.moveDown();
                break;
            default:
                return;
        }
    }
    
    moveUp(){
        if(this.y > 0){
            this.y -= 5;
        }
    }
    
    moveDown(boardHeight){
        if(this.y + this.height <= this.boardHeight){
            this.y += 5;
        }
    }
    
    render (context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y,
                         this.width, this.height);                  
    };
}