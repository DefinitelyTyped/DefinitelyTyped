declare function integer_converter(value: string, next: (err: Error | null, value: number) => void): void;

export = integer_converter;
