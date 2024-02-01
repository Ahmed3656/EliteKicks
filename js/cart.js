const cartProds = localStorage.getItem("added")
let prodsContainer = document.querySelector(".cart-prods")
let cnt = document.querySelector(".header .ctr")
let totalText = document.querySelector("#total")

////////////////////////////////////////// listing items /////////////////////////////////////////////

function listCartItems(prods){
    let products = prods.map((prod) => {
        return`<div class="cart-prod my-3 rounded col-lg-5 col-md-12" style="position: relative; background-color: #e9e8e8; height: 175px;">
        <div class="image d-inline" style="float: left;"><img src="${prod.image}" class="img-fluid my-3 rounded" alt="" style="height: 143px;" draggable="false"></div>
        
        <i class="fas fa-bookmark" onClick="saveForLater(${prod.id})" title="Save for later" style="position: absolute; top: 0; right: 8px; cursor: pointer; font-size: 20px;"></i>

        <div class="cart-info mt-3" style="float: left; padding-left: 1.5rem;">
          <h4>${prod.name.toUpperCase().slice(0,21)}</h4>
          <p class="card-text small text-muted">${prod.brand}</p>
          <h5 class="card-text">$${prod.price}</h5>

          <div class="qty d-flex" style="justify-content: space-between;">

            <div class="qty-info">
              <p class="card-text d-inline mr-3 p-1" style="background-color: #ffffff; border-radius: 5px;">Qty: ${prod.qty}</p>
              <i class="fas fa-plus text-success mx-3" style="cursor: pointer;" onClick="more(${prod.id})"></i>
              <i class="fas fa-minus text-danger mx-3" style="cursor: pointer;" onClick="less(${prod.id})"></i>
            </div>

            <div class="bttn" style="margin-left: 2rem;">
              <button class="btn btn-danger" onClick="removeItem(${prod.id})">Remove</button>
            </div>

          </div>
        </div>
      </div>`
    })
    prodsContainer.innerHTML = products.join('');
}

////////////////////////////////////////// cart functions /////////////////////////////////////////////

function removeItem(id) {
  let products = JSON.parse(localStorage.getItem("added")) || []

  let updatedProds = products.filter(item => item.id !== id)
  localStorage.setItem("added", JSON.stringify(updatedProds))

      listCartItems(updatedProds);
      calculateTotal(updatedProds);
      updateCounter(updatedProds); 
}

function calculateTotal(items) {
  let total=0

  items.map((item)=>{
    total += (item.price * item.qty)
  })

  totalText.innerHTML = `Total: ${total}<small>$</small>`;
}

function numberOfItems(items) {
  let total = 0

  items.map((item) =>{
    total += item.qty
  })

  return total
}

function more(id) {
  let arr = JSON.parse(localStorage.getItem("added")) || []

  let itemIdx = arr.findIndex(item => item.id == id)

  arr[itemIdx].qty++;
  localStorage.setItem("added", JSON.stringify(arr))

  listCartItems(arr);
  calculateTotal(arr);
  updateCounter(arr);
}

function less(id) {
  let arr = JSON.parse(localStorage.getItem("added")) || []

  let itemIdx = arr.findIndex(item => item.id == id)

  if(--arr[itemIdx].qty === 0) removeItem(id)
  else{
    localStorage.setItem("added", JSON.stringify(arr))

    listCartItems(arr);
    calculateTotal(arr);
    updateCounter(arr);
  }
}

function updateCounter(items) {
  let total = 0;

  items.map((item) => total += item.qty);

  if (total > 0) {
    cnt.innerHTML = total;
    cnt.style.display = "block";
  } else {
    cnt.style.display = "none";
  }
}

////////////////////////////////////////// listing items /////////////////////////////////////////////

if(cartProds){
  let arr = JSON.parse(cartProds);

  listCartItems(arr);
  calculateTotal(arr);

  let numOfItems = numberOfItems(arr);
  if(numOfItems > 0){
      cnt.innerHTML = numOfItems
      cnt.style.display="block"
  }else{
      cnt.style.display="none";
  }
}

////////////////////////////////////////// save for later /////////////////////////////////////////////

let savedContainer = document.getElementById("saved4later")
let savedForLater = JSON.parse(localStorage.getItem("storedSaves")) || []

function listSavedForLater(saves) {
  let savedItems = saves.map((item) => {
    return `
    <div class="swiper-slide">
      <div class="card col-md-4 m-auto" style="width: 18rem; background-color: #e9e8e8;">
      <img src="${item.image}" class="card-img m-auto" alt="..." style="width: 90%;" draggable="false">
      <div class="card-body">
        <p class="card-text"><small>${item.brand}</small></p>
        <h4 class="card-title">${item.name}</h4>
        <p class="card-text fw-bold">Price: $${item.price}</p>
        <div class="btns d-flex justify-content-between">
          <a href="#" class="btn btn-primary col-md-5" onClick="moveToCart(${item.id})">Add to cart</a>
          <a href="#" class="btn btn-danger col-md-5" onClick="deleteItem(${item.id})">Delete</a>
        </div>
      </div>
    </div> 
  </div>`
  })

  savedContainer.innerHTML = savedItems.join('');
}

listSavedForLater(savedForLater)


function saveForLater(id) {
  let arr =JSON.parse(localStorage.getItem("added"))
  let arr1 =JSON.parse(localStorage.getItem("storedSaves")) || []

  let index = arr.findIndex((item1) => item1.id === id)

  arr[index].qty = 0;
  let item = arr[index]

  let check = arr1.findIndex((item1) => item1.id === id)

  if(check === -1){
    if(item.id === 8){
      item.name = item.name.slice(0,10)
    }
    arr1.push(item)
    localStorage.setItem("storedSaves", JSON.stringify(arr1))
    location.reload()
    listSavedForLater(arr1)
  }
  else {
    removeItem(id)
  }

  let x = arr.filter((item1) => item1.id !== id)
  
  listCartItems(x);
  calculateTotal(x);
  updateCounter(x);

  localStorage.setItem("added", JSON.stringify(x))
}

function moveToCart(id) {
  let arr = JSON.parse(localStorage.getItem("added"))
  let arr1 =JSON.parse(localStorage.getItem("storedSaves"))

  let item = arr1.find((item1) => item1.id === id)

  let check = arr.findIndex((item1) => item1.id === item.id)

  if(check === -1){
    item.qty = 1
    arr.push(item)
  }
  else {
    arr[check].qty++
  }
  localStorage.setItem("added", JSON.stringify(arr))

  listCartItems(arr);
  calculateTotal(arr);
  updateCounter(arr);

  let x = arr1.filter((item1) => item1.id !== id)
  localStorage.setItem("storedSaves", JSON.stringify(x))
  location.reload()
  listSavedForLater(x)
}

function deleteItem(id) {
  let arr =JSON.parse(localStorage.getItem("storedSaves"))

  let x = arr.filter((item1) => item1.id !== id)
  localStorage.setItem("storedSaves", JSON.stringify(x))
  location.reload()
  listSavedForLater(x)
}