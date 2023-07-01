function criptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");

    let textoCriptografado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptografado;
        tituloMensagem.textContent = "Texto criptografado com sucesso";
        paragrafo.textContent = "";
        boneco.src = "./img/criptografado.png";
    } else {
        boneco.src = "./img/High quality products 1 1.png";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar";
        alert("Você deve digitar algum texto");
    }
}

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");

    let textoCriptografado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptografado;
        tituloMensagem.textContent = "Texto descriptografado com sucesso";
        paragrafo.textContent = "";
        boneco.src = "./img/descriptografado.png";
    } else {
        boneco.src = "./img/High quality products 1 1.png";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar";
        alert("Você deve digitar algum texto");
    }
}