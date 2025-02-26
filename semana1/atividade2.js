let numero = parseInt(prompt("Digite um número positivo: ")); 

function Primo(numero) {
    if (isNaN(numero) || numero <= 1) { 
        alert("Por favor, digite um número inteiro positivo maior que 1.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            alert(`O ${numero} não é um número primo.`);
            return;
        }
    }

    alert(`O ${numero} é um número primo!`);
}

Primo(numero); 