var input = document.getElementById("input-ingrediente");
var inputModo = document.getElementById("input-modo");

var botao = document.getElementById("btAdicionar");
var botaoModo = document.getElementById("btAdicionarModo");

botao.addEventListener("click", function(){
    adicionaItemLista(input.value, "li", "lista-ordenada");
});

botaoModo.addEventListener("click", function(){
    adicionaItemLista(inputModo.value, "li", "lista-desordenada");
})

function adicionaItemLista(descricao, tipoLista, idLista){
    if(descricao.length > 0 && !existeItem(descricao)){
            var novoItem = document.createElement(tipoLista);
            var textoItem = document.createTextNode(descricao);
            novoItem.appendChild(textoItem);
            novoItem.className = "list-group-item";
            var nodePaiLista = document.getElementById(idLista);
            nodePaiLista.appendChild(novoItem);
    }
    event.preventDefault();
}

function existeItem(descricao){
    var listagemItens = document.getElementsByClassName("list-group-item");
    for(var i = 0; i < listagemItens.length; i++){
        if(descricao === listagemItens[i].textContent){
            return true;
        }
    }
}