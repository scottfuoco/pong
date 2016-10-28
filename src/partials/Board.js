export default class Board {
    constructor(height, width, color='black'){
        this.height = height;
        this.width = width;
        this.color = color;
    }
        
    drawBoard (context) {
		context.fillStyle = this.color;
		context.fillRect(0, 0,
						this.width,
						this.height);
	}
	
	drawLine (context) {
		context.setLineDash([20, 10]);
		context.strokeStyle = 'blue';
		context.lineWidth = 5;

		context.beginPath();
		context.moveTo(this.width/2 - 5, 0);
		context.lineTo(this.width/2 - 5, this.height);
		context.stroke();
	}
    
    render (context) {
        this.drawBoard(context);
        this.drawLine(context);
    }
}