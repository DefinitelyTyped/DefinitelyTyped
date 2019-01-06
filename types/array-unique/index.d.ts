// Type definitions for array-unique 0.3
// Project: https://github.com/jonschlinkert/array-unique
// Definitions by: Michaël St-Georges <https://github.com/CSLTech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function arrayUnique<T>(arr: T[]): T[];

declare namespace arrayUnique {
    function immutable<T>(arr: ReadonlyArray<T>): T[];
}

export = arrayUnique;
