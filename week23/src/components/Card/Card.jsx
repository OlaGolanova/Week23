import React, { useState } from 'react';
import './Card.scss';



export default function Card(props) {
    const {classNameColorTariff, tariff, classNameColorPrice, price, speed, description} = props;

    const [ isSelect, setIsSelect ] = useState(false);

    const handleChange = () => {
        setIsSelect(!isSelect);
    };
    
    const classCard = 'card';
    const classSelectedCard =  'card selected';
    

    return (
        <div className= {isSelect ? classSelectedCard:classCard } onClick={ handleChange} >
            <div className={classNameColorTariff} >
                <div className= "card__tariff">{tariff}</div>
            </div>
            <div className= {classNameColorPrice}>
                <div className="card__price">
                    <div className="card__price-rub" >руб</div>
                    <div className="card__price-fix"> {price}</div>
                    <div className="card__price-month">/мес</div>
                </div>
            </div>

            <div className="card__speed">
                {speed}
            </div>

            <div  className="card__descr">
                {description}
            </div>
        </div>
     
    );
};





