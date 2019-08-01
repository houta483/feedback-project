import React from 'react'

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert()  {
    alert('hello');
  }

  render() {
    return(
      <div className='nav'>
        <button className='buttonOne' onClick={this.showAlert}>
          Login
        </button>
        <button className='buttonTwo'>
          Feedback Log
        </button>
        <button className='buttonThree'>
          Next Steps
        </button>
      </div>
    )  
  }
}

export default Navbar;