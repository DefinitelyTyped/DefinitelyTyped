import React = require('react');
import { useNuiCallback } from 'react-fivem-nui-utils';

function MyComponent() {
  useNuiCallback(
    'myApp',
    'myMethod',
    (data) => console.log('Success:', data),
    (err) => console.error('Error:', err)
  );

  return <div>Handling callbacks...</div>;
}

export default MyComponent;
