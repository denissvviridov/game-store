import React, {useState} from 'react';
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import {calcTotalPrice} from "../../utils";

const CartBlock = () => {
    const [visibleCartMenu, setVisibleCartMenu] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    const handleVisibCartMenu = () => {
        setVisibleCartMenu(current => !current)
    }

    return (
        <div className='cart-block' onClick={handleVisibCartMenu}>
            <BiCartAlt size={25} className='cart-block__icon'/>
            <span className='cart-block__total-price'>{totalPrice} UAH.</span>

            {visibleCartMenu ? <CartMenu games={items} /> : false}
        </div>
    );
};

export default CartBlock;