import React, {useEffect} from 'react';
import './App.css';
import Card from "./components/Card";
import {useDispatch, useSelector} from "react-redux";
import {addToCardAction, getMenu, selectMenu, selectOrders} from "./features/menu/menuSlice";
import Basket from "./components/Basket";

function App() {
    const dispatch = useDispatch();
    const menu = useSelector(selectMenu);
    const addToCart = (item) => {
        dispatch(addToCardAction(item))
    }
    useEffect(() => {
        dispatch(getMenu());
    }, [dispatch]);
    return (
        <div className="container-sm pt-5">
            <div className="d-flex gap-5 mb-5">
                {
                    menu.map((item, i) => {
                        return <Card onClick={() => addToCart(item)} key={i} image = {item.image} price = {item.price} title = {item.title}/>
                    })
                }
            </div>
            <Basket/>
        </div>
    );
}

export default App;
