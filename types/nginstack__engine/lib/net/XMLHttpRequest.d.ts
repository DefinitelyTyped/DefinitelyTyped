export = XMLHttpRequest;
/**
 * Objeto literal com configurações opcionais. Em propriedades onde são informadas um path são
 * válidos caminhos de arquivos do Sistema Operacional, assim como de arquivos da Virtual File
 * System(prefixado por 'vfs:').
 * @typedef {Object} XHRConfig
 * @property {string} [keyPath] Path do arquivo contendo uma chave privada RSA no formato PEM
 * @property {string} [certPath] Path do arquivo contendo Certificado cliente no formato PEM
 * @property {string} [pfxPath] Path para um arquivo PKCS#12(pfx). As propriedades
 * keyPath e certPath não devem ser informadas, caso a propriedade pfxPath seja definida.
 * @property {string} [passphrase] Senha usada para decodificar a chave privada ou o arquivo
 * pfx
 * @property {boolean} [ignoreSslErrors] Se verdadeiro, não será validado o certificado do
 * servidor remoto. **Importante**: ativar essa opção desativa a proteção do protocolo
 * HTTPS, tornando a comunicação vulnerável para ataques de interceptação. Essa opção deve ser
 * utilizada apenas para testes em ambientes controlados. Em produção, o certificado do servidor
 * sempre deve ser validado. Caso esteja tendo problemas com certificados digitais,
 * consulte a dúvida "Como diagnosticar erros de configuração de certificados digitais?"
 * em https://nginstack.com/faq/engine/.
 * @property {string} [proxy] Configuração do servidor proxy a ser utilizado na requisição
 * HTTP. Deve ser informado o endereço de um servidor proxy, como "socks5://host:port", ou os
 * valores especiais "auto" e "no_proxy". O valor "auto" indica que deve ser utilizado o servidor
 * proxy definido no sistema operacional por meio das variáveis de ambiente `HTTP_PROXY` e
 * `HTTPS_PROXY`, e o valor "no_proxy" desabilita o uso do proxy. Caso não seja informada, será
 * utilizada a configuração de proxy padrão do sistema, definida pela variável de
 * ambiente `ENGINE_PROXY` ou pela opção de linha de comando `--NoProxy`.
 */
/**
 * Classe nativa que permite a comunicação entre duas aplicações por meio do protocolo HTTP. É
 * implementado a mesma API presente nos browsers. Entretanto, não há suporte para conexões
 * assíncronas, nem para objetos DOM(XML).
 * @example
 * // Exemplo do consumo de uma API HTTP
 * const data = JSON.stringify({
 *   test: 'echo'
 * });
 * const authToken = 'secret-token';
 * const xhr = new XMLHttpRequest();
 * xhr.open('POST', 'https://postman-echo.com/post');
 * xhr.setRequestHeader('Content-Type', 'application/json');
 * xhr.setRequestHeader('Authorization', 'Bearer ' + authToken);
 * xhr.send(data);
 * JSON.parse(xhr.responseText).data.test; // => echo
 *
 * @example
 * // Exemplo de uma requisição SOAP para o serviço de consulta de retorno de processamento do MDFe
 * const XMLHttpRequest = require('@nginstack/engine/lib/net/XMLHttpRequest');
 *
 * const xml = buildXml();
 *
 * const xhr = new XMLHttpRequest({
 *   pfxPath: File.pathAppend('certificates', 'company.pfx'),
 *   passphrase: 'secret_passphrase'
 * });
 * xhr.open('POST', 'https://mdfe-homologacao.svrs.rs.gov.br/ws/mdferetrecepcao/MDFeRetRecepcao.asmx');
 * xhr.setRequestHeader('Content-Type', 'application/soap+xml');
 * xhr.setRequestHeader('SOAPAction', 'urn:MDFeRetRecepcao');
 * xhr.send(xml);
 * xhr.responseText; // => xml com resultado do processamento
 *
 * @param {XHRConfig} [options] Opções da requisição a ser realizada. Para mais detalhes das opções
 * disponíveis, veja {@link module:@nginstack/engine/lib/net/XMLHttpRequest}.
 * @constructor
 */
