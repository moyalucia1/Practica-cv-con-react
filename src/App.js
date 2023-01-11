import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';

function App() {
let nombre = "lucia"
  return (
    <div className="App">
      <Header/>
      <Body/>
      <input type="text" />
    </div>
  );
}

export default App;
