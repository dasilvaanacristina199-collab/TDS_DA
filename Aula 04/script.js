function add() {
    //Carregando o elemento ul que tem o ID "itens"
    var lista = document.getElementById('itens');
    //Carregando o elemento input que tem o id "campo"
    var campo = document.getElementById('campo');

    // Criando um elemento li
    var li = document.createElement('li');

    // Insere o valor digitado dentro do input campo usando a propiedade "value"
    // para nosso elemento li
    li.innerHTML = campo.value;

    var btn = document.createElement('button');
    btn.innerHTML = "Excluir";
    btn.addEventListener('click', function () {
        lista.removeChild(this.parentNode)
    });

    li.appendChild(btn);

    //Aplicamos o elemento li dentro do elemento ul
    lista.appendChild(li);

    //Limpamos a propriedade value do nosso elemento campo 
    campo.value = "";
    
}