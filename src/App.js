import React from 'react';

class App extends React.Component {
  state = { resource: 'posts'};

  render() {
    return (
      <div className="App">
        <div>
          <button className="">Posts</button>
          <button className="">ToDos</button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
