export = FakeResponse;
declare function FakeResponse(options?: { discardData?: boolean }): void;
declare class FakeResponse {
    constructor(options?: { discardData?: boolean });
    private discardData_;
    data: string;
    getBuffer(): string;
    write(value: string): void;
    writeln(value: string): void;
    clear(): void;
    private close;
    private stop;
}
