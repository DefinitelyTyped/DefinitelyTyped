// Type definitions for harmon 1.4
// Project: https://github.com/No9/harmon
// Definitions by: Eric Danowski <https://github.com/micronaut>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function harmonBinary(reqSelectors?: Select[], resSelectors?: Select[], htmlOnly?: boolean): any;

export interface Select {
    query: string;
    func(node: any): any;
}
