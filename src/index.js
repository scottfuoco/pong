import './game.css';
import Game from './partials/Game'


var game = new Game('game');
const fps = 30;

(function gameLoop(){
	game.update();
	game.render();
	setTimeout(gameLoop, fps);
})();