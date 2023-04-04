const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = ""
        } else if(item.id == "back"){
            let word = String(display.innerText)
            display.innerText = word.substring(0, word.length - 1)
        } else if (display.innerText != "" && item.id == "equal"){
            display.innerText = eval(String(display.innerText))
        } else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "Null"
            setTimeout(()=>{display.innerText = ""}, 500)
        } else {
            display.innerText += String(item.id)
        }
    }
})