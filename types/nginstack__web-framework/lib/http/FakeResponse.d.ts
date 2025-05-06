export = FakeResponse;
declare function FakeResponse(options?: { discardData?: boolean }): void;
declare class FakeResponse {
    constructor(options?: { discardData?: boolean });
    discardData_: boolean;
    data: string;
    getBuffer(): string;
    write(value: string): void;
    writeln(value: string): void;
    clear(): void;
    private close;
    private stop;
}
