// Type definitions for spected 0.7
// Project: https://github.com/25th-floor/spected
// Definitions by: Benjamin Makus <https://github.com/benneq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function spected<ROOTINPUT, SPEC = SpecObject<ROOTINPUT, ROOTINPUT>>(spec: SPEC, input: ROOTINPUT): Result<ROOTINPUT, SPEC>;

type Predicate<INPUT, ROOTINPUT> = (value: INPUT, inputs: ROOTINPUT) => boolean;

type ErrorMsg<INPUT> =
    | (string | number | boolean | symbol | null | undefined | object)
    | ((value: INPUT, field: string) => any);

type SpecArrayElement<INPUT, ROOTINPUT> = [Predicate<INPUT, ROOTINPUT>, ErrorMsg<INPUT>];

export type SpecArray<INPUT, ROOTINPUT> = ReadonlyArray<SpecArrayElement<INPUT, ROOTINPUT>>;

export type SpecFunction<INPUT, ROOTINPUT> = INPUT extends ReadonlyArray<infer U>
    ? (value: INPUT) => ReadonlyArray<SpecArray<U, ROOTINPUT>>
    : (value: INPUT) => SpecObject<INPUT, ROOTINPUT>;

export type SpecObject<INPUT, ROOTINPUT> = Partial<{[key in keyof INPUT]: SpecValue<INPUT[key], ROOTINPUT>}>;

export type SpecValue<INPUT, ROOTINPUT> =
    | SpecArray<INPUT, ROOTINPUT>
    | SpecFunction<INPUT, ROOTINPUT>
    | SpecObject<INPUT, ROOTINPUT>;

export type Result<INPUT, SPEC> = {[key in keyof INPUT]: true | any[] | Result<INPUT[key], any>};

export default spected;
