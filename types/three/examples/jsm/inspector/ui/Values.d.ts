import { ColorRepresentation, EventDispatcher } from "three";

type KeyToValueOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

declare class Value<T = Record<string, unknown>, K extends keyof T = keyof T> extends EventDispatcher {
    onChange(callback: (value: T[K]) => void): this;
}

export interface ValueNumberParams {
    value?: number;
    step?: number;
    min?: number;
    max?: number;
}

declare class ValueNumber<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, number> = KeyToValueOfType<T, number>,
> extends Value<T, K> {
    constructor(params: ValueNumberParams);
}

export interface ValueCheckboxParams {
    value?: boolean;
}

declare class ValueCheckbox<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, boolean> = KeyToValueOfType<T, boolean>,
> extends Value<T, K> {
    constructor(params: ValueCheckboxParams);
}

export interface ValueSliderParams {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
}

declare class ValueSlider<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, number> = KeyToValueOfType<T, number>,
> extends Value<T, K> {
    constructor(params: ValueSliderParams);

    setValue(val: number): this;
    step(value: number): this;
}

export interface ValueSelectParams<T, K extends keyof T> {
    options?: ReadonlyArray<T[K]> | Record<string, T[K]>;
    value?: number;
}

declare class ValueSelect<T = Record<string, unknown>, K extends keyof T = keyof T> extends Value<T, K> {
    constructor(params: ValueSelectParams<T, K>);
}

export interface ValueColorParams {
    value?: ColorRepresentation;
}

declare class ValueColor<T = Record<string, unknown>, K extends keyof T = keyof T> extends Value<T, K> {
    constructor(params: ValueColorParams);
}

export interface ValueButtonParams {
    text?: string;
    value?: () => void;
}

declare class ValueButton<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, (this: T) => void> = KeyToValueOfType<T, (this: T) => void>,
> extends Value<T, K> {
    constructor(params: ValueColorParams);
}

export { Value, ValueButton, ValueCheckbox, ValueColor, ValueNumber, ValueSelect, ValueSlider };
