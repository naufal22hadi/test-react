import React, {Component} from 'react';
import PageWraper from './component/PageWraper';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Pages
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

class App extends Component {
  render(){
    return (
      <Router>
        <PageWraper>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
              <Route
                path="/about"
                element={<About/>}
              />
              <Route
                path="/contact"
                element={<Contact/>}
              />
            </Routes>
        </PageWraper>
      </Router>
    );
  }  
}

export default App;
