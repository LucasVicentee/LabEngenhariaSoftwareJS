//Definindo a classe pessoa
function Pessoa(){
    var nome;
    var email;
    var dataNascimento;
    var telefoneFixo;
    var telefoneCelular;

    this.setNome = function(pNome){
        this.nome = pNome;
    }
    this.getNome = function(){
        return this.nome;
    }
}

//Definindo a classe professor
function Professor(){
    Pessoa.call(this);
}