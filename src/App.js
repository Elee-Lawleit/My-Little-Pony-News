import './App.css';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import News from "./components/News"

function App() {
  return (
    <div className="App">
      <Navbar title="My Little Pony"/>
      <Counter/>
      <News/>
    </div>
  );
}

export default App;
