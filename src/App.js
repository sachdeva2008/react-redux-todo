import React, { Component } from 'react';
//import { connect } from 'react-redux';

//import logo from './logo.svg';
import Dashboard from './components/dashboard';
import './App.css';

//import { simpleAction } from './actions/simpleAction'

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

// const mapStateToProps = state => ({
//   ...state
// })

class App extends Component {
 
  // simpleAction = (event) => {
  //   this.props.simpleAction();
  // }

  render() {
    return (
      <div className="App">
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
