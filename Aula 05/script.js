localStorage.setItem('nome', 'Ana');  //grava

var nome = localStorage.getItem('nome'); //pega nome salvo

var h1 = document.createElement('h1'); //cria elemento h1

h1.innerHTML = nome; // conteudo do h1 como nome (var)

document.body.appendChild(h1); // adc o h1 na pag