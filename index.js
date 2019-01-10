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
    if(descricao.length > 0 ) {
        if(!existeItem(descricao, idLista, "list-group-item")){
            removeItemLista("danger")
            createItemLista(tipoLista, descricao, "list-group-item", idLista);
        } else {
            createItemLista("div", "O item já existe!", "alert alert-danger", idLista, "danger");
        }
    }

}

function existeItem(descricao, idLista, classe){
    let parent = document.getElementById(idLista);
    let listagemItens = parent.getElementsByClassName(classe);
    for(let i = 0; i < listagemItens.length; i++){
        if(descricao == listagemItens[i].textContent){
            return true;
        } 
    }
}

function createItemLista(elemento, descricao, classe, idLista, idItem){
    if(!existeItem(descricao, idLista, classe)){
        let novoItem = document.createElement(elemento);
        let textoItem = document.createTextNode(descricao);
        novoItem.appendChild(textoItem);
        novoItem.className = classe;
        novoItem.setAttribute("id", idItem);
        let nodePaiLista = document.getElementById(idLista);
        nodePaiLista.appendChild(novoItem);
    }
}

function removeItemLista(id){
    let elemento = document.getElementById(id);
    if(elemento !== null){
        elemento.parentNode.removeChild(elemento);
    }
}