add()

function add(){
    //carregando o elemento ul que tem o ID "itens"
    var lista = document.getElementById('itens');

    //carregando o elemento input que tem o ID "campo"
    var campo = document.getElementById('campo');

    // evita item vazio
    if (campo.value.trim() === "") return;

    //Criando um elemento li
    var li = document.createElement('li');

    //Insere o valor digitado dentro do input campo     usando a propriedade "value"
    //para nosso elemento li
    li.innerHTML = campo.value;

    // Criar botão de excluir
    var btn = document.createElement('button');
    btn.innerHTML = "Apagar";
    btn.addEventListener('onclick', apagarElemento());

    li.appendChild(btn);

    //Aplicamos o elemento li dentro do elemento ul
    lista.appendChild(li);

    //Limpamos a propriedade value do nosso elemento ul
    campo.value = "";
}

function apagarElemento(elemento){
    document.removeChild(elemento);
}