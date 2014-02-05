/**
 * Created by dnefedov on 05.02.14.
 */

(function () {
	var onEachFrame;
	//Если браузер на движке WebKit (Chrome, Safari, Opera)
	if (window.webkitRequestAnimationFrame) {
		onEachFrame = function (callback) {
			var _callback = function () {
				callback();
				webkitRequestAnimationFrame(_callback);
			};
			_callback();
		};
	}
	//Иначе, если браузер Mozila
	else if (window.mozRequestAnimationFrame) {
		onEachFrame = function (callback) {
			var _callback = function () {
				callback();
				mozRequestAnimationFrame(_callback);
			};
			_callback();
		};
	}
	//Иначе все сотальные браузеры (IE)
	else {
		onEachFrame = function (cb) {
			setInterval(cb, 1000 / 60);
		}
	}

	window.onEachFrame = onEachFrame;
})();

window.onEachFrame(Game.run);
