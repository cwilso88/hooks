import React from 'react';
import useResources from './useResources';



const ResourceList = ({ resource }) => {
      const resources = useResources(resource);  
    return (
        <ul>
            {resources.map(res =>
                <li key={res.id}>{res.title}</li>
            )}
        </ul>
    )
}

export default ResourceList;

