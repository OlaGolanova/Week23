
import './App.scss';
import Card from './components/Card/Card';
import cards from './dataCard.json'; 



function App() {

    return (
        <div className="app">
            {cards.map((card) => 
			 <Card
			 isSelected={card.isSelected}
			 key={card.key}
			 tariff={card.tariff}
			 price={card.price}
			 speed={card.speed}
			 descr={card.description} 
			 classNameColorTariff={card.classNameColorTariff}
			 classNameColorPrice={card.classNameColorPrice}/>)}
        </div>
    );
}

export default App;

