import React, { Component } from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash"; 
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      console.log(_token);
      this.setState({
        token: _token
      });
    }
  }

  login = (e) => {
    e.preventDefault();

    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  };

  render() {
    return (
      <>
        {!this.state.token ? 
            <div className="w-full h-screen flex flex-wrap place-items-center justify-center">
              <button onClick={this.login} className="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
                Login
              </button>
            </div>
          : <Home />
        }
      </>
    );
  };
}

export default App;
