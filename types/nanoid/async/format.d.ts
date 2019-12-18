declare function format(
    random: (bytes: number) => Promise<number[]>,
    alphabet: string,
    size: number
): Promise<string>;

export = format;
