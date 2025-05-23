//Initialize
const inputText = document.getElementById("text")
const button = document.getElementById("btn")
const result = document.getElementById("result")
const emojisList = document.getElementById("emoji")
const range = document.getElementById("range")
let emojis = [
  '💀', '🤡', '😭', '🧠', '🍕', '🗿', '🧌', '🫠', '😵‍💫', '🛐', '🚬', '🤲', '📉', '📈',
  '🙃', '🤯', '🤑', '🥴', '🥵', '😵', '😐', '🫥', '💅', '👁️', '👄', '👁️', '😈', '😩',
  '😳', '🤤', '🤌', '🪦', '🌚', '🌝', '🎃', '🪩', '🔮', '😶‍🌫️', '🍄', '🐸', '🧍',
  '🧎', '🚶', '🏃', '🕳️', '📼', '🧿', '🦷', '🪷', '🪰', '🥴', '🦠', '🔪', '🧬', '🧫',
  '🫃', '🫄', '🦑', '👹', '👺', '👻', '☠️', '😷', '🤢', '🫃', '🫥', '🌪️', '🛸', '🧨',
  '📟', '📀', '🎮', '📡', '🚽', '💻', '📲', '😹', '🫳', '🫴', '🧻', '🛏️', '🫥', '👾'
];


//Load initial range value
ranges = parseInt(range.value)

//Update range value whenever user moves it
range.addEventListener("input", ()=>{

    ranges = parseInt(range.value)

})


//Update array of emojis when user deletes/adds more emojis
emojisList.addEventListener("input", (event) => {

    const newEmojis = event.target.value.split(/\s+/).filter(e => e !== "");
    emojis = newEmojis;
    console.log("Updated emoji list:", emojis);
    console.log(emojis.length)

});


button.addEventListener("click", () => {

    let text = inputText.value.split(" ")

    i = 0
    let returned = " ";
    if(emojis.length > 0){
        for (let i = 0; i < text.length; i++) {

            returned += text[i] + " "

            if((i + 1)  % ranges === 0 || i === text.length - 1 ){

                let random = Math.floor(Math.random() * emojis.length)
                    returned += " "  + emojis[random] + " "
                result.value = returned;

            }
        }
    }
    else{
        result.value = "There are no Emojis!"
    }
});


//Refresh to initial state and remove previous text when refreshed
window.onload = function() {

  document.getElementById("text").value = "";
  document.getElementById("result").value = "";
  let emojis = [
  '💀', '🤡', '😭', '🧠', '🍕', '🗿', '🧌', '🫠', '😵‍💫', '🛐', '🚬', '🤲', '📉', '📈',
  '🙃', '🤯', '🤑', '🥴', '🥵', '😵', '😐', '🫥', '💅', '👁️', '👄', '👁️', '😈', '😩',
  '😳', '🤤', '🤌', '🪦', '🌚', '🌝', '🎃', '🪩', '🔮', '😶‍🌫️', '🍄', '🐸', '🧍',
  '🧎', '🚶', '🏃', '🕳️', '📼', '🧿', '🦷', '🪷', '🪰', '🥴', '🦠', '🔪', '🧬', '🧫',
  '🫃', '🫄', '🦑', '👹', '👺', '👻', '☠️', '😷', '🤢', '🫃', '🫥', '🌪️', '🛸', '🧨',
  '📟', '📀', '🎮', '📡', '🚽', '💻', '📲', '😹', '🫳', '🫴', '🧻', '🛏️', '🫥', '👾'
];


    emojisList.value = emojis.join(" ");
}



