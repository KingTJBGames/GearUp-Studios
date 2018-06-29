/*
<!DOCTYPE JavaScript Script jsFile Execution>
<link.css: styles.css>
<link.baseHtml |>>>Index<<<|
*/

//menu
//VARIABLES
var screenWidth = 1245;
var screenHeight = 685;
var level = 'menu'
var menuShowing = true;
var spacepressed = false;
var gameScreen = document.createElement('canvas');
var gsc = gameScreen.getContext('2d');

//CANVAS PAINTING
gameScreen.width = screenWidth;
gameScreen.height = screenHeight;
gameScreen.style = 'background-image: url(startscreen.png); border: 4px solid black;';
document.body.appendChild(gameScreen);

//MUSIC
var menuLoop = document.createElement('audio')
menuLoop.src = 'DashyBird-menu-loop.m4a'
menuLoop.volume = '1';
menuLoop.autoplay = true;
menuLoop.loop = true;
document.body.appendChild(menuLoop);

//LEVEL RELATION

//BIRD DRAWNING
var bird = document.createElement('img');
bird.src = 'Birdy.png';
bird.width = "165"
bird.height = '117'
bird.style.display = 'none'
document.body.appendChild(bird)

//Level 1 Bird Calls; grassland; TJB-alert;
function levelOne() {

	window.addEventListener('keydown', draw)

	menuShowing = false;
	level = 1;
	menuLoop.volume = '0';
	gsc.drawImage(bird, 300, 300, 165, 117);
	gameScreen.style = 'background-color: skyblue; background-image: none;';
}

//MENU CONTROLS
window.addEventListener('keydown', onKeyDown)

function jump(event) {
	if (Event.keycode === 32 && !menuShowing === true) {
	}
}

function onKeyDown(event) {
	if (Event.keyCode === 32 && menuShowing === true) {
		jump()
	}
}
