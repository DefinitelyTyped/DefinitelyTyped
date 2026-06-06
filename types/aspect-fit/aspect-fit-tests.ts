import aspectFit = require("aspect-fit");

aspectFit(10, 10, 200, 100).scale; // $ExpectType number
aspectFit(10, 10, 200, 100).width; // $ExpectType number
aspectFit(10, 10, 200, 100).height; // $ExpectType number
// @ts-expect-error
aspectFit(10, 10);
