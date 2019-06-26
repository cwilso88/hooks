import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');
    return (
      <div className="App">
        <div>
          <button onClick={() => this.setState({ resource: 'posts'})}>Posts</button>
          <button onClick={() => this.setState({ resource: 'todos'})}>ToDos</button>
        </div>
        {this.state.resource}
      </div>
    );
}

export default App;
