// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Requisitos:
// Deve funcionar apenas com letras minúsculas
// Não devem ser utilizados letras com acentos nem caracteres especiais
// Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

// "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"
// "parabens por encarar esse desafio e ter finalizado ele com sucesso!"

const map = new Map([
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
])

let campo = document.getElementById("campo");

function codificar(){
    let campo = document.getElementById("campo");

    let texto = campo.value.trim();
    campo.value = texto;

    console.log(texto);
    console.log(isStringValid(texto));

    if(texto != ""){
        const keys = map.keys();
        const values = map.values();

        for (let i = 0; i < map.size; i++) {
            let key = keys.next().value;
            let value = values.next().value;

            texto = texto.replaceAll(key, value);
        }

        // campo.value = texto;
        document.getElementById("output").innerHTML = texto;
    }
    
}

function decodificar(){
    let campo = document.getElementById("campo");
    
    let texto = campo.value.trim();
    campo.value = texto;

    if(texto != ""){
        const keys = map.keys();
        const values = map.values();

        for(let i = 0; i < map.size; i++){

            let key = keys.next().value;
            let value = values.next().value;

            texto = texto.replaceAll(value, key);

        }
        // campo.value = texto;
        document.getElementById("output").innerHTML = texto;
        console.log(campo.value)
    }
    
}

function isStringValid(string){
    const regex1 = /^[a-z ]+$/; 

    return regex1.test(string);
}
