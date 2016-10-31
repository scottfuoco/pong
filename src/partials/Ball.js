export default class Ball {
    constructor(y, x, radius, color, speed = 5, vx, vy, isKi) {
        this.y = y;
        this.x = x;
        this.vx = vx || (Math.random() < 0.5 ? -1 : 1);
        console.log(this.vx);
        this.vy = isKi ? 0 : Math.random() < 0.5 ? -.25 : .25;
        this.speed = speed;
        this.radius = radius;
        this.color = color;
        this.isKi = isKi;

    }

    playSound(file) {
        let snd = new Audio(file);
        snd.play();
    }

    playerScore(player) {
        player.score++;
        this.playSound("pong/sounds/pong-03.wav");
    }

    ballReset(boardHeight, boardWidth) {
        this.x = boardWidth / 2;
        this.y = boardHeight / 2;
        this.vy = Math.random() < 0.5 ? -.25 : .25;
        this.vx *= -1;
    }

    /*    update(boardHeight, boardWidth, p1, p2) {
            if (this.x - this.radius <= 0) {
                this.playerScore(p2);
                this.ballReset(boardHeight, boardWidth);
            }
    
            if (this.x + this.radius >= boardWidth) {
                this.playerScore(p1);
                this.ballReset(boardHeight, boardWidth);
            }
    
            if (this.y - this.radius <= 0 || this.y + this.radius >= boardHeight) {
                this.vy *= -1;
    
                this.playSound("pong/sounds/pong-01.wav");
            }
    
            if (this.x + this.radius >= p2.x && this.x + this.radius <= p2.x + p2.width) {
                if (this.y >= p2.y && this.y <= p2.y + p2.height) {
                    this.x = p2.x - this.radius;
    
                    this.color = p2.kiColor;
                    this.playSound("pong/sounds/pong-02.wav");
                    this.vx *= -1;
                }
            }
    
            if (this.x - this.radius <= p1.x + p1.width && this.x - this.radius >= p1.x) {
                if (this.y >= p1.y && this.y <= p1.y + p1.height) {
                    this.x = p1.x + p1.width + this.radius;
    
                    this.color = p1.kiColor;
                    this.playSound("pong/sounds/pong-02.wav");
                    this.vx *= -1;
                }
            }
    
            this.x += this.vx * this.speed;
            this.y += this.vy * this.speed;
        }
    */
    render(context) {
        context.fillStyle = this.color;
        context.beginPath();
        // arc(x, y, radius, 0, Pi* 2, true)
        context.arc(
            this.x,
            this.y,
            this.radius,
            0, Math.PI * 2, true);
        context.fill();
    }
}