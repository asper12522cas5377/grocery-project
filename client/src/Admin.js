import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

    const [orders, setOrders] = useState([]);

    //-------------- GET ALL ORDERS-------------//

    const getAllOrders = async () => {

        try {

            const response = await axios.get("http://localhost:3001/admin/orders");

            setOrders(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        getAllOrders();

    }, []);


    //------------ TOTAL SALES------------//

    const totalSales = orders.reduce(

        (total, order) =>

            total + order.totalAmount,0
        );

        
    return (

        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Admin Dashboard
            </h1>

            {/* SUMMARY */}

            <div className="row mb-4">

                <div className="col-md-6">

                    <div className="card shadow p-4 text-center">

                        <h3>
                            Total Orders
                        </h3>

                        <h2 className="text-primary">
                            {orders.length}
                        </h2>
                    </div>
                </div>

                <div className="col-md-6">

                    <div className="card shadow p-4 text-center">

                        <h3>
                            Total Sales
                        </h3>

                        <h2 className="text-success">
                            ${totalSales}
                        </h2>
                    </div>
                </div>
            </div>

            {/* TABLE */}

            <div className="table-responsive">

                <table className="table table-bordered table-striped align-middle text-center">

                    <thead className="table-dark">

                        <tr>
                            <th>S.No</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Products</th>
                            <th>Total Amount</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => (

                                <tr key={order._id}>

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {order.user}
                                    </td>

                                    <td>
                                        {order.phone}
                                    </td>

                                    <td>

                                        {
                                            order.products.map((item) => (

                                                <div key={item._id} className="border rounded p-2 mb-2">

                                                    <img src={item.image}
                                                        width="60"
                                                        height="60"
                                                        alt=""
                                                        className="rounded mb-2" />

                                                    <h6>
                                                        {item.name}
                                                    </h6>

                                                    <p className="mb-1">
                                                        Qty :
                                                        {item.quantity}
                                                    </p>

                                                    <p className="mb-0">
                                                        ${item.price}
                                                    </p>

                                                </div>

                                            ))
                                        }

                                    </td>

                                    <td className="fw-bold text-success">
                                        ${order.totalAmount}
                                    </td>

                                    <td>
                                        {
                                            new Date(order.orderDate).toLocaleString()
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Admin;