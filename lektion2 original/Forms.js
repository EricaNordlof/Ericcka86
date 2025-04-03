function calculateSum(a, b){
return a + b;
}

// Hämta referenser till varje element
const heading = document.querySelector("h1");
const titleInput = document.getElementById("title");
const saveButton = document.getElementById("save");

// Lägg till en eventhanterare
saveButton.addEventListener("click", () => {
    heading.textContent = titleInput.value;
});


// Hämta referens till varje element
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculateButton = document.getElementById("calculate");
const resultOutput = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    const result = calculateSum(num1, num2);

    resultOutput.textContent = result;
})