import './App.css';
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import News from "./components/News"
import LoadingBar from 'react-top-loading-bar';
import {React, Component} from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <LoadingBar
            height={3}
            progress={this.state.progress}
            color={"#fff"}
          />
          <Navbar title="My Little Pony" />
          <Counter />
          <Routes>

            {/* exact means exact match with the url, duh */}
            {/* key is to uniquely identify each prop, so react knows that it HAS to re-render the component */}
            {/* if key is not given, react will assume that the correct component is already rendered,so it won't re-render */}
            {/* kinda smart */}
            <Route exact path='/' element={<News key={"general"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"general"} />} />
            <Route exact path='/business' element={<News key={"business"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"business"} />} />
            <Route exact path='/sports' element={<News key={"sports"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"sports"} />} />
            <Route exact path='/science' element={<News key={"science"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"science"} />} />
            <Route exact path='/health' element={<News key={"health"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"health"} />} />
            <Route exact path='/entertainment' element={<News key={"entertainment"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"entertainment"} />} />
            <Route exact path='/technology' element={<News key={"technology"} setProgress={this.setProgress} pageSize={6} country={"us"} category={"technology"} />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

export default App