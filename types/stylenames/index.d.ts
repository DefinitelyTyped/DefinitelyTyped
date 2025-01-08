declare namespace styleNames {
    type StyleValueConditionFunction = () => boolean | null | undefined;

    type StyleValueObject = Record<string | number, boolean | StyleValueConditionFunction>;

    type StyleValue = null | undefined | string | StyleValueObject;

    type StyleObject = Partial<Record<keyof CSSStyleDeclaration, StyleValue>>;
}

declare function styleNames(styles: styleNames.StyleObject): string;

export = styleNames;
