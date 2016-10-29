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
    
    playerScore(player){
        player.score++;
        let snd = new Audio("../../sounds/pong-03.wav");
        snd.play();
    }
    
    ballReset(boardHeight, boardWidth){
        this.x = boardWidth / 2;
        this.y = boardHeight / 2;
        this.vy = Math.random() < 0.5 ? -.25 : .25;
        this.vx *= -1;
    }
    
    update(boardHeight, boardWidth, p1, p2){
       if (this.x - this.radius <= 0){      
           this.playerScore(p2);
           this.ballReset(boardHeight, boardWidth);
        }
     
        if (this.x + this.radius >= boardWidth){     
           this.playerScore(p1);
           this.ballReset(boardHeight, boardWidth);
        }
        
        if (this.y - this.radius <= 0 || this.y + this.radius >= boardHeight){
            this.vy *= -1;
          
            let snd = new Audio("../../sounds/pong-01.wav");
            snd.play();
        }
                    
        if (this.x + this.radius >= p2.x && this.x + this.radius <= p2.x + p2.width){
            if(this.y >= p2.y && this.y <= p2.y + p2.height){
                this.x = p2.x - this.radius;
                let snd = new Audio("../../sounds/pong-02.wav");
                snd.play();
                this.vx *= -1;
            }
        }

        if (this.x - this.radius <= p1.x + p1.width && this.x - this.radius >= p1.x){
            if(this.y >= p1.y && this.y <= p1.y + p1.height){
                this.x = p1.x + p1.width + this.radius;
                var snd = new Audio("../../sounds/pong-02.wav");
                snd.play();
                this.vx *= -1;
            }
        }
        
        this.x += this.vx*this.speed;
        this.y += this.vy*this.speed;
    }
    
    render(context){
        context.fillStyle = this.color;
        context.beginPath();
        // arc(x, y, radius, 0, Pi* 2, true)
        context.arc(
            this.x,
            this.y,
            this.radius,
            0, Math.PI*2, true);
        context.fill();
    }
}