// Type definitions for spected 0.7
// Project: https://github.com/25th-floor/spected
// Definitions by: Benjamin Makus <https://github.com/benneq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function spected<ROOTINPUT, SPEC = Spec<ROOTINPUT>>(spec: SPEC, input: ROOTINPUT): Result<ROOTINPUT, SPEC>;

export type Predicate<INPUT, ROOTINPUT> = (value: INPUT, inputs: ROOTINPUT) => boolean;

export type ErrorMsg<INPUT> =
    | (string | number | boolean | symbol | null | undefined | object)
    | ((value: INPUT, field: string) => any);

export type Spec<INPUT, ROOTINPUT = any> = Partial<{[key in keyof INPUT]: SpecValue<INPUT[key], ROOTINPUT>}>;

export type SpecValue<INPUT, ROOTINPUT = any> =
    | ReadonlyArray<[Predicate<INPUT, ROOTINPUT>, ErrorMsg<INPUT>]>
    | ((value: INPUT) => any)
    | Spec<INPUT, ROOTINPUT>;

export type Result<INPUT, SPEC> = {[key in keyof INPUT]: true | any[] | Result<INPUT[key], any>};

export default spected;
