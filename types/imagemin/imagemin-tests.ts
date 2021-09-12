import imagemin, { Result } from 'imagemin';

imagemin(['*.png'], { destination: 'dist', plugins: [] }).then((results: Result[]) => {
    /* ... */
});

imagemin
    .buffer(
        Buffer.from([
            /* ... */
        ]),
    )
    .then((result: Buffer) => {
        /* ... */
    });
imagemin
    .buffer(
        Buffer.from([
            /* ... */
        ]),
        { plugins: [] },
    )
    .then((result: Buffer) => {
        /* ... */
    });
