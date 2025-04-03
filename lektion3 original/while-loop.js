const CORRECT_PASS = "123";

let password = prompt("Skriv in lösenordet");

// Kontrollera att lösenordet är rätt
while (password !== CORRECT_PASS){
    password = prompt("Skriv in lösenordet");
}

alert("Du kom in")