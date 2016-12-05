/// <reference path="babel-code-frame.d.ts" />
/// <reference path="../mocha/mocha.d.ts"" />
/// <reference path="../chai/chai.d.ts"" />

import codeFrame from "babel-code-frame";

import {expect} from 'chai';

describe('babel-code-frame', () => {
    it('frames given code', () => {
        const code = `
            const number = 1;
            var string = 'foo';

            function print(name: string) {
                console.log(string + name);
            }
        `;

        const framed = codeFrame(code, 5, 22, { forceColor: true });

        expect(framed.trim()).to.equal(`
              2 |             const number = 1;
              3 |             var string = 'foo';
              4 |
            > 5 |             function print(name: string) {
                |             ^
              6 |                 console.log(string + name);
              7 |             }
        `.trim());
    });
})
