import React from 'react';
import {useSelector} from "react-redux";
import {selectOrders} from "../features/menu/menuSlice";

const Basket = () => {
    const orders = useSelector(selectOrders);
    return (
        <div className="card w-25 m-auto p-3">
            {
                orders.map((order, i) => {
                    return (
                        <div key={i} className="mb-2 d-flex justify-content-between">
                            <span>{order.title} {order.amount}</span>
                            <b>{order.price * order.amount}</b>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Basket;