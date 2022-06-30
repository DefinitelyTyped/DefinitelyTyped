import webshot = require("webshot-node");

webshot('', '', {}); // $ExpectType void
webshot('', '', {}, e => {}); // $ExpectType void
webshot('', ''); // $ExpectType void
webshot('', '', e => {}); // $ExpectType void
webshot('', {}); // $ExpectType ReadableStream<any>
webshot('', {}, e => {}); // $ExpectType ReadableStream<any>
webshot(''); // $ExpectType ReadableStream<any>
webshot('', e => {}); // $ExpectType ReadableStream<any>
