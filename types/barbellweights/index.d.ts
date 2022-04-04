// Type definitions for barbellweights 0.4
// Project: https://github.com/toddhibbs/barbellweight#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface options {
    program?: string | undefined;
    bar?: number | undefined;
    plates?: number[] | undefined;
    warmup_round_to?: number | undefined;
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
