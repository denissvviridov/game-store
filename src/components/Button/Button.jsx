import React from 'react';
import classNames from "classnames";
import {type} from "@testing-library/user-event/dist/type";

const Button = ({onClick, ype, children, size = 's'}) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--small': type === 's',
        'btn--medium': type === 'm',
    })

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;