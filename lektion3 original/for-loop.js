const numberInput = document.getElementById("number-input");
const submitButton = document.getElementById("submit");
const resultList = document.getElementById("result");

submitButton.addEventListener("click", () => {
    // numberOfListItems = 2
    const numberOfListItems = Number(numberInput.value);

    // Tömmer vår lista 
    resultList.innerHTML = "";

    for(let i = 0; i < numberOfListItems; i++){
        const listItem = document.createElement("li");
        listItem.textContent = "Punkt" + (i+1);
        resultList.appendChild(listItem);
    }
});