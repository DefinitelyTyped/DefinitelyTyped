// Type definitions for seedrandom 3.0
// Project: https://github.com/davidbau/seedrandom
// Definitions by: Kern Handa <https://github.com/kernhanda>
//                 Eugene Zaretskiy <https://github.com/EugeneZ>
//                 Martin Badin <https://github.com/martin-badin>
//                 Martijn van der Ven <https://github.com/Zegnat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type StateBuilder<S extends string> = Record<S, number>;
type ComplexStateBuilder<S extends string, M extends string> = StateBuilder<S> & Record<M, number[]>;

interface OtherAlgorithm<State> {
    (seed?: string, options?: { state?: false }): seedrandom.PRNG;
    (seed?: string, options?: { state: State | true }): seedrandom.StatefulPRNG<State>;
}

type Callback<callbackReturnType> = (
    prng: seedrandom.PRNG,
    seed: string,
    is_math_call: boolean,
    state: undefined | boolean | seedrandom.State.Arc4,
) => callbackReturnType;

interface callbackOption<callbackReturnType> {
    pass: Callback<callbackReturnType>;
}
interface stateOptionEnabled {
    state: true | seedrandom.State.Arc4;
}
interface seedrandomOptions<callbackReturnType> {
    global?: boolean;
    state?: boolean | seedrandom.State.Arc4;
    entropy?: boolean;
    pass?: Callback<callbackReturnType>;
}

declare namespace seedrandom {
    interface PRNG {
        (): number;
        double(): number;
        int32(): number;
        quick(): number;
    }
    interface StatefulPRNG<State> extends PRNG {
        state(): State;
    }
    namespace State {
        type Arc4 = ComplexStateBuilder<'i' | 'j', 'S'>;
        type Alea = StateBuilder<'c' | 's0' | 's1' | 's2'>;
        type Xor128 = StateBuilder<'x' | 'y' | 'z' | 'w'>;
        type Xorwow = StateBuilder<'x' | 'y' | 'z' | 'w' | 'v' | 'd'>;
        type Xorshift7 = ComplexStateBuilder<'i', 'x'>;
        type Xor4096 = ComplexStateBuilder<'i' | 'w', 'X'>;
        type Tychei = StateBuilder<'a' | 'b' | 'c' | 'd'>;
    }
}

interface seedrandom {
    // Arc4 Algorithm, default seedrandom
    <O extends seedrandomOptions<any>>(seed?: string, options?: O | boolean): O extends callbackOption<
        infer callbackReturnType
    >
        ? callbackReturnType
        : O extends stateOptionEnabled
        ? seedrandom.StatefulPRNG<seedrandom.State.Arc4>
        : seedrandom.PRNG;
    <O extends seedrandomOptions<any>, callbackReturnType>(
        seed: string | undefined,
        options: O | boolean | undefined,
        callback: Callback<callbackReturnType>,
    ): O extends callbackOption<infer callbackReturnType> ? callbackReturnType : callbackReturnType;

    // Other Algorithms
    alea: OtherAlgorithm<seedrandom.State.Alea>;
    xor128: OtherAlgorithm<seedrandom.State.Xor128>;
    xorwow: OtherAlgorithm<seedrandom.State.Xorwow>;
    xorshift7: OtherAlgorithm<seedrandom.State.Xorshift7>;
    xor4096: OtherAlgorithm<seedrandom.State.Xor4096>;
    tychei: OtherAlgorithm<seedrandom.State.Tychei>;
}

declare const seedrandom: seedrandom;

export = seedrandom;
