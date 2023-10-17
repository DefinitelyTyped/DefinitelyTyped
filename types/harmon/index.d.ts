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
