export = MultipartFormDataReader;
/**
 * Classe responsável por manipular dados no formato multipart/form-data,
 * conforme especificado no RFC 7578 (http://www.ietf.org/rfc/rfc7578.txt).
 *
 * @param {Request|File|string} content Conteúdo `multipart/form-data`.
 * @param {Object} [options]
 * @param {string} [options.boundary] Limitador do conteúdo `multipart/form-data`.
 * Este parâmetro é obrigatório para conteúdos do tipo `File` ou `string`.
 * @param {string} [options.charset] Codificação do conteúdo. O nome da codificação deve estar
 * de acordo com o padrão definido em: http://www.iana.org/assignments/character-sets.
 * Por padrão, será presumido que o conteúdo está codificado em UTF-8, salvo se for indicada
 * uma outra codificação por meio desta opção ou se o conteúdo processado tiver uma entrada
 * anterior "_charset_" informando uma codificação diferente dessa. A codificação da entrada
 * "_charset_" prevalecerá sobre o valor desta opção.
 * @constructor
 */
declare function MultipartFormDataReader(
    content: Request | File | string,
    options?: {
        boundary?: string;
        charset?: string;
    }
): void;
declare class MultipartFormDataReader {
    /**
     * Classe responsável por manipular dados no formato multipart/form-data,
     * conforme especificado no RFC 7578 (http://www.ietf.org/rfc/rfc7578.txt).
     *
     * @param {Request|File|string} content Conteúdo `multipart/form-data`.
     * @param {Object} [options]
     * @param {string} [options.boundary] Limitador do conteúdo `multipart/form-data`.
     * Este parâmetro é obrigatório para conteúdos do tipo `File` ou `string`.
     * @param {string} [options.charset] Codificação do conteúdo. O nome da codificação deve estar
     * de acordo com o padrão definido em: http://www.iana.org/assignments/character-sets.
     * Por padrão, será presumido que o conteúdo está codificado em UTF-8, salvo se for indicada
     * uma outra codificação por meio desta opção ou se o conteúdo processado tiver uma entrada
     * anterior "_charset_" informando uma codificação diferente dessa. A codificação da entrada
     * "_charset_" prevalecerá sobre o valor desta opção.
     * @constructor
     */
    constructor(
        content: Request | File | string,
        options?: {
            boundary?: string;
            charset?: string;
        }
    );
    /** @private */
    private content_;
    contentStream_: File | Request;
    /** @private */
    private options_;
    /** @private */
    private newLine_;
    /** @private */
    private currentPart_;
    /**
     * Limitador do conteúdo `multipart/form-data`.
     * @type {string}
     * @private
     */
    private boundary_;
    /**
     * Codificação do conteúdo.
     * @type {string}
     * @private
     */
    private charset_;
    /**
     * Tamanho total do conteúdo `multipart/form-data`.
     * @type {number}
     * @private
     */
    private contentLength_;
    /**
     * Tamanho total a ser lido do conteúdo `multipart/form-data`.
     * @type {number}
     * @private
     */
    private remain_;
    /**
     * Conteúdo carregado.
     * @type {string}
     * @private
     */
    private buffer_;
    /**
     * Quantidade de partes lidas.
     * @type {number}
     * @private
     */
    private partsRead_;
    /**
     * @type {boolean}
     * @private
     */
    private expectNewPart_;
    /**
     * @type {string}
     * @private
     */
    private newLineDashBoundary_;
    /**
     * @type {string}
     * @private
     */
    private dashBoundaryDash_;
    /**
     * @type {string}
     * @private
     */
    private dashBoundary_;
    private initializeBoundaryParams_;
    private initializeContentLengthAndUpdateRemainBuffer_;
    private loadBuffer_;
    private removeSpacesAndTabs_;
    private isBoundaryDelimiterLine_;
    private isFinalBoundary_;
    private jumpBufferToDashBoundary_;
    private readNewLineBuffer_;
    private populateHeader_;
    private newPart_;
    /**
     * Retorna a próxima parte do conteúdo `multipart/form-data` ou null quando não existir mais partes.
     * @return {MultipartFormDataPart} Objeto da parte do conteúdo `multipart/form-data`.
     * @example
     * const reader = new MultipartFormDataReader(request);
     * let part = null;
     * while ((part = reader.nextPart()) && part) {
     *    ...
     * }
     * @see module:@nginstack/engine/lib/multipart/MultipartFormDataPart
     */
    nextPart(): MultipartFormDataPart;
    private setParamCharsetFromPart_;
    private setCharsetIfSupported_;
    private read_;
    /**
     * Retorna objeto que representa um formulário `multipart/form-data` processado.
     * @param {(MultipartFormDataOptions|Record<*,*>)} [opt_options] Opções para processamento dos campos do
     * conteúdo `multipart/form-data`.
     * @return {MultipartFormData}
     * @example
     * const reader = new MultipartFormDataReader(request);
     * const formData = reader.readForm({
     *   maxEntries: 2
     * });
     * const valor = formData.values['nome_campo_valor'];
     * valor // => 'Valor do campo'
     * const arquivo = formData.files['nome_campo_arquivo'];
     * arquivo // => Instância da classe MultipartFormFile
     * @see module:@nginstack/engine/lib/multipart/MultipartFormData
     * @see module:@nginstack/engine/lib/multipart/MultipartFormDataOptions
     */
    readForm(opt_options?: MultipartFormDataOptions | Record<any, any>): MultipartFormData;
}
import Request = require('../http/Request.js');
import File = require('../io/File.js');
import MultipartFormDataPart = require('./MultipartFormDataPart.js');
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
import MultipartFormData = require('./MultipartFormData.js');
