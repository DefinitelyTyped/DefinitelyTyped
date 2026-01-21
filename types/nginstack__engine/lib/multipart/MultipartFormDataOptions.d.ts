export = MultipartFormDataOptions;
/** @module @nginstack/engine/lib/multipart/MultipartFormDataOptions */
/**
 * Opções do objeto {@link module:@nginstack/engine/lib/multipart/MultipartFormData~MultipartFormData MultipartFormFile}
 * para processamento das partes/campos do conteúdo `multipart/form-data`.
 *
 * @param {Object} [options] Objeto literal com as opções para o processamento das
 * partes/campos do conteúdo `multipart/form-data`. Deverão ser informadas as propriedades
 * suportadas por esta classe.
 * @constructor
 */
declare function MultipartFormDataOptions(options?: any): void;
declare class MultipartFormDataOptions {
    /** @module @nginstack/engine/lib/multipart/MultipartFormDataOptions */
    /**
     * Opções do objeto {@link module:@nginstack/engine/lib/multipart/MultipartFormData~MultipartFormData MultipartFormFile}
     * para processamento das partes/campos do conteúdo `multipart/form-data`.
     *
     * @param {Object} [options] Objeto literal com as opções para o processamento das
     * partes/campos do conteúdo `multipart/form-data`. Deverão ser informadas as propriedades
     * suportadas por esta classe.
     * @constructor
     */
    constructor(options?: any);
    /**
     * Quantidade máxima de partes de um conteúdo `multipart/form-data` a serem processadas.
     * Por padrão, será imposto o limite de 100 partes.
     * @default 100
     * @type {number}
     */
    maxEntries: number;
    /**
     * Tamanho máximo em bytes do valor dos campos. Por padrão, será imposto o limite
     * de 1Mb.
     * @type {number}
     */
    maxValueSize: number;
    /**
     * Tamanho máximo em bytes do arquivo recebido. Por padrão, será imposto o limite
     * de 100Mb.
     * @type {number}
     */
    maxFileSize: number;
    /**
     * Tamanho máximo em bytes de todo o conteúdo recebido. Por padrão, será imposto o limite
     * de 1Gb.
     * @type {number}
     */
    maxTotalSize: number;
}
