
// const letters = document.getElementById('letters');
// const addItem = document.getElementById('addItem');
// const btnCloseWindow = document.getElementById('btnCloseWindow');
// const cartItemsContainer = document.getElementById('cartItemsContainer');

// // טעינת הפריטים מתוך local storage
// window.addEventListener('load', function() {
//   const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
//   if (storedCartItems) {
//     cartItemsContainer.innerHTML = storedCartItems.map(item => `<div>${item}</div>`).join('');
//   }
// });

// addItem.addEventListener('click', function() {
//   // הוספת הפריט למערך הפריטים בסל
//   const item = letters.value;
//   const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   storedCartItems.push(item);
  
//   // שמירת המערך ב local storage
//   localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
  
//   // עדכון התצוגה בעמוד הסל
//   cartItemsContainer.innerHTML = storedCartItems.map(item => `<div>${item}</div>`).join('');
// });

// btnCloseWindow.addEventListener('click', function() {
//   // מחיקת המידע מתוך local storage
//   localStorage.removeItem('cartItems');
  
//   // עדכון התצוגה בעמוד הסל
//   cartItemsContainer.innerHTML = '';
// });

const letters = document.getElementById('letters');
const addItem = document.getElementById('addItem');
const btnCloseWindow = document.getElementById('btnCloseWindow');
const searchInput = document.getElementById('myInput');
const ikonSearch = document.getElementById('ikonSearch');
const modal_body = document.querySelector('.modal-body');

let numLetters = 27;
let i = 0;

let arr =[];
if( localStorage.getItem("letter") !== []){
    arr.push(JSON.parse( localStorage.getItem("letter"))) ;
}
let arrImg = [];



const getProducts = (product) => {
    const letterDiv = document.createElement('div');
    letters.style.display = 'flex';
    letters.style.gap = '15px';
    letters.style.flexWrap = 'wrap';
    letters.style.padding = '100px';
    letters.appendChild(letterDiv);

    if (numLetters > 0) {
        numLetters--;
        const letterImg = document.createElement('img');
        letterImg.src = `../../assets/letters/${product.image}`;
        letterImg.style.width = '80%';
        letterImg.style.height = '80%';
        letterImg.style.paddingBottom = '10%';
        arrImg.push(letterImg);
        letterDiv.classList.add('divImg');

        const btnAddBasket = document.createElement('button');
        btnAddBasket.style.backgroundColor = 'black';
        btnAddBasket.style.border = 'none';


        const ikonBasket = document.createElement('i');
        ikonBasket.classList.add('ikonModle');
        ikonBasket.className = 'fas fa-cart-plus';
        ikonBasket.style.color = '#D8AC5A';
        ikonBasket.style.fontSize = '120%';

        letterDiv.appendChild(letterImg);
        letterDiv.appendChild(btnAddBasket);
        btnAddBasket.appendChild(ikonBasket);

        ikonBasket.addEventListener('click', () => {
            console.log(localStorage.getItem("email"))
         if( localStorage.getItem("email") === null){
             alert("אין אפשרות להזמין בלי להתחבר..")
             location.href = `../../pages/login/login.html`;
         }
            const setLetter = {
                Name: product.name,
                Price: Number(product.price) + "₪",
                Img: product.image
            };

            const itemImg = document.createElement('img');
            itemImg.src = `../../assets/letters/${product.image}`;
            itemImg.style.width = '100px';
            itemImg.style.height = '100px';

            addItem.appendChild(itemImg);

            addItem.style.display = 'block';

            btnCloseWindow.addEventListener('click', () => {
                addItem.style.display = 'none';
            });

            arr.push(product.id)
            localStorage.setItem("letter", JSON.stringify(arr));
        });

    }

    return letterDiv;
};

const drawProducts = (products) => {
    products.forEach(p => {
        const product = getProducts(p);
        letters.appendChild(product);
    });
};

getAllProducts(drawProducts);



/////////////חיפוש/////////////

ikonSearch.onclick = () => {
    let t = searchInput.value;
    // if(t.length === 1){
    search(t);
}
// else{
//     const imgk = document.createElement('img');
//     imgk.src = `http://127.0.0.1:5501/תמונה2.png`;
//     modal_body.appendChild(imgk);
   
// }
const s = (arr, i) => {


    
    arr.forEach(item => {
        let m = valid(i);

        if ((item.name).charCodeAt(0) === m) {
     
            for (let index = 0; index < arrImg.length; index++) {
                if ((`http://127.0.0.1:5501/assets/letters/${item.image}`) === arrImg[index].src) {

                    const img = document.createElement('img');
                    img.classList.add('serchimg');
                    img.src = `http://127.0.0.1:5501/assets/letters/${item.image}`;
                    modal_body.innerHTML = '';
                    modal_body.appendChild(img);
                }
            }
        }

    });

}
const valid = (i) => {
    if (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) {
        i = i.charCodeAt(0) - 32;
    }
    return i;
}

