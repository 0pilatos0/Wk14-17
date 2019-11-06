let div = document.getElementById('container')
let amount = 0

div.style.backgroundColor = "white"
div.style.width = "77vh"
div.style.margin = "auto"
div.style.border = "25px solid white"

createButton("green")
createButton("blue")
createButton("red")

function createButton(color){
    amount++
    let button = document.createElement('button')
    button.style.background = color
    button.onclick = function(){changeColor(color)}
    button.style.padding = "40px 48px"
    button.innerHTML = "Button " + amount
    button.style.fontSize = "20px"
    button.style.fontWeight = "bold"
    button.style.color = "white"
    div.appendChild(button)
}

function changeColor(color){
    let elements = document.querySelectorAll('.bgc')
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}
