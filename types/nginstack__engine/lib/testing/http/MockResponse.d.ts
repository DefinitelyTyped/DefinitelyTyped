export = MockResponse;
declare function MockResponse(): void;
declare class MockResponse {
    headers: {};
    private statusCode_;
    private content_;
    private contentType_;
    sent: boolean;
    getHeader(header: any): any;
    setHeader(header: any, value: any): void;
    write(value: any): void;
    writeln(value: any): void;
    send(): void;
}
