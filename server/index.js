const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Cart = require("./models/Cart");
const User = require("./models/User");
const Order = require("./models/Order");

const app = express();

app.use(express.json());
app.use(cors());


//----------- MONGODB CONNECTION--------------//

mongoose.connect("mongodb+srv://admin:admin@cluster0.afrlaow.mongodb.net/Cart?retryWrites=true&w=majority")
.then(() => {

console.log("MongoDB Connected");

})
.catch((err) => {

console.log(err);

});


//--------------- ADD TO CART--------------//

app.post("/cart", async (req, res) => {

    try {

        console.log(req.body);

        const {
            user,
            product,
            name,
            image,
            price,
            quantity
        } = req.body;

        // CHECK EXISTING PRODUCT

        const existingCart = await Cart.findOne({

            user,
            product

        });

        // IF PRODUCT ALREADY EXISTS

        if (existingCart) {

            existingCart.quantity += 1;

            await existingCart.save();

            return res.json({
                message: "Quantity Updated"
            });

        }

        // NEW PRODUCT

        const cartItem = new Cart({

            user,
            product,
            name,
            image,
            price,
            quantity

        });

        await cartItem.save();

        res.status(201).json({
            message: "Product Added"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});


//-------------- GET CART---------------//

app.get("/cart/:userId", async (req, res) => {

    try {

        const cart = await Cart.find({

            user: req.params.userId

        });

        res.json(cart);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//------------- DELETE CART ITEM---------------//

app.delete("/cart/:id", async (req, res) => {

    try {

        await Cart.findByIdAndDelete(
            req.params.id
        );

        res.json({

            message: "Item Deleted"

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//--------------- INCREMENT QUANTITY-----------------//

app.put("/cart/increment/:id", async (req, res) => {

    try {

        const cartItem = await Cart.findById(
            req.params.id
        );

        if (!cartItem) {

            return res.status(404).json({

                message: "Cart Item Not Found"

            });

        }

        cartItem.quantity += 1;

        await cartItem.save();

        res.json({

            message: "Quantity Increased"

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//------------ DECREMENT QUANTITY---------------//

app.put("/cart/decrement/:id", async (req, res) => {

    try {

        const cartItem = await Cart.findById(
            req.params.id
        );

        if (!cartItem) {

            return res.status(404).json({

                message: "Cart Item Not Found"

            });

        }

        // MINIMUM 1

        if (cartItem.quantity > 1) {

            cartItem.quantity -= 1;

            await cartItem.save();

        }

        res.json({

            message: "Quantity Decreased"

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//------------ PLACE ORDER------------//

app.post("/place-order", async (req, res) => {

    try {

        const { user } = req.body;

        // GET USER DETAILS

        const userData = await User.findOne({

            name: user

        });

        if (!userData) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }

        // GET USER CART

        const cartItems = await Cart.find({

            user

        });

        if (cartItems.length === 0) {

            return res.status(400).json({

                message: "Cart is Empty"

            });

        }

        // TOTAL AMOUNT

        const totalAmount = cartItems.reduce(

            (total, item) =>

                total + (item.price * item.quantity),

            0

        );

        // CREATE ORDER

        const newOrder = new Order({

            user: userData.name,

            phone: userData.phone,

            products: cartItems,

            totalAmount

        });

        await newOrder.save();

        // CLEAR CART

        await Cart.deleteMany({

            user

        });

        res.status(201).json({

            message: "Order Placed Successfully"

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//------------- GET ORDERS----------------//

app.get("/orders/:userId", async (req, res) => {

    try {

        const orders = await Order.find({

            user: req.params.userId

        }).sort({

            orderDate: -1

        });

        res.json(orders);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//----------- LOGIN API--------------//

app.post("/login", async (req, res) => {

    try {

        const {

            email,
            password

        } = req.body;

        // CHECK EMAIL

        const user = await User.findOne({

            email

        });

        if (!user) {

            return res.status(400).json({

                message: "User Not Found"

            });

        }

        // CHECK PASSWORD

        if (user.password !== password) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        // LOGIN SUCCESS

        res.status(200).json({

            message: "Login Success",

            user: {

                _id: user._id,

                name: user.name,

                email: user.email,

                phone: user.phone,

                role: user.role

            }

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});


//-----------REGISTER PAGE------------//

app.get("/", (req, res) => {
    res.send("Backend Working");
});

app.post("/register", async (req, res) => {

    try {

        console.log(req.body);

        const {
            name,
            email,
            password,
            phone
        } = req.body;

        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {

            return res.status(400).json({
                message: "Email Already Exists"
            });

        }

        const newUser = new User({

            name,
            email,
            password,
            phone

        });

        await newUser.save();

        res.status(201).json({
            message: "Registration Successful"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});


//---------- ADMIN ALL ORDERS----------//

app.get("/admin/orders", async (req, res) => {

    try {

        const orders = await Order.find()
        .sort({ orderDate: -1 });

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


//------------- SERVER----------------//

app.listen(3001, () => {

    console.log("Server Running on Port 3001");

});