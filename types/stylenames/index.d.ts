export type StyleValueConditionFunction = () => boolean | null | undefined;

export type StyleValueObject = Record<string | number, boolean | StyleValueConditionFunction>;

export type StyleValue = null | undefined | string | StyleValueObject;

export type StyleObject = Partial<Record<keyof CSSStyleDeclaration, StyleValue>>;

declare function styleNames(styles: StyleObject): string;

export default styleNames;
