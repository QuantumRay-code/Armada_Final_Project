let products = [
    {
        name: "Burgir",
        quantity: 34,
        category: "All",
        ratings: 5,
        price: 50,
        unit: "kg",
        stock: 45,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/PV assets/burgir.png"
    },
    {
        name: "Mango",
        quantity: 34,
        category: "Fruits",
        ratings: 5,
        price: 50,
        unit: "kg",
        stock: 45,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/fruits/1.png"
    },
    {
        name: "Strawberry",
        quantity: 53,
        category: "Fruits",
        ratings: 4,
        price: 45,
        unit: "kg",
        stock: 54,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/fruits/2.png"
    },
    {
        name: "Rambutan",
        quantity: 45,
        category: "Fruits",
        ratings: 3,
        price: 45,
        unit: "kg",
        stock: 23,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/fruits/3.png"
    },
    {
        name: "Carots",
        quantity: 34,
        category: "Vegetable",
        ratings: 5,
        price: 50,
        unit: "kg",
        stock: 45,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/vegetables/1.png"
    },
    {
        name: "Talong Ni Juswa",
        quantity: 34,
        category: "Vegetable",
        ratings: 10,
        price: 10000,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/vegetables/2.png"
    },
    {
        name: "Beans",
        quantity: 23,
        category: "Vegetable",
        ratings: 1,
        price: 34,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/vegetables/3.png"
    },
    {
        name: "Green Onion",
        quantity: 23,
        category: "Crops",
        ratings: 3,
        price: 34,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/crops/1.png"
    },
    {
        name: "Rice",
        quantity: 23,
        category: "Crops",
        ratings: 4,
        price: 34,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/crops/2.png"
    },
    {
        name: "Mung Bean",
        quantity: 23,
        category: "Crops",
        ratings: 5,
        price: 34,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/crops/3.png"
    },
    {
        name: "Chicken Meat",
        quantity: 23,
        category: "Poultry",
        ratings: 5,
        price: 76,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/poultry/1.png"
    },
    {
        name: "Salted Egg",
        quantity: 23,
        category: "Poultry",
        ratings: 5,
        price: 54,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/poultry/2.png"
    },
    {
        name: "Fresh Milk",
        quantity: 76,
        category: "Poultry",
        ratings: 4,
        price: 42,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/poultry/3.png"
    },
    {
        name: "Pig",
        quantity: 34,
        category: "Livestocks",
        ratings: 4,
        price: 42,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/livestocks/1.png"
    },
    {
        name: "Geese",
        quantity: 43,
        category: "Livestocks",
        ratings: 4,
        price: 74,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/livestocks/2.png"
    },
    {
        name: "Rabbit",
        quantity: 23,
        category: "Livestocks",
        ratings: 4,
        price: 42,
        unit: "kg",
        stock: 100,
        description: "Lorem ipsum dolor sit amet consectetur. Eget sit posuere enim facilisi. Pretium orci venenatis habitasse gravida nulla tincidunt iaculis. Aliquet at massa quisque libero viverra ut sed. Est vulputate est rutrum nunc nunc pellentesque ultrices pharetra. Mauris euismod sed vel quisque tincidunt suspendisse sed turpis volutpat.",
        image: "/assets/products/livestocks/3.png"
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
                        <p>$${product.price}</p>
                    </div>
                </div>
            </a>
        `;
        productContainer.appendChild(li);
    });
}

displayProduct(products);

//BUTTON CATEGORY
document.querySelectorAll('.categoryBtn').forEach(button => {
    button.addEventListener('click', function (event) {
        let selectedCategory = this.querySelector('img').getAttribute('data-category');
        if (selectedCategory === "All") {
            displayProduct(products);
        } else {
            let filteredProducts = products.filter(product => product.category === selectedCategory);
            displayProduct(filteredProducts);
        }
    });
});