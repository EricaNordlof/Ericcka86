// Hämta referens till elementen
const imgTextInput = document.getElementById("img-text");
const submitButton = document.getElementById("submit");
const img = document.querySelector("img");

console.log(imgTextInput);

// Lägg tll eventhanterare
submitButton.addEventListener("click", () => {
    img.src = "https://placehold.jp/900x900.png?text=" + imgTextInput.value;
})