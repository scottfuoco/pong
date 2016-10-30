export default class Paddle {
    constructor(boardHeight, x, color, kiColor, keys, character) {
        this.height = 50;
        this.width = 5;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.color = color;

        this.speed = 5;
        this.score = 0;
        this.kiColor = character.kiColor;
        this.keys = keys;
        this.character = character;
        this.input = { up: false, down: false };

    }

    setHeight(array) {

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

    drawCharacter(context) {
        let nextSectionStart = 0;
        let skin = this.character.skins.normal;
        for (let section in skin) {
            let sectionObj = skin[section];
            context.fillStyle = sectionObj.color;
            context.fillRect(this.x, this.y + nextSectionStart,
                this.width, sectionObj.height);

            nextSectionStart += sectionObj.height;
        }
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
        this.drawCharacter(context);
    }
}