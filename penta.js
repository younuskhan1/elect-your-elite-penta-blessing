const buttons = document.getElementsByClassName("button");
for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        const target = event.target.parentNode.parentNode.childNodes[3].innerText;
        console.log(target);
        const buttonDisable = event.target;
        buttonDisable.setAttribute("disabled", true);
    })
}