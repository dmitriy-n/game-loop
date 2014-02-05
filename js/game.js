/**
 * Created by dnefedov on 30.01.14.
 */

var Game = {
	fps: 50
};
Game.init = function () {
	console.log('Game is initialized...');
};

/**
 * Ф-я просчета логики за один кадр
 */
Game.update = function () {
};

/**
 * Ф-я просчета логики за один кадр
 * @param interpolation
 */
Game.draw = function (interpolation) {
};

Game.run = (function () {
	var loops = 0;
	var skipTicks = 1000 / Game.fps;
	var maxFrameSkip = 10;
	var nextGameTick = (new Date).getTime();
	var lastGameTick;

	Game.init();

	return function () {
		loops = 0;
		while ((new Date).getTime() > nextGameTick) {
			Game.update();
			nextGameTick += skipTicks;
			loops++;
		}

		if (!loops) {
			Game.draw((nextGameTick - (new Date).getTime()) / skipTicks);
		} else {
			Game.draw(0);
		}
	}
})();
