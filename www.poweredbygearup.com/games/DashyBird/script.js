function getId(id) {
	var id = document.getElementById(id);
	return id;
}

function run() {
	var menuloop = document.getElementById('menuloop')
	menuloop.play();
	var m1 = document.getElementById('1m');
	var m2 = getId('2m');
	var m3 = getId('3m');
	var m4 = getId('4m');
	var m5 = getId('5m');
	var l1ico = document.getElementById('l1ico')
	var l2ico = document.getElementById('l2ico')
	var l3ico = document.getElementById('l3ico')
	var l4ico = document.getElementById('l4ico')
	var l5ico = document.getElementById('l5ico')
	var startscreen = document.getElementById('startscreen');
	var startGamemode = 0;
	var levelScreenGamemode = 1;
	var currentGamemode = startGamemode;
	window.onload = function () { currentGamemode = startGamemode; }
	var menuloop = document.getElementById('menuloop')
	var levelGamemodes = {
		i: 2,
		ii: 3,
		iii: 4,
		iv: 5,
		v: 6
	}

	var canvas = {
		width: 800,
		height: 600,
		element: document.getElementById('canvas'),
		setup: function () {
			canvas.element.width = canvas.width;
			canvas.element.height = canvas.height;
		},
		draw: function () {
			var ctx = canvas.element.getContext('2d');
			ctx.clearRect(0, 0, 800, 600)

			if (currentGamemode === startGamemode) {
				ctx.drawImage(startscreen, 0, 0, 800, 600)
			}

			if (currentGamemode === levelScreenGamemode) {
				ctx.fillStyle = 'orange'
				ctx.fillRect(0, 0, 800, 600)
				ctx.strokeStyle = 'blue';
				ctx.lineWidth = 6
				ctx.strokeRect(4, 4, 791, 591)
				ctx.drawImage(l1ico, 50, 25)
				ctx.drawImage(l2ico, 300, 25)
				ctx.drawImage(l3ico, 550, 25)
				ctx.drawImage(l4ico, 50, 150)
				ctx.drawImage(l5ico, 300, 150)
			}

		},
		update: function () {
		},
		init: function () {
			canvas.setup();
			canvas.update();
			canvas.draw();
			window.requestAnimationFrame(canvas.init);
		}
	}
	canvas.element.onclick = function (event) {
		if (currentGamemode === levelScreenGamemode) {
			var x = event.clientX;
			var y = event.clientY;

			if ((y > 25) && (y < 115)) {
				if (x > 50 && x < 236) {
					currentGamemode = levelGamemodes.i
					menuloop.volume = 0;
					var mi = document.getElementById('1m');
					mi.play()
				}
				if (x > 300 && x < 486) {
					currentGamemode = levelGamemodes.ii
					menuloop.volume = 0;
					var mii = document.getElementById('2m');
					mii.play()
				}
				if (x > 550 && x < 736) {
					currentGamemode = levelGamemodes.iii
					menuloop.volume = 0;
					var miii = document.getElementById('3m');
					miii.play()
				}
			}
			if ((y > 150) && (y < 240)) {
				if (x > 50 && x < 236) {
					currentGamemode = levelGamemodes.iv
					menuloop.volume = 0;
					var miv = document.getElementById('4m');
					miv.play()
				}
				if (x > 300 && x < 486) {
					currentGamemode = levelGamemodes.v
					menuloop.volume = 0;
					var mv = document.getElementById('5m');
					mv.play()
				}
			}
		}

		if (currentGamemode === startGamemode) {
			currentGamemode = levelScreenGamemode;
		}
	}
	window.addEventListener('load', canvas.init());
	window.addEventListener('click', onclick());
}