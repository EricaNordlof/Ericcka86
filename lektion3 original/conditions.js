const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("submit");
const resultOutput = document.getElementById("result");

submitButton.addEventListener("click", () => {
    const inputValue = textInput.value;

    const inputLength = inputValue.length;

    if(inputLength > 5){
        resultOutput.textContent = "Texten är längre än fem!";
    }
    else if(inputLength < 5){
        resultOutput.textContent = "Texten är kortare än fem!"
    }
    else{
        resultOutput.textContent = "Texten är exakt fem tecken lång!"
    }
})