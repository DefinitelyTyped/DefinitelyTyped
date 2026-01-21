export = FileStorage;
/**
 * Classe responsável por gerenciar os arquivos vinculados a cadastros definidos por meio
 * da classe de dados "Relações entre Cadastros e Arquivos" (-1898141863).
 * @param {number} classKey Chave da classe de dados que define as relações entre cadastros e
 * os arquivos. Deve ser uma classe filha de "Relações entre Cadastros e Arquivos" (-1898141863).
 * @constructor
 */
declare function FileStorage(classKey: number): void;
declare class FileStorage {
    /**
     * Classe responsável por gerenciar os arquivos vinculados a cadastros definidos por meio
     * da classe de dados "Relações entre Cadastros e Arquivos" (-1898141863).
     * @param {number} classKey Chave da classe de dados que define as relações entre cadastros e
     * os arquivos. Deve ser uma classe filha de "Relações entre Cadastros e Arquivos" (-1898141863).
     * @constructor
     */
    constructor(classKey: number);
    /** @private */
    private classKey_;
    /** @private */
    private classDef_;
    /** @private */
    private linkFieldName_;
    /** @private */
    private linkedTableName_;
    /** @private */
    private attributeNames_;
    /** @private */
    private storageKind_;
    /** @private */
    private storageClassKey_;
    /** @private */
    private accept_;
    /** @private */
    private maxFiles_;
    /** @private */
    private maxFileSize_;
    /** @private */
    private maxTotalSize_;
    /** @private */
    private hasMain_;
    /** @private */
    private imageAutoCompress_;
    /** @private */
    private imageCompressionProfile_;
    /** @private */
    private mimeTypes_;
    /** @private */
    private dataRel_;
    /** @private */
    private fileInfos_;
    /** @private */
    private fileFieldName_;
    /** @private */
    private storage_;
    /**
     * Tipo de armazenamento dos arquivos.
     * @type {StorageKind}
     */
    storageKind: StorageKind;
    /**
     * Chave da classe onde serão armazenados os arquivos.
     * @type {number}
     */
    storageClassKey: number;
    /**
     * Nome do campo na tabela iDataRel que armazena a chave do cadastro vinculado ao arquivo.
     * @type {string}
     */
    linkFieldName: string;
    /**
     * Tabela ao qual será feito o relacionamento. Ex: Recurso.
     * @type {string}
     */
    linkedTableName: string;
    /**
     * Nome do campo na tabela iDataRel que armazena a chave do arquivo da Virtual File System ou da
     * LobStorage.
     * @type {string}
     */
    fileFieldName: string;
    /**
     * Indica o tipo dos arquivos aceitos.
     * @type {Array<string>}
     */
    accept: string[];
    /**
     * Quantidade máxima de arquivos que podem ser vinculados ao registro.
     * @type {number}
     */
    maxFiles: number;
    /**
     * Tamanho máximo do arquivo a ser importado em bytes.
     * @type {number}
     */
    maxFileSize: number;
    /**
     * Tamanho máximo em bytes de todos os arquivos vinculados ao registro.
     * @type {number}
     */
    maxTotalSize: number;
    /**
     * Diretiva HTTP de cache que deve ser aplicada aos arquivos gerenciados por esta classe.
     * @type {string}
     */
    cacheControl: string;
    /**
     * Indica se os arquivos de imagem devem ser automaticamente comprimidos ao serem adicionados ou
     * atualizados.
     * @type {boolean}
     */
    imageAutoCompress: boolean;
    /**
     * Chave do perfil de compressão a ser utilizado na compressão automática dos arquivos de imagem.
     * @type {number}
     */
    imageCompressionProfile: number;
    private getImageCompressorProfile_;
    private compressIfImage_;
    private findFileExtension_;
    private fixUniqueFileNameCollision_;
    private changeUniqueFileNameExtension_;
    private tryGetFileInfo_;
    /**
     * Verifica se o usuário tem permissão para visualizar o arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @param {number} [userKey] Chave do usuário. Caso não seja informado, será verificada
     * a permissão do usuário corrente da sessão.
     * @return {boolean} True se o usuário tiver permissão para visualizar o arquivo.
     */
    userHasViewPermission(fileKey: number, userKey?: number): boolean;
    /**
     * Tenta retornar a url do arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @return {string} URL do arquivo.
     */
    tryGetFileUrl(fileKey: number): string;
    /**
     * Tenta retornar o nome do arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @return {string} URL do arquivo.
     */
    tryGetFileName(fileKey: number): string;
    /**
     * Obtém o tamanho do arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @return {string} URL do arquivo.
     */
    getFileSize(fileKey: number): string;
    /**
     * Obtém os atributos extras do arquivo informado.
     * @param {number} fileKey Chave do arquivo.
     * @return {Object} Atributos extras do arquivo.
     */
    getExtraFileAttributes(fileKey: number): any;
    /**
     * Atualiza os atributos extras de um arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @param {Object} attributes Atributos do arquivo.
     * @param {string} [originalName] Nome original do arquivo.
     */
    updateExtraFileAttributes(fileKey: number, attributes: any, originalName?: string): void;
    /**
     * Obtém os atributos extras do arquivo informado.
     * @param {number} fileKey Chave do arquivo.
     * @return {Object} Atributos extras do arquivo.
     * @deprecated Utilize {@link #getExtraFileAttributes}
     */
    getFileAttributes(fileKey: number): any;
    /**
     * Atualiza os atributos extras de um arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @param {Object} attributes Atributos do arquivo.
     * @param {string} [originalName] Nome original do arquivo.
     * @deprecated Utilize {@link #updateExtraFileAttributes}
     */
    updateFileAttributes(fileKey: number, attributes: any, originalName?: string): void;
    /**
     * Complementa o nome de um arquivo com os seus atributos a fim de torná-lo único dentro de um
     * diretório da Virtual File System ou da classe na LobStorage.
     * @param {string} originalFileName Nome original do arquivo.
     * @param {Object} attributes Atributos do arquivo.
     * @param {string} [fileExtension] Extensão do arquivo, sem o ponto. Usado opcionalmente para
     * substituir a extensão do nome original do arquivo.
     * @return {string} Nome único do arquivo a ser utilizado no diretório de armazenagem na Virtual
     * File System.
     */
    formatUniqueFileName(originalFileName: string, attributes: any, fileExtension?: string): string;
    /**
     * Obtém as informações sobre os arquivos vinculados a chave informada.
     * @param {number|DBKey} key Chave do registro do qual se deseja obter os arquivos vinculados.
     * @param {Object} [filters] Indica os filtros de obtenção das informações dos arquivos. Serão
     * retornados apenas as informações dos arquivos cujo atributos satisfaçam todos os filtros
     * informados.
     * @return {Array<FileInfo>} Array de objetos contendo as informações dos arquivos
     * @see module:@nginstack/engine/lib/file-storage/FileInfo
     */
    findLinkedFiles(key: number | DBKey, filters?: any): FileInfo[];
    /**
     * Obtém o tamanho total em bytes de todos os arquivos vinculados ao registro.
     * @param {number|DBKey} key Chave do registro do qual se deseja obter o tamanho total.
     * @return {number} Tamanho total em bytes de todos os arquivos vinculados ao registro.
     */
    getLinkedFilesSize(key: number | DBKey): number;
    /**
     * Obtém a quantidade total de arquivos vinculados ao registro.
     * @param {number|DBKey} key Chave do registro do qual se deseja obter a quantidade total.
     * @return {number} Quantidade total de arquivos vinculados ao registro.
     */
    getLinkedFilesCount(key: number | DBKey): number;
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
     * Verifica se já existe um vínculo entre o arquivo e a chave informada.
     * @param {number} fileKey Chave do arquivo.
     * @param {number} targetKey Chave do registro possivelmente vinculado.
     * @return {boolean} True se existir um vínculo.
     */
    relationshipExists(fileKey: number, targetKey: number): boolean;
    /**
     * Define o vínculo como o principal para aquele registro, caso o tipo do vínculo
     * tenha essa opção habilitada.
     * @param {number} fileKey Chave do arquivo.
     * @param {number} recordKey Chave do registro.
     */
    defineRelationshipAsMain(fileKey: number, recordKey: number): void;
    /**
     * Vincula uma chave de cadastro a um arquivo da Virtual File System ou da LobStorage.
     * @param {number} fileKey Chave do arquivo.
     * @param {number} recordKey Chave do registro.
     */
    linkFile(fileKey: number, recordKey: number): void;
    /**
     * Cria um arquivo que poderá ser posteriormente vinculado a um cadastro do sistema por meio do
     * método {@link #linkFile}.
     * @param {string} originalFileName Nome original do arquivo. O nome que será gravado na
     * Virtual File System e na LobStorage é um nome único gerado a partir desse nome e dos atributos
     * do arquivo.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @param {Object} attributes Atributos do arquivo.
     * @return {number} Chave do arquivo na Virtual File System ou na LobStorage.
     */
    addFile(
        originalFileName: string,
        content: string | File | MemoryStream,
        attributes: any
    ): number;
    /**
     * Atualiza o conteúdo de um arquivo.
     * @param {number} fileKey Chave do arquivo.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @param {Object} [options] Opções de atualização.
     * @param {Object} [options.attributes] Atributos do arquivo.
     * @param {string} [options.originalFileName] Nome original do arquivo. O nome que será gravado na
     * Virtual File System e na LobStorage é um nome único gerado a partir desse nome e dos atributos
     * do arquivo.
     */
    updateFile(
        fileKey: number,
        content: string | File | MemoryStream,
        options?: {
            attributes?: any;
            originalFileName?: string;
        }
    ): void;
}
declare namespace FileStorage {
    export { StorageKind, FileInfo, DBKey, DataSet, ImageCompressionResult };
}
/**
 * Tipo de armazenamento dos arquivos.
 */
type StorageKind = string;
declare namespace StorageKind {
    let VFS: string;
    let LOB: string;
}
import File = require('../io/File.js');
import MemoryStream = require('../io/MemoryStream.js');
type FileInfo = import('./FileInfo');
type DBKey = import('../dbkey/DBKey');
type DataSet = import('../dataset/DataSet');
/**
 * Resultado da chamada de `compressIfImage_`
 */
interface ImageCompressionResult {
    /**
     * Conteúdo do arquivo.
     */
    content: string | File | MemoryStream;
    /**
     * Tipo do conteúdo do arquivo.
     */
    contentType: string;
    /**
     * Chave do perfil de compressão de imagem usado.
     */
    compressionProfile: number | null;
}
