import imagemin, { Result } from "imagemin";

imagemin(["*.png"], { destination: "dist", plugins: [] }).then((results: Result[]) => {
    /* ... */
});

imagemin
    .buffer(
        Uint8Array.from([
            /* ... */
        ]),
    )
    .then((result: Uint8Array) => {
        /* ... */
    });
imagemin
    .buffer(
        Uint8Array.from([
            /* ... */
        ]),
        { plugins: [] },
    )
    .then((result: Uint8Array) => {
        /* ... */
    });
