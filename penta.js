const buttons = document.getElementsByClassName("select-button");

let count = 0;
let validCount;

for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        count++;
        const targetPlayer = event.target.parentNode.parentNode.childNodes[3].innerText;
        const selectedPlayerContainer = document.getElementById("selected-player-container");
        if (count <= 5) {
            validCount = count;
            const li = document.createElement("li");
            li.innerText = `${validCount}. ${targetPlayer}`;
            li.classList.add("selected-player-name");
            selectedPlayerContainer.appendChild(li);
            const buttonDisable = event.target;
            // console.log(buttonDisable);
            buttonDisable.setAttribute("disabled", true);
        } else {
            alert("You cannot add more than five players at this moment.");
        }

    })
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value;
    const inputValueNumber = parseFloat(inputValueString);
    // inputField.value = "";
    return inputValueNumber;
}

function getTextElementById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const inputValueString = textField.innerText;
    const textElementNumber = parseFloat(inputValueString);
    return textElementNumber;
}


document.getElementById("calculate-button").addEventListener("click", function () {
    const perPlayerRate = getInputValueById("per-player-cost");
    if (isNaN(perPlayerRate)) {
        alert("Firstly, you have to select the players name afterthat insert an numeric value at the per player rate input field.")
    } else {
        const costOfPlayers = perPlayerRate * validCount;
        const costOfPlayersDecimal = costOfPlayers.toFixed(2);
        document.getElementById("player-expenses").innerText = costOfPlayersDecimal;
    }
})



document.getElementById("total-cost-button").addEventListener("click", function () {
    const totalPlayersExpenses = getTextElementById("player-expenses");
    const managerExpenses = getInputValueById("manager-expenses");
    const coachExpenses = getInputValueById("coach-expenses");
    if (isNaN(totalPlayersExpenses) || isNaN(managerExpenses) || isNaN(coachExpenses)) {
        alert("Firstly, you have to complete the task of above calculate button then You have to fill up the manager and coach input fields with numeric value.")
    } else {
        const totalAmountCost = totalPlayersExpenses + managerExpenses + coachExpenses;
        const totalAmountCostWithDecimal = totalAmountCost.toFixed(2);
        document.getElementById("total-expenses").innerText = totalAmountCostWithDecimal;
    }
})

