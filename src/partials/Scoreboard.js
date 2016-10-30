export default class ScoreBoard {
    constructor(y, x, color) {
        this.y = y;
        this.x = x;
        this.color = color;
        this.fontSize = '12px';
        this.font = 'Helvetica';
    }

    printText(context, text) {
        context.fillStyle = this.color;
        context.font = `${this.fontSize} ${this.font}`;
        let scoreWidth = context.measureText(text).width;
        context.fillText(text, this.x - scoreWidth / 2, this.y);
    }

    render(context, p1, p2) {
        this.printText(context, `P1: ${p1.score}     P2: ${p2.score}`)
    }
}