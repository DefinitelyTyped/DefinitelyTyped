// Type definitions for is-data-descriptor 1.0
// Project: https://github.com/jonschlinkert/is-data-descriptor
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isDataDesc(obj: unknown): obj is PropertyDescriptor;
declare function isDataDesc<ObjectType extends object>(obj: ObjectType, key: keyof ObjectType): boolean;

export = isDataDesc;
