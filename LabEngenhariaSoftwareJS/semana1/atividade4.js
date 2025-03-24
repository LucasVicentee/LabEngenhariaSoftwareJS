function identificarTipoDado() {
    let dado = prompt("Digite algo:");
    
    
    if (!isNaN(dado)) {
        
        dado = parseFloat(dado);
        if (Number.isInteger(dado)) {
            document.getElementById("resultado").innerText = "O tipo do dado é INT";
        } else {
            document.getElementById("resultado").innerText = "O tipo do dado é FLOAT";
        }
    } else {
        
        document.getElementById("resultado").innerText = "O tipo do dado é STRING";
    }
}