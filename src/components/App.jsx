import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: 'mrzarkovic',
      userData: [],
      usserRepos: [],
      perPage: 5
    }
  }

  render () {
    return (
      <div className='container'>
        My app
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

App.defaultProps = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET
}

export default App;