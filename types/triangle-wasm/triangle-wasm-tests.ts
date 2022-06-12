import triangle = require('triangle-wasm');

const data = {
    pointlist: [1, 2, 3],
};

// $ExpectType Promise<void>
triangle.init();
// $ExpectType Promise<void>
triangle.init('path');
// $ExpectError
triangle.init(1234);

// $ExpectType TriangulateIO
const inputIo = triangle.makeIO(data);
// $ExpectType TriangulateIO
const outputIo = triangle.makeIO();
// $ExpectType string
const switches = triangle.getSwitchesStr('', inputIo);

// $ExpectError
triangle.triangulate();
// $ExpectError
triangle.triangulate(switches);
// $ExpectError
triangle.triangulate(switches, inputIo);

// $ExpectType void
triangle.triangulate(switches, inputIo, outputIo);

// $ExpectType void
triangle.freeIO(inputIo);
// $ExpectType void
triangle.freeIO(outputIo, true);
