import imagemin = require('imagemin');

imagemin(['*.png'], { destination: 'dist', plugins: [] }).then((results: imagemin.Result[]) => { /* ... */ });

imagemin.buffer(Buffer.from([/* ... */])).then((result: Buffer) => { /* ... */ });
imagemin.buffer(Buffer.from([/* ... */]), { plugins: [] }).then((result: Buffer) => { /* ... */ });
