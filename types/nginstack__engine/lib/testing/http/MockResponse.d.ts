export = MockResponse;
declare function MockResponse(): void;
declare class MockResponse {
    headers: {};
    statusCode_: number;
    content_: string;
    contentType_: string;
    sent: boolean;
    getHeader(header: any): any;
    setHeader(header: any, value: any): void;
    write(value: any): void;
    writeln(value: any): void;
    send(): void;
}
