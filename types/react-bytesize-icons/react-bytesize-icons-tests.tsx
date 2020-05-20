import * as React from 'react';
import { render } from 'react-dom';
import {Activity, External, Export} from 'react-bytesize-icons';

render(<Activity/>, document.getElementById('test'));
render(<External width={42} color="blue"/>, document.getElementById('test'));
render(<Export width={42} height={21} strokeWidth="10%" strokeLinejoin="bevel" strokeLinecap="butt" color="blue"/>, document.getElementById('test'));
