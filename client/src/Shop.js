import c1 from "./images/fruit/apple-1.png";
import c2 from "./images/fruit/banana-1.png";
import c3 from "./images/fruit/Coconut-1.png";
import c4 from "./images/fruit/Mango-1.png";
import c5 from "./images/fruit/Orange-1.png";
import c6 from "./images/fruit/Strawberry-1.png";
import c7 from "./images/fruit/Watermelon-1.png";
import c8 from "./images/fruit/Sweet-Potato-1.png";
import c9 from "./images/fruit/Papaya-1.png";
import c10 from "./images/fruit/Grapes-1.png";
import c11 from "./images/fruit/Muskmelon-1.png";
import c12 from "./images/fruit/Tender-Coconut-1.png";


import d1 from "./images/veg/Carrot-1.png";
import d2 from "./images/veg/Cauliflower-1.png";
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

const Shop = () => {

const navigate = useNavigate();

//------------ GET USER DATA-------------//

const userData = JSON.parse(

localStorage.getItem("user"));

const userId = userData?.name;


//---------------- ADD TO CART---------------//

const addToCart = async (product) => {

    try {

        // LOGIN CHECK

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

        console.log(error.response?.data || error.message);

        alert("Addtocart Failed");
    }
};


    return (
        <div>
            {/* Product Page */}
            <div class="container py-5">
                <div class="all mb-4">
                    <h1>All Products</h1>
                </div>

                <div class="row g-4">
                    {/* <!-- Product 1 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <div class="discount">20% OFF</div>
                            <img src={d2} class="product-img"></img>
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
                                })
                            }>Add to Cart
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
                                })
                            }>Add to Cart
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
                                })
                            }>Add to Cart
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
                                })
                            }>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 5 --> */}
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
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "105",
                                    name: "Watermelon",
                                    image: c7,
                                    price: 4
                                })
                            }>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 6 --> */}
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

                    {/* <!-- Product 7 --> */}
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
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "107",
                                    name: "Banana",
                                    image: c2,
                                    price: 8
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 8 --> */}
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

                    {/* <!-- Product 9 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c1} class="product-img"></img>
                            <h3 class="mt-4">Apple</h3>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div>
                                <span class="price">$12.00</span>
                                <span class="old-price">$15.00</span>
                            </div>
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "109",
                                    name: "Apple",
                                    image: c1,
                                    price: 12
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 10 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d12} class="product-img"></img>
                            <h3 class="mt-4">Chilli</h3>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div>
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

                    {/* <!-- Product 11 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c3} class="product-img"></img>
                            <h3 class="mt-4">Coconut</h3>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div>
                                <span class="price">$14.00</span>
                                <span class="old-price">$15.00</span>
                            </div>
                            <button className="cart-btn" onClick={() =>
                                addToCart({
                                    id: "111",
                                    name: "Coconut",
                                    image: c3,
                                    price: 14
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 12 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={d10} class="product-img"></img>
                            <h3 class="mt-4">Cucumber</h3>
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

                    {/* <!-- Product 13 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c10} class="product-img"></img>
                            <h4 class="mt-3">Grapes</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$21.00</span>
                                <span class="old-price">$24.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "113",
                                    name: "Grapes",
                                    image: c10,
                                    price: 21
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 14 --> */}
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

                    {/* <!-- Product 15 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c11} class="product-img"></img>
                            <h4 class="mt-3">Muskmelon</h4>
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
                                    id: "115",
                                    name: "Muskmelon",
                                    image: c11,
                                    price: 12
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 16 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c5} class="product-img"></img>
                            <h4 class="mt-3">Orange</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$16.00</span>
                                <span class="old-price">$18.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "116",
                                    name: "Orange",
                                    image: c5,
                                    price: 16
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 17 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c9} class="product-img"></img>
                            <h4 class="mt-3">Papaya</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$13.00</span>
                                <span class="old-price">$15.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "117",
                                    name: "Papaya",
                                    image: c9,
                                    price: 13
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 18 --> */}
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

                    {/* <!-- Product 19 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c6} class="product-img"></img>
                            <h4 class="mt-3">Strawberry</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$18.00</span>
                                <span class="old-price">$19.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "119",
                                    name: "Strawberry",
                                    image: c6,
                                    price: 18
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 20 --> */}
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

                    {/* <!-- Product 21 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c8} class="product-img"></img>
                            <h4 class="mt-3">Sweet Potato</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$11.00</span>
                                <span class="old-price">$13.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "121",
                                    name: "Sweet Potato",
                                    image: c8,
                                    price: 11
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 22 --> */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src={c12} class="product-img"></img>
                            <h4 class="mt-3">Tender Coconut</h4>
                            <div class="stars">
                                <p><i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i></p>
                            </div>
                            <div class="mt-2">
                                <span class="price">$13.00</span>
                                <span class="old-price">$15.00</span>
                            </div>
                            <button className="cart-btn mt-3" onClick={() =>
                                addToCart({
                                    id: "122",
                                    name: "Tender Coconut",
                                    image: c12,
                                    price: 13
                                })}>Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* <!-- Product 23 --> */}
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

                    {/* <!-- Product 24 --> */}
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
export default Shop;