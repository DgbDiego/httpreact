import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <code>
            <p>Sistema de servidor rodando</p>
            <p>Clique <a className='App-link' target="_blank" href='http://localhost:3001/products'>aqui</a> para visualizar os dados de db.json</p>
          </code>
      </header>
    </div>
  );
}

export default App;
