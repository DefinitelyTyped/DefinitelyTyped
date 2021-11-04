import webshot = require("webshot-node");

webshot('', '', {}); // $ExpectType void
webshot('', '', {}, e => {}); // $ExpectType void
webshot('', ''); // $ExpectType void
webshot('', '', e => {}); // $ExpectType void
webshot('', {}); // $ExpectType ReadableStream
webshot('', {}, e => {}); // $ExpectType ReadableStream
webshot(''); // $ExpectType ReadableStream
webshot('', e => {}); // $ExpectType ReadableStream
