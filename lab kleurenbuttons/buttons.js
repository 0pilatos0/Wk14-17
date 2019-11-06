let div = document.getElementById('container')
let amount = 0

let amountColor = prompt('Hoeveel kleuren wilt u hebben?', 'hoeveelheid:')
let colors = ["green"]
let amountsClicked = []

for (let i = 0; i < amountColor; i++) {
    let color = prompt('Voer kleur ' + i + ' in', 'kleur:')
    colors.push(color)
}

colors.push("black")

div.style.width = "75%"
div.style.padding = "10px"
div.style.margin = "auto"

for (let i = 0; i < 30; i++) {
    createButton()
}

function createButton(){
    amount++
    let button = document.createElement('button')
    button.style.background = "green"
    button.onclick = function(){checkButton(button)}
    button.style.padding = "20px 40px"
    button.style.margin = "10px"
    button.innerHTML = amount
    button.style.fontSize = "20px"
    button.style.fontWeight = "bold"
    button.style.color = "white"
    div.appendChild(button)
}

for (let i = 0; i < amount; i++) {
    amountsClicked.push(0)
}

function checkButton(button){
    amountsClicked[button.innerHTML - 1]++
    button.style.background = colors[amountsClicked[button.innerHTML-1]]
    if (amountsClicked[button.innerHTML-1] > colors.length - 1){
        div.removeChild(button)
    }
}
