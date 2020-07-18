import tar = require('tar-stream');
import fs = require('fs');

const pack = tar.pack();

// test method overloading
pack.entry({ name: 'headers.txt' });
pack.entry({ name: 'headers.txt' }, 'buffer');
pack.entry({ name: 'headers.txt' }, Buffer.from('buffer'));
pack.entry({ name: 'headers.txt' }, err => {
    pack.finalize();
});
pack.entry({ name: 'headers.txt' }, Buffer.from('buffer'), err => {
    pack.finalize();
});

// add a file called my-test.txt with the content "Hello World!"
pack.entry({ name: 'my-test1.txt' }, 'Hello World!');

// add a file called my-stream-test.txt from a stream
const entry = pack.entry({ name: 'my-test2.txt', size: 11 }, err => {
    // the stream was added
    // no more entries
    pack.finalize();
});

entry.write('hello');
entry.write(' ');
entry.write('world');
entry.end();

const extract = tar.extract();

const entries: any = {};

extract.on('entry', (header, stream, next) => {
    // header is the tar header
    // stream is the content body (might be an empty stream)
    // call next when you are done with this entry
    entries[header.name] = true;
    stream.on('end', () => {
        next();
    });

    stream.resume(); // just auto drain the stream
});

extract.on('finish', () => {
    // all entries read
    console.assert(entries['my-test1.txt'], 'missing entry');
    console.assert(entries['my-test2.txt'], 'missing entry');
    console.log('Found all entries in extract');
});

// pipe the pack stream
pack.pipe(extract);

const path = 'YourTarBall.tar';
const yourTarball = fs.createWriteStream(path);

// add a file called YourFile.txt with the content "Hello World!"
pack.entry({ name: 'YourFile.txt' }, 'Hello World!', err => {
    if (err) throw err;
    pack.finalize();
});

// pipe the pack stream to your file
pack.pipe(yourTarball);

yourTarball.on('close', () => {
    console.log(path + ' has been written');
    fs.stat(path, (err, stats) => {
        if (err) throw err;
        console.log(stats);
        console.log('Got file info successfully!');
    });
});
