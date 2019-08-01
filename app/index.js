import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import DefaultPage from './components/DefaultPage';
import FeedbackLog from './components/FeedbackLog';
import NextSteps from './components/NextSteps';


class App extends React.Component { // components have three parts: 1) state, 2) lifecycle methods, 3) UI
  constructor() {
   super()
   this.state = {
     view: 0
   }; 
   this.updateView = this.updateView.bind(this);
  }
  updateView(number) {
    this.setState({
      view: number
    })
  }
  render() {
    let view;
    switch(this.state.view) {
      case 0: 
      view = <DefaultPage updateView={this.updateView}/>
      break;

      case 1:
        view = <FeedbackLog updateView={this.updateView}/>
        break;

      case 2:
        view= <NextSteps updateView={this.updateView}/>
        break;
    }

    return (
      <div>
        {/* this is where the passing down of props occours */}
        <Navbar updateView={this.updateView}/>
        {view}
      </div>
    )
  }
}

ReactDOM.render( // takes in react element and where you want to render the element
(<App />),
  document.getElementById('app')
)