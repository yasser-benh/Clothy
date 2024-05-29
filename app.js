async function get(){
    
    let allProduct = await fetch('https://fakestoreapi.com/products')
    let data = await allProduct.json()
    console.log(data)
    return data
    
}

async function getall (){
    let prodts = await get()
    console.log(prodts)

    prodts.forEach(products => {
       console.log (products)
        let product = document.createElement("article")
        product.setAttribute ("class" , "articles")
        product.innerHTML = `
        <a href="singleProduct.html?id=${products.id}">
        <div class="catregory">
            <h4>${products.category}</h4>
            <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png">
        </div>
        <img src="${products.image}">
        <h2>${products.title}</h2>
        <hr>
        <div class="price">
            <p class="last_price"><del>20.00</del></p>
            <p class="new_price">${products.price+'$'}</p>
            <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png">
        </div>
    </a>
        
        `
        document.getElementById('main').appendChild(product)
    });
}


//page 2


async function getSingleProd(id){
    let singleProduct = await fetch('https://fakestoreapi.com/products/' +id)
    let data = await singleProduct.json()
    return data
   
}

async function singleProduct(myId){
    let details = await getSingleProd(myId)

    let product_dt = document.createElement("div")
    product_dt.setAttribute('class' , 'single')
    product_dt.innerHTML = `
        <div class = "articl">
             <h4>${details.category}</h4>
             <img src="${details.image}">
        </div>
        <div class = "details">
            <h2>${details.title}</h2>
            <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png">
            
            <div class="price_d">
                <p class="last_price_d"><del>20.00</del></p>
                <p class="new_price_d">${'$'+details.price}</p>
            </div>
            <p class = "discription">${details.description}</p>
        
                 <div class ="buy">
                    <h3>Quantity:</h3>
                    <input type="number" value="1" min="1" max="5">
                    <button>Add to cart</button>
                </div>
        </div>

         `
        document.getElementById("details").appendChild(product_dt)

}


let btn_prodDes = document.querySelector('.btn_desc')
let btn_prodInfo = document.querySelector ('.btn_info')


btn_prodDes.addEventListener('mouseover', changeColor)

function changeColor (){
    btn_prodInfo.classList.add('change_info')

}

btn_prodDes.addEventListener('mouseout' , defautColor)

function defautColor(){
    btn_prodInfo.classList.remove('change_info')
}

btn_prodInfo.addEventListener('mouseover' , changeColor2)
function changeColor2 (){
    btn_prodDes.classList.add('change_des')
}

btn_prodInfo.addEventListener('mouseout',defColor)

function defColor (){
    btn_prodDes.classList.remove('change_des')
}