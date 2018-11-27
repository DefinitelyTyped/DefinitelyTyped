import preval = require('preval.macro');

const eg1: string = preval`module.exports = 'hello world`;
const eg2: number = preval`module.exports = 42`;
const eg3: { [key: string]: string } = preval`module.exports = { hello: 'world' }`;
