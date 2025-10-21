// src/pages/Menu.js
import React, { useState } from "react";
import "./Menu.css";
import { useCart } from "../CartContext";
 

const Menu = () => {
  const [search, setSearch] = useState("");
   const { cartItems, addToCart, decreaseFromCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);

  const getQuantity = (item, size = null) => {
    const found = cartItems.find(
      (i) => i.name === item.name && i.size === size
    );
    return found ? found.quantity : 0;
  };

  // ✅ Menu structured by categories
  const menuData = [
    {
      category: "Ghiza Mandi's",
      items: [
        {
          name: "Al-Faham Mandi",
          description: "Special Mandi",
          sizes: [
            { label: "Couple", price: 400 },
            { label: "Family", price: 680 },
            { label: "Jumbo", price: 1180 },
          ],
          image: "/images/alfaham.jpg",
        },
        {
          name: "BBQ Mandi",
          description: "Barbeque Mandi",
          sizes: [
            { label: "Couple", price: 400 },
            { label: "Family", price: 680 },
            { label: "Jumbo", price: 1180 },
          ],
          image: "/images/bbq.jpg",
        },
        {
          name: "Tandoori Chicken Mandi",
          description: "Spicy Chicken Mandi",
          sizes: [
            { label: "Couple", price: 400 },
            { label: "Family", price: 680 },
            { label: "Jumbo", price: 1180 },
          ],
          image: "/images/tandoori.jpg",
        },
        {
          name: "Kabab Mandi",
          description: "Kabab with Rice",
          sizes: [
            { label: "Couple", price: 400 },
            { label: "Family", price: 680 },
            { label: "Jumbo", price: 1180 },
          ],
          image: "/images/kabab.jpg",
        },
        {
          name: "Chicken Tikka Mandi",
          description: "Chicken Tikka with Rice",
          sizes: [
            { label: "Couple", price: 450 },
            { label: "Family", price: 680 },
            { label: "Jumbo", price: 1180 },
          ],
          image: "/images/tikka.jpg",
        },
        {
          name: "Chicken Fry Mandi Semi Juicy",
          description: "Fried Chicken with Mandi",
          sizes: [
            { label: "Couple", price: 400 },
            { label: "Family", price: 680 },
            { label: "Jumbo", price: 1180 },
          ],
          image: "/images/fry.jpg",
        },
      ],
    },
    {
      category: "Non Veg Starters",
      items: [
        {
          name: "Chicken 65",
          description: "Crispy Chicken Bites",
          price: 280,
          image: "/images/chicken65.jpg",
        },
        {
          name: "Chilli Chicken",
          description: "Spicy Chicken",
          price: 280,
          image: "/images/chilli.jpg",
        },
        {
          name: "Chicken Manchuria",
          description: "Manchurian Style Chicken",
          price: 280,
          image: "/images/manchuria.jpg",
        },
        {
          name: "Chicken Tikka",
          description: "Grilled Chicken Pieces",
          price: 300,
          image: "/images/tikka-starter.jpg",
        },
        {
          name: "Chicken Lollipop",
          description: "Fried Chicken Drumsticks",
          price: 300,
          image: "/images/lollipop.jpg",
        },
        {
          name: "Chicken Wings",
          description: "Spicy Chicken Wings",
          price: 300,
          image: "/images/wings.jpg",
        },
      ],
    },
    {
      category: "Vegetarian Starters",
      items: [
        {
          name: "Paneer Tikka",
          description: "Grilled Cottage Cheese",
          price: 250,
          image: "/images/paneer-tikka.jpg",
        },
        {
          name: "Veg Manchuria",
          description: "Fried Veg Balls in Sauce",
          price: 220,
          image: "/images/veg-manchuria.jpg",
        },
        {
          name: "Spring Roll",
          description: "Crispy Veg Rolls",
          price: 200,
          image: "/images/spring-roll.jpg",
        },
        {
          name: "Stuffed Mushroom",
          description: "Mushrooms with Veg Filling",
          price: 250,
          image: "/images/stuffed-mushroom.jpg",
        },
      ],
    },
    {
      category: "Biryani",
      items: [
        {
          name: "Chicken Biryani",
          description: "Aromatic rice with chicken",
          price: 320,
          image: "/images/chicken-biryani.jpg",
        },
        {
          name: "Mutton Biryani",
          description: "Flavorful rice with tender mutton",
          price: 380,
          image: "/images/mutton-biryani.jpg",
        },
        {
          name: "Veg Biryani",
          description: "Basmati rice with fresh vegetables",
          price: 280,
          image: "/images/veg-biryani.jpg",
        },
      ],
    },
    {
      category: "Non-Veg Soups",
      items: [
        {
          name: "Chicken Hot and Sour Soup",
          description: "Spicy and tangy soup with chicken and veggies",
          price: 90,
          image: "/images/chicken-hot-sour-soup.jpg",
        },
        {
          name: "Chicken Manchow Soup",
          description: "Spicy Indo-Chinese chicken soup topped with fried noodles",
          price: 90,
          image: "/images/chicken-manchow-soup.jpg",
        },
        {
          name: "Lemon Coriander Chicken Soup",
          description: "Light and refreshing chicken soup with lemon & coriander",
          price: 90,
          image: "/images/lemon-coriander-chicken-soup.jpg",
        },
        {
          name: "Chicken Corn Soup",
          description: "Creamy sweet corn soup with tender chicken",
          price: 80,
          image: "/images/chicken-corn-soup.jpg",
        },
        {
          name: "Chicken Noodles Soup",
          description: "Comforting soup with chicken, noodles, and veggies",
          price: 90,
          image: "/images/chicken-noodles-soup.jpg",
        },
        {
          name: "Mutton Bones Soup",
          description: "Traditional spicy soup made with mutton bones",
          price: 120,
          image: "/images/mutton-bones-soup.jpg",
        },
      ],
    },
  ];

  // ✅ Search filter
  const filteredData = menuData.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>

      {/* Search Bar */}
      <div className="menu-search">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Render Categories */}
      {filteredData.map(
        (category, index) =>
          category.items.length > 0 && (
            <div key={index} className="menu-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="menu-grid">
                {category.items.map((item, idx) => {
                  const qty = getQuantity(item, item.sizes ? null : null);

                  return (
                    <div key={idx} className="menu-card">
                      <div className="menu-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="menu-info">
                        <h3>{item.name}</h3>
                        <p className="desc">{item.description}</p>

                        {item.sizes ? (
                          // Mandi -> Choose size button
                          <button
                            className="add-btn"
                            onClick={() => setSelectedItem(item)}
                          >
                            Choose Size
                          </button>
                        ) : qty > 0 ? (
                          // If already in cart, show quantity controls
                          <div className="qty-controls">
                            <button onClick={() => decreaseFromCart(item)}>
                              ➖
                            </button>
                            <span>{qty}</span>
                            <button onClick={() => addToCart(item, null, item.price)}>
                              ➕
                            </button>
                          </div>
                        ) : (
                          // Add to cart button
                          <button
                            className="add-btn"
                            onClick={() => addToCart(item, null, item.price)}
                          >
                            Add to Cart - ₹{item.price}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
      )}

      {/* Modal for Mandi size selection */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select Size - {selectedItem.name}</h2>
            {selectedItem.sizes.map((size, idx) => {
              const qty = getQuantity(selectedItem, size.label);

              return (
                <div key={idx} className="size-option">
                  <span>
                    {size.label} - ₹{size.price}
                  </span>
                  {qty > 0 ? (
                    <div className="qty-controls">
                      <button
                        onClick={() =>
                          decreaseFromCart(selectedItem, size.label)
                        }
                      >
                        ➖
                      </button>
                      <span>{qty}</span>
                      <button
                        onClick={() =>
                          addToCart(selectedItem, size.label, size.price)
                        }
                      >
                        ➕
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-btn"
                      onClick={() => addToCart(selectedItem, size.label, size.price)}
                    >
                      Add
                    </button>
                  )}
                </div>
              );
            })}
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
