function run() {

	//CONSTANTS

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d')
	var canvasWidth = 800;
	var canvasHeight = 600;
	canvas.height = canvasHeight;
	canvas.width = canvasWidth;

	var spaceShip1 = new Image;
	spaceShip1.src = 'images/spaceships/1.png';

	var spaceShip2 = new Image;
	spaceShip2.src = 'images/spaceships/2.png';

	var spaceShip3 = new Image;
	spaceShip3.src = 'images/spaceships/3.png';

	var spaceShip4 = new Image;
	spaceShip4.src = 'images/spaceships/4.png';

	var okButton = new Image;
	okButton.src = 'images/buttons/ok.png';

	var lockImg = new Image;
	lockImg.src = 'images/spaceships/lock.png';

	var startButton = new Image;
	startButton.src = 'images/buttons/start.png';

	var blastImg = new Image;
	blastImg.src = 'images/blast.png';

	var settingsButton = new Image;
	settingsButton.src = 'images/buttons/settings.png';

	var csButton = new Image;
	csButton.src = 'images/buttons/char-select.png';

	var coinImg = new Image;
	coinImg.src = 'images/coin.png';

	var spaceCoinImg = new Image;
	spaceCoinImg.src = 'images/spacecoin.png';

	var gemImg = new Image;
	gemImg.src = 'images/gem.png';

	var switchOn = new Image;
	switchOn.src = 'images/switch/on.png';

	var switchOff = new Image;
	switchOff.src = 'images/switch/off.png';

	var startScreenGM = 0;
	var charecterSelectGM = 1;
	var playGM = 2;
	var maxCoins = 999999999999999
	var maxSCoins = 999999999999999
	var maxGems = 999999999999
	var settingsGM = 3;

	//PRESET

	var ss2Unlocked = false;
	var ss3Unlocked = false;
	var speed = 5;
	var ss4Unlocked = false;
	var gameMode = startScreenGM;
	var totalCoins = 500;
	var movingLeft = false;
	var movingUp = false;
	var movingRight = false;
	var movingDown = false;
	var totalSCoins = 200;
	var totalGems = 50;
	var currentShip = spaceShip1;
	var music = true;
	var sfx = true;
	var mobileControls = false;
	var autoBuy = false;
	var musicSwitch = switchOn;
	var sfxSwitch = switchOn;
	var mobileControlsSwitch = switchOff;
	var autoBuySwitch = switchOff;
	var shipX = 100
	var shipY = 250

	//START

	window.addEventListener('load', start())

	function start() {
		loop()
	}

	function loop() {
		update()
		draw()
		window.requestAnimationFrame(loop)
	}

	//UPDATE

	function update() {

		if (gameMode === playGM) {
			if (shipY < -75) { shipY = 615 }

			if (shipY > 675) { shipY = -74 }

			if (shipX < -75) { shipX = 800 }

			if (shipX > 800) { shipX = -75 }
		}

		if (totalCoins > maxCoins) {
			totalCoins = maxCoins;
		}
		if (totalSCoins > maxSCoins) {
			totalSCoins = maxSCoins;
		}
		if (totalGems > maxGems) {
			totalGems = maxGems;
		}

		if (movingLeft) {
			shipX -= speed
		}

		if (movingRight) {
			shipX += speed
		}

		if (movingDown) {
			shipY += speed
		}

		if (movingUp) {
			shipY -= speed
		}

		if (music) {
			musicSwitch = switchOn
		} else {
			musicSwitch = switchOff
		}


		if (sfx) {
			sfxSwitch = switchOn
		} else {
			sfxSwitch = switchOff
		}

		if (autoBuy) {
			autoBuySwitch = switchOn
		} else {
			autoBuySwitch = switchOff
		}


		if (mobileControls) {
			mobileControlsSwitch = switchOn
		} else {
			mobileControlsSwitch = switchOff
		}

		if (autoBuy) {
			if (totalCoins > 499) {
				ss2Unlocked = true;
				totalCoins -= 500
			}
			if (totalSCoins > 199) {
				ss3Unlocked = true;
				totalSCoins -= 200
			}
			if (totalGems > 49) {
				ss4Unlocked = true;
				totalGems -= 50
			}
		}

	}

	//DRAW

	function draw() {
		ctx.clearRect(0, 0, 800, 600)

		if (gameMode === startScreenGM) {
			ctx.strokeStyle = 'skyblue';
			ctx.font = '20pt arial'
			ctx.fillStyle = 'blue';
			ctx.fillRect(0, 0, 800, 40)
			ctx.strokeText(totalCoins, 40, 28)
			ctx.strokeText(totalSCoins, 322, 28)
			ctx.strokeText(totalGems, 580, 28)
			ctx.drawImage(coinImg, 2, 2, 30, 30)
			ctx.strokeText(totalGems, 580, 28)
			ctx.drawImage(gemImg, 552, 2, 30, 30)
			ctx.drawImage(spaceCoinImg, 282, 2, 30, 30)
			ctx.font = '70pt arial'
			ctx.strokeText('STARSHOOTER', 50, 125)
			ctx.drawImage(startButton, 250, 200)
			ctx.drawImage(csButton, 30, 250)
			ctx.drawImage(settingsButton, 550, 190)

		}

		if (gameMode === playGM) {
			ctx.drawImage(currentShip, shipX, shipY)

			window.onkeydown = function (event) {
				if (event.keyCode === 32) {
					shoot()
				}
			}
			function shoot() {
				ctx.drawImage(blastImg, 20, 20, )
			}
		}

		if (gameMode === settingsGM) {
			ctx.strokeStyle = 'skyblue';
			ctx.font = '20pt arial'
			ctx.fillStyle = 'blue';
			ctx.fillRect(0, 0, 800, 40)
			ctx.strokeText(totalCoins, 40, 28)
			ctx.strokeText(totalSCoins, 322, 28)
			ctx.strokeText(totalGems, 580, 28)
			ctx.drawImage(coinImg, 2, 2, 30, 30)
			ctx.strokeText(totalGems, 580, 28)
			ctx.drawImage(gemImg, 552, 2, 30, 30)
			ctx.drawImage(spaceCoinImg, 282, 2, 30, 30)
			ctx.strokeStyle = 'skyblue';
			ctx.fillStyle = 'blue';
			ctx.font = '70pt arial'
			ctx.strokeText('SETTINGS', 150, 125)
			ctx.font = '30pt arial'
			ctx.fillText('Music', 250, 280)
			ctx.fillText('SFX', 280, 330)
			ctx.fillText('Mobile Controls', 80, 380)
			ctx.fillText('Auto Buy', 195, 430)
			ctx.drawImage(musicSwitch, 440, 250, 80, 40)
			ctx.drawImage(sfxSwitch, 440, 300, 80, 40)
			ctx.drawImage(mobileControlsSwitch, 440, 350, 80, 40)
			ctx.drawImage(autoBuySwitch, 440, 400, 80, 40)
			ctx.drawImage(okButton, 280, 460)
			ctx.font = '50pt Agency Fb bold'
			ctx.fillStyle = 'green';
			ctx.fillText('Powered By GearUp', 120, 200)
			/*ctx.fillText('Register', 280, 200)*/
		}

		if (gameMode === charecterSelectGM) {
			ctx.font = '20pt arial'
			ctx.fillStyle = 'blue';
			ctx.fillRect(0, 0, 800, 40)
			ctx.strokeText(totalCoins, 40, 28)
			ctx.strokeText(totalSCoins, 322, 28)
			ctx.strokeText(totalGems, 580, 28)
			ctx.drawImage(coinImg, 2, 2, 30, 30)
			ctx.drawImage(gemImg, 552, 2, 30, 30)
			ctx.drawImage(spaceCoinImg, 282, 2, 30, 30)
			ctx.strokeStyle = 'skyblue';
			ctx.font = '70pt arial'
			ctx.strokeText('SELECT SHIP', 80, 120)
			ctx.drawImage(spaceShip1, 150, 150, 180, 100)
			ctx.drawImage(spaceShip2, 440, 120, 230, 140)
			if (!ss2Unlocked) {
				ctx.drawImage(lockImg, 505, 140)
				ctx.font = '20pt arial'
				ctx.strokeText('500', 470, 290)
				ctx.drawImage(coinImg, 520, 265, 30, 30)

			}
			ctx.drawImage(spaceShip3, 150, 400, 170, 165)
			if (!ss3Unlocked) {
				ctx.drawImage(lockImg, 200, 430)
				ctx.font = '20pt arial'
				ctx.strokeText('200', 180, 590)
				ctx.drawImage(spaceCoinImg, 230, 565, 30, 30)

			}
			ctx.drawImage(spaceShip4, 445, 400, 160, 160)
			if (!ss4Unlocked) {
				ctx.drawImage(lockImg, 485, 430)
				ctx.font = '20pt arial'
				ctx.strokeText('50', 490, 590)
				ctx.drawImage(gemImg, 520, 565, 30, 30)
			}
		}
	}

	//EVENTS

	window.onkeydown = function (event) {
		if (gameMode === playGM) {
			if (event.keyCode === 37) { movingLeft = true }
			if (event.keyCode === 38) { movingUp = true }
			if (event.keyCode === 39) { movingRight = true }
			if (event.keyCode === 40) { movingDown = true }
		}
	}

	window.onkeyup = function (event) {
		if (gameMode === playGM) {
			if (event.keyCode === 37) { movingLeft = false }
			if (event.keyCode === 38) { movingUp = false }
			if (event.keyCode === 39) { movingRight = false }
			if (event.keyCode === 40) { movingDown = false }
		}
	}

	canvas.onclick = function (event) {
		var y = event.clientY;
		var x = event.clientX;

		if (gameMode === startScreenGM) {
			if (((x > 29) && (x < 235)) && ((y > 249) && (y < 370))) {
				gameMode = charecterSelectGM
			}
			if (((x > 269) && (x < 520)) && ((y > 199) && (y < 400))) {
				gameMode = playGM
			}
			if (((x > 549) && (x < 789)) && ((y > 189) && (y < 434))) {
				gameMode = settingsGM
			}
		}

		if (gameMode === settingsGM) {
			if (((x > 280) && (x < 458)) && ((y > 460) && (y < 576))) {
				gameMode = startScreenGM
			}
			if (((x > 440) && (x < 520)) && ((y > 250) && (y < 290))) {
				if (music) {
					music = false;
				} else {
					music = true;
				}
			}
			if (((x > 440) && (x < 520)) && ((y > 300) && (y < 340))) {
				if (sfx) {
					sfx = false;
				} else {
					sfx = true;
				}
			}
			if (((x > 440) && (x < 520)) && ((y > 350) && (y < 390))) {
				if (mobileControls) {
					mobileControls = false;
				} else {
					mobileControls = true;
				}
			}
			if (((x > 440) && (x < 520)) && ((y > 400) && (y < 440))) {
				if (autoBuy) {
					autoBuy = false;
				} else {
					autoBuy = true;
				}
			}
		}

		if (gameMode === charecterSelectGM) {
			if (((x > 150) && (x < 330)) && ((y > 150) && (y < 250))) {
				currentShip = spaceShip1
				gameMode = startScreenGM
			}
			if ((((x > 440) && (x < 670)) && ((y > 120) && (y < 260))) && ss2Unlocked) {
				currentShip = spaceShip2
				gameMode = startScreenGM
			}
			if ((((x > 440) && (x < 670)) && ((y > 120) && (y < 260))) && !ss2Unlocked && totalCoins > 499) {
				ss2Unlocked = true;
				totalCoins -= 500
			}
			if ((((x > 150) && (x < 320)) && ((y > 400) && (y < 565))) && ss3Unlocked) {
				currentShip = spaceShip3
				gameMode = startScreenGM
			}
			if (((x > 150) && (x < 320)) && ((y > 400) && (y < 565)) && !ss3Unlocked && (totalSCoins > 199)) {
				ss3Unlocked = true;
				totalSCoins -= 200
			}
			if ((((x > 445) && (x < 605)) && ((y > 400) && (y < 560))) && ss4Unlocked) {
				currentShip = spaceShip4
				gameMode = startScreenGM
			}
			if ((((x > 445) && (x < 605)) && ((y > 400) && (y < 560))) && totalGems > 49 && !ss4Unlocked) {
				ss4Unlocked = true;
				totalGems -= 50
			}
		}


	}
}