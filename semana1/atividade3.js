let numero = parseInt(prompt("Digite um número positivo: "));

function Fatorial(numero){
    if (isNaN(numero) || numero <= 0){
        alert("Por favor, digite um número inteiro positivo!");
        return;
    }

    let fatorial = 1;

    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é ${fatorial}`); 
} 
Fatorial(numero);
