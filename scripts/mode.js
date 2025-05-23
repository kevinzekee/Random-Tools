const modeBtn = document.getElementById("link-button");

modeBtn.addEventListener("click", () => {
    document.querySelectorAll('.global-color-content, .global-color-textbox, .global-text, body, button')
        .forEach(el => el.classList.toggle('light-mode'));
});
