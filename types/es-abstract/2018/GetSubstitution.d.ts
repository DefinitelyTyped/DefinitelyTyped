declare function GetSubstitution(
    matched: string,
    str: string,
    position: number,
    captures: string[],
    namedCaptures: undefined | { [groupName: string]: unknown },
    replacement: string,
): string;
export = GetSubstitution;
