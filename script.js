const adicionaItem = (event) => {
    const novoArticle = document.createElement("article");
    const novoConteudo = document.createTextNode("Item novo criado");
    novoArticle.appendChild(novoConteudo);
    const local = document.getElementById("botao");
    local.insertAdjacentElement('afterend', novoArticle);
    novoArticle.classList.add("item")
    novoArticle.setAttribute("onclick", "removeItem(event)")
 }

function removeItem (event){
    event.target.remove()
}