declare function XMLHttpRequest(options?: XHRConfig): void;
declare class XMLHttpRequest {
    /**
     * Objeto literal com configurações opcionais. Em propriedades onde são informadas um path são
     * válidos caminhos de arquivos do Sistema Operacional, assim como de arquivos da Virtual File
     * System(prefixado por 'vfs:').
     * @typedef {Object} XHRConfig
     * @property {string} [keyPath] Path do arquivo contendo uma chave privada RSA no formato PEM
     * @property {string} [certPath] Path do arquivo contendo Certificado cliente no formato PEM
     * @property {string} [pfxPath] Path para um arquivo PKCS#12(pfx). As propriedades
     * keyPath e certPath não devem ser informadas, caso a propriedade pfxPath seja definida.
     * @property {string} [passphrase] Senha usada para decodificar a chave privada ou o arquivo
     * pfx
     * @property {boolean} [ignoreSslErrors] Se verdadeiro, não será validado o certificado do
     * servidor remoto. **Importante**: ativar essa opção desativa a proteção do protocolo
     * HTTPS, tornando a comunicação vulnerável para ataques de interceptação. Essa opção deve ser
     * utilizada apenas para testes em ambientes controlados. Em produção, o certificado do servidor
     * sempre deve ser validado. Caso esteja tendo problemas com certificados digitais,
     * consulte a dúvida "Como diagnosticar erros de configuração de certificados digitais?"
     * em https://nginstack.com/faq/engine/.
     * @property {string} [proxy] Configuração do servidor proxy a ser utilizado na requisição
     * HTTP. Deve ser informado o endereço de um servidor proxy, como "socks5://host:port", ou os
     * valores especiais "auto" e "no_proxy". O valor "auto" indica que deve ser utilizado o servidor
     * proxy definido no sistema operacional por meio das variáveis de ambiente `HTTP_PROXY` e
     * `HTTPS_PROXY`, e o valor "no_proxy" desabilita o uso do proxy. Caso não seja informada, será
     * utilizada a configuração de proxy padrão do sistema, definida pela variável de
     * ambiente `ENGINE_PROXY` ou pela opção de linha de comando `--NoProxy`.
     */
    /**
     * Classe nativa que permite a comunicação entre duas aplicações por meio do protocolo HTTP. É
     * implementado a mesma API presente nos browsers. Entretanto, não há suporte para conexões
     * assíncronas, nem para objetos DOM(XML).
     * @example
     * // Exemplo do consumo de uma API HTTP
     * const data = JSON.stringify({
     *   test: 'echo'
     * });
     * const authToken = 'secret-token';
     * const xhr = new XMLHttpRequest();
     * xhr.open('POST', 'https://postman-echo.com/post');
     * xhr.setRequestHeader('Content-Type', 'application/json');
     * xhr.setRequestHeader('Authorization', 'Bearer ' + authToken);
     * xhr.send(data);
     * JSON.parse(xhr.responseText).data.test; // => echo
     *
     * @example
     * // Exemplo de uma requisição SOAP para o serviço de consulta de retorno de processamento do MDFe
     * const XMLHttpRequest = require('@nginstack/engine/lib/net/XMLHttpRequest');
     *
     * const xml = buildXml();
     *
     * const xhr = new XMLHttpRequest({
     *   pfxPath: File.pathAppend('certificates', 'company.pfx'),
     *   passphrase: 'secret_passphrase'
     * });
     * xhr.open('POST', 'https://mdfe-homologacao.svrs.rs.gov.br/ws/mdferetrecepcao/MDFeRetRecepcao.asmx');
     * xhr.setRequestHeader('Content-Type', 'application/soap+xml');
     * xhr.setRequestHeader('SOAPAction', 'urn:MDFeRetRecepcao');
     * xhr.send(xml);
     * xhr.responseText; // => xml com resultado do processamento
     *
     * @param {XHRConfig} [options] Opções da requisição a ser realizada. Para mais detalhes das opções
     * disponíveis, veja {@link module:@nginstack/engine/lib/net/XMLHttpRequest}.
     * @constructor
     */
    constructor(options?: XHRConfig);
    /**
     * Prepara o objeto para a realização de uma conexão. Em conexões seguras, se o certificado
     * não for válido ocorrerá um erro. Para ignorar a validade do certificado,
     * é necessário definir a variável de ambiente do sistema operacional
     * NGIN_TLS_REJECT_UNAUTHORIZED com o valor 0, ou informar o atributo ignoreSslErrors no
     * construtor do objeto
     * @param {string} method Método Http a ser utilizado.
     * @param {string} url Url a ser utilizada.
     * @param {boolean} [async] Parâmetro opcional para indicar que a requisição deve ser assíncrona.
     * Este parâmetro não aceita o valor verdadeiro como válido e existe apenas para adequar-se à
     * especificação do XMLHttpRequest. Por uma limitação do sistema, apenas requisições síncronas
     * são aceitas.
     * @param {string} [username] Nome de usuário. Parâmetro opcional usado na autenticação básica.
     * @param {string} [password] Senha do usuário. Parâmetro opcional usado na autenticação básica.
     */
    open(method: string, url: string): void;
    /**
     * Define um campo do cabeçalho da requisição Http a ser enviada.
     * @param {string} header Nome do campo.
     * @param {string} value Conteúdo do campo.
     */
    setRequestHeader(header: string, value: string): void;
    /**
     * Inicia a requisição utilizando o argumento `body` como corpo da requisição.
     *
     * **Importante:** por motivos de compatibilidade, o servidor HTTP do Engine considera que o
     * corpo das requisições contendo dados textuais é codificado em "windows-1252" caso não haja
     * um *charset* explicitamente definido no cabeçalho "content-type", exceto quando o conteúdo
     * recebido é do tipo "application/json". Nesse caso, o Engine trata por padrão como "UTF-8".
     * Por esse motivo, ao usar a classe `XMLHttpRequest` para enviar dados textuais que não sejam
     * JSON para um servidor Engine, defina explicitamente o charset UTF-8 conforme exemplos
     * a seguir.
     * @example
     * const xhr = new XMLHttpRequest();
     * xhr.open('POST', 'http://' + engine.localAddress + ':' + engine.localPort);
     * xhr.setRequestHeader('content-type', 'application/json');
     * xhr.send(data);
     * @example
     * const xhr = new XMLHttpRequest();
     * xhr.open('POST', 'http://' + engine.localAddress + ':' + engine.localPort);
     * xhr.setRequestHeader('content-type', 'application/xml; charset=UTF-8');
     * xhr.send(data);
     * @param {(string|ArrayBuffer)} [body] Conteúdo a ser enviado no corpo da requisição. Quando
     * informado um valor textual, ele sempre será enviado na codificação UTF-8. Caso o cabeçalho
     * "content-type" defina um charset diferente de "UTF-8", ele será ignorado e sobrescrito com
     * o valor "UTF-8", conforme [especificação WHATWG](https://xhr.spec.whatwg.org/#the-send%28%29-method).
     */
    send(body?: string | ArrayBuffer): void;
    /**
     * Tempo máximo de espera pelo término de uma requisição em milissegundos. O padrão é 30000 ms.
     * @type {number}
     */
    timeout: number;
    /**
     * Indica o estado da conexão.
     * @type {number}
     */
    readyState: number;
    /**
     * Informa o código retornado pelo servidor HTTP.
     * @type {number}
     */
    status: number;
    /**
     * Informa a descrição do status retornado pelo servidor HTTP.
     * @type {string}
     */
    statusText: string;
    /**
     * Obtém o conteúdo da resposta da requisição HTTP. Equivale a `response` quando
     * a propriedade `responseType` for 'text' ou não estiver definida.
     *
     * Caso o *charset* não esteja definido no cabeçalho `content-type` da resposta, o conteúdo da
     * resposta será codificado para UTF-8 apenas se o tipo for considerado textual. Este comportamento
     * difere da especificação oficial, que sempre converte para UTF-8 em caso de charset nulo.
     *
     * Caso o tipo de mídia seja XML, o cabeçalho da resposta não possua *charset* e a propriedade
     * `responseType` não esteja definida, o conteúdo será codificado de acordo com o *encoding*
     * declarado no XML.
     *
     * @type {string}
     */
    responseText: string;
    /**
     * Define o tipo de dado a ser usado na propriedade response. Os possíveis valores são
     * 'json', 'text' e 'arraybuffer'. No tipo 'json', a propriedade response equivale a invocação do
     * método JSON.parse tendo como parâmetro o corpo da resposta da requisição. No tipo 'arraybuffer'
     * a propriedade response retorna um ArrayBuffer contendo o conteúdo exato do corpo da requisição.
     * Já para o tipo 'text', ou quando nenhum valor é definido, será retornado uma string na
     * propriedade response.
     * @type {string}
     * @see #response
     */
    responseType: string;
    /**
     * Obtém o conteúdo do corpo da resposta da requisição. Equivale a `responseText` quando
     * a propriedade `responseType` for 'text' ou não estiver definida.
     * @type {(string|ArrayBuffer|Record<*,*>)}
     * @see #responseType
     */
    response: string | ArrayBuffer | Record<any, any>;
    /**
     * Obtém o conteúdo de um cabeçalho da resposta do servidor HTTP.
     *
     * Observação: quando o servidor codifica a resposta usando *deflate*, *gzip* ou *brotli*, o conteúdo
     * é decodificado automaticamente e os cabeçalhos `content-encoding` e `content-length` ficam
     * indisponíveis. Este comportamento difere da especificação oficial.
     *
     * @param {string} header O nome do cabeçalho
     * @return {string} O valor do cabeçalho
     */
    getResponseHeader(header: string): string;
    /**
     * Obtém todos os cabeçalhos do retorno.
     *
     * Observação: quando o servidor codifica a resposta usando *deflate*, *gzip* ou *brotli*, o conteúdo
     * é decodificado automaticamente e os cabeçalhos `content-encoding` e `content-length` ficam
     * indisponíveis. Este comportamento difere da especificação oficial.
     *
     * @return {string} Todos os cabeçalhos da resposta da requisição, no formato `nome: valor`,
     * separados por `CRLF`, com os nomes dos campos de cabeçalho normalizados em caixa baixa.
     */
    getAllResponseHeaders(): string;
    /**
     * Especifica um MIME type para ser usado no lugar do fornecido pelo servidor ao interpretar os
     * dados da resposta. Deve ser usado antes de `send()`.
     * @example
     * const xhr = new XMLHttpRequest();
     * xhr.open('GET', 'http://my/url');
     * xhr.overrideMimeType('text/plain; charset=utf-8');
     * xhr.send();
     * @param {string} mimeType O MIME type a ser utilizado. Caso não seja um MIME type válido,
     * `application/octet-stream` será usado no lugar.
     */
    overrideMimeType(mimeType: string): void;
}
declare namespace XMLHttpRequest {
    export { UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE, XHRConfig };
}
declare let UNSENT: number;
declare let OPENED: number;
declare let HEADERS_RECEIVED: number;
declare let LOADING: number;
declare let DONE: number;
/**
 * Objeto literal com configurações opcionais. Em propriedades onde são informadas um path são
 * válidos caminhos de arquivos do Sistema Operacional, assim como de arquivos da Virtual File
 * System(prefixado por 'vfs:').
 */
