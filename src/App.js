import React, { useState } from 'react';
import ResourceList from './components/ResourceList';

const App = () => {
  const [resource, setResource] = useState('These are my posts');
    return (
      <div className="App">
        <div>
          <button onClick={() => setResource('These are my posts')}>Posts</button>
          <button onClick={() => setResource('Look at my todos')}>ToDos</button>
        </div>
       <ResourceList resource={resource}/>
      </div>
    );
}

export default App;
