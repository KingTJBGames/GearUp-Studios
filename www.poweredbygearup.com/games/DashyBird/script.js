function run() {
	var menuloop = document.getElementById('menuloop')
	menuloop.play();
	var bird = document.getElementById('birdy')
	var l1ico = document.getElementById('l1ico')
	var l2ico = document.getElementById('l2ico')
	var l3ico = document.getElementById('l3ico')
	var l4ico = document.getElementById('l4ico')
	var l5ico = document.getElementById('l5ico')
	var startscreen = document.getElementById('startscreen');
	var birdX = 100;
	var birdY = 100;
	var birdHeight = 80;
	var backgroundX = 0;
	var background2x = 1600;
	var gravity = true;
	var birdWidth = 120;
	var startGamemode = 0;
	var levelScreenGamemode = 1;
	var currentGamemode = startGamemode;
	window.onload = function () { currentGamemode = startGamemode; }
	window.onclick = function () { gravity = false }
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
				ctx.strokeRect(4, 4, 791, 591);
				ctx.drawImage(l1ico, 50, 25)
				ctx.drawImage(l2ico, 300, 25)
				ctx.drawImage(l3ico, 550, 25)
				ctx.drawImage(l4ico, 50, 150)
				ctx.drawImage(l5ico, 300, 150)
			}

			if (currentGamemode === levelGamemodes.i) {
				var l1bg = document.getElementById('l1bg');
				ctx.drawImage(l1bg, backgroundX, 0)
				ctx.drawImage(l1bg, background2x, 0)
				if (backgroundX < -1598) {
					backgroundX = 1600;
				}
				if (background2x < -1598) {
					background2x = 1600;
				}
				ctx.drawImage(bird, birdX, birdY, birdWidth, birdHeight);
				if (gravity) {
					birdY += 14
				} else {
					for (i = 15; i > 1; i--) {
						birdY -= i;
					}
					gravity = true
					
				}
			}

			if (currentGamemode === levelGamemodes.ii) {
				var l2bg = document.getElementById('l2bg');
				ctx.drawImage(l2bg, backgroundX, 0)
				ctx.drawImage(l2bg, background2x, 0)
				if (backgroundX < -1598) {
					backgroundX = 1600;
				}
				if (background2x < -1598) {
					background2x = 1600;
				}
				ctx.drawImage(bird, birdX, birdY, birdWidth, birdHeight);
				
			}
			if (currentGamemode === levelGamemodes.iii) {
				var l3bg = document.getElementById('l3bg');
				ctx.drawImage(l3bg, backgroundX, 0)
				ctx.drawImage(l3bg, background2x, 0)
				if (backgroundX < -1598) {
					backgroundX = 1600;
				}
				if (background2x < -1598) {
					background2x = 1600;
				}
				ctx.drawImage(bird, birdX, birdY, birdWidth, birdHeight);
			}
			if (currentGamemode === levelGamemodes.iv) {
				var l4bg = document.getElementById('l4bg');
				ctx.drawImage(l4bg, backgroundX, 0)
				ctx.drawImage(l4bg, background2x, 0)
				if (backgroundX < -1598) {
					backgroundX = 1600;
				}
				if (background2x < -1598) {
					background2x = 1600;
				}
				ctx.drawImage(bird, birdX, birdY, birdWidth, birdHeight);
			}
			if (currentGamemode === levelGamemodes.v) {
				var l5bg = document.getElementById('l5bg');
				ctx.drawImage(l5bg, backgroundX, 0)
				ctx.drawImage(l5bg, background2x, 0)
				if (backgroundX < -1598) {
					backgroundX = 1600;
				}
				if (background2x < -1598) {
					background2x = 1600;
				}
				ctx.drawImage(bird, birdX, birdY, birdWidth, birdHeight);
			}
		},
		update: function () {
				backgroundX -= 2;
				background2x -= 2;
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

