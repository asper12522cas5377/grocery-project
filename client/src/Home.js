import a1 from "./images/banner-1.png";
import a2 from "./images/banner-2.png";
import a3 from "./images/banner-6.png";
import a4 from "./images/banner-3.png";
import a5 from "./images/banner-4.png";
import a6 from "./images/banner-5.png";


import b1 from "./images/cat-1.png";
import b2 from "./images/cat-2.png";
import b3 from "./images/cat-3.png";
import b4 from "./images/cat-4.png";
import b5 from "./images/cat-5.png";
import b6 from "./images/cat-6.png";
import b7 from "./images/cat-7.png";


import c1 from "./images/fruit/apple-1.png";
import c2 from "./images/fruit/banana-1.png";
import c3 from "./images/fruit/Coconut-1.png";
import c4 from "./images/fruit/Mango-1.png";
import c5 from "./images/fruit/Orange-1.png";
import c6 from "./images/fruit/Strawberry-1.png";
import c7 from "./images/fruit/Watermelon-1.png";


import d1 from "./images/veg/Carrot-1.png";
import d2 from "./images/veg/Cauliflower-1.png";
import d3 from "./images/veg/coriander-leaves-1.png";
import d4 from "./images/veg/onion-1.png";
import d5 from "./images/veg/potato-1.png";
import d6 from "./images/veg/Zucchini-Yellow-1.png";


import e1 from "./images/blog-1.png";
import e2 from "./images/blog-2.png";
import e3 from "./images/blog-3.png";


import f1 from "./images/delivery-truck.png";
import f2 from "./images/loan.png";
import f3 from "./images/credit-card.png";
import f4 from "./images/customer-service.png";


import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

//------------ GET USER DATA-------------//

const userData = JSON.parse(

localStorage.getItem("user"));

const userId = userData?.name;

//--------- ADD TO CART---------//

