import * as React from 'react';
import { render } from 'react-dom';
import CustomColumnComponentGrid from './CustomColumnComponent';
import CustomHeaderComponentGrid from './CustomHeaderComponent';
import CustomFilterComponentGrid from './CustomFilterComponent';

render(
  <div>
    <h1>Custom Column Component Grid</h1>
    <CustomColumnComponentGrid />
    <h1>Custom Header Component Grid</h1>
    <CustomHeaderComponentGrid />
    <h1>Custom Filter Component Grid</h1>
    <CustomFilterComponentGrid />
  </div>,
  document.getElementById('root')
);