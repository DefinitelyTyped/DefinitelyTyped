export = Request;
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * Classe utilizada para acessar as informações contidas em
 * uma requisição HTTP.
 *
 * Esta classe é criada automaticamente pelo sistema quando um ambiente JavaScript
 * está atendendo uma requisição HTTP. Neste caso, é criada a variável global request.
 * Sessões que não tem relação com um atendimento HTTP, como ambientes do Scheduler,
 * não possuem esta variável global.
 *
 * Classe também publicada por meio da variável global Request.
 * @constructor
 */
declare function Request(): void;
declare class Request {
    /**
     * Conteúdo enviado pelo cliente no corpo da requisição.
     *
     * **Importante**: essa propriedade aloca o corpo da requisição em memória e não deve ser
     * utilizada em requisições de tamanho elevado. Tentar ler o corpo de uma requisição com mais de
     * 20MB irá gerar um erro. Utilize o método {@link #read} para tratar requisições maiores.
     *
     * @type {string}
     * @see #contentType
     * @see #xml
     * @see #read
     */
    content: string;
    /**
     * Tamanho em bytes do conteúdo contido no corpo da requisição informado pelo cliente por meio
     * do cabeçalho *content-length*.
     *
     * O valor desta propriedade poderá ser diferente do tamanho de {@link #content} no caso
     * de conteúdos textuais codificados em UTF-8. O Engine converterá automaticamente esses
     * conteúdos para ISO-8859-1, o que poderá provocar uma redução do tamanho do conteúdo
     * disponibilizado pela propriedade {@link #content}. Nesses casos, o método {@link #read} pode
     * ser utilizado para ter acesso ao conteúdo original enviado pelo cliente.
     * @type {number}
     * @see #content
     * @see #read
     */
    contentLength: number;
    /**
     * Tipo de mídia do conteúdo enviado pelo cliente.
     *
     * Ver http://www.iana.org/assignments/media-types/media-types.xhtml para mais detalhes.
     * @type {string}
     * @see #content
     * @see #xml
     */
    contentType: string;
    /**
     * Representação DOM dos dados enviados pelo browser para o servidor. Esta propriedade
     * somente estará preenchida quando o tipo dos dados enviados for "text/xml". Para
     * outros tipos, será null.
     * @type {string}
     * @see #content
     * @see #contentType
     */
    xml: string;
    /**
     * Endereço IP da interface de rede que atendeu a requisição HTTP.
     * @type {string}
     * @see #localHost
     * @see #localPort
     * @see #remoteAddress
     * @see #remoteHost
     * @see #remotePort
     */
    localAddress: string;
    /**
     * Nome associado ao endereço IP da interface de rede que atendeu a requisição HTTP.
     * @type {string}
     * @see #localAddress
     * @see #localPort
     * @see #remoteAddress
     * @see #remoteHost
     * @see #remotePort
     */
    localHost: string;
    /**
     * Porta TCP que atendeu a requisição HTTP.
     * @type {number}
     * @see #localAddress
     * @see #localHost
     * @see #remoteAddress
     * @see #remoteHost
     * @see #remotePort
     */
    localPort: number;
    /**
     * Endereço IP do computador que realizou a requisição HTTP.
     * @type {string}
     * @see #remoteHost
     * @see #remotePort
     * @see #localAddress
     * @see #localHost
     * @see #localPort
     */
    remoteAddress: string;
    /**
     * Nome do computador que realizou a requisição HTTP.
     * @type {string}
     * @see #remoteAddress
     * @see #remotePort
     * @see #localAddress
     * @see #localHost
     * @see #localPort
     */
    remoteHost: string;
    /**
     * Porta TCP utilizada pelo computador remoto para realizar a requisição HTTP.
     * @type {number}
     * @see #remoteAddress
     * @see #remoteHost
     * @see #localAddress
     * @see #localHost
     * @see #localPort
     */
    remotePort: number;
    /**
     * Nome do servidor solicitado pelo usuário. Caso a URL informada seja "www.company.com/index.htm",
     * o host será "www.company.com".
     * @type {string}
     */
    host: string;
    /**
     * Indica o método HTTP que será sendo invocado. Poderá ser: GET, POST, PUT, PATCH, DELETE, HEAD ou
     * OPTIONS.
     * @type {string}
     */
    method: string;
    /**
     * Indica o método HTTP que será sendo invocado. Poderá ser: GET, POST, PUT, PATCH, DELETE, HEAD ou
     * OPTIONS.
     * @type {string}
     * @deprecated Utilize {@link #method}.
     */
    methodType: string;
    /**
     * Cabeçalho HTTP que indica as línguas desejadas pelo requisitante.
     * @type {string}
     */
    acceptLanguage: string;
    /**
     * Arquivo requisitado. Caso a URL informada seja "www.company.com.br/index.htm",
     * o path será "/index.htm".
     * @type {string}
     */
    path: string;
    /**
     * Arquivo que originou a requisição. Exemplo: se o cliente abrir a página /index.htm e nesta
     * for requisitado um segundo documento, o referer deste último será /index.htm.
     * @type {string}
     */
    referer: string;
    /**
     * Identificação do aplicativo cliente que fez a requisição HTTP.
     * @type {string}
     */
    userAgent: string;
    /**
     * Mensagem HTTP completa.
     * @type {string}
     */
    httpMessage: string;
    /**
     * Quantidade de cookies enviados na requisição.
     * @type {number}
     */
    cookieCount: number;
    /**
     * Retorna um objeto com todos os parâmetros informados na "query string" da URL da requisição. Para
     * possibilitar a pesquisa, os nomes dos parâmetros serão em minúsculo no objeto retornado. Caso
     * haja um parâmetro definido mais de uma vez, será considerado o último valor informado na URL.
     * Mais detalhes em http://en.wikipedia.org/wiki/Query_string.
     * @type {Object<string>}
     */
    params: any;
    /**
     * Cabeçalhos informados na requisição HTTP representados por um objeto cujos nomes de
     * propriedades são os nomes dos campos de cabeçalho, normalizados em caixa baixa,
     * e os valores das propriedades são os valores dos campos de cabeçalho.
     * @example
     * // Script que exibe todos os cabeçalhos enviados pelo navegador
     * const headers = request.headers;
     * for (const name in headers){
     *    response.write(name + ": " + headers[name] + "<br>");
     * }
     * @type {Record<string,string>}
     */
    headers: Record<string, string>;
    /**
     * Corpo da requisição.
     * @type {RequestBody}
     */
    body: RequestBody;
    /**
     * Quantidade de parâmetros enviados na requisição. Parâmetros podem ser enviados no corpo
     * da requisição ou na <em>query string</em> da URL.
     * @type {number}
     */
    parameterCount: number;
    /**
     * Tempo máximo de espera em milissegundos para a leitura do conteúdo. O timeout de leitura será
     * empregado no método {@link #read} quando for solicitada uma quantidade de dados superior
     * ao que já foi recebido do cliente.
     * @type {number}
     */
    readTimeout: number;
    /**
     * Obtém o valor do parâmetro informado.
     * @param {number|string} indexOrName Índice ou nome do parâmetro. O índice é um valor dentro da
     * faixa de 0 a {@link #parameterCount} - 1.
     * @return {string} Valor do parâmetro.
     * @deprecated
     * @see #parameterCount
     */
    getParameter(indexOrName: number | string): string;
    /**
     * Obtém um parâmetro informado na "query string" da URL da requisição. Mais detalhes do
     * formato em http://en.wikipedia.org/wiki/Query_string.
     * @param {string} name Nome do parâmetro.
     * @param {*} opt_default Valor padrão a ser utilizado caso o parâmetro não tenha sido informado na
     * URL. Caso não seja informado, será considerado null.
     * @return {string} Valor do parâmetro informado ou "opt_default" caso não haja o parâmetro
     * informado na "query string" da URL.
     */
    param(name: string, opt_default: any): string;
    /**
     * Obtém o nome do parâmetro informado.
     * @param {number|string} index Índice do parâmetro. O índice é um valor dentro da faixa
     * de 0 a {@link #parameterCount} - 1.
     * @see #parameterCount
     */
    getParameterName(index: number | string): void;
    /**
     * Obtém o valor do cookie informado.
     * @param {number|string} indexOrName Índice ou nome do cookie. O índice é um valor dentro da faixa
     * de 0 a {@link #cookieCount} - 1.
     * @see #cookieCount
     */
    getCookie(indexOrName: number | string): void;
    /**
     * Obtém o nome do cookie na posição informada.
     * @param index Índice ou nome do cookie. O índice é um valor dentro da faixa
     * de 0 a {@link #cookieCount} - 1.
     * @see #cookieCount
     */
    getCookieName(index: any): void;
    /**
     * Lê o conteúdo do cabeçalho informado da requisição HTTP. Retorna vazio, caso
     * o cabeçalho não tenha sido preenchido pelo cliente.
     * @example
     * // Verifica se o navegador aceita a compressão da resposta utilizando o
     * // algoritmo Gzip
     * var encodings = request.getHeader("Accept-Encoding")
     * encodings = encodings.toLowerCase().split(",")
     * var useGzip = encodings.indexOf("gzip") >= 0
     * @return {string}
     */
    getHeader(name: any): string;
    /**
     * Lê os dados contidos no corpo da requisição.
     *
     * O uso deste método é recomendado para requisições de tamanho elevado, como upload de arquivos,
     * pois ele permite que o conteúdo seja lido parcialmente, sem que seja necessário alocar o
     * conteúdo inteiro da requisição em memória.
     *
     * **Importante**: ao utilizar este método para ler o corpo da requisição, nenhum tratamento
     * automático de codificação de UTF-8 para ISO-8859-1 será realizado, nem poderão ser utilizadas
     * outras propriedades ou métodos de acesso ao corpo da requisição, como {@link #content}.
     * A propriedade {@link #httpMessage} não exibirá o conteúdo da requisição e {@link #params}
     * não irá considerar os parâmetros informados no corpo da requisição, mesmo que o tipo
     * do conteúdo seja *application/x-www-form-urlencoded*.
     *
     * @example
     * var timeout = 60000;
     * var outFile = new File(File.getTempFileName());
     * var remain = request.contentLength;
     * while (remain > 0 && Date.now() < timeout) {
     *   var buffer = request.read(Math.min(1024, remain));
     *   remain -= buffer.length;
     *   outFile.write(buffer);
     * }
     *
     * @param {number} size Quantidade de dados a serem lidos. O método bloqueará até que a
     * quantidade de dados solicitada esteja disponível ou irá gerar um erro
     * caso o tempo limite {@link #readTimeout} seja atingido. No máximo poderá ser
     * solicitado 1 MB de dados a cada leitura, será lançada uma exceção caso seja solicitado um
     * valor superior a esse.
     * @return {string} Dados lidos do corpo da requisição.
     * @see #content
     */
    read(size: number): string;
    /**
     * Avalia se a requisição foi estabelecida utilizando o protocolo HTTPS.
     *
     * A conexão HTTPS pode ter sido estabelecida diretamente até o Engine ou indiretamente via um
     * proxy reverso configurado com o certificado digital. Neste último caso, o tráfego entre o proxy
     * reverso e o Engine pode ter sido estabelecido via HTTP.
     * @param {boolean} [trustProxy=true] Indica se o cabeçalho "x-forwarded-proto" recebido deve
     * ser considerado como confiável para avaliar se o protocolo utilizado foi o HTTPS.
     * @return {boolean} True se a conexão for HTTPS.
     */
    isHttps(trustProxy?: boolean): boolean;
    /**
     * Grava o corpo da requisição no arquivo ou stream informado.
     * @example
     * const file = new File(path);
     * try {
     *   request.saveToStream(file);
     * } finally {
     *   file.close();
     * }
     * @param {File|MemoryStream} stream Objeto stream onde o corpo da requisição será gravado.
     */
    saveToStream(stream: File | MemoryStream): void;
}
declare namespace Request {
    export { DBKey, File, MemoryStream };
}
import RequestBody = require('./RequestBody.js');
type DBKey = import('../dbkey/DBKey');
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
