import d1 from "./images/veg/Cauliflower-1.png";
import d2 from "./images/veg/Carrot-1.png";
import d3 from "./images/veg/coriander-leaves-1.png";
import d4 from "./images/veg/onion-1.png";
import d5 from "./images/veg/potato-1.png";
import d6 from "./images/veg/Zucchini-Yellow-1.png";
import d7 from "./images/veg/Snibs-Peppers-2.png";
import d8 from "./images/veg/Sweet-Corn-2.png";
import d9 from "./images/veg/Tomato-1.png";
import d10 from "./images/veg/Cucumber-1.png";
import d11 from "./images/veg/Lettuce-Romaine-1.png";
import d12 from "./images/veg/Chilli-1.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Vegetables = () => {

const navigate = useNavigate();

//------------ GET USER DATA-------------//

const userData = JSON.parse(

localStorage.getItem("user"));

const userId = userData?.name;


//------------- ADD TO CART-------------//

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
            {/* Product Page */}
            <div class="container py-5">
                <div class="all mb-4">
                    <h1>Vegetables Products</h1>
                </div>

                <div class="row g-4">
                    {/* <!-- Product 1 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <div class="discount">20% OFF</div>
                            <img src={d1} class="product-img"></img>
                            <h4 class="mt-3">Cauliflower</h4>
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
                            <img src={d2} class="product-img"></img>
                            <h4 class="mt-3">Carrot</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$6.00</span>
                                <span class="old-price">$7.00</span>
                            </div>
                            <button className="cart-btn" onClick={() =>
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
                            <img src={d3} class="product-img"></img>
                            <h4 class="mt-3">Coriander Leaves</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$3.00</span>
                                <span class="old-price">$5.00</span>
                            </div>
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "108",
                                    name: "Coriander Leaves",
                                    image: d3,
                                    price: 3
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 4 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d4} class="product-img"></img>
                            <h4 class="mt-3">onion</h4>
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

                    {/* <!-- Product 5 --> */}
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
                                    id: "121",
                                    name: "Sweet Potato",
                                    image: d5,
                                    price: 11
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 6 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d6} class="product-img"></img>
                            <h4 class="mt-3">Zucchini Yellow</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$6.00</span>
                                <span class="old-price">$8.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "124",
                                    name: "Zucchini Yellow",
                                    image: d6,
                                    price: 6
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 7 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d7} class="product-img"></img>
                            <h4 class="mt-3">Snibs Peppers</h4>
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
                                    id: "118",
                                    name: "Snibs Peppers",
                                    image: d7,
                                    price: 9
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 8 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d8} class="product-img"></img>
                            <h4 class="mt-3">Sweet Corn</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$15.00</span>
                                <span class="old-price">$16.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "120",
                                    name: "Sweet Corn",
                                    image: d8,
                                    price: 15
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 9 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d9} class="product-img"></img>
                            <h4 class="mt-3">Tomato</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$5.00</span>
                                <span class="old-price">$6.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "123",
                                    name: "Tomato",
                                    image: d9,
                                    price: 5
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 10 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d10} class="product-img"></img>
                            <h4 class="mt-3">Cucumber</h4>
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
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "112",
                                    name: "Cucumber",
                                    image: d10,
                                    price: 8
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 11 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d11} class="product-img"></img>
                            <h4 class="mt-3">Lettuce Romaine</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$8.00</span>
                                <span class="old-price">$10.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "114",
                                    name: "Lettuce Romaine",
                                    image: d11,
                                    price: 8
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 12 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d12} class="product-img"></img>
                            <h4 class="mt-3">Chilli</h4>
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
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "110",
                                    name: "Chilli",
                                    image: d12,
                                    price: 12
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>


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
export default Vegetables;