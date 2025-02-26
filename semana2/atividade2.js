function atualizarRelogio() {
    const elementoRelogio = document.getElementById("relogio");
    if (elementoRelogio) {
        function atualizarHoras() {
            const agora = new Date();
            const horas = agora.getHours().toString().padStart(2, "0");
            const minutos = agora.getMinutes().toString().padStart(2, "0");
            const segundos = agora.getSeconds().toString().padStart(2, "0");
            elementoRelogio.textContent = `${horas}:${minutos}:${segundos}`;
            setTimeout(atualizarHoras, 1000);
        }
        atualizarHoras();
    }
}
atualizarRelogio();