interface XHRConfig {
    /**
     * Path do arquivo contendo uma chave privada RSA no formato PEM
     */
    keyPath?: string;
    /**
     * Path do arquivo contendo Certificado cliente no formato PEM
     */
    certPath?: string;
    /**
     * Path para um arquivo PKCS#12(pfx). As propriedades
     * keyPath e certPath não devem ser informadas, caso a propriedade pfxPath seja definida.
     */
    pfxPath?: string;
    /**
     * Senha usada para decodificar a chave privada ou o arquivo
     * pfx
     */
    passphrase?: string;
    /**
     * Se verdadeiro, não será validado o certificado do
     * servidor remoto. **Importante**: ativar essa opção desativa a proteção do protocolo
     * HTTPS, tornando a comunicação vulnerável para ataques de interceptação. Essa opção deve ser
     * utilizada apenas para testes em ambientes controlados. Em produção, o certificado do servidor
     * sempre deve ser validado. Caso esteja tendo problemas com certificados digitais,
     * consulte a dúvida "Como diagnosticar erros de configuração de certificados digitais?"
     * em https://nginstack.com/faq/engine/.
     */
    ignoreSslErrors?: boolean;
    /**
     * Configuração do servidor proxy a ser utilizado na requisição
     * HTTP. Deve ser informado o endereço de um servidor proxy, como "socks5://host:port", ou os
     * valores especiais "auto" e "no_proxy". O valor "auto" indica que deve ser utilizado o servidor
     * proxy definido no sistema operacional por meio das variáveis de ambiente `HTTP_PROXY` e
     * `HTTPS_PROXY`, e o valor "no_proxy" desabilita o uso do proxy. Caso não seja informada, será
     * utilizada a configuração de proxy padrão do sistema, definida pela variável de
     * ambiente `ENGINE_PROXY` ou pela opção de linha de comando `--NoProxy`.
     */
    proxy?: string;
}
