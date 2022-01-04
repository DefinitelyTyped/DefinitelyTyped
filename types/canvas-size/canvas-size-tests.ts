import canvasSize = require('canvas-size');

const noop = () => void 0;

canvasSize.test({width: 100, height: 100}); // $ExpectType boolean
canvasSize.maxArea({max: 1024, onSuccess: noop, onError: noop}); // $ExpectType void
canvasSize.maxHeight({min: 1, step: 64, usePromise: false}); // $ExpectType void
canvasSize.maxHeight({usePromise: true}); // $ExpectType Promise<CanvasSizeMaxReturn>
// $ExpectType Promise<null>
canvasSize.maxHeight({max: 16384, min: 1, step: 1024, usePromise: true, useWorker: true})
    .then(({width, height, benchmark}) => null)
    .catch(({width, height, benchmark}) => null);
