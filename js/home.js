let trendingContainer = document.querySelector(".trending")

const trendingItems = [
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
        brand:"Adidas",
        name:"Yeezy 350 V2",
        price:"249",
        image:"images/yeezy350side.jpg",
        image1:"images/yeezy350front.jpg",
        image2:"images/yeezy350zebra.jpg",
        image3:"images/yeezy350white.jpg"
    },{
        brand:"Adidas",
        name:"Yeezy Foam Runner",
        price:"122",
        image:"images/yeezyfoamrunnerside.jpg",
        image1:"images/yeezyfoamrunnerfront.jpg",
        image2:"images/yeezyfoamrunnercarbon.jpg",
        image3:"images/yeezyfoamrunnercrimson.jpg"
    }
]

function viewProds(){
    window.location="products.html"
}

function listTrendingItems(arr){
    let items = arr.map((item)=>{
        return`<div class="prodCrd trendingCrd card col-md-3 my-2" style="width: 19rem; background-color: #e9e8e8;">
      
        <img src="${item.image}" class="mainImg card-img-top m-auto" style="width: 90%;" draggable="false">

        <div class="card-body text-center d-flex flex-column align-items-center">
          <p style="font-size: smaller; font-weight: 300; margin-bottom: 0;">${item.brand}</p>
          <p class="card-title">${item.name}</p>
          <button id="shop-now" class="bg-dark" onClick="viewProds()">Shop now</button>
        </div>
      </div>`
    })
    trendingContainer.innerHTML = items.join('')
}

listTrendingItems(trendingItems)

let trendingCrds = document.querySelectorAll(".trendingCrd")
trendingCrds.forEach((card) => card.addEventListener("click", () => window.location = "products.html"));

let collectionDivs = document.querySelectorAll(".collection-container div")
collectionDivs.forEach((div)=>div.addEventListener("click", (div)=>window.location="products.html"))