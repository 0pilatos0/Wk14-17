// Olaf Schouten //
// Davinci college //
// Lingo opdracht //

var input = document.createElement("INPUT");
var button = document.getElementById('checkButton');
var randomWordArray = words[Math.floor(Math.random() * words.length)];
var randomWordParts = randomWordArray.split("");
var activerow = 1;
var userInput;

//---- Maken van de div container ----//
var container = document.createElement("DIV");
document.body.appendChild(container);
container.classList.add("container");

console.log(randomWordArray);

//---- Maken van blokjes ----//
for (b = 1; b <= 5; b++) {
	var row = document.createElement("DIV");
	row.id = "row" + b;
	row.classList.add("row");
	container.appendChild(row);
	container.appendChild(input);
	input.classList.add("input");
	input.setAttribute('placeholder', 'voer je antwoord in');
	input.setAttribute("maxLength", "5");

	//---- Divjes aanmaken met een class en een id ----//
	for (var i = 0; i < 5; i++) {
		var miniBox = document.createElement("DIV");
		miniBox.classList.add("miniBox");
		row.appendChild(miniBox);
		miniBox.id = row.id + "box" + i;
	}
}

//---- Plaatsen van de eerste letter in het eerst blokje ----//
document.getElementById("row1").firstElementChild.innerHTML = randomWordArray[0];

//---- Als je op enter drukt word die in de blokjes geplaatst ----//
input.onkeypress = function (event) {
	if (event.key == "Enter" || event.keyCode == 13) {
		var woord = input.value.toLowerCase();
		userInput = woord.split("");

		//---- Het ingevoerde woord printen in de blokjes ----//
		for (var i = 0; i < userInput.length; i++) {
			document.getElementById("row" + activerow + "box" + i).innerHTML = userInput[i];
			console.log(woord);
		}


		//---- Je kan niet meer dan 5 keer proberen ----//
		if (randomWordArray == woord) {
			setInterval(function () {
				alert("Het is je gelukt!");
				location.reload();
			}, 500);
		}

		//---- Als meer dan 5 keer geprobeert hebt dan krijg je een melding dat dit je laatse buurt was met het goede woord erbij ----//
		else if (activerow >= 5) {
			//---- Dit zorgt ervoor dat je 1 seconden wacht tot dat je de alerts krijgt ----//
			setInterval(function () {
				alert("Dit was je laatse kans!");
				alert("Het woord was:  " + randomWordArray);
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

	//---- Controleren van het ingevoerde woord (5 letters) ----//
	for (var i = 0; i < 5; i++) {
		document.getElementById("row" + (activerow - 1) + "box" + i).classList.add("red");

		//---- Als de letters van het random woord op de goede plek zitten van het ingevoerde woord ----//
		if (randomWordParts[i] == userInput[i]) {
			goed[i] = randomWordParts[i];
			//---- Maakt de letters op de goede plek goen en null ----//
			document.getElementById("row" + (activerow - 1) + "box" + i).style.backgroundColor = "green";
			randomWordPartsCopy[i] = null;
		}

		//---- Doet anders niets ----//
		else {
			fout[i] = userInput[i];
		}

	}
	i++;

	//---- Loop voor het controleren of dat de letter in het woord zitten ----//
	for (i = 0; i < 5; i++) {

		//---- Voor de letter die niet op null staan ----//
		if (userInput[i] != null) {

			//---- Dan gaat hij de positie van die letter vergelijken met het random woord waar de letters nog over van zijn ----//
			var positie = randomWordPartsCopy.indexOf(userInput[i]);

			//---- Als dan de die letters niet -1 zijn of hoger dan ----//
			if (positie > -1) {

				//---- Maakt de letter geel ----//
				document.getElementById("row" + (activerow - 1) + "box" + i).style.background = "yellow";
				
				//---- En als de letters op geel gezet zijn dan worden die letter op null gezet en op de userInput ----//
				randomWordPartsCopy[positie] = null;
				userInput[i] = null;
			}
		}
	}
}