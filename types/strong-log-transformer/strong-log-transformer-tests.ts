import transformer = require('strong-log-transformer');

transformer.DEFAULTS; // $ExpectType Options

transformer.cli([]); // $ExpectType void
transformer.cli(['one', 'two']); // $ExpectType void

transformer(); // $ExpectType ReadWriteStream<any, any>
transformer({ format: 'format' }); // $ExpectType ReadWriteStream<any, any>
transformer({ tag: 'tag' }); // $ExpectType ReadWriteStream<any, any>
transformer({ mergeMultiline: true }); // $ExpectType ReadWriteStream<any, any>
transformer({ mergeMultiline: false }); // $ExpectType ReadWriteStream<any, any>
transformer({ timeStamp: true }); // $ExpectType ReadWriteStream<any, any>
transformer({ timeStamp : false }); // $ExpectType ReadWriteStream<any, any>
transformer(transformer.DEFAULTS); // $ExpectType ReadWriteStream<any, any>
