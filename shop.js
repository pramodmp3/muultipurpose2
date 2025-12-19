// NOTE: For this code to work, create a folder named 'assets/img/' in your project
// directory and place your images there using the file names specified below.

// --- ⚙️ Product Data (Simulated Backend) ---
const PRODUCTS = [
  // Consumer Electronics
  {
    id: 1,
    name: "Aurora X-Phone",
    price: 999.99,
    image: "aurora_xphone.webp",
    category: "consumer",
  },
  {
    id: 2,
    name: "Quantum Laptop Pro",
    price: 1899.99,
    image: "quantum_laptop.webp",
    category: "consumer",
  },
  {
    id: 3,
    name: "Aether Watch 3",
    price: 349.99,
    image: "aether_watch.webp",
    category: "consumer",
  },
  // Medical Devices
  {
    id: 4,
    name: "Bio-Scanner S10",
    price: 45000.0,
    image: "bio_scanner.webp",
    category: "medical",
  },
  {
    id: 5,
    name: "Portable ECG-Duo",
    price: 8999.0,
    image: "ecg_duo.webp",
    category: "medical",
  },
  // Telecommunication & Networking
  {
    id: 6,
    name: "Nexus 5G Router",
    price: 299.0,
    image: "nexus_router.webp",
    category: "telecom",
  },
  {
    id: 7,
    name: "Signal Amplifier Pro",
    price: 159.0,
    image: "signal_amp.webp",
    category: "telecom",
  },
  // Industrial Electronic Equipment
  {
    id: 8,
    name: "Automaton Module Z",
    price: 1200.0,
    image: "automation_module.webp",
    category: "industrial",
  },
  {
    id: 9,
    name: "Control Panel Mk.II",
    price: 850.0,
    image: "control_panel.webp",
    category: "industrial",
  },
  // Semiconductor Devices
  {
    id: 10,
    name: "Silicon Wafer 300mm",
    price: 5000.0,
    image: "silicon_wafer.webp",
    category: "semiconductor",
  },
  {
    id: 11,
    name: "Neural Chipset N7",
    price: 799.0,
    image: "neural_chipset.webp",
    category: "semiconductor",
  },
  // Printed Circuit Boards
  {
    id: 12,
    name: "High-Density PCB 8L",
    price: 55.0,
    image: "hd_pcb.webp",
    category: "pcb",
  },
  {
    id: 13,
    name: "Flexible PCB Array",
    price: 35.0,
    image: "flex_pcb.webp",
    category: "pcb",
  },
];

const cart = [];
const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const categoryButtons = document.querySelectorAll(".category-tabs button");

// --- 1. Product Rendering ---
const renderProducts = (category = "all") => {
  // Smooth transition: Slide out and fade out the old content
  productGrid.style.opacity = "0";
  productGrid.style.transform = "translateY(20px)";

  setTimeout(() => {
    productGrid.innerHTML = "";

    const filteredProducts =
      category === "all"
        ? PRODUCTS.slice(0, 12) // Show only 12 featured products on homepage
        : PRODUCTS.filter((p) => p.category === category);

    // Determine the "Product of the Day" (first item on the featured page)
    const productOfTheDayId =
      category === "all" && filteredProducts.length > 0
        ? filteredProducts[0].id
        : null;

    filteredProducts.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.dataset.id = product.id;

      // Apply "Product of the Day" highlight class
      if (productOfTheDayId === product.id) {
        card.classList.add("highlight");
      }

      // Simulate load animation delay for each card
      card.style.transitionDelay = `${index * 0.05}s`;

      card.innerHTML = `
                <img src="assets/img/${product.image}" 
                     alt="${product.name}" class="product-image">
                
                <h3>${product.name}</h3>
                <div class="price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${
                      product.id
                    }">Add to Cart</button>
                    <button class="buy-now">Buy Now</button>
                </div>
            `;
      productGrid.appendChild(card);

      // Trigger the subtle load animation
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 10);
    });

    // Smooth transition: Slide in and fade in the new content
    productGrid.style.opacity = "1";
    productGrid.style.transform = "translateY(0)";
  }, 300);
};

// --- 2. Micro-Interactions ---

// Event Delegation for Button Clicks
productGrid.addEventListener("click", (e) => {
  const target = e.target;
  const productId = target.dataset.id;

  if (target.classList.contains("add-to-cart")) {
    handleAddToCart(target, productId);
  } else if (target.classList.contains("buy-now")) {
    handleBuyNow(target);
  }
});

// Add to Cart Logic with Animation
const handleAddToCart = (button, id) => {
  cart.push(id);
  updateCartCount();

  // 1. Start satisfying animation
  const originalText = button.textContent;
  button.textContent = "Added to Cart";
  button.classList.add("added");

  // 2. Button animation complete and reset
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("added");
  }, 600);
};

// Buy Now (Humorous 404 Feature Coming Soon) Logic
const handleBuyNow = () => {
  const modalHTML = `
        <div class="feature-modal" id="feature-modal">
            <span class="close-modal">&times;</span>
            <div class="error-animation">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h2>FEATURE COMING SOON</h2>
            <p>Our engineers are still calibrating the 'Buy Now' quantum tunnel. Please use 'Add to Cart' for now!</p>
        </div>
    `;
  // Append modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);
  const modal = document.getElementById("feature-modal");
  modal.style.display = "flex";

  // Close button logic
  modal.querySelector(".close-modal").onclick = () => {
    modal.style.display = "none";
    modal.remove();
  };

  // Close on escape key
  document.onkeydown = function (e) {
    if (e.key === "Escape" && modal) {
      modal.style.display = "none";
      modal.remove();
    }
  };
};

// Cart Count Update with Bounce Animation
const updateCartCount = () => {
  cartCount.textContent = cart.length;
  const cartIcon = document.getElementById("cart-icon");

  // Trigger bounce animation
  cartIcon.classList.remove("bounce");
  void cartIcon.offsetWidth;
  cartIcon.classList.add("bounce");

  // Add CSS for bounce keyframes (since it's JS-controlled)
  if (!document.getElementById("bounce-style")) {
    const style = document.createElement("style");
    style.id = "bounce-style";
    style.innerHTML = `
            @keyframes cart-bounce {
                0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                40% {transform: translateY(-10px);}
                60% {transform: translateY(-5px);}
            }
            .bounce {
                animation: cart-bounce 0.5s ease-in-out;
            }
        `;
    document.head.appendChild(style);
  }
};

// --- 3. Category Switching ---
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active class for styling
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Render products for the selected category
    const category = button.dataset.category;
    renderProducts(category);
  });
});

// --- 4. Page Initialization ---
window.onload = () => {
  // Hide loading screen after content is ready
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    // Remove from DOM after transition
    setTimeout(() => (loadingScreen.style.display = "none"), 500);
  }, 1500); // 1.5s delay for the animation to play

  // Initial product load (Featured products)
  renderProducts("all");
};
