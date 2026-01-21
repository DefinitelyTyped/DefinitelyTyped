export = MultipartFormFile;
/**
 * Classe que representa o arquivo obtido em uma conteúdo `multipart/form-data`.
 *
 * Essa classe não deve ser utilizada diretamente. Faça uso a partir da classe
 * "MultipartFormDataReader". Ver
 * {@link module:@nginstack/engine/lib/multipart/MultipartFormDataReader~MultipartFormDataReader#readForm
 * MultipartFormDataReader.prototype.readForm}
 * para mais detalhes.
 * @param {string} name Nome do arquivo destino.
 * @param {string} filePath Nome do arquivo.
 * @param {string} [contentType] Tipo do conteúdo do arquivo.
 * @constructor
 */
declare function MultipartFormFile(name: string, filePath: string, contentType?: string): void;
declare class MultipartFormFile {
    /**
     * Classe que representa o arquivo obtido em uma conteúdo `multipart/form-data`.
     *
     * Essa classe não deve ser utilizada diretamente. Faça uso a partir da classe
     * "MultipartFormDataReader". Ver
     * {@link module:@nginstack/engine/lib/multipart/MultipartFormDataReader~MultipartFormDataReader#readForm
     * MultipartFormDataReader.prototype.readForm}
     * para mais detalhes.
     * @param {string} name Nome do arquivo destino.
     * @param {string} filePath Nome do arquivo.
     * @param {string} [contentType] Tipo do conteúdo do arquivo.
     * @constructor
     */
    constructor(name: string, filePath: string, contentType?: string);
    /** @private */
    private name_;
    /** @private */
    private filePath_;
    /** @private */
    private contentType_;
    /**
     * Nome do arquivo.
     * @type {string}
     */
    name: string;
    /**
     * Tipo do conteúdo do arquivo. O valor deverá um Media Type conforme padronização
     * http://www.iana.org/assignments/media-types/media-types.xhtml.
     * @type {string}
     */
    contentType: string;
    /**
     * Tamanho em bytes do conteúdo do arquivo.
     * @type {number}
     */
    size: number;
    /**
     * Move o arquivo para o caminho especificado. O caminho deverá especificar o diretório
     * e o nome do arquivo no destino.
     * @param {string} filePath Nome do arquivo destino.
     * @return {boolean} True se o arquivo foi movido com sucesso. Um arquivo não poderá ser movido
     * mais de uma vez.
     * @example
     * const reader = new MultipartFormDataReader(request);
     * const formData = reader.readForm();
     * const arquivo = formData.files['nome_campo_arquivo'];
     * arquivo.moveTo(newFilePath);
     */
    moveTo(filePath: string): boolean;
}
