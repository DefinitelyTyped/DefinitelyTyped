import { parse } from 'acorn';
import { simple } from 'acorn-walk';

const code = `
import a from './a.js'

console.log(a)

export default function() {
    console.log(11111)
}
`;
const node = parse(code, {
    sourceType: 'module',
    ecmaVersion: 'latest',
});

simple(node, {
    Program(node, state) {
        node; // $ExpectType AcornNodeType
    }
});
