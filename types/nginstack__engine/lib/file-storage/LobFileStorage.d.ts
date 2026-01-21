export = LobFileStorage;
/**
 * Classe responsável por armazenar os arquivos na LobStorage.
 *
 * Essa classe não deve ser utilizada diretamente. Faça uso de `FileStorage`. Ver
 * {@link module:@nginstack/engine/lib/file-storage/FileStorage~FileStorage FileStorage}
 * para mais detalhes.
 * @param {number} lobClassKey Chave da classe filha de "/Dados/Sistema/Large Objects" onde
 * serão gravados os arquivos.
 * @constructor
 */
declare function LobFileStorage(lobClassKey: number, relationClassKey: any): void;
declare class LobFileStorage {
    /**
     * Classe responsável por armazenar os arquivos na LobStorage.
     *
     * Essa classe não deve ser utilizada diretamente. Faça uso de `FileStorage`. Ver
     * {@link module:@nginstack/engine/lib/file-storage/FileStorage~FileStorage FileStorage}
     * para mais detalhes.
     * @param {number} lobClassKey Chave da classe filha de "/Dados/Sistema/Large Objects" onde
     * serão gravados os arquivos.
     * @constructor
     */
    constructor(lobClassKey: number, relationClassKey: any);
    /** @private */
    private lobClassKey_;
    /** @private */
    private relationClassKey_;
    /** @private */
    private lobStorage_;
    /**
     * Tenta retornar uma instância de `FileInfo` do arquivo com a chave informada.
     * @param {number} fileKey Chave do arquivo.
     * @return {FileInfo} Instância de `FileInfo` do arquivo com a chave informada ou
     * null caso não exista. Como o arquivo encontrado pode estar vinculado a vários registros, a
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
     * @param {number} fileKey Chave do documento.
     * @return {Object} Atributos extras do arquivo.
     */
    getExtraFileAttributes(fileKey: number): any;
    /**
     * Verifica se já existe um arquivo com o nome informado.
     * @param {string} fileName Nome do arquivo.
     * @return {FileInfo} Informações do arquivo caso exista um com o nome informado ou
     * null no caso não exista. Como o arquivo encontrado pode estar vinculado a vários registros, a
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
     * @param {string} fileName Nome do arquivo.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @return {number} Chave do arquivo na LobStorage.
     */
    addFile(fileName: string, content: string | File | MemoryStream): number;
    /**
     * Atualiza o conteúdo de um arquivo na LobStorage.
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
import FileInfo = require('./FileInfo.js');
import File = require('../io/File.js');
import MemoryStream = require('../io/MemoryStream.js');
