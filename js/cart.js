const cartProds = localStorage.getItem("added")
let prodsContainer = document.querySelector(".cart-prods")
let cnt = document.querySelector(".header .ctr")

if(cartProds){
    let arr = JSON.parse(cartProds) ;
    listCartItems(arr);

    let numOfItems = arr.length
    if(numOfItems > 0){
        cnt.innerHTML = numOfItems
        cnt.style.display="block"
    }else{
        cnt.style.display="none";
    }
}

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
              <p class="card-text d-inline mr-3 p-1" style="background-color: #ffffff; border-radius: 5px;">Qty: 3</p>
              <i class="fas fa-plus text-success mx-3" style="cursor: pointer;"></i>
              <i class="fas fa-minus text-danger mx-3" style="cursor: pointer;"></i>
            </div>

            <div class="bttn" style="margin-left: 2rem;">
              <button class="btn btn-danger">Remove</button>
            </div>

          </div>
        </div>
      </div>`
    })
    prodsContainer.innerHTML = products.join('');
}