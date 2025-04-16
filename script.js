// Menu items data
const menuItems = [
  // Featured Items
  {
    id: 1,
    name: "Tandoori Burger",
    description: "Spicy tandoori patty with fresh vegetables and special sauce.",
    price: 100,
    category: "burger",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    isBestseller: true
  },
  {
    id: 2,
    name: "Paneer Delight Roll",
    description: "Soft paneer filling with special spices and sauce wrapped in a roll.",
    price: 99,
    category: "roll",
    type: "veg",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    isPopular: true
  },
  {
    id: 3,
    name: "Hot Crispy Burger",
    description: "Crispy fried chicken patty with spicy sauce and fresh vegetables.",
    price: 120,
    category: "burger",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true,
    isSpicy: true
  },

  // Rolls
  {
    id: 4,
    name: "Veg Roll",
    description: "Mixed vegetables with spices and sauce",
    price: 75,
    category: "roll",
    type: "veg",
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Chicken Roll",
    description: "Tender chicken pieces with special sauce",
    price: 75,
    category: "roll",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1599307767316-776e7ca934eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Tandoori Chicken Roll",
    description: "Spicy tandoori chicken with mint chutney",
    price: 85,
    category: "roll",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Krisper Roll",
    description: "Crispy filling with special sauce",
    price: 90,
    category: "roll",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Krunchy Munchy Roll",
    description: "Extra crunchy with special spices",
    price: 99,
    category: "roll",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },

  // Burgers
  {
    id: 9,
    name: "Paneer Delight Burger",
    description: "Spiced paneer patty with fresh vegetables",
    price: 99,
    category: "burger",
    type: "veg",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Star Burger",
    description: "Classic burger with signature sauce",
    price: 70,
    category: "burger",
    type: "veg",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Hungry Bird Burger",
    description: "Chicken patty with special sauce",
    price: 90,
    category: "burger",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Veg Burger",
    description: "Veggie patty with fresh toppings",
    price: 75,
    category: "burger",
    type: "veg",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Chicken & Cheese Burger",
    description: "Juicy chicken patty with melted cheese",
    price: 115,
    category: "burger",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Muaythas Burger",
    description: "Premium chicken patty with signature sauce",
    price: 139,
    category: "burger",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },

  // Snacks
  {
    id: 15,
    name: "Chicken Nuggets",
    description: "Crispy chicken nuggets, 6 pcs",
    price: 90,
    category: "snack",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1562967914-01efa7e87832?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Chicken Fingers",
    description: "Crispy chicken strips with dip",
    price: 90,
    category: "snack",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1619881590724-83cf0140c57e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Chicken Crispy Momos",
    description: "Fried momos with spicy sauce",
    price: 99,
    category: "snack",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Chicken Saucy Bites",
    description: "Tender chicken pieces in special sauce",
    price: 110,
    category: "snack",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    name: "Chicken Lolli Poppers",
    description: "Chicken lollipop style with dip",
    price: 120,
    category: "snack",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    name: "French Fries",
    description: "Crispy fries with masala or salt",
    price: 50,
    category: "snack",
    type: "veg",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Chicken Items
  {
    id: 21,
    name: "Peri Peri Chicken Wings",
    description: "Spicy chicken wings with peri peri sauce",
    price: 110,
    category: "chicken",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    name: "Chicken Popcorn",
    description: "Small bites of crispy fried chicken",
    price: 75,
    category: "chicken",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1548340748-6d2b7c7a1ddd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 23,
    name: "Cheese Chicken Shots",
    description: "Chicken bites filled with melted cheese",
    price: 80,
    category: "chicken",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 24,
    name: "Spice Roaster",
    description: "Whole chicken roasted with special spices",
    price: 310,
    category: "chicken",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Items" },
  { id: "roll", name: "Rolls" },
  { id: "burger", name: "Burgers" },
  { id: "snack", name: "Snacks" },
  { id: "chicken", name: "Chicken" }
];

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const mobileMenuOpenBtn = document.getElementById('menu-open');
const mobileMenuCloseBtn = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const featuredItemsContainer = document.getElementById('featured-items');
const categoryTabsContainer = document.getElementById('category-tabs');
const menuItemsContainer = document.getElementById('menu-items');
const searchInput = document.getElementById('search-input');
const currentYearEl = document.getElementById('current-year');

// Global state
let activeCategory = 'all';
let searchTerm = '';
let filteredItems = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  currentYearEl.textContent = new Date().getFullYear();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Load featured items
  loadFeaturedItems();
  
  // Create category tabs
  createCategoryTabs();
  
  // Load all menu items initially
  filterAndDisplayMenuItems();
  
  // Initialize search functionality
  initSearch();
});

// Mobile Menu Functionality
function initMobileMenu() {
  mobileMenuBtn.addEventListener('click', () => {
    const isMenuOpen = mobileMenu.style.display === 'block';
    
    if (isMenuOpen) {
      mobileMenu.style.display = 'none';
      mobileMenuOpenBtn.style.display = 'block';
      mobileMenuCloseBtn.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
      mobileMenuOpenBtn.style.display = 'none';
      mobileMenuCloseBtn.style.display = 'block';
    }
  });
  
  // Close mobile menu when clicking menu items
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      mobileMenuOpenBtn.style.display = 'block';
      mobileMenuCloseBtn.style.display = 'none';
    });
  });
}

