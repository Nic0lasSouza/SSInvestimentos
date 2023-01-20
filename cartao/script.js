function esconder(){
    var valor = document.getElementById('valor');
    valor.innerHTML = '<p>R$*****</p>';

   
    var container = document.getElementById('container');
    
    container.innerHTML = '';
    container.innerHTML = '<button id="botao" onclick="mostrar(valor,container)">Show</button>'
}

function mostrar(valor, container){
    valor.innerHTML = '<p>R$2000,00</p>';
    container.innerHTML = '<button id="botao" onclick="esconder()">Hide</button>'
}