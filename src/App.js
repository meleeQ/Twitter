import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Layout/Main'
import Home from './components/Home'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound'
import Search from './components/Search/NotFound'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile/:userId" component={Profile} />
                <Route path="/search" component={Search} />
                <Route component={NotFound}/>
              </Switch>
            </Main>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
