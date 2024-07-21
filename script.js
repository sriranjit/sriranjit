document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
  
    // Dummy data for products
    const products = [
      {
        id: 1,
        title: 'Product 1',
        price: 19.99,
        image: 'product1.jpg'
      },
      {
        id: 2,
        title: 'Product 2',
        price: 29.99,
        image: 'product2.jpg'
      },
      {
        id: 3,
        title: 'Product 3',
        price: 24.99,
        image: 'product3.jpg'
      },
      {
        id: 4,
        title: 'Product 4',
        price: 39.99,
        image: 'product4.jpg'
      },
      {
        id: 5,
        title: 'Product 5',
        price: 34.99,
        image: 'product5.jpg'
      },
      {
        id: 6,
        title: 'Product 6',
        price: 49.99,
        image: 'product6.jpg'
      }
    ];
  
    // Function to display products
    function displayProducts() {
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'fadeIn');
        
        const image = document.createElement('img');
        image.src = `images/${product.image}`;
        image.alt = product.title;
  
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
  
        const title = document.createElement('h3');
        title.classList.add('product-title');
        title.textContent = product.title;
  
        const price = document.createElement('p');
        price.classList.add('product-price');
        price.textContent = `$${product.price.toFixed(2)}`;
  
        productInfo.appendChild(title);
        productInfo.appendChild(price);
  
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
  
        productGrid.appendChild(productCard);
      });
    }
  
    // Initialize page content
    displayProducts();
  });
  