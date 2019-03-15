// Type definitions for stringify-attributes 1.0
// Project: https://github.com/sindresorhus/stringify-attributes#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = stringifyAttributes;

declare function stringifyAttributes(attributes: stringifyAttributes.Attributes): string;

declare namespace stringifyAttributes {
    interface Attributes {
        [attrName: string]: string | number | boolean | Array<string | number>;
    }
}
