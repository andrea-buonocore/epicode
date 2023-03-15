console.log('collegato!');
const rows = document.getElementById('rows');
const cartList = document.getElementById('cartList');

const removeCard = (i) => {
    document.getElementById(i).parentNode.classList.add('d-none');
    console.log(i);
}

const removeLi = (li) => {
    console.log(li.parentNode);
    li.remove();
}

const addToCart = (photo) => {
    console.log(photo.title);
    let newLi = document.createElement('li');
    newLi.classList.add('list-group-item', 'my-1', 'rounded');
    newLi.innerText = photo.title;
    let liPrice = document.createElement('p');
    liPrice.classList.add('text-end', 'text-primary', 'mt-1', 'mb-0');
    liPrice.innerText = photo.price;
    newLi.appendChild(liPrice);
    cartList.appendChild(newLi);
    let trash = document.createElement('button');
    trash.classList.add('btn', 'btn-danger', 'rounded', 'text-end', 'd-block');
    trash.innerHTML = '<i class="bi bi-trash3"></i>';
    newLi.appendChild(trash);
    trash.onclick = () => { removeLi(this) }
}

fetch('https://striveschool-api.herokuapp.com/books')
.then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach((photo, i) => {
        console.log(i);
        let column = document.createElement('div');
        column.classList.add('col', 'mb-5');
        rows.appendChild(column);
        let card = document.createElement('div');
        card.classList.add('card', 'h-100');
        card.setAttribute('id',i);
        column.appendChild(card);
        let image = document.createElement('img');
        image.classList.add('card-img-top');
        image.setAttribute('src', photo.img);
        card.appendChild(image);
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = photo.title;
        let cardPrice = document.createElement('p');
        cardPrice.classList.add('card-text', 'text-primary');
        cardPrice.innerText = `$ ${photo.price}`;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        let btnRemove = document.createElement('button');
        btnRemove.classList.add('btn', 'btn-danger');
        // btnRemove.setAttribute('onclick', 'removeCard()');
        // btnRemove.addEventListener('click', () => { 
        //     removeCard(i) });
        btnRemove.onclick = () => { removeCard(i) }
        btnRemove.innerText = 'Remove';
        cardBody.appendChild(btnRemove);
        let btnAddToCart = document.createElement('button');
        btnAddToCart.classList.add('btn', 'btn-success');
        btnAddToCart.addEventListener('click', () => { 
            addToCart(photo) });
        btnAddToCart.innerText = 'Add to Cart';
        cardBody.appendChild(btnAddToCart);

    })
})

