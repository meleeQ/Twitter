import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Main from './components/Layout/Main'

import Home from './components/Home'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound'
import Search from './components/Search/NotFound'

/* 
+ production code  video  问老师
+ sold原则



=====
删代码-还差一部分json说明文件
unit test  TDD 
flow react 
readme
request log
注释格式化
（saga或者mobx）
*/

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
