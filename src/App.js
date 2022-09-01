import './App.css';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import News from "./components/News"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar title="My Little Pony"/>
        <Counter/>
        <Routes>
          
          {/* exact means exact match with the url, duh */}
          {/* key is to uniquely identify each prop, so react knows that it HAS to re-render the component */}
          {/* if key is not given, react will assume that the correct component is already rendered,so it won't re-render */}
          {/* kinda smart */}
          <Route exact path='/' element={<News key={"general"} pageSize={6} country={"us"} category={"general"} />}/>
          <Route exact path='/business' element={<News key={"business"} pageSize={6} country={"us"} category={"business"} />}/>
          <Route exact path='/sports' element={<News key={"sports"} pageSize={6} country={"us"} category={"sports"} />}/>
          <Route exact path='/science' element={<News key={"science"} pageSize={6} country={"us"} category={"science"} />}/>
          <Route exact path='/health' element={<News key={"health"} pageSize={6} country={"us"} category={"health"} />}/>
          <Route exact path='/entertainment' element={<News key={"entertainment"} pageSize={6} country={"us"} category={"entertainment"} />}/>
          <Route exact path='/technology' element={<News key={"technology"} pageSize={6} country={"us"} category={"technology"} />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
