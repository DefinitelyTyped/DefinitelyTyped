import { init, parse } from 'es-module-lexer';

init.then(() => {
    // Parse is ready
});

parse(`'asdf'`);
parse(`/asdf/`, 'other-sourcename');

const source = `
    import test from "test";
    console.log(test);
    export { x }
`;

const [imported, exported] = parse(source, '@');
const { s, e, ss, se, d } = imported[0];
d === -1;
source.slice(s, e) === 'test';
source.slice(ss, se) === 'import test from "test"';
exported[0] === 'x';
