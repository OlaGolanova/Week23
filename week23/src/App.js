import React, { useState } from 'react';

// import { Button } from 'react-bootstrap';

import './App.scss';
// import Card from './components/Card/Card';
// import Counter from './components/Week25/Week25';
// import Counter2 from './components/Week25/Counter';
// import cards from './dataCard.json'; 

function App() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [ isSelect, setIsSelect ] = useState(true);

 
    
    const classCard = 'red-border';
    const classSelectedCard =  ' ';

    const handleChange = (event) => {
        setValue(event.target.value);
    
    };
   
    const input = (event) => {
        event.preventDefault();

        if (value === '') {
            setIsSelect(!isSelect);
        } else {
            setValue2(value.toLowerCase());
            setIsSelect(!isSelect);
        }

      
    };

    return (
        <>
            {/* <div className="app">
                {cards.map((card) => (
                    <Card key={card.key} {...card} />
                )
                )
                }
            </div>
            <div>
                <Counter/>
            </div>
            <div>
                <Counter2/>
            </div> */}
            <form className = "form">
                <input  className= {isSelect ? classSelectedCard:classCard } 
                    placeholder = "Введите слово"
                    onChange = { handleChange }
                />

                <button 
                    onClick={(event) => input(event)}> ок
                </button>

                <input
                    placeholder = "Вы ввели"
                    value = {value2}
                />

            </form>


            <div className = "bootstrap">Это форма Bootstrap</div>
         
            <form className = "form2">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </>
       
    );
}

export default App;

