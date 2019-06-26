import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');
    return (
      <div className="App">
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>ToDos</button>
        </div>
        I want the {resource}
      </div>
    );
}

export default App;
