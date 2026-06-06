declare function float_converter(value: string, next: (err: Error | null, value: number) => void): void;

export = float_converter;
