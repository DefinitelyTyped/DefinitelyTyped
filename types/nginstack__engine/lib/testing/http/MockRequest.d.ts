export = MockRequest;
/**
 * Classe utilizada para simular uma request nos testes unitários.
 * @param {Object} opt_options Parâmetros opcionais.
 * @param {string} [opt_options.path] Caminho utilizado na requisição.
 * @param {string} [opt_options.method] Verbo HTTP utilizado na requisição.
 * @param {Object<string>} [opt_options.headers] Cabeçalhos HTTP utilizados na requisição.
 * @param {Object<string>} [opt_options.params] Parâmetros enviados numa requisição.
 * @param {(string|Record<string,*>)} [opt_options.body] Corpo da requisição.
 * @constructor
 * @extends Request
 */
declare function MockRequest(opt_options: {
    path?: string;
    method?: string;
    headers?: any;
    params?: any;
    body?: string | Record<string, any>;
}): void;
declare class MockRequest {
    /**
     * Classe utilizada para simular uma request nos testes unitários.
     * @param {Object} opt_options Parâmetros opcionais.
     * @param {string} [opt_options.path] Caminho utilizado na requisição.
     * @param {string} [opt_options.method] Verbo HTTP utilizado na requisição.
     * @param {Object<string>} [opt_options.headers] Cabeçalhos HTTP utilizados na requisição.
     * @param {Object<string>} [opt_options.params] Parâmetros enviados numa requisição.
     * @param {(string|Record<string,*>)} [opt_options.body] Corpo da requisição.
     * @constructor
     * @extends Request
     */
    constructor(opt_options: {
        path?: string;
        method?: string;
        headers?: any;
        params?: any;
        body?: string | Record<string, any>;
    });
    /** @private */
    private path_;
    /** @private */
    private host_;
    /** @private */
    private method_;
    /** @private */
    private params_;
    /** @private */
    private content_;
    /** @private */
    private position_;
    /** @private */
    private limitReadSize_;
    /** @private */
    private headers_;
    private getHeader;
    private read;
    saveToStream(stream: any): void;
}
