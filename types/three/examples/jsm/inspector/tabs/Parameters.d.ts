import { Item } from "../ui/Item.js";
import { Tab } from "../ui/Tab.js";
import { ValueButton, ValueCheckbox, ValueColor, ValueNumber, ValueSelect, ValueSlider } from "../ui/Values.js";

type KeyToValueOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

interface ValueSelectWithParameters<T = Record<string, unknown>, K extends keyof T = keyof T>
    extends ValueSelect<T, K>
{
    name: (name: string) => this;
    listen: () => this;
}

interface ValueNumberWithParameters<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, number> = KeyToValueOfType<T, number>,
> extends ValueNumber<T, K> {
    name: (name: string) => this;
    listen: () => this;
}

interface ValueSliderWithParameters<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, number> = KeyToValueOfType<T, number>,
> extends ValueSlider<T, K> {
    name: (name: string) => this;
    listen: () => this;
}

interface ValueCheckboxWithParameters<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, boolean> = KeyToValueOfType<T, boolean>,
> extends ValueCheckbox<T, K> {
    name: (name: string) => this;
    listen: () => this;
}

interface ValueButtonWithParameters<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, (this: T) => void> = KeyToValueOfType<T, (this: T) => void>,
> extends ValueButton<T, K> {
    name: (name: string) => this;
}

interface ValueColorWithParameters<
    T = Record<string, unknown>,
    K extends keyof T = keyof T,
> extends ValueColor<T, K> {
    name: (name: string) => this;
    listen: () => this;
}

declare class ParametersGroup {
    name: string;

    paramList: Item;

    constructor(parameters: never, name: string);

    add<T, K extends keyof T>(
        object: T,
        property: K,
        options: ReadonlyArray<T[K]> | Record<string, T[K]>,
    ): ValueSelectWithParameters<T, K>;
    add<T, K extends KeyToValueOfType<T, number>>(
        object: T,
        property: K,
        min: number,
        max: number,
        step?: number,
    ): ValueSliderWithParameters<T, K>;
    add<T, K extends KeyToValueOfType<T, number>>(
        object: T,
        property: K,
        min?: number,
    ): ValueNumberWithParameters<T, K>;
    add<T, K extends KeyToValueOfType<T, boolean>>(
        object: T,
        property: K,
        options?: never,
    ): ValueCheckboxWithParameters<T, K>;
    add<T, K extends KeyToValueOfType<T, (this: T) => void>>(
        object: T,
        property: K,
        options?: never,
    ): ValueButtonWithParameters<T, K>;

    addFolder(name: string): ParametersGroup;

    addColor<T, K extends keyof T>(object: T, property: K, rgbScale?: number): ValueColorWithParameters<T, K>;
}

declare class Parameters extends Tab {
    createGroup(name: string): ParametersGroup;
}

export { Parameters };
export type { ParametersGroup };
