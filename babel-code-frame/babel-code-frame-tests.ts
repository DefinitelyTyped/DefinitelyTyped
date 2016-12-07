import codeFrame from "babel-code-frame";
import {expect} from 'chai';

describe('babel-code-frame', () => {
    it('frames given code', () => {
        const code = toTrimmedLines(`
            const number = 1;
            var string = 'foo';

            function print(name: string) {
                console.log(string + name);
            }
        `).join('\n');

        /** Convert output lines to an array of trimmed lines for easier comparing */
        function toTrimmedLines(lines: string): string[] {
            return lines.split("\n").map((line) => line.trim());
        }

        const framed = toTrimmedLines(codeFrame(code, 5, 22, { forceColor: true }));
        const expected = toTrimmedLines(
            ` 3 |var string = 'foo';
              4 |
            > 5 |function print(name: string) {
                |         ^
              6 |    console.log(string + name);
              7 |}
              8 |`
        );

        expect(framed).to.equal(expected);
    });
})
