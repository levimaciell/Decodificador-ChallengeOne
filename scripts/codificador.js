// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Requisitos:
// Deve funcionar apenas com letras minúsculas
// Não devem ser utilizados letras com acentos nem caracteres especiais
// Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

const map = new Map([
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
])

function codificar(){
    
    let campo = document.getElementById("campo");
    let texto = campo.value;
    actual = "";

    for (let i = 0; i < texto.length; i++) {

        if(map.get(texto[i]) != undefined){
            actual += map.get(texto[i]);
        }
        else{
            actual += texto[i];
        }
    }

    campo.value = actual
}

function decodificar(){
    console.log("Decodificou :)");
}
