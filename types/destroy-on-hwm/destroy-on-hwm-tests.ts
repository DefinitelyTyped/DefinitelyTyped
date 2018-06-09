import { PassThrough } from 'stream';
import destroyOnHWM = require('destroy-on-hwm');

const stream = new PassThrough();

destroyOnHWM(stream); // $ExpectType PassThrough<any>
destroyOnHWM(stream, function(stream) {
    this; // $ExpectType PassThrough<any>
    stream; // $ExpectType PassThrough<any>
});
