import { PassThrough } from 'stream';
import destroyOnHWM = require('destroy-on-hwm');

const stream = new PassThrough();

destroyOnHWM(stream); // $ExpectType PassThrough
destroyOnHWM(stream, function(stream) {
    this; // $ExpectType PassThrough
    stream; // $ExpectType PassThrough
});
