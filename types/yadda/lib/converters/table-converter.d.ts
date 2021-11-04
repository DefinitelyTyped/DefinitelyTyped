declare function table_converter(value: string, next: (err: Error | null, value: string[]) => void): void;

export = table_converter;
