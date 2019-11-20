var start_btn = document.getElementById("check_btn");
var row_section = document.getElementById("rows");
var rowcount = 1;
var circles = [];
var circles_check = [];
var check_array = [];
var checked = 0;
let fullscreenEnabled = "false"

for(var row = 12; row >= 1; row--){
    var x = document.createElement("SECTION");
    x.setAttribute("id", "row_" + row);
    x.setAttribute("class", "row");
    row_section.appendChild(x);

    for(var circle = 0; circle < 4; circle++){
    	var answer_circle = document.createElement("DIV");
    	answer_circle.setAttribute("id", "circle_" + circle + "_" + row);
    	answer_circle.setAttribute("class", "row circles");
    	answer_circle.setAttribute("onclick", "change_color(" + circle + ")")
    	document.getElementById("row_" + row).appendChild(answer_circle);
    }

   for(var check_circles = 0; check_circles < 4; check_circles++){
    	var check_circle = document.createElement("DIV");
    	check_circle.setAttribute("id","circle_" + check_circles + "_check_" + row);
    	check_circle.setAttribute("class","check_circles");
    	document.getElementById("row_" + row).appendChild(check_circle);
    }
}

refill();
var circles_color = [];

var colors = ["red","green","purple","blue","yellow","grey"];
var color_a = [];
for(var z = 0; z < 4; z++){
	var random_color = Math.floor(Math.random()*6);
	color_a[z] = colors[random_color];
	console.log(random_color);
}
var selected_color = "grey";
var correct_right = 0;

function filled_check(circles_color, color_a){
	if(circles_color.length < color_a.length){
		return false;
	}
	else{
		return true;
	}
}

function check(){
	var toelaten = filled_check(circles_color,color_a);

	if(toelaten && rowcount <= 12){
		var copy = color_a.slice();
		var userCopy = circles_color.slice();
		console.log(userCopy)
		console.log(copy)
		for(i = 0; i<4; i++){
			var positie = copy.indexOf(userCopy[i]);
			if(copy[i] == userCopy[i]){
				check_array.push(2);
				userCopy[i] = null
				copy[i] = null;
				correct_right++;
			}
			else if(d){
				
			}
			console.log(positie)
		}
		console.log(userCopy)
		console.log(copy)
		/*for (var i = 0; i < 4; i++) {
			if(userCopy[i] == copy[i]){
				console.log("Kleur is correct, op de juiste plaats");
				check_array.push(2);
				copy[i] = null;
				userCopy[i] = null;
				correct_right++;
			}
			else if(copy[i] != null){
				var positie = copy.indexOf(userCopy[i]);
				if (positie > -1) {
					console.log("Kleur is correct, niet op de juiste plaats");
					check_array.push(1);
					copy[i] = null;
					userCopy[i] = null;
					
				}
			}
			copy.shift()
		}*/

		for(var f = 0; f < 4; f++){
			if(check_array[f] == 2){
				circles_check[checked].style.backgroundColor = "black";
				checked++;
				correct_right				
			}
			if(check_array[f] == 1){
				circles_check[checked].style.backgroundColor = "white";
				checked++;
			}
		}
		if(correct_right == 4){
			alert("YOU WIN");
			alert("we gaan restarten!!! kijk uit")
			console.log("gewonnen")
			location.reload();
		} 
		rowcount++;
		refill();
	}
	else{
		if(rowcount>12){
			alert("You lose");
		}
		else{
			alert("Vul alle plaatsen in!!!!")
		}
	}
}

function refill(){
	circles = [];
	check_array = [];
	circles_color = [];
	checked = 0;
	correct_right = 0;
	for(var num = 0; num < 4; num++){
		circles[num] = document.getElementById("circle_" + num + "_" + rowcount);
		circles_check[num] = document.getElementById("circle_" + num +"_check_" + rowcount)
	}
}

function select_color(n){
	selected_color = colors[n];
}

function change_color(i){
	circles[i].style.backgroundColor = selected_color;
	circles_color[i] = selected_color;
}

function restart(){
	location.reload();
}