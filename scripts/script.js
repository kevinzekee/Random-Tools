// Notes: get element by ID connects to the html via ID attribute
// whatever information is in the ID, it is then stored in the inputText variable
const inputText = document.getElementById("text")
const button = document.getElementById("btn")
const result = document.getElementById("result")


// Notes: use the variable and call a function named addEventListener
// it should take in "input" as an argument, it states the event type as "input"
// 
button.addEventListener("click", () => {
    console.log(inputText.value)

    let text = inputText.value.split(" ")
    console.log(text)
    let emojis = ['😂', '🔥', '🤡', '💀', '🤯', '😭', '😩', '🧠', '🍕', '👀', '✨', '💢', '😳', '😈']
    //console.log(text.length)

    i = 0
    let returned = " ";
    while (i < text.length){
        returned += text[i]
        let random = Math.floor(Math.random() * 14)
            returned += " " + emojis[random]
        returned += " "
        i += 1

        result.value = returned;
        console.log(returned)
        console.log(result.value)
    }


});


window.onload = function() {
  document.getElementById("text").value = "";
  document.getElementById("result").value = "";
}



