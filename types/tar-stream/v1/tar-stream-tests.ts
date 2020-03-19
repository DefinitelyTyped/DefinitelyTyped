import tar = require('tar-stream');

const pack = tar.pack();

// add a file called my-test.txt with the content "Hello World!"
pack.entry({ name: 'my-test1.txt' }, 'Hello World!');

// add a file called my-stream-test.txt from a stream
const entry = pack.entry({ name: 'my-test2.txt', size: 11 }, (err) => {
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
  console.assert(entries['my-test1.txt'], "missing entry");
  console.assert(entries['my-test2.txt'], "missing entry");
  console.log("Found all entries in extract");
});

// pipe the pack stream
pack.pipe(extract);
