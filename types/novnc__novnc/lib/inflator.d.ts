export default class Inflator {
    constructor();
    setInput(data: Uint8Array | null): void;
    inflate(expected: number): Uint8Array;
    reset(): void;
}
