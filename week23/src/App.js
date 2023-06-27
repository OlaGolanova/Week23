
import './App.scss';
import Card from './components/Card/Card';
import Counter from './components/Week25/Week25';
import Counter2 from './components/Week25/Counter';
import cards from './dataCard.json'; 

function App() {

    return (
        <>
            <div className="app">
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
            </div>
           
        </>
       
    );
}

export default App;

