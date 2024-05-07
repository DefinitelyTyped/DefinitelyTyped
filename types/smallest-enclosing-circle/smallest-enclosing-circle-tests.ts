import enclosingCircle = require("smallest-enclosing-circle");

// $ExpectType Circle
enclosingCircle([{ x: 23, y: 23 }, { x: 10, y: 0 }]);

// @ts-expect-error
enclosingCircle({ x: -3, y: 8 });

// @ts-expect-error
enclosingCircle([{ x: -33, y: 328 }, { x: 8 }]);
