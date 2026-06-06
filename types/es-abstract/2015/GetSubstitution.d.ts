declare function GetSubstitution(
    matched: string,
    str: string,
    position: number,
    captures: ReadonlyArray<string | undefined>,
    replacement: string,
): string;
export = GetSubstitution;
