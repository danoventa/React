import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

class App extends React.Component {

    initialState = {
        count: 1,
    };

    reducer = (state = this.initialState, action) => {
        switch(action.type){
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + 1
                };
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                };
            default:
                return state;
        }
    };

    store = createStore(this.reducer);

render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Provider store = {this.store}>
            <Counter />
          </Provider>
      </div>
    );
  }
}

export default App;
