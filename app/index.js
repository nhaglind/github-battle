var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
    <div>
      <div>Hello React!</div>
      <p>This is great.</p>
      <p>The best thing I've seen.</p>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
