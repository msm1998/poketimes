import React, { Component } from 'react';
import Navbar from './componenets/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Post from './componenets/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  } 
}

export default App;
