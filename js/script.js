////////////////////////////////////////// Logged in /////////////////////////////////////////////

let signedOut = document.querySelector(".signed-out")
let userInfo = document.querySelector(".user-info")
let userName = document.querySelector(".header .user-info .user-name")

if(localStorage.getItem("fname")){
  signedOut.remove()
  userInfo.style.display = "flex"
  userName.innerHTML = localStorage.getItem("fname").charAt(0).toUpperCase() + localStorage.getItem("fname").slice(1)
}

////////////////////////////////////////// Logout /////////////////////////////////////////////

let logOut = document.querySelector("#logout")

logOut.addEventListener("click", (e) =>{
  e.preventDefault()

  localStorage.clear()

  setTimeout(()=>{
    window.location = "login.html"
  }, 1500)
})

////////////////////////////////////////// products /////////////////////////////////////////////

let products = document.querySelector(".productsContainer")
const items = [
    {
        id:1,
        qty:0,
        brand:"Air Jordan",
        name:"Air Jordan 11 retro",
        price:"200",
        image:"images/Jordan11side.jpg",
        image1:"images/jordan11front.jpg",
        image2:"images/jordan11white.jpg",
        image3:"images/jordan11whitered.jpg"
    },
    {
        id:2,
        qty:0,
        brand:"Nike",
        name:"Dunk low",
        price:"115",
        image:"images/dunklowside.jpg",
        image1:"images/dunklowfront.jpg",
        image2:"images/dunklowgray.jpg",
        image3:"images/dunklowjarritos.jpg"
    },
    {
        id:3,
        qty:0,
        brand:"Air Jordan",
        name:"Air Jordan 4 retro",
        price:"239",
        image:"images/jordan4side.jpg",
        image:"images/jordan4side.jpg",
        image1:"images/jordan4front.jpg",
        image2:"images/jordan4gray.jpg",
        image3:"images/jordan4black.jpg"
    },
    {
        id:4,
        qty:0,
        brand:"Adidas",
        name:"Yeezy 350 V2",
        price:"249",
        image:"images/yeezy350side.jpg",
        image1:"images/yeezy350front.jpg",
        image2:"images/yeezy350zebra.jpg",
        image3:"images/yeezy350white.jpg"
    },
    {
        id:5,
        qty:0,
        brand:"Air Jordan",
        name:"TRAVIS SCOTT X AIR JORDAN 1 RETRO LOW 'BLACK PHANTOM'",
        price:"547",
        image:"images/travisside.jpg",
        image1:"images/travisfront.jpg",
        image2:"images/travisback.jpg",
        image3:"images/travisunder.jpg"
    },
    {
      id:6,
      qty:0,
      brand:"Nike",
      name:"Lebron 14",
      price:"123",
      image:"images/lebron14side.jpg",
      image1:"images/lebron14front.jpg",
      image2:"images/lebron14white.jpg",
      image3:"images/lebron14grey.jpg"
    },
    {
        id:7,
        qty:0,
        brand:"New Balance",
        name:"9060",
        price:"179",
        image:"images/9060side.jpg",
        image1:"images/9060front.jpg",
        image2:"images/9060BW.jpg",
        image3:"images/9060grey.jpg"
    },
    {
        id:8,
        qty:0,
        brand:"Adidas",
        name:"BAD BUNNY X RESPONSE CL",
        price:"162",
        image:"images/badbunnyside.jpg",
        image1:"images/badbunnyfront.jpg",
        image2:"images/badbunnypink.jpg",
        image3:"images/badbunnyboston.jpg"
    },
    {
        id:9,
        qty:0,
        brand:"Air Jordan",
        name:"Air Jordan 5",
        price:"299",
        image:"images/jordan5side.jpg",
        image1:"images/jordan5front.jpg",
        image2:"images/jordan5navy.jpg",
        image3:"images/jordan5black.jpg"
    },
    {
        id:10,
        qty:0,
        brand:"Nike",
        name:"Lebron 11",
        price:"232",
        image:"images/lebron11side.jpg",
        image1:"images/lebron11front.jpg",
        image2:"images/lebron11navy.jpg",
        image3:"images/lebron11crimson.jpg"
    },
    {
        id:11,
        qty:0,
        brand:"Adidas",
        name:"Yeezy Foam Runner",
        price:"122",
        image:"images/yeezyfoamrunnerside.jpg",
        image1:"images/yeezyfoamrunnerfront.jpg",
        image2:"images/yeezyfoamrunnercarbon.jpg",
        image3:"images/yeezyfoamrunnercrimson.jpg"
    }
]

