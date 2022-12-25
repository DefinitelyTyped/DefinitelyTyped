// Type definitions for seedrandom 3.0
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
//                 Eugene Zaretskiy <https://github.com/EugeneZ>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seedrandom {
    type State = object;

    interface Callback {
        (prng?: PRNG, shortseed?: string, global?: boolean, state?: State): PRNG;
    }

    interface Options {
        entropy?: boolean | undefined;
        global?: boolean | undefined;
        pass?: Callback | undefined;
        state?: boolean | State | undefined;
    }

    interface PRNG {
        (): number;
        double(): number;
        int32(): number;
        quick(): number;
        state(): State;
    }
}

interface BaseInterface {
    (seed?: string, options?: seedrandom.Options): seedrandom.PRNG;
    new (seed?: string): seedrandom.PRNG;
}

interface seedrandom {
    (seed?: string, options?: seedrandom.Options, callback?: seedrandom.Callback): seedrandom.PRNG;
    alea: BaseInterface;
    quick: BaseInterface;
    tychei: BaseInterface;
    xor128: BaseInterface;
    xor4096: BaseInterface;
    xorshift7: BaseInterface;
    xorwow: BaseInterface;
}

declare const seedrandom: seedrandom;

export = seedrandom;
