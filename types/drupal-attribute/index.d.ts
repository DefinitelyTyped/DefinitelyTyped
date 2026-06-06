declare class DrupalAttribute extends Map {
    constructor(it: any);

    addClass(...args: string[]): this;
    removeClass(value: string): this;
    hasClass(value: string): boolean;
    setAttribute(key: string, value: string): this;
    removeAttribute(key: string): this;
    toString(): string;
}

export = DrupalAttribute;
