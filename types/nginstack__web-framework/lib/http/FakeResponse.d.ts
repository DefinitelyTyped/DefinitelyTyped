export = FakeResponse;
declare function FakeResponse(): void;
declare class FakeResponse {
    data: string;
    getBuffer(): string;
    write(value: string): void;
    writeln(value: string): void;
    clear(): void;
    private close;
    private stop;
}
