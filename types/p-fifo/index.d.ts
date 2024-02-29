export = PFifo;

declare class PFifo<T> {
    constructor();
    push(chunk: T): Promise<void>;
    shift(): Promise<T>;
    isEmpty(): boolean;
}
