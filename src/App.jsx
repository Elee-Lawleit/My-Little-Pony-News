import './App.css';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import News from "./components/News"
import LoadingBar from 'react-top-loading-bar';
import React, {useState} from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import UseReducerExample from './components/UseReducerExample';
import UseEffectExample from './components/UseEffectExample';
import UseImperativeExample from './components/UseImperativeExample';
import UseContextExample from './components/UseContextExample';

const App = ()=>{

  const [progress, setProgress] = useState(0);

    return (
      <div className="App">
        <Router>
          <LoadingBar
            height={3}
            progress={progress}
            color={"#fff"}
          />
          <Navbar title="My Little Pony" />
          <Counter />
          <UseReducerExample/>
          <UseEffectExample/>
          <UseImperativeExample/>
          <UseContextExample/>
          
          <Routes>
            {/* exact means exact match with the url, duh */}
            {/* key is to uniquely identify each prop, so react knows that it HAS to re-render the component */}
            {/* if key is not given, react will assume that the correct component is already rendered,so it won't re-render */}
            {/* kinda smart */}
            <Route exact path='/' element={<News key={"general"} setProgress={setProgress} pageSize={6} country={"us"} category={"general"} />} />
            <Route exact path='/business' element={<News key={"business"} setProgress={setProgress} pageSize={6} country={"us"} category={"business"} />} />
            <Route exact path='/sports' element={<News key={"sports"} setProgress={setProgress} pageSize={6} country={"us"} category={"sports"} />} />
            <Route exact path='/science' element={<News key={"science"} setProgress={setProgress} pageSize={6} country={"us"} category={"science"} />} />
            <Route exact path='/health' element={<News key={"health"} setProgress={setProgress} pageSize={6} country={"us"} category={"health"} />} />
            <Route exact path='/entertainment' element={<News key={"entertainment"} setProgress={setProgress} pageSize={6} country={"us"} category={"entertainment"} />} />
            <Route exact path='/technology' element={<News key={"technology"} setProgress={setProgress} pageSize={6} country={"us"} category={"technology"} />} />

          </Routes>
        </Router>
      </div>
    )
}

export default App