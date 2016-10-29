export default class Paddle {
    constructor(boardHeight, x, color, kiColor, keys) {
        this.height = 50;
        this.width = 5;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.color = color;
        this.keys = keys;
        this.speed = 5;
        this.score = 0;
        this.kiColor = kiColor;
        this.map = {};
        document.addEventListener('keydown', event => this.keyDownListener(event, boardHeight));
        document.addEventListener('keyup', event => this.keyDownListener(event, boardHeight));
        //        document.addEventListener('keyup', event => this.keyUpListener(event));
    }

    keyDownListener(e, boardHeight) {
        e = e || event; // to deal with IE
        this.map[e.keyCode] = e.type == 'keydown';

        if (this.map[this.keys.up]) {
            this.moveUp();
        }
        if (this.map[this.keys.down]) {
            this.moveDown(boardHeight);
        }
    }

    keyUpListener(e) {
        e = e || event; // to deal with IE
        delete this.map[e.keyCode];
    }

    moveUp() {
        if (this.y - this.speed >= 0) {
            this.y -= this.speed;
        }
    }

    moveDown(boardHeight) {
        if (this.y + this.height + this.speed <= boardHeight) {
            this.y += this.speed;
        }
    }

    playerReset(boardHeight) {
        this.y = (boardHeight / 2) - (this.height / 2);
        this.score = 0;
    }


    render(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y,
            this.width, this.height);
    };
}