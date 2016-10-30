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
        this.keys = keys;
        this.input = { up: false, down: false };
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

    update(boardHeight) {
        if (this.input.up) {
            this.moveUp();
        }
        if (this.input.down) {
            this.moveDown(boardHeight);
        }
    }
    render(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y,
            this.width, this.height);
    };
}