export default class Ball {
    constructor(y, x, radius, color, speed = 5, vx, vy, isKi) {
        this.y = y;
        this.x = x;
        this.vx = vx || (Math.random() < 0.5 ? -1 : 1);
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