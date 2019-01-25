// Type definitions for uuidv4 2.0
// Project: https://github.com/thenativeweb/uuidv4#readme
// Definitions by: Rindo Hinase <https://github.com/Hinaser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const uuidv4: UUIDv4;

interface UUIDv4_is {
    (value: string): boolean;
}

type EmptyUUIDv4 = '00000000-0000-0000-0000-000000000000';

interface UUIDv4_empty {
    (): string;
}

interface UUIDv4_FromString {
    (text: string): string;
}

interface UUIDv4 {
    (): string;
    is: UUIDv4_is;
    empty: UUIDv4_empty;
    fromString: UUIDv4_FromString;
}

// If you read this because linter warns you like '... has no default export'
// please try to write import statement like
//     import * as uuidv4 from 'uuidv4'
// rather than
//     import uuidv4 from 'uuidv4'
export = uuidv4;
