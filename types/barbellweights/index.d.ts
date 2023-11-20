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
