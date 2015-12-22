/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-select.d.ts"/>

import Select from 'react-select';
import * as React from 'react';

let options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two'}
];

let logChange = (val: string|number) => {
    console.log("Selected: " + val);
}

let select = <Select name="form-field-name"
                     onChange={logChange}
                     options={options}
                     value="one" />
