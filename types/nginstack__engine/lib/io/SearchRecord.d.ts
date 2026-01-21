export = SearchRecord;
/**
 * Classe contendo informações do arquivo localizado pelos métodos
 * File.findFirst() e File.findNext().
 * @constructor
 * @see File#findFirst
 * @see File#findNext
 */
declare function SearchRecord(): void;
declare class SearchRecord {
    /**
     * Indica se o arquivo localizado é um diretório.
     * @type {boolean}
     */
    isDirectory: boolean;
    /**
     * Data e hora da última modificação do arquivo.
     * @type {Date}
     */
    modified: Date;
    /**
     * Nome do arquivo ou diretório.
     * @type {string}
     */
    name: string;
    /**
     * Tamanho em bytes do arquivo.
     * @type {number}
     */
    size: number;
}
