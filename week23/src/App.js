
import './App.scss';
import Card from './components/Card/Card';
import cards from './dataCard.json'; 



function App() {

    return (
        <div className="app">
            {cards.map((card) => (
                <Card key={card.key} {...card} />
            )
            )
            }
        </div>
    );
}

export default App;

