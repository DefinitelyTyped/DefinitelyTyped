declare function pragma(input: string, option?: { parseContent?: (source: string) => any }): Record<string, any>;

export = pragma;
