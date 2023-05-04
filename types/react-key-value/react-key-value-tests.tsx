import { KeyValue } from 'react-key-value';
import * as React from "react";

<KeyValue
  customAddButtonRenderer={ (handleAddNew) => (
    <div>
      <a
        href="#"
        onClick={ handleAddNew }
      >
        <span>+</span> Add new meta data
      </a>
    </div>
  ) }
  onChange={ (rows) => console.log(rows) }
/>;
