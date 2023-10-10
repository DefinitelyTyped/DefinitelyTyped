// Type definitions for node-random-name 1.0
// Project: https://github.com/cscott/node-random-name
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface NodeRandomNameArgs {
    first?: boolean;
    last?: boolean;
    gender?: "male" | "female";
    seed?: string;
    random?: () => number;
    male?: boolean;
    female?: boolean;
}

declare function random_name(args?: NodeRandomNameArgs): string;

declare namespace random_name {
    interface NodeRandomNameArgs {
        first?: boolean;
        last?: boolean;
        gender?: "male" | "female";
        seed?: string;
        random?: () => number;
        male?: boolean;
        female?: boolean;
    }
}

export = random_name;
