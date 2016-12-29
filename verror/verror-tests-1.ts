// Now available this import
import {WError} from 'verror';

let param: any;

new WError(new Error, 'some message', param);
