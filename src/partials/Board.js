export default class Board {
    constructor(height, width, backgrounds) {
        this.height = height;
        this.width = width;
        this.backgrounds = backgrounds;


    }

    setBackground(id, bgIndex) {
        document.getElementById('game').style.backgroundImage = `url(http://localhost:3000/${this.backgrounds[bgIndex]}`;
        console.log(this.backgrounds[bgIndex]);
    }

    clearBoard(context) {
        context.clearRect(0, 0, this.width, this.height);
    }

    drawLine(context) {
        context.setLineDash([10, 10]);
        context.strokeStyle = 'blue';
        context.lineWidth = 2;

        context.beginPath();
        context.moveTo(this.width / 2, 0);
        context.lineTo(this.width / 2, this.height);
        context.stroke();
    }

    render(context) {
        this.clearBoard(context);
        this.drawLine(context);
    }
}