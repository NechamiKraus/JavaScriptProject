
let shoppingCart = JSON.parse(localStorage.getItem("letter"));
console.log(shoppingCart);
cartProducts(shoppingCart);
const price = document.getElementById('price');
const divCart = document.getElementById('cart');


const showPicture = (result, cart) => {
    divCart.innerHTML = '';
    let finalPrice = 0;
    
    let arrCart=cart.flat();
    
    for (let i = 0; i < arrCart.length; i++) {
        result.forEach(item => {
            if ( item.id=== arrCart[i]) {
                const div1 = document.createElement('div');
                divCart.appendChild(div1);
                div1.classList.add = item.id;

                div1.innerHTML += `<div id="style" class="${item.id}">
                    <img class="img-styile" src="../../assets/letters/${item.image}" />
                    <h3 class="name">${item.name}</h3>
                    <p class="price" > ${item.price} ש"ח</p>
                    <button id="${item.id}" class="button2"><i class="fas fa-trash"> </i></button>
                </div>`

                const button2 = document.getElementsByClassName("button2");
                Array.from(button2).forEach (item => {
                    item.onclick = (e) => {
                        let currentCart = Array.from(divCart.children);
                        deleteProduct(currentCart, e.currentTarget.id, result)
                    }
                   
                })
                    finalPrice += item.price;            
                
                price.innerHTML = ` סך הכל לתשלום:  ${finalPrice} שקלים`;
            }

           
           
        });
    }
    localStorage.setItem("letter",JSON.stringify(arrCart));
};

const deleteProduct = (currentCart, currentClassName, result) => {
    let i = 0;
    currentCart.forEach(e => {
        if ((Array.from(e.children)[0].className) === currentClassName) {
            shoppingCart.splice(i, 1);
            if (shoppingCart.length === 0) {
                finalPrice = 0;
                price.innerHTML = ` סך הכל לתשלום:  ${finalPrice} שקלים`;

            }
         
            localStorage.setItem("letter",shoppingCart);
            showPicture(result, shoppingCart); // ייצור מחדש של פריטי הסל
        }
        i++;
    });
}

const btnToPay = document.getElementById('toPay');
btnToPay.onclick = () => {
    location.href = `../../pages/pay/pay.html`;
}
const btnbackToBuy = document.getElementById('backToBuy');
btnbackToBuy.onclick = () => {
    location.href = `../../pages/products/products.html`;
}

