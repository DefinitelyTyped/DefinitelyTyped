// Type definitions for spdx-satisfies 0.1
// Project: https://github.com/kemitchell/spdx-satisfies.js#readme
// Definitions by: Jinwoo Lee <https://github.com/jinwoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type SpdxSatisfies = (first: string, second: string) => boolean;
declare const spdxSatisfies: SpdxSatisfies;
export = spdxSatisfies;
