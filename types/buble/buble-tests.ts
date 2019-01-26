import * as buble from 'buble';

const input = 'const answer = () => 42;';
const output = buble.transform(input);

console.log(output.code);
console.log(output.map);
