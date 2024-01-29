const cartProds = localStorage.getItem("added")
let prodsContainer = document.querySelector(".cart-prods")
let cnt = document.querySelector(".header .ctr")
let totalText = document.querySelector("#total")

////////////////////////////////////////// listing items /////////////////////////////////////////////

function listCartItems(prods){
    let products = prods.map((prod) => {
        return`<div class="cart-prod my-3 rounded col-lg-5 col-md-12" style="background-color: #e9e8e8; height: 175px;">
        <div class="image d-inline" style="float: left;"><img src="${prod.image}" class="img-fluid my-3 rounded" alt="" style="height: 143px;" draggable="false"></div>
        
        <div class="cart-info mt-3" style="float: left; padding-left: 1.5rem;">
          <h4>${prod.name.toUpperCase().slice(0,28)}</h4>
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
  let products = JSON.parse(cartProds)

  let updatedProds = products.filter(item => item.id !== id)
  localStorage.setItem("added", JSON.stringify(updatedProds))

  setTimeout(() =>{
    location.reload()}, 500)
}

function calculateTotal(items) {
  let total=0

  items.map((item)=>{
    total += (item.price * item.qty)
  })

  totalText.innerHTML = `Total: ${total}`;
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
  console.log(itemIdx)
  arr[itemIdx].qty++;
  localStorage.setItem("added", JSON.stringify(arr))
}

function less(id) {
  console.log("sub" + id)
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