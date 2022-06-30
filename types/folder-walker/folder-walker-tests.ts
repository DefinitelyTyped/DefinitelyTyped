import walker = require('folder-walker');

// $ExpectType ReadableStream<any>
const stream = walker(['./somedir']);

stream.on('data', (file: walker.Entry) => {
    // $ExpectType Entry
    const _ = file;
});
