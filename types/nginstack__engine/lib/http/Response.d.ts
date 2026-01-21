export = Response;
/**
 * Classe utilizada para acessar as informações contidas em uma resposta HTTP.
 *
 * Esta classe é instanciada automaticamente pelo sistema quando um ambiente JavaScript.
 * Neste caso, é criada a variável global response.
 *
 * Sessões que não tem relação com um atendimento HTTP, como ambientes do Scheduler,
 * não possuem esta variável global.
 *
 * Classe também publicada por meio da variável global Response.
 * @constructor
 */
declare function Response(): void;
declare class Response {
    /**
     * Tipo do conteúdo desta resposta. Deverá ser informado um <em>Media Type</em>, preferencialmente
     * um registrado pela IANA. Mais detalhes em
     * http://www.iana.org/assignments/media-types/media-types.xhtml.
     * @type {string}
     */
    contentType: string;
    /**
     * Descrição do conteúdo desta resposta.
     * @type {string}
     */
    contentDescription: string;
    /**
     * Sugestão de tratamento que deverá ser realizado pelo cliente com o conteúdo desta resposta.
     * Valores possíveis: "inline" e "attachment". Mais detalhes em
     * http://www.iana.org/assignments/cont-disp/cont-disp.xhtml.
     * @type {string}
     * @example
     *  response.contentDisposition = 'attachment; filename=data.txt';
     */
    contentDisposition: string;
    /**
     * Codificação que deve ser realizada na resposta. Valores possíveis:
     * '' (sem compressão) e 'gzip'. O valor informado somente será aceito se o
     * navegador identificar que suporta o formato na propriedade
     * "Accept-Encoding" do cabeçalho da requisição.<br>
     * Para configurar a compressão para todos os arquivos de um diretório, prefira
     * o uso da propriedade {@link SessionConfiguration#httpCompressionEnabled} no
     * x-class do diretório.
     * @type {string}
     */
    contentEncoding: string;
    /**
     * Método de codificação da transferência de dados. Uma codificação de transferência
     * é utilizada apenas no transporte dos dados e não altera o tipo de codificação
     * utilizado na resposta, indicado por {@link #contentEncoding}. Valores possíveis:
     * "none" e "chunked". Caso o protocolo em atendimento seja HTTP 1.1, o padrão será
     * "chunked".
     * @type {string}
     */
    transferEncoding: string;
    /**
     * Status da resposta. Informe 2xx para indicar sucesso, 3xx para redirecionamento, 4xx para erros
     * do cliente e 5xx para erros do servidor. Mais detalhes em
     * http://en.wikipedia.org/wiki/List_of_HTTP_status_codes.
     * @type {number}
     */
    statusCode: number;
    /**
     * Indica como deve ser realizado o controle do cache da resposta enviada pelo servidor. Valores
     * possíveis: "public", "private", "no-store" e "no-cache".
     * @type {string}
     */
    cacheControl: string;
    /**
     * Data e hora da expiração desta resposta. O cliente poderá fazer cache desta resposta
     * até a data e hora informada.
     * @type {Date}
     */
    expires: Date;
    /**
     * Adiciona o conteúdo informado na resposta a ser enviada para o cliente.
     * @param {string|Uint8Array|ArrayBuffer} content Conteúdo que será adicionado no final da
     * resposta.
     */
    write(content: string | Uint8Array | ArrayBuffer): void;
    /**
     * Adiciona o conteúdo informado acrescido de um salto de linha Windows (códigos 13 e 10) na
     * resposta a ser enviada para o cliente.
     * @param {string|Uint8Array|ArrayBuffer} content Conteúdo que será adicionado no final da resposta,
     * acrescido de um salto de linha.
     * @see #write
     */
    writeln(content: string | Uint8Array | ArrayBuffer): void;
    /**
     * Adiciona um cookie na resposta a ser enviada.
     * @param {string} name Nome do cookie.
     * @param {string} value Valor do cookie.
     * @param {Object} [options] Opções do cookie.
     * @param {string} options.domain Domínio para o qual o cliente poderá enviar o cookie.
     * @param {string} options.path Caminho da URL para a qual o cliente poderá enviar o cookie.
     * @param {Date} options.expires Data e hora na qual o cookie perderá a validade.
     * @param {boolean} options.secure Indica se o cookie somente poderá ser enviado em conexões HTTPS.
     * @param {boolean} options.httpOnly Indica que o cookie deve ser utilizado exclusivamente
     * no protocolo HTTP(S) e não estará acessível no ambiente JavaScript do cliente.
     * @param {string} options.sameSite Determina se o envio do cookie em solicitações de site
     * cruzados é permitido. Valores possíveis: `'Strict'`, `'Lax'` e `'None'`.
     */
    setCookie(name: string, value: string): void;
    /**
     * Atribui um valor a uma propriedade no header do response.
     * @param name Nome da propriedade que será inserida ou modificada.
     * @param value Valor que será atribuído a propriedade indicada.
     */
    setHeader(name: any, value: any): void;
    /**
     *  Retorna um objeto com todas as propriedades atribuídas a um determinado response.
     *  @return {any} Objeto com as propriedades e valores do response.
     */
    getAllHeaders(): any;
    /**
     * Interrompe o atendimento desta requisição, enviando a resposta até então elaborada.
     */
    stop(): void;
    /**
     * Redireciona o requisitante para a URI informada.
     * @param {string} uri Endereço destino do redirecionamento.
     * @param {boolean} [permanently] Determina se o redirecionamento é permanente e o cliente
     * sempre pode ir diretamente para o destino. Caso não seja informado, será considerado false.
     */
    redirect(uri: string, permanently?: boolean): void;
    /**
     * Interrompe o atendimento da requisição e redireciona o requisitante para a URI informada.
     * @param {string} uri Endereço destino do redirecionamento.
     * @param {boolean} [permanently] Determina se o redirecionamento é permanente e o cliente
     * sempre pode ir diretamente para o destino. Caso não seja informado, será considerado false.
     */
    stopAndRedirect(uri: string, permanently?: boolean): void;
    /**
     * Antecipa o envio da resposta para o cliente, antes de terminar a execução do script responsável
     * pelo tratamento.
     */
    send(): void;
}
