import * as docblock from 'jest-docblock';

docblock.extract(`
    /** @pragma */
    const abc = 123;
`); // => "/** @pragma */"

docblock.parse(`/** @pragma 123 */`); // => { pragma: "123" }
