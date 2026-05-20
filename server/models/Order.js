const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    products: [
        {
            product: String,

            name: String,

            image: String,

            price: Number,

            quantity: Number
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    orderDate: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Order",orderSchema);