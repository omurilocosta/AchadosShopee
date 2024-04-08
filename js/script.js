const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = elemento => document.querySelectorAll

function search(){
    let  input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = selecionaTodos('.p-item .p-i--name')

    for (let i = 0; i < x.length; i++) {
        let itemName = x[i].querySelector('.p-i--name').innerHTML.toLowerCase();
        if (!itemName.includes(input)) {
            x[i].style.display = 'none';
        } else {
            x[i].style.display = 'block';
        }
    }
}
const fillMeta = (produtoItem,item,index) => {
    produtoItem.setAttribute("data-key", index)
    produtoItem.querySelector('.p-i--link').href = item.link
    produtoItem.querySelector('.p-i--img img').src = item.img
    produtoItem.querySelector(".p-i--name").innerHTML = item.nome
}

produtosJson.map((item, index) => {

    let produtoItem = seleciona('.models .p-item').cloneNode(true)

    seleciona('.p-area').append(produtoItem)

    fillMeta(produtoItem,item,index)
})