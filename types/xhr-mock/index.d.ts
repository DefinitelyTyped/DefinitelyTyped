// Type definitions for xhr-mock 1.9
// Project: https://github.com/jameslnewell/xhr-mock#readme
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace mock {
    interface Headers {
        [k: string]: string;
    }

    interface MockResponse {
        status(code: number): this;
        status(): number;
        statusText(statusText: string): this;
        statusText(): string;
        header(name: string, value: string): this;
        header(name: string): string | null;
        headers(obj: Headers): this;
        headers(): Headers;
        body(body: string): this;
        body(): string;
        timeout(timeout: boolean | number): this;
        timeout(): boolean | number;
    }

    interface MockRequest {
        method(): string;
        url(): string;
        query(): string;
        header(name: string, value: string): this;
        header(name: string): string | null;
        headers(obj: Headers): this;
        headers(): Headers;
        body(body: string): this;
        body(): string;
        progress(loaded: number, total: number, lengthComputable?: boolean): void;
    }

    type MockFunction = (req: MockRequest, res: MockResponse) => MockResponse | null;

    interface XhrMock {
        XMLHttpRequest: XMLHttpRequest;
        setup(): this;
        teardown(): this;
        reset(): this;
        mock(method: string, url: string, fn: MockFunction): this;
        get(url: string, fn: MockFunction): this;
        post(url: string, fn: MockFunction): this;
        put(url: string, fn: MockFunction): this;
        patch(url: string, fn: MockFunction): this;
        delete(url: string, fn: MockFunction): this;
    }
}

declare var mock: mock.XhrMock;
export = mock;
