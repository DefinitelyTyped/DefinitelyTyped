// Type definitions for spdx-correct 3.1
// Project: https://github.com/jslicense/spdx-correct.js#readme
// Definitions by: Jinwoo Lee <https://github.com/jinwoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function spdxCorrect(identifier: string, options?: { upgrade: boolean }): string|null;
export = spdxCorrect;
