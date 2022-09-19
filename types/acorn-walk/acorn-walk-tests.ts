import * as Acorn from  '../acorn';
import { simple } from './';

const code = `
import a from './a.js'

console.log(a)

export default function() {
    console.log(11111)
}
`;
const node = Acorn.parse(code, {
    sourceType: 'module',
    ecmaVersion: 'latest',
});

simple(node, {
    Program: function(node, state) {
        node // $ExpectType Acorn.AcornNodeTypeMap.Program
    }
})
