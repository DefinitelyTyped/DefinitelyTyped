import resolve from 'resolve-protobuf-schema';

// resolve.sync(path) sync version of resolve
resolve.sync('./test.proto');

// resolve(path, cb) read and resolve a schema
resolve('./test.proto', (error, schema) => {
    // ...
});
