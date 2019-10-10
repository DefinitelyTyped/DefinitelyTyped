// Type definitions for barbellweights 0.4
// Project: https://github.com/toddhibbs/barbellweight#readme
// Definitions by: evelijn <https://github.com/evelijn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface options {
    program?: string;
    bar?: number;
    plates?: number[];
    warmup_round_to?: number;
}

export class BarbellWeight {
    constructor(workingWeight: number, lift: string, options?: options);
    getResults(): any;
}

export namespace BarbellWeight {
    namespace BarbellWeight {
        function getResults(): void;
    }
}
