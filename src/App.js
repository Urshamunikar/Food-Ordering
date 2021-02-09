import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from "./components/Banner";
import Section from './components/Section'
import {DataProvider} from './components/Context'

import "./App.css"


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Navbar />
            <Banner/>
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
