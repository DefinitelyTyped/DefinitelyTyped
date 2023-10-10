// Type definitions for node-random-name 1.0
// Project: https://github.com/cscott/node-random-name
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function random_name(args?: random_name.NodeRandomNameArgs): string;

declare namespace random_name {
    interface NodeRandomNameArgs {
        first?: boolean | undefined;
        last?: boolean | undefined;
        gender?: "male" | "female" | undefined;
        seed?: string | undefined;
        random?: () => number | undefined;
        male?: boolean | undefined;
        female?: boolean | undefined;
    }
}

export = random_name;
