let x = document.getElementById("menu");
      let menuBtn = document.querySelector(".menuBtn");
      let closeBtn = document.querySelector(".closeBtn");

      function openmenu() {
        x.style.display = "block";
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
      }
      function closemenu() {
        x.style.display = "none";
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
      }
      const menu = document.getElementById("hiddenmenu");
      function openmenu(){
          menu.classList.toggle("navwrappershow")
      }

      function showTab(tabName) {
        document
          .querySelectorAll(".tab-content")
          .forEach((tab) => tab.classList.remove("active"));
        document
          .querySelectorAll(".tab-btn")
          .forEach((btn) => btn.classList.remove("active"));
        document.getElementById(tabName).classList.add("active");
        event.target.classList.add("active");
      }

      function showModal() {
        document.querySelector(".popup").classList.add("popupactive");
      }
      function closeModal() {
        document.querySelector(".popup").classList.remove("popupactive");
      }

      const products = [
        {
          title: "Classic White Tee",
          image: "https://plus.unsplash.com/premium_photo-1681711647066-ef84575c0d95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
          description: "Comfortable cotton tee for everyday wear.",
          price: "$19.99",
          rating: "★★★★☆",
          link: "product-details.html"
        },
        {
          title: "Slim Fit Jeans",
          image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
          description: "Stylish and durable denim jeans.",
          price: "$39.99",
          rating: "★★★★★",
          link: "product-details.html"
        },
        {
          title: "Sporty Sneakers",
          image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
          description: "Perfect for your daily jog or gym session.",
          price: "$49.99",
          rating: "★★★★☆",
          link: "product-details.html"
        },
        {
          title: "Leather Jacket",
          image: "https://images.unsplash.com/photo-1599360889420-da1afaba9edc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
          description: "Trendy and warm jacket for winter season.",
          price: "$89.99",
          rating: "★★★★★",
          link: "product-details.html"
        },
        {
          title: "Stylish Sunglasses",
          image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
          description: "UV-protected glasses for a sunny day.",
          price: "$24.99",
          rating: "★★★☆☆",
          link: "product-details.html"
        },
        {
          title: "Cotton Hoodie",
          image: "https://plus.unsplash.com/premium_photo-1681711647035-58a0cbb87296?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
          description: "Casual and soft hoodie for cool evenings.",
          price: "$34.99",
          rating: "★★★★☆",
          link: "product-details.html"
        },
        {
          title: "Casual Cap",
          image: "https://images.unsplash.com/photo-1552879948-16c32e175ae5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
          description: "Adjustable cap for a relaxed look.",
          price: "$14.99",
          rating: "★★★☆☆",
          link: "product-details.html"
        },
        {
          title: "Classic Wristwatch",
          image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Timeless design with leather straps.",
          price: "$59.99",
          rating: "★★★★☆",
          link: "product-details.html"
        },
        {
          title: "Backpack",
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww",
          description: "Spacious and durable for everyday use.",
          price: "$44.99",
          rating: "★★★★☆",
          link: "product-details.html"
        },
        {
          title: "Digital Headphones",
          image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          description: "Noise-canceling with excellent sound quality.",
          price: "$69.99",
          rating: "★★★★★",
          link: "product-details.html"
        }
      ];
      console.log(products);

      const productSection = document.getElementById("product-section");

      const productCards = products.map(function(product) {
        console.log(product);
      return `
        <div class="product-card">
          <a href="${product.link}">
            <div class="img-wrapper">
              <img src="${product.image}" alt="${product.title}" />
            </div>
          </a>
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <div class="price-rating">
            <span class="price">${product.price}</span>
            <div class="stars">${product.rating}</div>
          </div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `}).join('');
    
      productSection.innerHTML = productCards;
      