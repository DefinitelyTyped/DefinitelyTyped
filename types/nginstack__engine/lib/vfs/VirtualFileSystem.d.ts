export = VirtualFileSystem;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * Classe para manipulação e acesso da Virtual File System (iVfs, CLASSE, iVfsLob)
 * de uma base de dados.
 *
 * Ao manipular arquivos na VirtualFileSystem deve-se ter cuidado com tamanho dos
 * arquivos e a localização gravada. Por padrão, os arquivos do Vfs são sincronizados
 * pelo cache local, o que pode gerar uma sobrecarga nas estações clientes. Para
 * evitar este comportamento, grave arquivos em diretórios que tenham a propriedade
 * "this.cachedVfsContent" de x-class configurada para false. Com isto, os arquivos
 * serão gravados apenas no banco de dados (tabela iVfsLob)e serão enviados para a
 * estação cliente apenas quando houver demanda através do método getFileContent() ou
 * em uma solicitação HTTP.
 * @constructor
 */
declare function VirtualFileSystem(): void;
declare class VirtualFileSystem {
    /**
     * Cria um novo diretório (classe) na Virtual File System.
     * @param {string} name Nome do novo diretório.
     * @param {number} parent Chave do diretório mãe, onde deve ser criado o novo diretório.
     * @return {number} Chave do diretório criado.
     */
    createDirectory(name: string, parent: number): number;
    /**
     * Exclui um diretório vazio.
     * @param {number} key Chave do diretório.
     */
    deleteDirectory(key: number): void;
    /**
     * Altera o nome de um diretório, ajustando a URL de todos os arquivos contidos nele.
     * @param {number} key Chave do diretório.
     * @param {string} newName Novo nome do diretório.
     */
    renameDirectory(key: number, newName: string): void;
    /**
     * Move um diretório.
     * @param {number} key Chave do diretório.
     * @param {number} newParent Chave do novo diretório mãe.
     */
    moveDirectory(key: number, newParent: number): void;
    /**
     * Informa se o diretório informado existe.
     * @param {string} path Caminho do diretório que deve ser localizado.
     * @return {number} Chave do diretório se for localizado um diretório ou null se
     * não localizar.
     */
    directoryExists(path: string): number;
    /**
     * Garante que o diretório informado e todos os sub-diretórios do path existem,
     * criando-os caso seja necessário.
     * @param {string} path Caminho do diretório que deve estar criado.
     * @return {number} Chave do diretório informado em path.
     */
    forceDirectories(path: string): number;
    /**
     * Obtém o caminho do diretório informado.
     * @param {number} key Chave do diretório.
     * @return {string} Caminho completo do diretório informado incluindo
     * a última barra.
     */
    getDirectoryPath(key: number): string;
    /**
     * Cria um novo arquivo na Virtual File System.
     *
     * Para fins de compatibilidade, este método também aceita a seguinte assinatura:
     *
     * * `createFile(fileName, content, baseDirectory, contentType);`
     * @param {string} fileName Nome do novo arquivo com o caminho onde será criado.
     * A extensão do arquivo será utilizada para detectar o tipo do conteúdo caso o parâmetro
     * *contentType* não seja informado. O tipo do arquivo será considerado *application/octet-stream*
     * se o *contentType* não for informado e se a extensão do arquivo não for conhecida.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @param {Object} [options] Opções de criação do arquivo.
     * @param {number|DBKey} [options.baseDirectory] Diretório/classe onde o arquivo deverá ser criado.
     * Caso seja informado um path no nome do arquivo, ele será somado ao baseDirectory
     * para determinar o path completo do arquivo.
     * @param {string} [options.contentType] Tipo do conteúdo do arquivo a ser criado. Caso não
     * seja informado, será presumido a partir da extensão do arquivo. Será gerado um erro
     * caso seja informado um tipo que não esteja cadastrado na classe
     * "Tipos de Arquivos" (-1898187808).
     * @param {number|DBKey} [options.key] Chave que será atribuída ao novo arquivo.
     * @return {number} Chave do arquivo criado.
     */
    createFile(
        fileName: string,
        content: string | File | MemoryStream,
        options?: {
            baseDirectory?: number | DBKey;
            contentType?: string;
            key?: number | DBKey;
        }
    ): number;
    /**
     * Exclui um arquivo que não esteja mais sendo referenciado por outros registros.
     * @param {number} key Chave do arquivo.
     */
    deleteFile(key: number): void;
    /**
     * Move um arquivo na iVFS aplicando as configurações de cache e permissões do diretório destino.
     * @param {number} key Chave do arquivo.
     * @param {number} destinationDir Chave do diretório para onde o arquivo será movido.
     */
    moveFile(key: number, destinationDir: number): void;
    /**
     * Altera o nome de um arquivo existente.
     * @param {number} key Chave do arquivo.
     * @param {string} newName Novo nome do arquivo.
     */
    renameFile(key: number, newName: string): void;
    /**
     * Obtém o conteúdo do arquivo informado.
     * @param {number} key Chave do arquivo.
     * @param {boolean}[allowNullMimeType] Especifica se a função aceita arquivos com o mime type
     * indefinido. Se false, o valor default, uma exceção será lançada para estes casos. Se o
     * valor true for passado, esses arquivos serão tratados como arquivos texto.
     * @return {string} Conteúdo do arquivo.
     */
    getFileContent(key: number, allowNullMimeType?: boolean): string;
    /**
     * Altera o conteúdo do arquivo informado. Se for necessário este método será
     * responsável por codificar o conteúdo binário em base64 para que possa ser
     * gravado no banco de dados. O uso de codificação é determinado pelo tipo do arquivo
     * através do campo "Codificado em Base64" da tabela "Mime Types".
     * @param {number} key Chave do arquivo.
     * @param {string|File|MemoryStream} content Conteúdo do arquivo.
     * @param {string} [opt_contentType] Tipo do conteúdo. Caso não seja informado, será mantido
     * o tipo atual e apenas o conteúdo do arquivo será alterado.
     */
    setFileContent(
        key: number,
        content: string | File | MemoryStream,
        opt_contentType?: string
    ): void;
    /**
     * Obtém o tamanho do arquivo em bytes.
     * @param {number|DBKey} key Chave do arquivo.
     * @return {number} Tamanho do arquivo em bytes.
     */
    getFileSize(key: number | DBKey): number;
    /**
     * Obtém o caminho do arquivo informado.
     * @param {number|DBKey} key Chave do arquivo.
     * @return {string} Caminho do arquivo informado.
     */
    getFilePath(key: number | DBKey): string;
    /**
     * Formata o caminho de um arquivo com base no seu nome e diretório.
     *
     * Este método é útil para simular o caminho que um arquivo terá na Virtual File System antes
     * da sua criação ou modificação.
     * @param {string} name Nome do arquivo.
     * @param {number|DBKey} directory Diretório do arquivo.
     * @return {string} Caminho do arquivo `name` no diretório `directory`.
     */
    formatFilePath(name: string, directory: number | DBKey): string;
    /**
     * Localiza um arquivo na Virtual File System.
     *
     * Se o caminho informado for um diretório, este método retornará a chave do arquivo índice
     * deste diretório caso ele exista. Atualmente, os nomes dos índices de um diretório não são
     * configuráveis e são aceitos os seguintes nomes: "index.iejs", "index.htm", "index.html",
     * "index.wml" e "iindex.htm".
     *
     * Este método também aceita caminhos relativos ou absolutos que terminem em chaves, como
     * "-1898139290", "/-1898139290" ou "/fake-dir/-1898139290". Em todos esses casos, o método
     * retornará a chave do arquivo correspondente caso exista um.
     * @param {string} path Caminho do arquivo desejado.
     * @param {number|DBKey} [baseDirectory] Chave do diretório onde o arquivo deve
     * ser localizado.
     * @return {number} Chave do arquivo localizado ou null se não localizar.
     */
    fileExists(path: string, baseDirectory?: number | DBKey): number;
    /**
     * Inicia um bloco de alterações na VirtualFileSystem. As alterações somente serão
     * realizadas quando for executado o método commitTransaction.<br>
     * Sempre utilize este método em uma estrutura que garanta a execução do commit
     * ou do rollback.
     * @example
     * virtualFS.startTransaction()
     * try {
     *  // Várias operações com virtualFS
     *  virtualFS.commitTransaction()
     * } catch (e){
     *  virtualFS.rollbackTransaction()
     *  throw e
     * }
     * @see #commitTransaction
     * @see #rollbackTransaction
     */
    startTransaction(): void;
    /**
     * Efetiva um bloco de alterações na VirtualFileSystem iniciado pelo método
     * startTransaction.
     * @return {number} O número de versão gerado pela gravação das alterações.
     * @see #startTransaction
     * @see #rollbackTransaction
     */
    commitTransaction(): number;
    /**
     * Desfaz um bloco de alterações na VirtualFileSystem iniciado pelo método
     * startTransaction.
     * @see #startTransaction
     * @see #commitTransaction
     */
    rollbackTransaction(): void;
    /**
     * Preenche atributos extras em um arquivo da Virtual File System.
     * @example
     * virtualFS.setXFileAttributes(123456, {origem: "SONY DSC 40", autor: "User Name"})
     * @param {number} fileKey Chave do arquivo da Virtual File System
     * @param {Object} attributes Objeto que contém a lista dos atributos e valores a serem
     * configurados.
     */
    setXFileAttributes(fileKey: number, attributes: any): void;
    /**
     * Obtém os atributos de um arquivo da Virtual File System
     * @example
     * var attr = virtualFS.getXFileAttributes(123456)
     * attr.origem
     * @param {number} fileKey Chave do arquivo da Virtual File System
     * @return {Object} objeto com o atributos extras armazenados como propriedades.
     */
    getXFileAttributes(fileKey: number): any;
    /**
     * Exclui um conjunto de atributos de um arquivo da Virtual File System
     * @example
     * virtualFS.deleteXFileAttributes(123456, ["origem", "autor"])
     * @param {number} fileKey Chave do arquivo que terá os seus atributos excluídos.
     * @param {Array} attributeNames Vetor com os nomes dos atributos que devem ser removidos.
     */
    deleteXFileAttributes(fileKey: number, attributeNames: any[]): void;
}
declare namespace VirtualFileSystem {
    export { pathSeparator, invalidChars, getInstance, File, MemoryStream, DBKey };
}
declare let pathSeparator: string;
declare let invalidChars: string[];
/**
 * Obtém uma instância compartilhada desta classe.
 * @return {VirtualFileSystem}
 */
declare function getInstance(): VirtualFileSystem;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
type DBKey = import('../dbkey/DBKey');
