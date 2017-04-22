/// <reference path="./react-input-mask.d.ts"/>
/// <reference path="../react/react.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>

import * as ReactInputMask from 'react-input-mask';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

<div>
    <ReactInputMask mask="+4\9 99 999 99" maskChar={null} />
    <ReactInputMask mask="+7 (999) 999-99-99" />
    <ReactInputMask mask="99-99-9999" defaultValue="13-00-2017" />
    <ReactInputMask mask="99/99/9999" placeholder="Enter birthdate" />
    <ReactInputMask mask="+7 (999) 999-99-99" />
</div>