import { useState } from 'react';
import './SpamFilter.scss';

import Item from './Item/Item';

export default function SpamFilter() {
    const [valueInput, setValueInput] = useState('');

    const [valueChat, setValueChat] = useState([]);

    const handleChange = (event) => {
        setValueInput(event.target.value);
    
    };

    const handleClick = (e) => {
        e.preventDefault();
        setValueChat( prevpost => [valueInput, ...prevpost ]);
        setValueInput(''); 
 
    };

    return(

        <>
            <p>Чат со спам фильтром</p>
            <div  className = "chat">

                { valueChat.map((elem, index) => (
                    <Item 
                        key = {index} 
                        text = {elem} 
                        color = {index === 0 ? 'red' : ''}>
                    </Item>
                ))}
            </div>
            <form action=""  className = "wrap">

                <textarea cols="600" rows="10"
                    placeholder = "Введите сообщение"
                    onChange = { handleChange  }
                    value = { valueInput }
                />

                <button
                    onClick = { handleClick }>
                    Отправить</button>

            </form>
        </>
    );
};