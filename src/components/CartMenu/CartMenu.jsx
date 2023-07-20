import React from 'react';
import './CartMenu.css'
import {calcTotalPrice} from "../../utils";
import Button from "../Button/Button";
const CartMenu = ({games, onClick}) => {
    return (
        <div className='cart-menu'>
            <div className="cart-menu__games-list">
                { games.length > 0 ?  games.map(game => <div>{game.title}</div>) : 'Cart empty'}
            </div>
            {games.length > 0 ?
                <div className='cart-menu__arrange'>
                    <div className='cart-menu__total'>
                        <span>Total:</span>
                        <span>{calcTotalPrice(games)}  UAH.</span>
                    </div>
                    <Button type='primary' size='m' onClick={onClick} >
                        Place an order
                    </Button>
                </div>

                : null
            }
        </div>
    );
};

export default CartMenu;