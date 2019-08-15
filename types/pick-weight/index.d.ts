// Type definitions for pick-weight 1.0
// Project: https://github.com/mock-end/pick-weight#readme
// Definitions by: Roberts Slisans <https://github.com/rsxdalv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Dummy function allows to avoid hard to kill or fix tslint warning
// (exporting pluginFunc will make this a non-importable module)
declare function weighted<T>(arr: T[], weights: number[]): T;
// Let allows typescript to still use ES2015 style imports
declare let y: typeof weighted;
export = y;
