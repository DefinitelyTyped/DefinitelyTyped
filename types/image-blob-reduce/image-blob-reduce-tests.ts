import * as imageBlobReduce from "image-blob-reduce";

// no options
// $ExpectType ImageBlobReduce
imageBlobReduce();

// $ExpectType Pica
imageBlobReduce.pica();

// with incorrect options
// @ts-expect-error
imageBlobReduce({ pica: imageBlobReduce.pica });

// with options
const createOptions: imageBlobReduce.Options = {
    pica: imageBlobReduce.pica(),
};

// $ExpectType ImageBlobReduce
const imageReducer = imageBlobReduce(createOptions);

imageReducer.use(
    args => {
        console.log(args);
    },
    "arg1",
    "arg2",
);

imageReducer.before("_calculate_size", env => new Promise(resolve => resolve(env)));

imageReducer.after("_transform", env => new Promise(resolve => resolve(env)));

const blob = new Blob([""], { type: "image/png" });

const resizeOptions: imageBlobReduce.ResizeOptions = {
    max: 100,
    unsharpAmount: 80,
    unsharpRadius: 0.6,
    unsharpThreshold: 2,
};

imageReducer.toBlob(blob, resizeOptions).then((result: Blob) => {
    console.log(result);
});

imageReducer
    .toCanvas(blob, {
        max: 100,
        unsharpAmount: 80,
        unsharpRadius: 0.6,
        unsharpThreshold: 2,
    })
    .then((result: HTMLCanvasElement) => {
        console.log(result);
    });
