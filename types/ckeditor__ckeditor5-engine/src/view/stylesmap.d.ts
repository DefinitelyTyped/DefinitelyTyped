export default class StylesMap {
    readonly isEmpty: boolean;
    readonly size: number;

    constructor(styleProcessor: StylesProcessor);
    clear(): void;
    getAsString(propertyName: string): string | undefined;
    getNormalized(name: string): Record<string, string> | string | undefined;
    getStyleNames(): string[];
    has(name: string): boolean;
    remove(name: string): void;
    set(name: string, value: string): void;
    set(obj: Record<string, string>): void;
    setTo(inlineStyle: string): void;
    toString(): string;
}

export class StylesProcessor {
    getNormalized(name: string, styles: Record<string, string>): Record<string, string> | string;
    getReducedForm(name: string, styles: Record<string, string>): PropertyDescriptor[];
    getRelatedStyles(name: string): string[];
    setExtractor(name: string, callbackOrPath: string | ((styles: Record<string, any>) => Record<string, any>)): void;
    setNormalizer(name: string, callback: (notation: string) => { path: string; value: string }): void;
    setReducer(name: string, callback: (notation: any) => [property: string, value: string]): void;
    setStyleRelation(shorthandName: string, styleNames: string[]): void;
    toNormalizedForm(name: string, propertyValue: string, styles: Record<string, string>): void;
}

export interface BoxSides {
    bottom: string;
    left: string;
    right: string;
    top: string;
}

export type PropertyDescriptor = [property: string, value: string];
