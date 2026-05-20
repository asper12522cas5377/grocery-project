import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {

    const [cart, setCart] = useState([]);

    const navigate = useNavigate();

   
    //------------GET USER-----------//
  

    const userData = JSON.parse(

    localStorage.getItem("user"));

    const userId = userData?.name;

    
    //---------- GET CART----------//

    const getCart = async () => {

        try {

            // LOGIN CHECK
            if (!userId) {

                alert("Please Login");

                navigate("/login");

                return;
            }

            const response = await axios.get(`http://localhost:3001/cart/${userId}`);

            setCart(response.data);

        } catch (error) {

            console.log(error);
        }
    };

   
    //--------------- INCREMENT-------------------//

    const incrementQty = async (id) => {

        try {

            await axios.put(`http://localhost:3001/cart/increment/${id}`);

            getCart();

        } catch (error) {

            console.log(error);
        }
    };

  
    //---------------- DECREMENT----------------//

    const decrementQty = async (id) => {

        try {

            await axios.put(`http://localhost:3001/cart/decrement/${id}`);

            getCart();

        } catch (error) {

            console.log(error);
        }
    };


    //--------------- DELETE ITEM----------------//

    const deleteItem = async (id) => {

        try {

            await axios.delete( `http://localhost:3001/cart/${id}`);

            alert("Item Deleted");

            getCart();

        } catch (error) {

            console.log(error);
        }
    };

    
    //-------------- PLACE ORDER---------------//

    const placeOrder = async () => {

        try {

            const response = await axios.post("http://localhost:3001/place-order",{user: userId});

            alert(response.data.message);

            setCart([]);

            navigate("/orders");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message);
        }
    };


    //-------------- PAGE LOAD-----------------//

    useEffect(() => {

        getCart();

    }, []);

   
    //-------------- GRAND TOTAL---------------//

    const grandTotal = cart.reduce(

        (total, item) =>

        total + (item.price * item.quantity),0
    );


    return (

        <div className="container mt-5">

            <h2 className="mb-4 text-center">
                My Cart
            </h2>

            {
                cart.length === 0 ? (

                    <h4 className="text-center text-danger">
                        Cart is Empty
                    </h4>

                ) : (

                    <>
                        <table className="table table-bordered text-center align-middle">

                            <thead className="table-dark">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cart.map((item) => (

                                        <tr key={item._id}>

                                            <td>
                                                <img src={item.image} width="80" height="80" alt="" />
                                            </td>

                                            <td>
                                                {item.name}
                                            </td>

                                            <td>
                                                ${item.price}
                                            </td>

                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                    onClick={() => decrementQty(item._id)}> 
                                                    -
                                                </button>

                                                <span className="mx-3 fw-bold">

                                                    {item.quantity}

                                                </span>

                                                <button className="btn btn-success btn-sm"
                                                    onClick={() => incrementQty(item._id)}>
                                                    +
                                                </button>
                                            </td>

                                            <td>
                                                $
                                                {item.price * item.quantity}
                                            </td>

                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                    onClick={() => deleteItem(item._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        {/* GRAND TOTAL */}

                        <div className="d-flex justify-content-between align-items-center mt-4">

                            <h4>
                                Grand Total :

                                <span className="text-success ms-2">

                                    ${grandTotal}

                                </span>
                            </h4>

                            <button className="btn btn-success px-4 py-2"
                                onClick={placeOrder}>
                                Place Order
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    );
}
export default Cart;