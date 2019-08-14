// Type definitions for uuidv4 2.0
// Project: https://github.com/thenativeweb/uuidv4#readme
// Definitions by: Rindo Hinase <https://github.com/Hinaser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = uuidv4;

declare function uuidv4(): string;

declare namespace uuidv4 {
    type EmptyUUIDv4 = '00000000-0000-0000-0000-000000000000';

    function is(value: string): boolean;

    function empty(): string;

    function fromString(text: string): string;
}
