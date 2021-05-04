import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddItem} from './components/AddItem';
import {EditItem} from './components/EditItem';


import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './context/GlobalState';

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <GlobalProvider>
          <Router>
            <Switch >
              <Route exact path ="/" component= {Home} />
              <Route path ="/add" component= {AddItem} />
              <Route path ="/edit/:id" component= {EditItem} />
            </Switch>
          </Router>
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
