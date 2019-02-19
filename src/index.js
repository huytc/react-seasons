import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, error] = useLocation();

  let content;
  if (error) {
    content = (
      <div className="ui negative message">
        <div className="header">Error</div>
        <p>{error}</p>
      </div>
    );
  } else if (lat) {
    content = (
      <SeasonDisplay lat={lat} />
    );
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>
};

// class App extends React.Component {
//   state = { lat: null, errorMessage: '' };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => {
//         this.setState({ lat: position.coords.latitude, errorMessage: '' });
//       },
//       err => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return (
//         <div className="ui negative message">
//           <div className="header">Error</div>
//           <p>{this.state.errorMessage}</p>
//         </div>
//       );
//     }

//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }
    
//     return <Spinner message="Please accept location request" />;
//   }

//   render() {
//     return (
//       <div className="border red">
//         {this.renderContent()}
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.querySelector('#root'));