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
    }

    interface StatefulPRNG extends PRNG {
        state(): State;
    }
}

type ReturnedPRNG<O extends seedrandom.Options = {}> = O extends { state: true | seedrandom.State }
    ? seedrandom.StatefulPRNG
    : seedrandom.PRNG;

interface BaseInterface {
    <O extends seedrandom.Options>(seed?: string, options?: O): ReturnedPRNG<O>;
    new (seed?: string): seedrandom.PRNG;
}

interface seedrandom {
    <O extends seedrandom.Options>(seed?: string, options?: O, callback?: seedrandom.Callback): ReturnedPRNG<O>;
    alea: BaseInterface;
    tychei: BaseInterface;
    xor128: BaseInterface;
    xor4096: BaseInterface;
    xorshift7: BaseInterface;
    xorwow: BaseInterface;
}

declare const seedrandom: seedrandom;

export = seedrandom;
