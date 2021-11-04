declare function list_converter(value: string, next: (err: Error | null, value: string[]) => void): void;

export = list_converter;
