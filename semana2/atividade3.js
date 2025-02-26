function verificarPalindromo() {
    const entrada = document.getElementById("entrada");
    const resultadoPalindromo = document.getElementById("resultado-palindromo"); 

    if (entrada && resultadoPalindromo) {
        const textoOriginal = entrada.value.toLowerCase().replace(/\s+/g, ''); 
        const textoInvertido = textoOriginal.split("").reverse().join("");

        if (textoOriginal === textoInvertido) {
            resultadoPalindromo.textContent = "É uma palavra palíndromo";
        } else {
            resultadoPalindromo.textContent = "Não é uma palavra palíndromo.";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoPalindromo = document.getElementById("verif");
    if (botaoPalindromo) {
        botaoPalindromo.addEventListener("click", verificarPalindromo);
    }
});