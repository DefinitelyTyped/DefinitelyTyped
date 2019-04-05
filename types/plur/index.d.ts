// Type definitions for plur 3.0
// Project: https://github.com/sindresorhus/plur#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function plur(
    word: string,
    plural: string | number,
    count?: number
): string;

export = plur;
