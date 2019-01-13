import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';

const App = () => (
  <div>
    <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
    <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
  </div>
);

const element = document.createElement('div');
document.body.appendChild(element);
ReactDOM.render(<App />, element);
