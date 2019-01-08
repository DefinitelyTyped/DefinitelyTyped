// Type definitions for yup 0.26
// Project: https://github.com/25th-floor/spected
// Definitions by: Benjamin Makus <https://github.com/benneq>,
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

declare var spected: Spected;

export type Spected = (spec: Spec, input: any) => Result

export type Predicate = (value: any, inputs: any) => boolean

export type ErrorMsg =
    | string
    | ((value: any, field: string) => string)

export type Spec = {[key: string]: SpecValue }

export type SpecValue = 
    | ReadonlyArray<[Predicate, ErrorMsg]>
    | ((value: any) => any)
    | Spec

export type Result = {[key: string]: true | Array<string> | Result}

export default spected;