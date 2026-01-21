export = LargeObjectContent;
/**
 * Classe auxiliar que representa o conteúdo bruto de um lob armazenado.
 * Ela não deve ser construída manualmente, sendo de uso interno da classe LobStorage.
 * Essa classe é responsável por tratar e retornar o conteúdo de um Lob.
 * Se o conteúdo estiver em um serviço em nuvem será feito o download do arquivo.
 * Se o conteúdo estiver no banco de dados ela fará a decodificação e descompressão do conteúdo.
 * @param {LargeObjectContent} [content]
 * @constructor
 */
declare function LargeObjectContent(content?: LargeObjectContent): void;
declare class LargeObjectContent {
    /**
     * Classe auxiliar que representa o conteúdo bruto de um lob armazenado.
     * Ela não deve ser construída manualmente, sendo de uso interno da classe LobStorage.
     * Essa classe é responsável por tratar e retornar o conteúdo de um Lob.
     * Se o conteúdo estiver em um serviço em nuvem será feito o download do arquivo.
     * Se o conteúdo estiver no banco de dados ela fará a decodificação e descompressão do conteúdo.
     * @param {LargeObjectContent} [content]
     * @constructor
     */
    constructor(content?: LargeObjectContent);
    /**
     * Conteúdo bruto do lob armazenado, representado como uma string binária.
     * @type {string|null}
     */
    data: string | null;
    /**
     * URL do conteúdo bruto do lob armazenado, caso esteja disponível. Pode ser usado para
     * baixar o conteúdo diretamente de um serviço de armazenamento em nuvem, por exemplo.
     * @type {string|null}
     */
    storagePath: string | null;
    /**
     * Provedor de armazenamento do conteúdo bruto do lob armazenado.
     * @type {number}
     */
    storageProvider: number;
    /**
     * Indica a chave do algoritmo de codificação aplicada ao conteúdo do campo `data`.
     * @type {number|null}
     */
    encoding: number | null;
    /**
     * Indica a chave do algoritmo de compressão aplicado ao conteúdo do campo `data`.
     * @type {number|null}
     */
    compression: number | null;
    private decode_;
    private decompress_;
    /**
     * Retorna o conteúdo do lob como texto.
     * @return {string}
     */
    toText(): string;
    /**
     * Retorna o conteúdo do lob como uma string binária.
     * @return {string}
     */
    toBinaryString(): string;
    /**
     * Retorna o conteúdo do lob como um conjunto de bytes.
     * @return {Uint8Array}
     */
    toUint8Array(): Uint8Array;
    private getContentAsBinaryString_;
}
