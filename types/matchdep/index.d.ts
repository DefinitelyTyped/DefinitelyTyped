// Type definitions for matchdep 2.0
// Project: https://github.com/tkellen/js-matchdep
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace matchdep {
    type FilterConfig = string | object;
    type FilterFunction = (pattern: string | string[], config?: FilterConfig) => string[];
}

declare const matchdep: {
    readonly filter: matchdep.FilterFunction
    readonly filterDev: matchdep.FilterFunction
    readonly filterPeer: matchdep.FilterFunction
    readonly filterAll: matchdep.FilterFunction
};

export = matchdep;