function listItems(){
    let product = items.map((item) => {
        return `
        <div class="prodCrd card col-md-3 my-2" style="width: 19rem; background-color: #e9e8e8;">
        <div class="mainImgWrapper">

          <div class="icons" data-id="${item.id}" onClick="addToFavorites(${item.id})">
            <i class="fas fa-heart favorites"></i>
          </div>

          <img src="${item.image}" class="mainImg card-img-top" alt="..." draggable="false">

          <div class="imgOverlay">
            <div id="carouselSlides" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div class="carousel-inner">

                <div class="carousel-item active">
                  <img src="${item.image1}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${item.image2}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${item.image3}" class="d-block w-100" alt="...">
                </div>

              </div>
            </div>
          </div>

        </div>

        <div class="card-body">
          <p style="font-size: smaller; font-weight: 300; margin-bottom: 0;">${item.brand}</p>
          <p class="card-title">${item.name.toUpperCase()}</p>
          <span>$${item.price}</span>
          <button id="add_to_cart" class="bg-primary" onClick="addToCart(${item.id})">Add to cart</button>
        </div>
      </div>
          `
    })
    products.innerHTML = product.join('');
}

listItems()

////////////////////////////////////////// move to cart /////////////////////////////////////////////

let cartBtn = document.querySelector(".header .cart")
let cartProducts = document.querySelector(".header .cart-products")
let ctr = document.querySelector(".header .ctr")
let emptyCart = document.querySelector(".cartt .empty-cart")

let inStorage = JSON.parse(localStorage.getItem("added"))
let addedToCart = inStorage ? [...inStorage] : []

let numOfItems = 0

if(inStorage){
  addedToCart.map((storedItem)=>{
    numOfItems += storedItem.qty
  })

  ctr.style.display = "block"
}
else{
  ctr.style.display = "none"
}

cartBtn.addEventListener("click", ()=>window.location = "cart.html")

function addToCart(id){
  if(localStorage.getItem("fname")){
    let prod = items.find((item) => item.id == id)
    numOfItems++;
    ctr.innerHTML = numOfItems
    ctr.style.display="block"

    /////////////////// calculating qty ///////////////////
    let productIndex = addedToCart.findIndex(product => product.id == id);
    if(productIndex === -1)
    {
      prod.qty++
      addedToCart.push(prod)
    }
    else
    {
      addedToCart[productIndex].qty++;
    }
    localStorage.setItem("added", JSON.stringify(addedToCart))
  }
  else {
    setTimeout(()=>{
      window.location = "login.html"
    },500)
  }
}

if(numOfItems > 0){
  ctr.innerHTML = numOfItems
  ctr.style.display="block"
}else{
  ctr.style.display="none";
}

////////////////////////////////////////// favorites /////////////////////////////////////////////

let favoriteProducts = document.querySelector("#favorites")

function addToFavorites(id) {
  if(localStorage.getItem("fname")){
    let heart = document.querySelector(`.icons[data-id="${id}"] .favorites`)

    let currentStyle = window.getComputedStyle(heart);

      if (currentStyle.getPropertyValue("color") === "rgb(255, 0, 0)") {
        heart.style.color = "rgb(161, 161, 161)";
      } else {
        heart.style.color = "red";
      }
  }
  else {
    setTimeout(()=>{
      window.location = "login.html"
    },500)
  }
}

