// Type definitions for stylenames 1.1
// Project: https://github.com/kmathmann/stylenames
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export type StyleValueConditionFunction = () => boolean | null | undefined;

export type StyleValueObject = Record<string | number, boolean | StyleValueConditionFunction>;

export type StyleValue = null | undefined | string | StyleValueObject;

export type StyleObject = Partial<Record<keyof CSSStyleDeclaration, StyleValue>>;

declare function styleNames(styles: StyleObject): string;

export default styleNames;
