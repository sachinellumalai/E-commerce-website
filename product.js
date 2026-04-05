const products = [
    { id: 1, name: "Floral Shirt", tags: ["New", "Blue"], img: "https://via.placeholder.com/200" },
    { id: 2, name: "Summer Tank", tags: ["Old"], img: "https://via.placeholder.com/200" },
    { id: 3, name: "Ocean T-shirt", tags: ["New", "Blue"], img: "https://via.placeholder.com/200" },
    { id: 4, name: "Classic Jeans", tags: ["Old"], img: "https://via.placeholder.com/200" }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const checkboxes = document.querySelectorAll('.filter-check');

function displayProducts(filteredList) {
    productGrid.innerHTML = filteredList.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.tags.join(', ')}</p>
        </div>
    `).join('');
}

function filterLogic() {
    const query = searchInput.value.toLowerCase();
    const activeFilters = Array.from(checkboxes)
        .filter(i => i.checked)
        .map(i => i.value);

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(query);
        const matchesFilter = activeFilters.length === 0 || 
                             activeFilters.some(f => p.tags.includes(f));
        return matchesSearch && matchesFilter;
    });

    displayProducts(filtered);
}

searchInput.addEventListener('keyup', filterLogic);
checkboxes.forEach(box => box.addEventListener('change', filterLogic));

// Initial Load
displayProducts(products);