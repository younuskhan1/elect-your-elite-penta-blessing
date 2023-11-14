const buttons = document.getElementsByClassName("select-button");
let count = 0;
for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        count++;
        const targetPlayer = event.target.parentNode.parentNode.childNodes[3].innerText;
        const selectedPlayerContainer = document.getElementById("selected-player-container");
        if (count <= 5) {
            const li = document.createElement("li");
            li.innerText = `${count}. ${targetPlayer}`;
            li.classList.add("selected-player-name")
            selectedPlayerContainer.appendChild(li);
            const buttonDisable = event.target;
            buttonDisable.setAttribute("disabled", true);
        } else {
            alert("You cannot add more than players at this moment.")
        }

    })
}