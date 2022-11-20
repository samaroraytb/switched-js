let bulbImageVar = document.getElementById("bulbImage");
let catImageVar = document.getElementById("catImage")
let switchStatusVar = document.getElementById("switchStatus")
let offButtonVar = document.getElementById("offSwitch")
let onButtonVar = document.getElementById("onSwitch")

function switchOn() {
    bulbImageVar.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImageVar.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchStatusVar.textContent = "Switch On"
    onButtonVar.style.backgroundColor = "green"
    offButtonVar.style.backgroundColor = "grey"
}

function switchOff() {
    bulbImageVar.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageVar.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchStatusVar.textContent = "Switch Off"
    offButtonVar.style.backgroundColor = "red"
    onButtonVar.style.backgroundColor = "grey"
}