const addToCart = async (product) => {

    try {

        // CHECK LOGIN
        if (!userId) {

          alert("Please Login First");

          navigate("/login");

          return;

        }

        const cartData = {

          user: userId,

          product: product.id,

          name: product.name,

          image: product.image,

          price: product.price,

          quantity: 1

        };

        const response = await axios.post("http://localhost:3001/cart",cartData);

        alert(response.data.message);

        navigate("/cart");

    } catch (error) {

      console.log(error);

      alert("Add To Cart Failed");
    }
};


  return (
    <div>

      {/*Home page Carousel*/}
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={a1} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={a2} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={a6} class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {/* Categorys list */}
      <div class="category-list">
        <div class="item">
          <div>
            <img src={b1} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">Cauliflower</span>
          </div>
        </div>

        <div class="item">
          <div>
            <img src={b2} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">Apple</span>
          </div>
        </div>

        <div class="item">
          <div>
            <img src={b3} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">Coconut</span>
          </div>
        </div>

        <div class="item">
          <div>
            <img src={b4} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">coriander-Leaves</span>
          </div>
        </div>

        <div class="item">
          <div>
            <img src={b5} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">Banana</span>
          </div>
        </div>

        <div class="item">
          <div>
            <img src={b6} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">Sweet-Corn</span>
          </div>
        </div>

        <div class="item">
          <div>
            <img src={b7} class="img-fluid rounded-circle" alt=""></img>
            <span class="d-block category-title">Nutes</span>
          </div>
        </div>
      </div>


      {/* offer section */}
      <div class="offer-section mt-50">
        <div class="container">
          <img src={a4} class="w-100" alt=""></img>
        </div>
      </div>


      {/* Product Page */}
      <div class="container py-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1>Best Selling</h1>
          <div class="d-flex gap-4" id="best">
            <a href="/shop" class="text-col">Lastest</a>
            <a href="/shop" class="link-col">Featured</a>
            <a href="/shop" class="link-col">Special</a>
          </div>
        </div>

        <div class="row g-4">
          {/* <!-- Product 1 --> */}
          <div class="col-lg-3 col-md-6">
            <div class="product-card">
              <img src={d2} class="product-img"></img>
              <h4 class="mt-3">Potato</h4>
              <div class="stars">
                <p><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i></p>
              </div>
              <div class="mt-2">
                <span class="price">$12.00</span>
                <span class="old-price">$15.00</span>
              </div>
              <button className="cart-btn mt-3" onClick={() =>
                addToCart({
                  id: "101",
                  name: "Cauliflower",
                  image: d2,
                  price: 12
                })}>Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product 2 --> */}
          <div class="col-lg-3 col-md-6">
            <div class="product-card">
              <img src={d5} class="product-img"></img>
              <h4 class="mt-3">Potato</h4>
              <div class="stars">
                <p><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i></p>
              </div>
              <div class="mt-2">
                <span class="price">$8.00</span>
                <span class="old-price">$9.00</span>
              </div>
              <button className="cart-btn mt-3" onClick={() =>
                addToCart({
                  id: "102",
                  name: "Potato",
                  image: d5,
                  price: 8
                })}>Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product 3 --> */}
          <div class="col-lg-3 col-md-6">
            <div class="product-card">
              <img src={d4} class="product-img"></img>
              <h4 class="mt-3">Onion</h4>
              <div class="stars">
                <p><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i></p>
              </div>
              <div class="mt-2">
                <span class="price">$9.00</span>
                <span class="old-price">$10.00</span>
              </div>
              <button className="cart-btn mt-3" onClick={() =>
                addToCart({
                  id: "103",
                  name: "Onion",
                  image: d4,
                  price: 9
                })}>Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product 4 --> */}
          <div class="col-lg-3 col-md-6">
            <div class="product-card">
              <img src={c4} class="product-img"></img>
              <h4 class="mt-3">Mango</h4>
              <div class="stars">
                <p><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i></p>
              </div>
              <div class="mt-2">
                <span class="price">$15.00</span>
                <span class="old-price">$20.00</span>
              </div>
              <button className="cart-btn mt-3" onClick={() =>
                addToCart({
                  id: "104",
                  name: "Mango",
                  image: c4,
                  price: 15
                })}>Add to Cart
              </button>
            </div>
          </div>


          <div class="container py-5">
            <div class="row g-4">
              {/* <!-- Product 1 --> */}
              <div class="col-lg-3 col-md-6">
                <div class="product-card">
                  <img src={c7} class="product-img"></img>
                  <h3 class="mt-4">Watermelon</h3>
                  <div class="stars">
                    <p><i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i></p>
                  </div>
                  <div>
                    <span class="price">$4.00</span>
                    <span class="old-price">$6.00</span>
                  </div>
                  <button className="cart-btn mt-3" onClick={() =>
                    addToCart({
                      id: "105",
                      name: "Watermelon",
                      image: c7,
                      price: 4
                    })}>Add to Cart
                  </button>
                </div>
              </div>

              {/* <!-- Product 2 --> */}
              <div class="col-lg-3 col-md-6">
                <div class="product-card">
                  <img src={d1} class="product-img"></img>
                  <h3 class="mt-4">Carrot</h3>
                  <div class="stars">
                    <p><i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i></p>
                  </div>
                  <div>
                    <span class="price">$6.00</span>
                    <span class="old-price">$7.00</span>
                  </div>
                  <button className="cart-btn mt-3" onClick={() =>
                    addToCart({
                      id: "106",
                      name: "Carrot",
                      image: d1,
                      price: 6
                    })}>Add to Cart
                  </button>
                </div>
              </div>

              {/* <!-- Product 3 --> */}
              <div class="col-lg-3 col-md-6">
                <div class="product-card">
                  <img src={c2} class="product-img"></img>
                  <h3 class="mt-4">Banana</h3>
                  <div class="stars">
                    <p><i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i></p>
                  </div>
                  <div>
                    <span class="price">$8.00</span>
                    <span class="old-price">$9.00</span>
                  </div>
                  <button className="cart-btn mt-3" onClick={() =>
                    addToCart({
                      id: "107",
                      name: "Banana",
                      image: c2,
                      price: 8
                    })}>Add to Cart
                  </button>
                </div>
              </div>

              {/* <!-- Product 4 --> */}
              <div class="col-lg-3 col-md-6">
                <div class="product-card">
                  <img src={d3} class="product-img"></img>
                  <h3 class="mt-4">Coriander Leaves</h3>
                  <div class="stars">
                    <p><i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i></p>
                  </div>
                  <div>
                    <span class="price">$3.00</span>
                    <span class="old-price">$5.00</span>
                  </div>
                  <button className="cart-btn mt-3" onClick={() =>
                    addToCart({
                      id: "108",
                      name: "Coriander Leaves",
                      image: d3,
                      price: 3
                    })}>Add to Cart
                  </button>
                </div>
              </div>

              {/* <!-- View All Button --> */}
              <div class="text-center">
                <a href="/shop" class="views-btn">View All</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*Banner offer*/}
      <div class="section-offer mt-100">
        <div class="container">
          <div class="section-container" >
            <div class="offer-info">
              <p class="offer-dis">EXTRA -10% OFF WITH CODE: QUEEN001</p>
              <p class="offer-title">Save 20% Off On All GroceryBasket Foods</p>
              <a href="/shop" className="shop-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>


      {/* New Arrivels */}
      <section class="products-section">
        <h1 class="section-title">New Arrivals</h1>
        <div class="products-container">

          {/* <!-- Product 1 --> */}
          <div class="product-card">
            <img src={c5} alt="Orange" class="product-image"></img>
            <h3 class="product-name">Orange</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="price">
              <span class="new-price">$9.00</span>
              <span class="old-price">$10.00</span>
            </div>
            <button className="cart-btn mt-3" onClick={() =>
              addToCart({
                id: "101",
                name: "Orange",
                image: c5,
                price: 9
              })}>Add to Cart
            </button>
          </div>

          {/* <!-- Product 2 --> */}
          <div class="product-card">
            <img src={c6} alt="Strawberry" class="product-image"></img>
            <h3 class="product-name">Strawberry</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="price">
              <span class="new-price">$10.00</span>
              <span class="old-price">$12.00</span>
            </div>
            <button className="cart-btn mt-3" onClick={() =>
              addToCart({
                id: "101",
                name: "Strawberry",
                image: c6,
                price: 10
              })}>Add to Cart
            </button>
          </div>

          {/* <!-- Product 3 --> */}
          <div class="product-card">
            <img src={c1} alt="Apple" class="product-image"></img>
            <h3 class="product-name">Apple</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="price">
              <span class="new-price">$12.00</span>
              <span class="old-price">$15.00</span>
            </div>
            <button className="cart-btn mt-3" onClick={() =>
              addToCart({
                id: "109",
                name: "Apple",
                image: c1,
                price: 12
              })}>Add to Cart
            </button>
          </div>

          {/* <!-- Product 4 --> */}
          <div class="product-card">
            <img src={d6} alt="Zucchini" class="product-image"></img>
            <h3 class="product-name">Zucchini Yellow</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="price">
              <span class="new-price">$12.00</span>
              <span class="old-price">$15.00</span>
            </div>
            <button className="cart-btn mt-3" onClick={() =>
              addToCart({
                id: "124",
                name: "Zucchini Yellow",
                image: d6,
                price: 12
              })}>Add to Cart
            </button>
          </div>

          {/* <!-- View All Button --> */}
          <div class="text-center">
            <a href="/shop" class="view-btn">View All</a>
          </div>
        </div>
      </section>


      {/* Blog  Page */}
      <section class="blog-section">
        <div class="container">
          <h1 class="section-title">Latest Blog</h1>
          <div class="row g-4">

            {/* <!-- Blog 1 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e1} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>

            {/* <!-- Blog 2 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e2} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Fresh organic vegetables available for healthy lifestyle.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>

            {/* <!-- Blog 3 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e3} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Green vegetables are very important for daily health.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free shipping */}
      <section class="service-section">
        <div class="container">
          <div class="row">

            {/* <!-- Item 1 --> */}
            <div class="col-lg-3 col-md-6">
              <div class="service-box">
                <div class="service-icon">
                  <img src={f1} alt=""></img>
                </div>
                <div class="service-content">
                  <h3>Free Shipping</h3>
                  <p>On orders over $50.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item 2 --> */}
            <div class="col-lg-3 col-md-6">
              <div class="service-box">
                <div class="service-icon">
                  <img src={f2} alt=""></img>
                </div>
                <div class="service-content">
                  <h3>Money Back</h3>
                  <p>Money back in 7 days.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item 3 --> */}
            <div class="col-lg-3 col-md-6">
              <div class="service-box">
                <div class="service-icon">
                  <img src={f3} alt=""></img>
                </div>
                <div class="service-content">
                  <h3>Secure Checkout</h3>
                  <p>100% Payment Secure.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item 4 --> */}
            <div class="col-lg-3 col-md-6">
              <div class="service-box">
                <div class="service-icon">
                  <img src={f4} alt=""></img>
                </div>
                <div class="service-content">
                  <h3>Online Support</h3>
                  <p>Ensure the product quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Footer Page */}
      <footer class="footer">
        <div class="footer-container">

          {/* <!-- Left Section --> */}
          <div class="footer-col">
            <div class="footer-logo">GROCERYBASKET</div>
            <p class="footer-text">
              Lorem ipsum, or lipsum as it is sometimes known,
              is dummy text used in laying out print,
              graphic or web designs the passage.
            </p>
            <h3 class="footer-title">Newsletter</h3>
            <div class="newsletter">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* <!-- My Account --> */}
          <div class="footer-col">
            <h3 class="footer-title">My Account</h3>
            <ul class="footer-links">
              <li><a href="#">Orders</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Manage Account</a></li>
            </ul>
          </div>

          {/* <!-- Information --> */}
          <div class="footer-col">
            <h3 class="footer-title">Information</h3>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* <!-- Contact --> */}
          <div class="footer-col">
            <h3 class="footer-title">Contact</h3>
            <div class="contact-item">
              <p><i class="fa-solid fa-location-dot"></i>
                Ranganathan Street,<br></br>
                T.Nagar, Chennai.
              </p>
            </div>
            <div class="contact-item">
              <p><i class="fa-solid fa-phone"></i>91+1234567890</p>
            </div>
            <div class="contact-item">
              <p><i class="fa-regular fa-envelope"></i>grocery@gmail.com</p>
            </div>
            <div class="social-icons">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home;