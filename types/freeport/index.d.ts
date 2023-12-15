declare function freeport(cb: (err: Error | null, port: number | null) => void): void;
declare namespace freeport {}

export = freeport;
