let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

// Comparação de valor, mas não de tipo (==)
if (numeroUm == stringUm) {
    console.log(
        "As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes"
    );
} else {
    console.log("As variáveis numeroUm e stringUm não têm o mesmo valor");
}

// Comparação de valor e tipo (===)
if (numeroTrinta === stringTrinta) {
    console.log(
        "As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo"
    );
} else {
    console.log(
        "As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo"
    );
}

// Comparação de valor, mas não de tipo (==)
if (numeroDez == stringDez) {
    console.log(
        "As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes"
    );
} else {
    console.log("As variáveis numeroDez e stringDez não têm o mesmo valor");
}
console.log(resultado);
