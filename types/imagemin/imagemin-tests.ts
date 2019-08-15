import imagemin = require('imagemin');

imagemin(['*.png']).then((results: imagemin.Result[]) => { /* ... */ });
imagemin(['*.png'], 'dist').then((results: imagemin.Result[]) => { /* ... */ });
imagemin(['*.png'], { plugins: [] }).then((results: imagemin.Result[]) => { /* ... */ });
imagemin(['*.png'], 'dist', { plugins: [] }).then((results: imagemin.Result[]) => { /* ... */ });

imagemin.buffer(Buffer.from([/* ... */])).then((result: Buffer) => { /* ... */ });
imagemin.buffer(Buffer.from([/* ... */]), { plugins: [] }).then((result: Buffer) => { /* ... */ });
