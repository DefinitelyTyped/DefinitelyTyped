// Type definitions for harmon 1.4
// Project: https://github.com/No9/harmon
// Definitions by: Eric Danowski <https://github.com/micronaut>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function harmonBinary(
    reqSelectors?: harmonBinary.Select[],
    resSelectors?: harmonBinary.Select[],
    htmlOnly?: boolean,
): any;
declare namespace harmonBinary {
    interface Select {
        query: string;
        func(node: any): any;
    }
}

export = harmonBinary;
