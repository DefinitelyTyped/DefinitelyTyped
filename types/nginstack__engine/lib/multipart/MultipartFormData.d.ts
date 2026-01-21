export = MultipartFormData;
/**
 * @typedef {import('./MultipartFormDataReader')} MultipartFormDataReader
 * @private
 */
/**
 * Classe que representa um formulário `multipart/form-data` processado.
 *
 * Os campos de arquivos serão armazenadas em arquivos temporários e representados através da classe
 * {@link module:@nginstack/engine/lib/multipart/MultipartFormFile~MultipartFormFile MultipartFormFile}.
 *
 * Os campos de valores são armazenadas como strings.
 *
 * Essa classe não deve ser utilizada diretamente. Faça uso de MultipartFormDataReader. Ver
 * {@link module:@nginstack/engine/lib/multipart/MultipartFormDataReader~MultipartFormDataReader#readForm
 * MultipartFormDataReader.prototype.readForm} para mais detalhes.
 * @param {MultipartFormDataReader} reader Objeto que processa conteúdo `multipart/form-data`.
 * @param {(MultipartFormDataOptions|Record<*,*>)} [options] Opções para processamento dos campos do
 * conteúdo `multipart/form-data`.
 * @constructor
 * @see module:@nginstack/engine/lib/multipart/MultipartFormDataOptions
 * @see module:@nginstack/engine/lib/multipart/MultipartFormDataReader
 */
declare function MultipartFormData(
    reader: MultipartFormDataReader,
    options?: MultipartFormDataOptions | Record<any, any>
): void;
declare class MultipartFormData {
    /**
     * @typedef {import('./MultipartFormDataReader')} MultipartFormDataReader
     * @private
     */
    /**
     * Classe que representa um formulário `multipart/form-data` processado.
     *
     * Os campos de arquivos serão armazenadas em arquivos temporários e representados através da classe
     * {@link module:@nginstack/engine/lib/multipart/MultipartFormFile~MultipartFormFile MultipartFormFile}.
     *
     * Os campos de valores são armazenadas como strings.
     *
     * Essa classe não deve ser utilizada diretamente. Faça uso de MultipartFormDataReader. Ver
     * {@link module:@nginstack/engine/lib/multipart/MultipartFormDataReader~MultipartFormDataReader#readForm
     * MultipartFormDataReader.prototype.readForm} para mais detalhes.
     * @param {MultipartFormDataReader} reader Objeto que processa conteúdo `multipart/form-data`.
     * @param {(MultipartFormDataOptions|Record<*,*>)} [options] Opções para processamento dos campos do
     * conteúdo `multipart/form-data`.
     * @constructor
     * @see module:@nginstack/engine/lib/multipart/MultipartFormDataOptions
     * @see module:@nginstack/engine/lib/multipart/MultipartFormDataReader
     */
    constructor(
        reader: MultipartFormDataReader,
        options?: MultipartFormDataOptions | Record<any, any>
    );
    /** @private */
    private reader_;
    /** @private */
    private options_;
    values: any;
    files: any;
    /** @private */
    private filesDirName_;
    /** @private */
    private totalSize_;
    /**
     * Logger utilizado por esta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    private populateForm_;
    private addFile_;
    private addValue_;
    /**
     * Remove todos os arquivos temporários associados a um objeto "MultipartFormData".
     * @example
     * const reader = new MultipartFormDataReader(request);
     * const formData = reader.readForm();
     * formData.removeAll();
     */
    removeAll(): void;
}
declare namespace MultipartFormData {
    export { MultipartFormDataReader };
}
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
type MultipartFormDataReader = import('./MultipartFormDataReader');
