let counter = document.querySelector(".ctr");
let cartIcon = document.querySelector(".cart-icon")
let favsContainer = document.querySelector("#favs-container")
let placeOrder = document.querySelector(".place-order")

const checkFavs = JSON.parse(localStorage.getItem("favorites"))
const favoriteProds = checkFavs || []

////////////////////////////////////////// listing items /////////////////////////////////////////////

function listFavs(prods){
    let product = prods.map((item) => {
        return `
        <div class="prodCrd card col-md-3 my-2" style="width: 19rem; background-color: #e9e8e8;">
        <div class="mainImgWrapper">

          <div class="icons" data-id="${item.id}" onClick="removeFromFavorites(${item.id})">
            <i class="fas fa-heart favorites" style="color: red;"></i>
          </div>

          <img src="${item.image}" class="mainImg card-img-top" alt="..." draggable="false">
            
        </div>

        <div class="card-body">
          <p style="font-size: smaller; font-weight: 300; margin-bottom: 0;">${item.brand}</p>
          <p class="card-title">${item.name.toUpperCase()}</p>
          <span>$${item.price}</span>
          <button id="add_to_cart" class="bg-primary" onClick="moveToCart(${item.id})">Move to cart</button>
        </div>
      </div>
          `
    })
    favsContainer.innerHTML = product.join('');
}

cntItems()
listFavs(favoriteProds)

////////////////////////////////////////// profile functions /////////////////////////////////////////////

function cntItems(){
    let arr = JSON.parse(localStorage.getItem("added")) || [];
    if (arr.length > 0) {
        counter.style.display = "block";

        let totalItems = arr.reduce((total, item) => total + item.qty, 0);
        counter.innerHTML = totalItems;
    } else {
        counter.style.display = "none";
    }
}

cartIcon.addEventListener("click", ()=> window.location = "cart.html")
placeOrder.addEventListener("click", ()=> window.location = "cart.html")

function moveToCart(id) {
    let arr = JSON.parse(localStorage.getItem("added")) || [];
    let index = arr.findIndex((item) => item.id === id);

    if (index === -1) {
        let item = JSON.parse(localStorage.getItem("favorites")).find((item1) => item1.id === id);

        arr.push({ ...item, qty: 1 });
        localStorage.setItem("added", JSON.stringify(arr));
        cntItems();

        let arr1 = JSON.parse(localStorage.getItem("favorites")).filter((item1) => item1.id !== id);
        localStorage.setItem("favorites", JSON.stringify(arr1));
        listFavs(arr1); 
    } else {
        arr[index].qty = arr[index].qty + 1;
        localStorage.setItem("added", JSON.stringify(arr));
        cntItems();

        let arr1 = JSON.parse(localStorage.getItem("favorites")).filter((item1) => item1.id !== id);
        localStorage.setItem("favorites", JSON.stringify(arr1));
        listFavs(arr1);
    }
}

function removeFromFavorites(id) {
    let arr = JSON.parse(localStorage.getItem("favorites")).filter((item) => item.id !== id)

    localStorage.setItem("favorites", JSON.stringify(arr))
    listFavs(arr)
}