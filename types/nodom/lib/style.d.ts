export class CSSStyleDeclaration {
    cssText: string;

    setProperty(propertyName: string, value: string, priority?: string): void;

    valueOf(): this;

    setValue(style: string): void;
}
