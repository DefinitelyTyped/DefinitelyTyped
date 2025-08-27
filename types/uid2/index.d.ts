declare function uid2(length: number): string;
declare function uid2(length: number, callback: (err: Error | null, result?: string) => void): void;

export = uid2;
