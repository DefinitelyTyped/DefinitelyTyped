import * as Acorn from  './';

const code = `
import a from './a.js'

console.log(a)

export default function() {
    console.log(11111)
}
`;
Acorn.parse(code, {
    sourceType: 'module',
    ecmaVersion: 'latest',
}); // $ExpectType Acorn.AcornNodeTypeMap.Program
