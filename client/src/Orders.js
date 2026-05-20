import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Orders() {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    //------------ GET USER DATA-------------//

    const userData = JSON.parse(

    localStorage.getItem("user"));

    const userId = userData?.name;

    const phone = userData?.phone;

    //---------------- GET ORDERS------------//

    const getOrders = async () => {

        try {

            // LOGIN CHECK

            if (!userId) {

                alert("Please Login");

                navigate("/login");

                return;
            }

            const response = await axios.get(`http://localhost:3001/orders/${userId}`);

            setOrders(response.data);

        } catch (error) {

            console.log(error);
        }
    };

  
    //-------------- PAGE LOAD--------------//

    useEffect(() => {

        getOrders();

    }, []);


    return (

        <div className="container mt-5">

            <h2 className="text-center mb-5">
                My Orders
            </h2>

            {
                orders.length === 0 ? (

                    <h4 className="text-center text-danger">
                        No Orders Found
                    </h4>

                ) : (

                    orders.map((order) => (

                        <div className="card shadow p-4 mb-5"
                            key={order._id} >

                            {/* ORDER DETAILS */}

                            <div className="mb-3">

                                <h5 className="mb-2">

                                    Order Date :

                                    <span className="text-success ms-2">

                                        {
                                            new Date(order.orderDate).toLocaleString()
                                        }

                                    </span>
                                </h5>

                                <h5 className="mb-2">

                                    Username :

                                    <span className="text-primary ms-2">

                                        {userId}

                                    </span>
                                </h5>

                                <h5 className="mb-2">

                                    Phone Number :

                                    <span className="text-primary ms-2">

                                        {phone}

                                    </span>
                                </h5>

                                <h5>

                                    Total Amount :

                                    <span className="text-danger ms-2">

                                        ${order.totalAmount}

                                    </span>
                                </h5>
                            </div>

                            <hr />

                            {/* PRODUCTS */}

                            {
                                order.products.map((item) => (

                                    <div className="d-flex align-items-center border rounded p-3 mb-3"
                                        key={item._id} >

                                        {/* IMAGE */}

                                        <img src={item.image}
                                            width="100"
                                            height="100"
                                            alt=""
                                            className="rounded" />

                                        {/* PRODUCT DETAILS */}

                                        <div className="ms-4">

                                            <h5>
                                                {item.name}
                                            </h5>

                                            <p className="mb-1">

                                                Price :
                                                <span className="fw-bold ms-2">

                                                    ${item.price}

                                                </span>
                                            </p>

                                            <p className="mb-1">

                                                Quantity :
                                                <span className="fw-bold ms-2">

                                                    {item.quantity}

                                                </span>
                                            </p>

                                            <p className="mb-0">

                                                Total :
                                                <span className="fw-bold text-success ms-2">
                                                    $
                                                    {
                                                        item.price *
                                                        item.quantity
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                )
            }
        </div>
    );
}
export default Orders;