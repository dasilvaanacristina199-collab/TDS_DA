var dado = localStorage.getItem('dado'); //busca a informação
var input = document.getElementById("campo"); //lê o campo

input.value = dado; //atribui dentro do input

function salvar(){
    var input = document.getElementById("campo"); //lê o campo

    var nome = input.value; //carrega o valor input (var)

    localStorage.setItem("dado", nome); //armazena no local Storage

}