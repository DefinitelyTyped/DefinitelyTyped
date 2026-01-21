export = VfsFileStorage;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * Classe responsável por armazenar os arquivos na Virtual File System.
 *
 * Essa classe não deve ser utilizada diretamente. Faça uso de FileStorage. Ver
 * {@link module:@nginstack/engine/lib/file-storage/FileStorage~FileStorage FileStorage}
 * para mais detalhes.
 * @param {number} directory Diretório do arquivo.
 * @constructor
 */
declare function VfsFileStorage(directory: number): void;
declare class VfsFileStorage {
    /**
     * @typedef {import('../io/File')} File
     * @private
     */
    /**
     * @typedef {import('../io/MemoryStream')} MemoryStream
     * @private
     */
    /**
     * Classe responsável por armazenar os arquivos na Virtual File System.
     *
     * Essa classe não deve ser utilizada diretamente. Faça uso de FileStorage. Ver
     * {@link module:@nginstack/engine/lib/file-storage/FileStorage~FileStorage FileStorage}
     * para mais detalhes.
     * @param {number} directory Diretório do arquivo.
     * @constructor
     */
    constructor(directory: number);
    /** @private */
    private targetDirectory_;
    /** @private */
    private vfs_;
    /** @private */
    private virtualFS_;
    /**
     * Tenta retornar uma instância de `FileInfo` do arquivo com a chave informada.
     * @param {number} fileKey Chave do arquivo.
     * @return {FileInfo} Instância de `FileInfo` do arquivo com a chave informada ou
     * null no caso não exista. Como o arquivo encontrado pode estar vinculado a vários registros, a
     * propriedade `main` sempre será falsa.
     * @see module:@nginstack/engine/lib/file-storage/FileInfo
     */
    tryGetFileInfo(fileKey: number): FileInfo;
    /**
     * Atualiza os atributos de um arquivo na LobStorage.
     * @param {number} fileKey Chave do arquivo.
     * @param {Object} attributes Atributos do arquivo.
     */
    setExtraFileAttributes(fileKey: number, attributes: any): void;
    /**
     * Obtém os atributos do arquivo informado.
     * @param {number} fileKey Chave do arquivo.
     * @return {Object} Atributos extras do arquivo.
     */
    getExtraFileAttributes(fileKey: number): any;
    /**
     * Verifica se já existe um arquivo com o nome informado.
     * @param {string} fileName Nome do arquivo.
     * @return {FileInfo} Informações do arquivo caso exista um com o nome informado ou
     * null no caso contrário. Como o arquivo encontrado pode estar vinculado a vários registros, a
     * propriedade `main` sempre será falsa.
     * @see module:@nginstack/engine/lib/file-storage/FileInfo
     */
    findFileByName(fileName: string): FileInfo;
    /**
     * Obtém o tamanho total em bytes de todos os arquivos informados.
     * @param {Array<number>} fileKeys Lista de chave de arquivos.
     * @return {number} Tamanho total em bytes de todos os arquivos.
     */
    getFilesSize(fileKeys: number[]): number;
    /**
     * Cria um arquivo que poderá ser posteriormente vinculado a um cadastro do sistema por meio do
     * método {@link module:@nginstack/engine/lib/file-storage/FileStorage~FileStorage#linkFile linkFile}.
     * @param {string} fileName Nome original do arquivo.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @return {number} Chave do arquivo na Virtual File System.
     */
    addFile(fileName: string, content: string | File | MemoryStream): number;
    /**
     * Atualiza o conteúdo de um arquivo na Virtual File System.
     * @param {number} fileKey Chave do arquivo.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @param {Object} [options] Opções de atualização do arquivo.
     * @param {string} [options.fileName] Nome do arquivo. Caso não seja informado, será mantido
     * o nome atual.
     */
    updateFile(
        fileKey: number,
        content: string | File | MemoryStream,
        options?: {
            fileName?: string;
        }
    ): void;
}
declare namespace VfsFileStorage {
    export { File, MemoryStream };
}
import FileInfo = require('./FileInfo.js');
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
