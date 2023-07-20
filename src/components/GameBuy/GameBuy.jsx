import React from 'react';
import './GameBuy.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer";

const GameBuy = ({game}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemsInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }

    }
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} USD.</span>
            <Button type={isItemsInCart ? 'secondary' : 'primary'}
                onClick={handleClick}
            >
                {isItemsInCart ? 'Delete with Cart' : 'In Cart'}
            </Button>
        </div>
    );
};

export default GameBuy;