import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className='linha'>
        <Card title='Card 1' red> x </Card>
        <Card title='Card 2' green> x </Card>
      </div>
      
      <div className='linha'>
        <Card title='Card 3' blue> y </Card>
        <Card title='Card 4' purple> x </Card>
      </div>
    </div>
  );
}

export default App;
