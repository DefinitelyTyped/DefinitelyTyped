declare function RegExpExec(
    R: RegExp | { exec(string: string): RegExpExecArray | null },
    S: string,
): RegExpExecArray | null;
export = RegExpExec;
