console.log ('hi');

var firstSentence = 'Go to mars';
var secondSentence = 'Go to Europa';
var thirdSentence = 'You were a hero';
var fourthSentence = 'You were a villian';
var fifthSentence = 'Destroyed the rebels';
var sixthSentence = 'Become the leader of the rebels ';
var seventhSentence = 'You freed all the AI';
var eighthSentence = 'You enslaved all robots';

window.onload = function(event) {

	var nameInput = document.getElementById('first_name');
	var nameBtn = document.getElementById('name_btn');
	var firstChoice = document.getElementById('choice-one');
	var secondChoice = document.getElementById('choice-two');
	var thirdChoice = document.getElementById('choice-three');
	var fourthChoice = document.getElementById('choice-four');
	var fifthChoice = document.getElementById('choice-five');
	var sixthChoice = document.getElementById('choice-six');
	var seventhChoice = document.getElementById('choice-seven');
	var eighthChoice = document.getElementById('choice-eight');

	firstChoice.onclick = function(event) {
		createRow(firstSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence);
		document.getElementById('first-step').style.display = 'none';
	}

	thirdChoice.onclick = function(event) {
		createRow(thirdSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fourthChoice.onclick = function(event) {
		createRow(fourthSentence);
		document.getElementById('second-step').style.display = 'none';
	}

	fifthChoice.onclick = function(event) {
		createRow(fifthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	sixthChoice.onclick = function(event) {
		createRow(sixthSentence);
		document.getElementById('third-step').style.display = 'none';
	}

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	eighthChoice.onclick = function(event) {
		createRow(eighthSentence);
		document.getElementById('fourth-step').style.display = 'none';
	}

	nameBtn.onclick = function(event) {
		// console.log(event);
		console.log(nameInput.value);
		createRow('welcome aboard,' + nameInput.value);

	}

	console.log(nameInput, nameBtn);

}

//  this function creates and adds rows to our app
function createRow(words) {
	console.log(words);
	// we need a new div
	var row = document.createElement('div');
	var col = document.createElement('div');
	var p = document.createElement('p');
	p.innerHTML = words;
	row.append(col);
	row.className = 'row';
	col.className = 'col s12';
	col.append(p);
	console.log(row);
	// append the whole thing to app 
	var app = document.getElementById('app');
	app.append(row);


}