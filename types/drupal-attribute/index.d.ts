// Type definitions for drupal-attribute 1.0
// Project: https://github.com/ericmorand/drupal-attribute
// Definitions by: Victor Castro-Cintas <https://github.com/vcastro45>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
