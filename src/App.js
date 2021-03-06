import React, { useState } from 'react';
import ResourceList from './components/ResourceList';

const App = () => {
  const [resource, setResource] = useState('todos');
    return (
      <div>
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>ToDos</button>
        </div>
       <ResourceList resource={resource}/>
      </div>
    );
}

export default App;
