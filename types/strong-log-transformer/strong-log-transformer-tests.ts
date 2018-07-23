import transformer = require('strong-log-transformer');

transformer.DEFAULTS; // $ExpectType Options

transformer.cli([]); // $ExpectType void
transformer.cli(['one', 'two']); // $ExpectType void

transformer(); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer({ format: 'format' }); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer({ tag: 'tag' }); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer({ mergeMultiline: true }); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer({ mergeMultiline: false }); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer({ timeStamp: true }); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer({ timeStamp : false }); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
transformer(transformer.DEFAULTS); // $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
