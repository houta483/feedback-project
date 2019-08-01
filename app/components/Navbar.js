import React from 'react'

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.feedbackLog = this.feedbackLog.bind(this);
    this.nextSteps = this.nextSteps.bind(this);
  }

  showAlert()  {
    fetch('/api/login')
      .then(this.props.updateView(0))
      .catch()
  };

  feedbackLog()  {
    fetch('/api/login')
      .then(this.props.updateView())
      .catch()
  };

  nextSteps()  {
    fetch('/api/login')
      .then(this.props.updateView(3))
      .catch()
  };

  render() {
    return(
      <div className='nav'>
        <button className='buttonOne' onClick={this.showAlert}>
          Login
        </button>
        <button className='buttonTwo' onClick={this.feedbackLog}>
          Feedback Log
        </button>
        <button className='buttonThree' onClick={this.nextSteps}>
          Next Steps
        </button>
      </div>
    )  
  }
}

export default Navbar;