let input = document.getElementById('input')
let display = document.getElementById('woord')
let body = document.body
let gaps = []
let check = document.getElementById('check')
let checkLetter = document.getElementById('checkLetter')
let word = document.getElementById('word')
let wordTitle = document.getElementById('wordTitle')
let checkTitle = document.getElementById('checkTitle')

let letters = []
let gapsAmount = 5

check.onclick = function(){splitWord()}

setup()

function setup(){
    for (let i = 0; i < gapsAmount; i++) {
        let tempI = i + 1
        let gap = document.getElementById('gap' + tempI)
        gaps.push(gap)
    }
    let i = input.style
    i.display = "grid"
    i.gridTemplateColumns = "repeat(2, auto)"
    i.gridTemplateRows = "repeat(3, auto)"
    i.margin = "auto"
    i.width = "500px"
    i.padding = "25px 75px"
    i.background = "yellow"
    let d = display.style
    d.background = "white"
    d.display = "grid"
    d.gridTemplateColumns = "repeat(5, 100px)"
    d.gridTemplateRows = "repeat(1, 100px)"
    d.margin = "auto"
    d.width = "500px"
    d.padding = "25px 75px"
    let b = body.style
    b.background = "gray"
    for (let i = 0; i < gaps.length; i++) {
        gaps[i].style.border = "1px solid black"
        gaps[i].style.padding = "39px 42.5px"
        gaps[i].style.fontWeight = "bold"
        gaps[i].style.fontSize = "20px"
    }
    let c = check.style
    c.gridRow = "3"
    c.gridColumn = "2"
    c.width = "156px"
    let cl = checkLetter.style
    cl.gridRow = "2"
    cl.gridColumn = "2"
    let w = word.style
    w.gridRow = "1"
    w.gridColumn = "2"
    let wt = wordTitle.style
    wt.gridColumn = "1"
    wt.gridColumn = "1"
    let ct = checkTitle.style
    ct.gridRow = "2"
    ct.gridColumn = "1"
    w.margin = "10px 0"
    wt.margin = "10px 0"
    ct.margin = "10px 0"
    c.margin = "10px 0"
    cl.margin = "10px 0"
    cl.width = "150px"
    w.width = "150px"
    c.marginRight = "75px"
}

function splitWord(){
    letters = word.value.toLowerCase().split("")
    if (letters.indexOf(checkLetter.value) > -1){
        for (let i = 0; i < gaps.length; i++) {
            if (letters[gaps[i].innerHTML - 1] == checkLetter.value){
                gaps[i].innerHTML = letters[gaps[i].innerHTML - 1]
            }
        }
    }
}