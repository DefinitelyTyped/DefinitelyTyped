declare function GetSubstitution(
    matched: string,
    str: string,
    position: number,
    captures: ReadonlyArray<string | undefined>,
    namedCaptures: undefined | { [groupName: string]: unknown },
    replacement: string,
): string;
export = GetSubstitution;
