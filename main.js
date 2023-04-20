const URL= "https://ecommercebackend.fundamentos-29.repl.co/"

const cartToggle= document.querySelector(".cart_toggle")
const cartBlock= document.querySelector(".cart_block")
const listOfProducts= document.querySelector("#products_container")


cartToggle.addEventListener("click", ()=>{
    cartBlock.classList.toggle("cart_visible")
})

function getProducts(){
    axios.get(URL)
        .then(function (response){
            const products= response.data
            printProducts(products)
        })
        .catch(function(error){
        console.log(error)
    })
}

getProducts()

function printProducts(products){
    let html= "";
    for(let i= 0; i < products.length; i++){
        html+= `
        <div class="product_container">
            <div class="product_container_img">
                <img src="${products[i].image}" alt="image>
            </div>
            <div class="product_container_name">
                <p>${products[i].name}</p>
            </div>
            <div class="product_container_price">
                <p>$${products[i].price.toFixed(2)}</p>
            </div>
            <div class="product_container_button">
                <button class="cart_button add_to_cart" id="add" data-id="${products[i].id}">Add to cart</button>
            </div>
        </div>
        `
    }
    listOfProducts.innerHTML = html
}
function productsStorage(){
    localStorage.setItem("cart", JSON.stringify(cartProducts))
}
