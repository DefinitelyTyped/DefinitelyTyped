declare function toTitleCase(input: string): string;

declare namespace toTitleCase {
    function toTitleCase(input: string): string;
    function toLaxTitleCase(input: string): string;
}

export = toTitleCase;
