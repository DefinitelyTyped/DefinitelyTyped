export = RouteResult;
/**
 * @typedef {import('../http/Response')} Response
 * @private
 */
/**
 * @typedef {import('../http/Request')} Request
 * @private
 */
/**
 * Resultado de um controlador para uma requisição HTTP no atendimento de uma rota. Por padrão,
 * o resultado terá o código de estado 200 (OK) e será vazio.<br>
 * Todos os métodos deste objeto retornam um novo resultado com a modificação indicada pelo nome do
 * método. Eles sempre retornam a própria instância do objeto, permitindo uma cadeia de chamadas.
 * @param {RouteResult} opt_base Resultado base do qual esta instância está sendo derivada.
 * Esta nova instância herdará todas as propriedades definidas em <em>opt_base</em>.
 * @example
 * const RouteResult = require('@nginstack/engine/lib/router/RouteResult');
 * const result = RouteResult()
 *   .withStatus(Status.NOT_FOUND)
 *   .withContent(error);
 * @constructor
 */
declare function RouteResult(opt_base: RouteResult): import('./RouteResult.js');
declare class RouteResult {
    /**
     * @typedef {import('../http/Response')} Response
     * @private
     */
    /**
     * @typedef {import('../http/Request')} Request
     * @private
     */
    /**
     * Resultado de um controlador para uma requisição HTTP no atendimento de uma rota. Por padrão,
     * o resultado terá o código de estado 200 (OK) e será vazio.<br>
     * Todos os métodos deste objeto retornam um novo resultado com a modificação indicada pelo nome do
     * método. Eles sempre retornam a própria instância do objeto, permitindo uma cadeia de chamadas.
     * @param {RouteResult} opt_base Resultado base do qual esta instância está sendo derivada.
     * Esta nova instância herdará todas as propriedades definidas em <em>opt_base</em>.
     * @example
     * const RouteResult = require('@nginstack/engine/lib/router/RouteResult');
     * const result = RouteResult()
     *   .withStatus(Status.NOT_FOUND)
     *   .withContent(error);
     * @constructor
     */
    constructor(opt_base: RouteResult);
    /** @private */
    private base_;
    /**
     * Logger utilizado por esta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Código do estado da resposta.
     * @type {Status|number}
     * @private
     */
    private status_;
    /**
     * Conteúdo a ser enviado como resposta da requisição HTTP.
     * @type {*}
     * @private
     */
    private content_;
    /**
     * Tipo do conteúdo que deverá ser enviado na resposta HTTP.
     * @type {string|null}
     * @private
     */
    private contentType_;
    /**
     * Codificação de caracteres empregada no conteúdo da resposta. Caso não seja informada,
     * será considerada ISO-8859-1 para conteúdos do tipo text/* e application/json.
     * @type {string}
     * @private
     */
    private charset_;
    /**
     * Cabeçalhos da resposta definidos nesta instância de resultado, sem levar em consideração os
     * cabeçalhos definidos em {@link #base}.
     * @type {Object<string>}
     * @private
     */
    private headers_;
    /**
     * Todos os cabeçalhos da resposta.
     * @type {Object<string>}
     * @private
     */
    private allHeaders_;
    private getInheritedProperty_;
    /**
     * Cria um novo resultado com o status informado.
     * @param {Status|number} status Status da resposta.
     * @return {RouteResult} Nova instância de {@link RouteResult} com o conteúdo
     * informado.
     */
    withStatus(status: Status | number): RouteResult;
    /**
     * Código do estado da resposta.
     * @type {Status|number}
     */
    status: Status | number;
    /**
     * Cria um novo resultado com o conteúdo informado.
     * @param {*} content Conteúdo da resposta.
     * @return {RouteResult} Nova instância de {@link RouteResult} com o conteúdo informado.
     */
    withContent(content: any): RouteResult;
    /**
     * Conteúdo a ser enviado como resposta da requisição HTTP.
     *
     * Conteúdos do tipo {@link module:@nginstack/engine/lib/io/File File} e
     * {@link module:@nginstack/engine/lib/io/MemoryStream MemoryStream} são recomendados em respostas
     * de tamanho elevado onde se deseja evitar a alocação de memória (`File`) ou a alocação de strings
     * temporárias (`MemoryStream`). Por padrão, o tipo do conteúdo será "application/octet-stream"
     * quando utilizado um desses tipos, devendo ser utilizado o método {@link #as} para definir um
     * tipo diferente desse caso seja necessário. Diferentemente de conteúdos textuais, não será
     * realizada a codificação do conteúdo, sendo necessário que ele já esteja na codificação
     * esperada pelo cliente, normalmente UTF-8.
     * @type {*}
     */
    content: any;
    /**
     * Cria um novo resultado com o tipo de conteúdo informado.
     * @param {MediaType?} contentType Tipo do conteúdo.
     * @return {RouteResult} Nova instância de {@link RouteResult} com o tipo de conteúdo
     * informado.
     */
    as(contentType: MediaType | null): RouteResult;
    /**
     * Tipo do conteúdo da resposta da requisição HTTP. Ele será inferido a partir do tipo de
     * {@link #content} caso não seja informado via método {@link #as}.
     *
     * Conteúdos do tipo *string* serão considerados como texto (text/plain), instâncias de
     * `File` e `MemoryStream` serão considerados binários e os demais objetos serão convertidos
     * em JSON (application/json). Outras transformações mais especializadas podem ser registradas
     * por meio do método {@link RouteResult#addTransform}.
     * @type {MediaType}
     */
    contentType: MediaType;
    /**
     * Cria um novo resultado com a codificação de caracteres informada. Este método provocará
     * a conversão do conteúdo da resposta para a codificação desejada caso ela seja suportada
     * pelo Engine e se o conteúdo da resposta for uma string ou um objeto que não seja um File,
     * MemoryStream, ArrayBuffer ou Uint8Array. Para instâncias dessas classes, os dados
     * da resposta já devem ser informados na na codificação desejada e o sistema não fará nenhum
     * tipo de codificação automática no envio da resposta.
     *
     * Atualmente são suportadas as codificações 'iso-8859-1', 'utf-8' e 'windows-1252'.
     * @param {string|null} charset Codificação de caracteres.
     * @return {RouteResult} Nova instância de {@link RouteResult} com a codificação
     * de caracteres informada.
     */
    withCharset(charset: string | null): RouteResult;
    /**
     * Codificação de caracteres empregada no conteúdo da resposta. Caso não seja informada,
     * será utilizada a codificação UTF-8 na resposta de conteúdos textuais, como os tipos de mídia
     * text/* e "application/json", exceto se o tipo de resposta informado ao método {@link #as}
     * possuir o atributo "charset" indicando a codificação da resposta. Caso o tipo de resposta
     * possua esse  atributo, o sistema não realizará nenhum tipo de codificação automática se não
     * for solicitada uma pelo método {@link #withCharset}.
     *
     *
     * Ver {@link module:@nginstack/engine/lib/mime/isTextualType isTextualType} para mais detalhes
     * de quais tipos de conteúdo são considerados textuais.
     * @type {string|null}
     */
    charset: string | null;
    /**
     * Cria um novo resultado com cabeçalho de resposta informado.
     * @param {string} name Nome do cabeçalho.
     * @param {string} value Valor do cabeçalho.
     * @return {RouteResult} Nova instância de {@link RouteResult} com o cabeçalho
     * informado.
     */
    withHeader(name: string, value: string): RouteResult;
    /**
     * Cria um novo resultado com os cabeçalhos de resposta informados.
     * @param {Object<string>} headers Mapa associando o nome dos cabeçalhos aos seus valores.
     * @return {RouteResult} Nova instância de {@link RouteResult} com os cabeçalhos
     * informados.
     */
    withHeaders(headers: any): RouteResult;
    /**
     * Cabeçalhos da resposta da requisição HTTP. Por padrão, todos os nomes de cabeçalhos serão em
     * maiúsculas.
     * @type {Object<string>}
     */
    headers: any;
    /**
     * Envia o resultado para o cliente.
     * @param {Response} response Tratador de resposta que deve ser utilizado para enviar o resultado.
     * @param {Object} [options] Parâmetros opcionais.
     * @param {boolean} [options.onlyHeaders] Emite a resposta sem o conteúdo, enviando apenas os
     * cabeçalhos.
     * @param {boolean} [options.debug] Indica que devem ser registrado no log detalhes sobre
     * a requisição e a resposta.
     */
    send(
        response: Response,
        options?: {
            onlyHeaders?: boolean;
            debug?: boolean;
        }
    ): void;
}
declare namespace RouteResult {
    export {
        transform,
        MAX_BASE_CHAIN,
        addTransformer,
        addTransformer as addTransform,
        removeAllTransformers,
        removeAllTransformers as removeAllTransforms,
        Response,
        Request,
    };
}
import Status = require('../http/Status.js');
import MediaType = require('../http/MediaType.js');
/**
 * Realiza a transformação dos dados a serem enviados na resposta HTTP, onde utiliza
 * os métodos registrados em {@link DefaultResultTransforms}.
 * @param {RouteResult} result Resultado a ser transformado.
 * @param {Request} request Requisição HTTP.
 * @returns {RouteResult} Conteúdo do resultado transformado.
 */
