import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, errorMessage: '' });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="ui negative message">
          <div className="header">Error</div>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));