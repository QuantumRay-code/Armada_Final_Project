let products = [
    {
        name: "Vegetables", 
        quantity: 1,
        category:"Fruits",
        ratings: 5,
        price: "$10",
        stock: "In Stock",
        description: "Fresh organic vegetables",
        image: "/assets/products/crops/1.png"
    },
    {
        name: "Fruits", 
        quantity: 1,
        category:"Fruits",
        ratings: 4,
        price: "$15",
        stock: "In Stock",
        description: "Sweet and juicy fruits",
        image: "/assets/products/crops/2.png"
    },
    {
        name: "Grains", 
        quantity: 1,
        category:"Vegetable",
        ratings: 3,
        price: "$8",
        stock: "Out of Stock",
        description: "High-quality grains",
        image: "/assets/products/crops/3.png"
    },
];

let productContainer = document.getElementById('product_list');


function displayProduct(filteredProducts) {
    let productContainer = document.getElementById('product_list');
    productContainer.innerHTML = ''; 
    
    filteredProducts.forEach(product => {
        let li = document.createElement('li');
        li.innerHTML = `
            <a href="Product_View.html">
                <img class="product_img" src="${product.image}" alt="${product.name}">
                <div class="product_wrapper">
                    <div class="product_info">
                        <h6 class="product_name">${product.name}</h6>
                        <p>
                            ${'<i class="fa-solid fa-star"></i>'.repeat(product.ratings)}
                        </p>
                        <p>${product.ratings} Ratings</p>
                    </div>
                    <div class="product_price">
                        <p>${product.price}</p>
                    </div>
                </div>
            </a>
        `;
        productContainer.appendChild(li);
    });
}

displayProduct(products);
document.querySelectorAll('.categoryBtn').forEach(button => {
    button.addEventListener('click', function(event) {
        let selectedCategory = this.querySelector('img').getAttribute('data-category');
        if (selectedCategory === "All") {
            displayProduct(products); 
        } else {
            let filteredProducts = products.filter(product => product.category === selectedCategory);
            displayProduct(filteredProducts);
        }
    });
});

console.log(window.location.pathname)
