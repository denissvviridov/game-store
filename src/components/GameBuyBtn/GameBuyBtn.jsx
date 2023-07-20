import React from 'react';
import './GameBuyBtn.css'
const GameBuyBtn = ({game}) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} USD.</span>

        </div>
    );
};

export default GameBuyBtn;