import transformer = require('strong-log-transformer');

transformer.DEFAULTS; // $ExpectType Options

transformer.cli([]); // $ExpectType void
transformer.cli(['one', 'two']); // $ExpectType void

transformer(); // $ExpectType ReadWriteStream
transformer({ format: 'format' }); // $ExpectType ReadWriteStream
transformer({ tag: 'tag' }); // $ExpectType ReadWriteStream
transformer({ mergeMultiline: true }); // $ExpectType ReadWriteStream
transformer({ mergeMultiline: false }); // $ExpectType ReadWriteStream
transformer({ timeStamp: true }); // $ExpectType ReadWriteStream
transformer({ timeStamp : false }); // $ExpectType ReadWriteStream
transformer(transformer.DEFAULTS); // $ExpectType ReadWriteStream