declare function transform(result: RouteResult, request: Request): RouteResult;
declare let MAX_BASE_CHAIN: number;
/**
 * Registra uma transformação de conteúdo que deverá ser realizada antes deste resultado ser
 * enviado como uma resposta da requisição. Transformações possibilitam que objetos mais complexos
 * não seja simplesmente convertidos em JSON ou que o código da resposta seja alterado de
 * acordo com o tipo do conteúdo.
 *
 * É recomendado que as transformações de resultados sejam registradas em arquivos de
 * inicialização no diretório <em>/Configuração/Inicialização do Roteador HTTP</em>.<br>
 * As funções de transformação serão executadas na ordem contrária em que foram adicionadas,
 * garantindo que as transformações básicas de tratamento de erro e conversão para JSON
 * sejam as últimas a serem executadas, possibilitando que os desenvolvedores da plataforma
 * façam alterações no resultado da requisição antes que essas transformações finais sejam
 * executadas.
 * @param {function (RouteResult, Request):RouteResult|Array} transformer Função que
 * receberá o resultado de um controlador e a requisição HTTP, podendo transformar esse
 * resultado. Caso a função de transformação não deseje alterar o resultado, ele deverá
 * retornar a instância recebida sem alterações. Também poderá ser informado um array
 * de funções.
 * @example
 *  // Registrada uma transformação que indica que qualquer erro do tipo PermissionError deve
 *  // ser retornado com o status FORBIDDEN
 *  RouteResult.addTransformer(function (result, request) {
 *    if (result.content instanceof PermissionError) {
 *      return result.withStatus(Header.FORBIDDEN);
 *    } else {
 *      return result;
 *    }
 *  });
 */
declare function addTransformer(
    transformer: (arg0: RouteResult, arg1: Request) => RouteResult | any[]
): void;
/**
 * Remove todas as funções de transformações registradas.
 */
declare function removeAllTransformers(): void;
type Response = import('../http/Response');
type Request = import('../http/Request');
