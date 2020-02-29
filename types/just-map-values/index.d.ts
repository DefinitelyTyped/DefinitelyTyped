// Type definitions for just-map-values 1.1
// Project: https://github.com/angus-c/just#readme
// Definitions by: Roman Lerchster <https://github.com/wa4-fearless-otter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function map<O extends {}>(item: O, callback: (value: any, key: string, object: O) => any): {};

export = map;
