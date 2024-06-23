declare function tag(name: string, text?: string | false): string;
declare function tag(name: string, attribs?: Record<string, string | number | boolean>, text?: string | false): string;
export = tag;
