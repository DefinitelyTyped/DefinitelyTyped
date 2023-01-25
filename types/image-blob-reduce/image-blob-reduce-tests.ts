import * as pica from 'pica';
import * as imageBlobReduce from 'image-blob-reduce';

const createOptions: imageBlobReduce.Options = {
    pica,
};

const imageReducer = imageBlobReduce(createOptions);

imageReducer.use(
    args => {
        console.log(args);
    },
    'arg1',
    'arg2',
);

imageReducer.before('_calculate_size', env => new Promise(resolve => resolve(env)));

imageReducer.after('_transform', env => new Promise(resolve => resolve(env)));

const blob = new Blob([''], { type: 'image/png' });

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
