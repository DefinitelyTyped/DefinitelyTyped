declare function pass_through_converter(value: string, next: (err: Error | null, value: string) => void): void;

export = pass_through_converter;
