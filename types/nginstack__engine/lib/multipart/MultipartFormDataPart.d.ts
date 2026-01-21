export = MultipartFormDataPart;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('./MultipartFormDataReader')} MultipartFormDataReader
 * @private
 */
/**
 * Classe que representa uma parte do conteúdo `multipart/form-data`.
 *
 * Essa classe não deve ser utilizada diretamente. Faça uso de MultipartFormDataReader. Ver
 * {@link module:@nginstack/engine/lib/multipart/MultipartFormDataReader~MultipartFormDataReader#nextPart
 * MultipartFormDataReader.prototype.nextPart}
 * para mais detalhes.
 * @param {MultipartFormDataReader} reader Objeto que processa conteúdo `multipart/form-data`.
 * @param {function(number):string} readFunc função que irá realizar a leitura do conteúdo
 * `multipart/form-data`.
 * @param {Object<string>} headers Mapa com informações de cabeçalho da parte do conteúdo
 * `multipart/form-data`.
 * @constructor
 */
declare function MultipartFormDataPart(
    reader: MultipartFormDataReader,
    readFunc: (arg0: number) => string,
    headers: any
): void;
declare class MultipartFormDataPart {
    /**
     * @typedef {import('../io/File')} File
     * @private
     */
    /**
     * @typedef {import('./MultipartFormDataReader')} MultipartFormDataReader
     * @private
     */
    /**
     * Classe que representa uma parte do conteúdo `multipart/form-data`.
     *
     * Essa classe não deve ser utilizada diretamente. Faça uso de MultipartFormDataReader. Ver
     * {@link module:@nginstack/engine/lib/multipart/MultipartFormDataReader~MultipartFormDataReader#nextPart
     * MultipartFormDataReader.prototype.nextPart}
     * para mais detalhes.
     * @param {MultipartFormDataReader} reader Objeto que processa conteúdo `multipart/form-data`.
     * @param {function(number):string} readFunc função que irá realizar a leitura do conteúdo
     * `multipart/form-data`.
     * @param {Object<string>} headers Mapa com informações de cabeçalho da parte do conteúdo
     * `multipart/form-data`.
     * @constructor
     */
    constructor(reader: MultipartFormDataReader, readFunc: (arg0: number) => string, headers: any);
    /** @private */
    private reader_;
    /** @private */
    private readFunc_;
    /** @private */
    private headers_;
    /** @private */
    private options_;
    /**
     * Objeto referente ao `content-disposition`.
     * @type {import('./parseContentDisposition.js').ContentDispositionParseResult}
     * @private
     */
    private contentDisposition_;
    /**
     * Nome da parte.
     * @type {string}
     * @private
     */
    private name_;
    /**
     * Nome do arquivo.
     * @type {string}
     * @private
     */
    private fileName_;
    /**
     * Nome da parte.
     * @type {string}
     */
    name: string;
    /**
     * Nome do arquivo
     * @type {string}
     */
    fileName: string;
    /**
     * Mapa com informações de cabeçalho da parte.
     * @type {Object<string>}
     */
    headers: any;
    private initializeContentDisposition_;
    private initializeParamsNameAndFileName_;
    /**
     * Lê o conteúdo da parte `multipart/form-data`.
     * @param {number} size Quantidade de bytes a serem lidos.
     * @return {string} Conteúdo lido.
     * @example
     * const reader = new MultipartFormDataReader(request);
     * let part = null;
     * let contentRead = null;
     * while ((part = reader.nextPart()) && part) {
     *    while ((contentRead = part.read(size)) && contentRead.length > 0) {
     *      contentRead; // => Conteúdo lido em string.
     *    }
     * }
     */
    read(size: number): string;
    /**
     * Lê o conteúdo da parte `multipart/form-data`.
     * @param {number} size Quantidade de bytes a serem lidos.
     * @return {Uint8Array} Conteúdo binário lido.
     * @example
     * const reader = new MultipartFormDataReader(request);
     * let part = null;
     * let contentRead = null;
     * while ((part = reader.nextPart()) && part) {
     *    while ((contentRead = part.readBytes(size)) && contentRead.length > 0) {
     *      contentRead; // => Conteúdo lido em binário.
     *    }
     * }
     */
    readBytes(size: number): Uint8Array;
    /**
     * Salva todo o conteúdo da parte em um arquivo.
     * @param {File} file Arquivos para gravação do conteúdo lido.
     * @param {number} [opt_maxFileSize] Tamanho máximo em bytes do arquivo lido. Valor padrão definido
     * em {@link module:@nginstack/engine/lib/multipart/MultipartFormDataOptions~MultipartFormDataOptions#maxFileSize
     * MultipartFormDataOptions.maxFileSize}
     * @example
     * const reader = new MultipartFormDataReader(request);
     * let part = null;
     * let file = null;
     * while ((part = reader.nextPart()) && part) {
     *    file = new File(filePath);
     *    part.saveToFile(file);
     *    file.close();
     * }
     * @see module:@nginstack/engine/lib/multipart/MultipartFormDataOptions
     */
    saveToFile(file: File, opt_maxFileSize?: number): void;
}
declare namespace MultipartFormDataPart {
    export { File, MultipartFormDataReader };
}
type File = import('../io/File');
type MultipartFormDataReader = import('./MultipartFormDataReader');
