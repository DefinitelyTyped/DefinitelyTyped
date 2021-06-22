import { getCurves } from 'crypto';
import express = require('express');
import processImage = require('express-processimage');
const root = '/path/to/my/static/files';

express()
    .use(
        processImage({
            root,
            maxOutputPixels: 250_000,
            maxInputPixels: 100_000,
            secondGuessSourceContentType: true,
            debug: true,
            sharpCache: 123,
            filters: {
                gfsicle: true,
            },
            allowedImageSourceContentTypes: ['image/png'],
            allowOperation: operationName => true,
        }),
    )
    .use(processImage())
    .use(processImage({}))
    .use(express.static(root))
    .listen(1337);
