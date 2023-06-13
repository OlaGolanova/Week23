import React from 'react';
import './Card.scss';



function Card(props) {
    let classSelected = '';
    if(props.isSelected) classSelected = 'selected';
    return (
        <div className= {'card '+ classSelected}>
            <div className={props.classNameColorTariff} >
                <div className= "card__tariff">{props.tariff}</div>
            </div>
            <div className= {props.classNameColorPrice}>
                <div className="card__price">
                    <div className="card__price-rub" >руб</div>
                    <div className="card__price-fix"> {props.price}</div>
                    <div className="card__price-month">/мес</div>
                </div>
            </div>

            <div className="card__speed">
                {props.speed}
            </div>

            <div  className="card__descr">
                {props.descr}
            </div>
        </div>
     
    );
}

export default Card;
