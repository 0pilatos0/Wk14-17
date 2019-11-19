var input = document.createElement("INPUT");
var button = document.getElementById('checkButton');
var randomWordArray = words[Math.floor(Math.random() * words.length)];
var randomWordParts = randomWordArray.split("");
var activerow = 1;
var userInput;

var container = document.createElement("DIV");
document.body.appendChild(container);
container.classList.add("container");

console.log(randomWordArray);

for (b = 1; b <= 5; b++) {
	var row = document.createElement("DIV");
	row.id = "row" + b;
	row.classList.add("row");
	container.appendChild(row);
	container.appendChild(input);
	input.classList.add("input");
	input.setAttribute('placeholder', 'voer je antwoord in');
	input.setAttribute("maxLength", "5");

	for (var i = 0; i < 5; i++) {
		var miniBox = document.createElement("DIV");
		miniBox.classList.add("miniBox");
		row.appendChild(miniBox);
		miniBox.id = row.id + "box" + i;
	}
}
document.getElementById("row1").firstElementChild.innerHTML = randomWordArray[0];

input.onkeypress = function (event) {
	if (event.key == "Enter" || event.keyCode == 13) {
		var woord = input.value.toLowerCase();
		userInput = woord.split("");

		for (var i = 0; i < userInput.length; i++) {
			document.getElementById("row" + activerow + "box" + i).innerHTML = userInput[i];
			console.log(woord);
		}

		if (randomWordArray == woord) {
			setInterval(function () {
				alert("Het is je gelukt!");
				location.reload();
			}, 500);
		}
		else if (activerow >= 5) {
			setInterval(function () {
				alert("Dit was je laatse kans!");
				alert("Het woord was: " + randomWordArray);
				location.reload();
			}, 500);
		}
		activerow++;

		console.log(userInput);
		check();
	}
}

function check() {
	var goed = [];
	var fout = [];
	var randomWordPartsCopy = randomWordArray.split("");
	for (var i = 0; i < 5; i++) {
		document.getElementById("row" + (activerow - 1) + "box" + i).classList.add("red");
		if (randomWordParts[i] == userInput[i]) {
			goed[i] = randomWordParts[i];
			document.getElementById("row" + (activerow - 1) + "box" + i).style.backgroundColor = "green";
			randomWordPartsCopy[i] = null;
		}
		else {
			fout[i] = userInput[i];
		}
	}
	i++;
	for (i = 0; i < 5; i++) {
		if (userInput[i] != null) {
			var positie = randomWordPartsCopy.indexOf(userInput[i]);
			if (positie > -1) {
				document.getElementById("row" + (activerow - 1) + "box" + i).style.background = "yellow";
				randomWordPartsCopy[positie] = null;
				userInput[i] = null;
			}
		}
	}
}