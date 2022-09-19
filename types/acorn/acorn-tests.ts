import { parse, AcornNodeTypeMap } from 'acorn';

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
node; // $ExpectType Program
