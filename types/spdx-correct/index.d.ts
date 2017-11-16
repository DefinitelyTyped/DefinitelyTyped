// Type definitions for spdx-correct 2.0
// Project: https://github.com/jslicense/spdx-correct.js#readme
// Definitions by: Jinwoo Lee <https://github.com/jinwoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SpdxCorrect {
    (identifier: string): string|null;
}
declare const spdxCorrect: SpdxCorrect;
export = spdxCorrect;