// Load featured items
function loadFeaturedItems() {
  const featuredItems = menuItems.filter(item => item.featured);
  
  // Clear skeleton loading
  featuredItemsContainer.innerHTML = '';
  
  featuredItems.forEach(item => {
    const itemEl = createMenuItemElement(item, true);
    featuredItemsContainer.appendChild(itemEl);
  });
}

// Create category tabs
function createCategoryTabs() {
  categories.forEach(category => {
    const tabBtn = document.createElement('button');
    tabBtn.className = `category-tab ${category.id === activeCategory ? 'active' : ''}`;
    tabBtn.dataset.category = category.id;
    
    // Add appropriate icon based on category
    let iconClass = '';
    switch(category.id) {
      case 'roll':
        iconClass = 'fa-utensils';
        break;
      case 'burger':
        iconClass = 'fa-burger';
        break;
      case 'snack':
        iconClass = 'fa-pizza-slice';
        break;
      case 'chicken':
        iconClass = 'fa-drumstick-bite';
        break;
      default:
        iconClass = 'fa-circle';
    }
    
    tabBtn.innerHTML = `
      <i class="fas ${iconClass}"></i>
      ${category.name}
    `;
    
    tabBtn.addEventListener('click', () => {
      // Update active tab
      document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      tabBtn.classList.add('active');
      
      // Update active category and filter items
      activeCategory = category.id;
      filterAndDisplayMenuItems();
    });
    
    categoryTabsContainer.appendChild(tabBtn);
  });
}

// Initialize search functionality
function initSearch() {
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    filterAndDisplayMenuItems();
  });
}

// Filter and display menu items
function filterAndDisplayMenuItems() {
  // Filter items by category and search term
  filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
                         item.name.toLowerCase().includes(searchTerm) || 
                         item.description.toLowerCase().includes(searchTerm);
    
    return matchesCategory && matchesSearch;
  });
  
  // Clear existing items
  menuItemsContainer.innerHTML = '';
  
  // Display filtered items or no results message
  if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
      const itemEl = createMenuItemElement(item);
      menuItemsContainer.appendChild(itemEl);
    });
  } else {
    // Display no results message
    menuItemsContainer.innerHTML = `
      <div class="no-results">
        <div class="no-results-container">
          <div class="no-results-icon">
            <i class="fas fa-arrow-down"></i>
          </div>
          <h3 class="no-results-title">Oops! No yummy foods found in this category.</h3>
          <p class="no-results-text">Try selecting a different category or search for something else!</p>
        </div>
      </div>
    `;
  }
}

// Create menu item card element
function createMenuItemElement(item, isFeatured = false) {
  const itemEl = document.createElement('div');
  itemEl.className = 'menu-card';
  
  // Add featured tag if applicable
  if (isFeatured) {
    const featuredWrapperEl = document.createElement('div');
    featuredWrapperEl.className = 'card-wrapper';
    featuredWrapperEl.style.position = 'relative';
    
    const featuredTagEl = document.createElement('div');
    featuredTagEl.className = 'featured-tag';
    featuredTagEl.innerHTML = `
      <i class="fas fa-sparkles"></i>
      FEATURED
      <i class="fas fa-sparkles"></i>
    `;
    
    featuredWrapperEl.appendChild(featuredTagEl);
    featuredWrapperEl.appendChild(itemEl);
    
    // Return wrapper for featured items
    return featuredWrapperEl;
  }
  
  // Create item content
  let tagHTML = '';
  
  if (item.isBestseller) {
    tagHTML = `
      <div class="card-tag bestseller-tag">
        <i class="fas fa-award"></i> HOT PICK!
      </div>
    `;
  } else if (item.isPopular) {
    tagHTML = `
      <div class="card-tag popular-tag">
        <i class="fas fa-star"></i> POPULAR!
      </div>
    `;
  } else if (item.isSpicy) {
    tagHTML = `
      <div class="card-tag spicy-tag">
        <i class="fas fa-fire"></i> SPICY!
      </div>
    `;
  }
  
  itemEl.innerHTML = `
    <div class="card-image">
      ${tagHTML}
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">${item.name}</h3>
        <div class="card-price">₹${item.price}</div>
      </div>
      <p class="card-description">${item.description}</p>
      <div class="card-footer">
        <span class="food-type ${item.type === 'veg' ? 'veg-type' : 'non-veg-type'}">
          ${item.type === 'veg' ? '🥦 VEG' : '🍗 NON-VEG'}
        </span>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  `;
  
  return itemEl;
}

// Fix for Font Awesome's "fa-sparkles" icon which doesn't exist
// This replaces with material icons or another solution
document.addEventListener('DOMContentLoaded', () => {
  // Replace Font Awesome's non-existent fa-sparkles class with Unicode stars
  document.querySelectorAll('.fa-sparkles').forEach(el => {
    el.classList.remove('fa-sparkles');
    el.classList.remove('fas');
    el.textContent = '✨';
  });
});