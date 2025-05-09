function Carro(marca, modelo, ano, cor, km, valorFipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.km = km;
    this.valorFipe = valorFipe;

    this.anosUtilizacao = function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    };

    this.valorMercado = function() {
        const mediaAnual = this.km / this.anosUtilizacao();
        let fator = 1.0;
        if (mediaAnual <= 30000) {
            fator = 1.1;
        } else if (mediaAnual > 50000) {
            fator = 0.9;
        }
        return this.valorFipe * fator;
    };
}

function calcularCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const km = parseFloat(document.getElementById("km").value);
    const valorFipe = parseFloat(document.getElementById("valorFipe").value);
    
    const carro = new Carro(marca, modelo, ano, cor, km, valorFipe);
    const anosUso = carro.anosUtilizacao();
    const valorMercado = carro.valorMercado().toFixed(2);
    
    document.getElementById("resultado").innerText = 
        `O veículo tem ${anosUso} anos de uso e seu valor de mercado é R$ ${valorMercado}`;
}
