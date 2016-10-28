export default class Ball {
    constructor (y, x, radius, color) {
        this.y = y;
        this.x = x;
        this.vx = Math.random() < 0.5 ? -1 : 1;
        this.vy = Math.random() < 0.5 ? -.25 : .25;
        this.radius = radius;
        this.color = color;
        this.speed = 5;
    }
    
    update(boarderHeight, boarderWidth, p1, p2){
        this.x += this.vx*this.speed;
        
console.log('3')        
       if (this.x - this.radius <= 0){
           this.x -= this.vx*this.speed;
           this.vx *= -1;
        }
     
        if (this.x >= boarderWidth){
            this.x -= this.vx*this.speed;
            this.vx *= -1;
        }
        if(this.y - this.radius <= 0)
            console.log('1')
        if(this.y + this.radius >= boarderHeight)
            console.log('2')
        
        if (this.y - this.radius <= 0 || this.y >= boarderHeight){
            this.y += this.vy*this.speed;
            this.vy *= -1;   
        }
        this.y += this.vy*this.speed;
        
    }
    
    render(context){
        context.fillStyle = this.color;
        context.beginPath();
        // arc(x, y, radius, 0, Pi* 2, true)
        context.arc(
            this.x - this.radius,
            this.y - this.radius,
            this.radius,
            0, Math.PI*2, true);
        context.fill();
    }
}