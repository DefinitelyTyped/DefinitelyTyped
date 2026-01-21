export = MockResponse;
/**
 * Classe utilizada para simular um response em testes unitários.
 * @constructor
 * @extends Response
 */
declare function MockResponse(): void;
declare class MockResponse {
    headers: {};
    /** @private */
    private statusCode_;
    /** @private */
    private content_;
    /** @private */
    private contentType_;
    /**
     * Indica que o método send foi executado.
     * @type {boolean}
     */
    sent: boolean;
    getHeader(header: any): any;
    setHeader(header: any, value: any): void;
    write(value: any): void;
    writeln(value: any): void;
    send(): void;
}
