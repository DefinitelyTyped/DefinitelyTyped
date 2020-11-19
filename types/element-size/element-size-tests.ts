import size = require('element-size');

const element = document.body;
// returns tuple [number, number]
const [width, height] = size(element); // $ExpectType [number, number]
