import './game.css';
import Game from './partials/Game'


var game = new Game('game');
const fps = 30;

(function gameLoop() {

	if (!game.gameOver) {
		game.collision();
		game.update();
		game.render();
	}

	setTimeout(gameLoop, fps);
})();