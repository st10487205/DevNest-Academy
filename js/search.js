// --- Filtered arrays ---
let filteredMainProducts = [];
let filteredBoosterProducts = [];

// --- Render function ---
function renderProducts(products, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = "";

  products.forEach(product => {
    const block = document.createElement("div");
    block.className = "block";

    block.innerHTML = `
      <h3>${product.name}</h3>
      <ul>
        <li>${product.description}</li>
        <li>Duration: ${product.duration}</li>
        <li>Method of learning: ${product.method}</li>
        <br>
        <i>Students will also be trained on how to use AI tools properly</i>
        <br>
        <b style="font-size:25px; font-family:cursive">Price: R${product.price.toLocaleString()}</b>
      </ul>
    `;

    container.appendChild(block);
  });
}

// --- Update stats ---
function updateSearchStats(mainCount, boosterCount) {
  const stats = document.getElementById("searchStats");
  stats.textContent = `Showing ${mainCount} main courses and ${boosterCount} booster courses`;
}

// --- Filter & Sort ---
function filterAndSort() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("filterSelect").value;
  const sortBy = document.getElementById("sortSelect").value;

  // Filter by search and category
  filteredMainProducts = allProducts.filter(p => 
    p.type === "main" &&
    (p.name.toLowerCase().includes(searchTerm) ||
     p.description.toLowerCase().includes(searchTerm) ||
     p.keywords.some(kw => kw.includes(searchTerm))) &&
    (category === "all" || p.category === category)
  );

  filteredBoosterProducts = allProducts.filter(p => 
    p.type === "booster" &&
    (p.name.toLowerCase().includes(searchTerm) ||
     p.description.toLowerCase().includes(searchTerm) ||
     p.keywords.some(kw => kw.includes(searchTerm))) &&
    (category === "all" || p.category === category)
  );

  // Sort function
  const sortArray = arr => {
    switch(sortBy) {
      case "price-low": return arr.sort((a,b) => a.price - b.price);
      case "price-high": return arr.sort((a,b) => b.price - a.price);
      case "name": return arr.sort((a,b) => a.name.localeCompare(b.name));
      default: return arr;
    }
  };

  renderProducts(sortArray(filteredMainProducts), "#mainCoursesContainer");
  renderProducts(sortArray(filteredBoosterProducts), "#boosterCoursesContainer");

  updateSearchStats(filteredMainProducts.length, filteredBoosterProducts.length);
}

// --- Setup search listeners ---
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const sortSelect = document.getElementById("sortSelect");

  searchInput.addEventListener("input", filterAndSort);
  filterSelect.addEventListener("change", filterAndSort);
  sortSelect.addEventListener("change", filterAndSort);
}

// --- Initialize ---
document.addEventListener("DOMContentLoaded", () => {
  setupSearch();
  filterAndSort(); // initial render
});
