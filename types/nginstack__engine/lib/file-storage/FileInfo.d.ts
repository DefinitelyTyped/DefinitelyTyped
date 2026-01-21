export = FileInfo;
/** @module @nginstack/engine/lib/file-storage/FileInfo */
/**
 * Representação de um arquivo armazenado por meio da classe
 * {@link module:@nginstack/engine/lib/file-storage/FileStorage~FileStorage FileStorage}.
 * Ela não deve ser construída manualmente, devendo ser sempre obtida através dos métodos
 * `findLinkedFiles();` ou `findFileByName();`.
 * @constructor
 */
declare function FileInfo(): void;
declare class FileInfo {
    main: boolean;
    /**
     * Chave do arquivo.
     * @type {number}
     */
    key: number;
    /**
     * Nome do arquivo.
     * @type {string}
     */
    name: string;
    /**
     * URL do arquivo.
     * @type {string}
     */
    url: string;
    /**
     * Atributos extras do arquivo.
     * @type {Object}
     */
    attributes: any;
    /**
     * Tamanho do arquivo.
     * @type {number}
     */
    size: number;
}
