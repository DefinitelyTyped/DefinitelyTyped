export = HttpError;
/**
 * Classe de erro semelhante a nativa `DetailedError``, mas com a capacidade de indicar
 * o status da resposta de uma rota HTTP. Ela permite indicar para o usuário uma possível
 * solução para o erro e separa os detalhes técnicos da mensagem a ser exibida para o usuário.
 * @param {string|Error} error Mensagem de erro a ser exibida para o usuário ou uma
 * instância de `Error` que será relançada como um erro HTTP.
 * @param {string} [solution] Procedimento que o usuário deverá realizar para que
 * o erro não seja produzido novamente.
 * @param {string} [details] Detalhes técnicos do erro. Detalhes que sejam de interesse
 * exclusivo de desenvolvedores devem ser preferencialmente informados por este parâmetro em vez
 * da mensagem de erro.
 * @param {number} [code] Código do erro, definirá qual é o código do estado da resposta HTTP.
 * @constructor
 * @extends DetailedError
 */
declare function HttpError(
    error: string | Error,
    solution?: string,
    details?: string,
    code?: number
): void;
declare class HttpError {
    /**
     * Classe de erro semelhante a nativa `DetailedError``, mas com a capacidade de indicar
     * o status da resposta de uma rota HTTP. Ela permite indicar para o usuário uma possível
     * solução para o erro e separa os detalhes técnicos da mensagem a ser exibida para o usuário.
     * @param {string|Error} error Mensagem de erro a ser exibida para o usuário ou uma
     * instância de `Error` que será relançada como um erro HTTP.
     * @param {string} [solution] Procedimento que o usuário deverá realizar para que
     * o erro não seja produzido novamente.
     * @param {string} [details] Detalhes técnicos do erro. Detalhes que sejam de interesse
     * exclusivo de desenvolvedores devem ser preferencialmente informados por este parâmetro em vez
     * da mensagem de erro.
     * @param {number} [code] Código do erro, definirá qual é o código do estado da resposta HTTP.
     * @constructor
     * @extends DetailedError
     */
    constructor(error: string | Error, solution?: string, details?: string, code?: number);
    /** @private */
    private _name;
}
declare namespace HttpError {
    /**
     * Classe de erro semelhante a HttpError, usada em controladoras para retornar erros HTTP com
     * código de estado 400 (Bad Request).
     * @example
     * const body = request.body.asJson();
     * if (!(body.name instanceof String)) {
     *   throw new HttpError.BadRequest(
     *     'O nome enviado na requisição não é uma string.',
     *     'Envie um nome válido na requisição.',
     *     'Conteúdo enviado como nome: ' + body.name + '.'
     *   );
     * }
     * @param {string} error
     * @param {string} [solution]
     * @param {string} [details]
     * @constructor
     * @inherits HttpError
     */
    function BadRequest(error: string, solution?: string, details?: string): void;
    /**
     * Classe de erro semelhante a HttpError, usada em controladoras para retornar erros HTTP com
     * código de estado 403 (Forbidden).
     * @example
     * if (!security.getPermission(classKey, 'iChange', session.userKey)) {
     *   throw new HttpError.Forbidden(
     *     'Você não tem permissão para modificar essa classe.',
     *     'Contate o administrador do sistema.',
     *     'Classe: ' + classKey + '. Usuário: ' + session.userName + ' - ' + session.userKey + '.'
     *   );
     * }
     * @param {string} error
     * @param {string} [solution]
     * @param {string} [details]
     * @constructor
     * @inherits HttpError
     */
    function Forbidden(error: string, solution?: string, details?: string): void;
    /**
     * Classe de erro semelhante a HttpError, usada em controladoras para retornar erros HTTP com
     * código de estado 404 (Not Found).
     * @example
     * if (!dbcache.tableContainsKey('iVfs', fileKey)) {
     *   throw new HttpError.NotFound(
     *     'Arquivo não encontrado.',
     *     'Envie uma chave de arquivo válida.',
     *     'Chave enviada: ' + fileKey + '.'
     *   );
     * }
     * @param {string} error
     * @param {string} [solution]
     * @param {string} [details]
     * @constructor
     * @inherits HttpError
     */
    function NotFound(error: string, solution?: string, details?: string): void;
    /**
     * Classe de erro semelhante a HttpError, usada em controladoras para retornar erros HTTP com
     * código de estado 401 (Unauthorized).
     * @example
     * if (!customAuthFunction(session.userKey)) {
     *   throw new HttpError.Unauthorized(
     *     'Usuário não autorizado.',
     *     'Contate o administrador do sistema.',
     *     'Usuário: ' + session.userName + ' - ' + session.userKey + '.'
     *   );
     * }
     * @param {string} error
     * @param {string} [solution]
     * @param {string} [details]
     * @constructor
     * @inherits HttpError
     */
    function Unauthorized(error: string, solution?: string, details?: string): void;
    /**
     * Classe de erro semelhante a HttpError, usada em controladoras para retornar erros HTTP com
     * código de estado 503 (Service Unavailable).
     * @example
     * if (!connection.isOnline) {
     *   throw new HttpError.ServiceUnavailable(
     *     'Sem conexão com a base de dados.',
     *     'Contate o administrador do sistema.'
     *   );
     * }
     * @param {string} error
     * @param {string} [solution]
     * @param {string} [details]
     * @constructor
     * @inherits HttpError
     */
    function ServiceUnavailable(error: string, solution?: string, details?: string): void;
    /**
     * Classe de erro semelhante a HttpError, usada em controladoras para retornar erros HTTP com
     * código de estado 406 (Not Acceptable).
     * @example
     * if (!accepts.type('application/json')) {
     *   throw new HttpError.NotAcceptable(
     *     'Media Type não suportada.',
     *     'Contate o administrador do sistema.'
     *   );
     * }
     * @param {string} error
     * @param {string} [opt_solution]
     * @param {string} [opt_details]
     * @constructor
     * @inherits HttpError
     */
    function NotAcceptable(error: string, opt_solution?: string, opt_details?: string): void;
}
