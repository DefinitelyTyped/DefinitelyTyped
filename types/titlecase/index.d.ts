// Type definitions for titlecase 1.1
// Project: https://github.com/rvagg/titlecase#readme
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function toTitleCase(input: string): string;

declare namespace toTitleCase {
    function toTitleCase(input: string): string;
    function toLaxTitleCase(input: string): string;
}

export = toTitleCase;
