import triangle = require('triangle-wasm');

const data = {
    pointlist: [1, 2, 3],
};

// $ExpectType Promise<void>
triangle.init();
// $ExpectType Promise<void>
triangle.init('path');
// @ts-expect-error
triangle.init(1234);

// $ExpectType TriangulateIO
const inputIo = triangle.makeIO(data);
// $ExpectType TriangulateIO
const outputIo = triangle.makeIO();
// $ExpectType string
const switches = triangle.getSwitchesStr('', inputIo);

// @ts-expect-error
triangle.triangulate();
// @ts-expect-error
triangle.triangulate(switches);
// @ts-expect-error
triangle.triangulate(switches, inputIo);

// $ExpectType void
triangle.triangulate(switches, inputIo, outputIo);

// $ExpectType void
triangle.freeIO(inputIo);
// $ExpectType void
triangle.freeIO(outputIo, true);
