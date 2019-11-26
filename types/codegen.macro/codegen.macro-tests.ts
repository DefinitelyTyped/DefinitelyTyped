import codegen = require('codegen.macro');

const eg1: string = codegen`module.exports = "'hello world'"`;
const eg2: number = codegen`module.exports = "42"`;
const eg3: { [key: string]: string } = codegen`module.exports = "({ hello: 'world' })"`;
