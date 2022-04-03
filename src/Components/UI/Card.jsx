import React from 'react'
import './Card.css';

const Card = (props) =>
{
    //space is provided in card below because ultimately card+props.className(which is expense-item) = cardexpense-item and it should be card expense-item. isliye space is provided.
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default Card;