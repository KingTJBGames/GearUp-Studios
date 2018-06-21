// SCRIPT INDEX
var saveArea = document.getElementById('savearea')
//VARIABLE INDEX

//FUNCTION INDEX
function checkName() {
	var nameConfirm = confirm('Are you sure you want to leave your UserName blank?')
	if (nameConfirm === true) {
		var userName = 'Player 1'
	} else {
		var userName = prompt('What is your UserName?')
	}
}

function getUserName() {
	var gameHead = document.getElementById('title')
	gameHead.style.display = 'none'

	var userName = prompt('What is your UserName?')
	if (userName === null || userName === null) {
		checkName()
	}
}

function getGameScreen() {
	var gameScreen = document.getElementById('gameScreen')
	var saveButton = document.getElementById('savebutton')
	var svb = saveButton
	
}

function showSaveButton() {
	saveArea.style = 'display: block;'
}

function saveGame() {

}

function gameStart() {
	getUserName()
	getGameScreen()
	showSaveButton()
}
