let products = document.querySelector(".productsContainer")
const items = [
    {
        brand:"Air Jordan",
        name:"Air Jordan 11 retro",
        price:"200",
        image:"images/Jordan11side.jpg",
        image1:"images/jordan11front.jpg",
        image2:"images/jordan11white.jpg",
        image3:"images/jordan11whitered.jpg"
    },
    {
        brand:"Nike",
        name:"Dunk low 'Black White'",
        price:"115",
        image:"images/dunklowside.jpg",
        image1:"images/dunklowfront.jpg",
        image2:"images/dunklowgray.jpg",
        image3:"images/dunklowjarritos.jpg"
    },
    {
        brand:"Air Jordan",
        name:"Air Jordan 4 retro",
        price:"239",
        image:"images/Jordan4side.jpg",
        image1:"images/jordan4front.jpg",
        image2:"images/jordan4gray.jpg",
        image3:"images/jordan4black.jpg"
    },
    {
        brand:"Adidas",
        name:"Yeezy 350 V2",
        price:"249",
        image:"images/yeezy350side.jpg",
        image1:"images/yeezy350front.jpg",
        image2:"images/yeezy350zebra.jpg",
        image3:"images/yeezy350white.jpg"
    }
]

function listItems(){
    let product = items.map((item) => {
        return `
        <div class="prodCrd card col-md-3 my-2" style="width: 19rem; background-color: #e9e8e8;">
        <div class="mainImgWrapper">
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
          <p class="card-title">${item.name}</p>
          <span>$${item.price}</span>
          <button id="add_to_cart" class="bg-primary">Add to cart</button>
        </div>
      </div>
          `
    })
    products.innerHTML = product.join('');
}

listItems()