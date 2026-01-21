export = UnionFileSystem;
/**
 * Classe que permite acesso aos arquivos e diretórios do sistema de arquivos unificado gerado
 * a partir dos arquivos JAZ.
 * @constructor
 */
declare function UnionFileSystem(): void;
declare class UnionFileSystem {
    /**
     * Identifica se o caminho informado referência um arquivo.
     * @param {string} path Caminho do arquivo.
     * @return {boolean} True se é um arquivo.
     */
    isFile(path: string): boolean;
    /**
     * Identifica se o caminho informado referência um diretório.
     * @param {string} path Caminho do diretório.
     * @return {boolean} True se é um diretório.
     */
    isDirectory(path: string): boolean;
    /**
     * Identifica se o caminho informado referência um arquivo ou diretório
     * @param {string} path Caminho a ser avaliado.
     * @return {boolean} True se existe.
     */
    exists(path: string): boolean;
    /**
     * Retorna um array de strings com o nome dos conteúdos que compõem um diretório.
     * @param {string} path Caminho do diretório.
     * @param {number} [entryFilter] tipo de filtro aplicado na listagem. Opções:
     * UnionFileSystem.FILTER_FILES, UnionFileSystem.FILTER_DIRS,
     * UnionFileSystem.FILTER_ALL. Valor padrão: UnionFileSystem.FILTER_ALL
     * @return {Array<string>} Nome dos arquivos ou diretórios contidos no caminho informado.
     */
    list(path: string, entryFilter?: number): string[];
    /**
     * Lê o conteúdo de um arquivo da UnionFileSystem
     * @param {string} path Caminho do arquivo.
     * @return {string} Conteúdo do arquivo.
     */
    readFileContent(path: string): string;
    /**
     * Retorna o timestamp da última modificação do arquivo. O timestamp será a quantidade de
     * milissegundos desde 1 de Janeiro de 1970 00:00:00 UTC.
     * @param {string} path Caminho do arquivo.
     * @return {number} Timestamp da última modificação. Retornará undefined caso o arquivo não
     * exista.
     */
    getLastUpdateTimestamp(path: string): number;
    /**
     * Indica a origem do arquivo informado.
     * @param {string} path Caminho do arquivo.
     * @return {string} Retorna a origem do arquivo informado.
     */
    getFileOrigin(path: string): string;
    /**
     * Configura a unionFS com as definições presentes no arquivo iengine.conf. Esta função deve ser
     * utilizada apenas em scripts de inicialização do Engine.
     */
    configureWithLocalSettings(): void;
    /**
     * Ativa o modo de compatibilidade da UnionFileSystem que torna o sistema de arquivos
     * *case-insensitive*. É recomendado que este modo seja ativado em um script de inicialização
     * do Engine, pois ele afeta globalmente o sistema.
     *
     * Este modo de compatibilidade deve ser utilizado apenas como uma estratégia temporária
     * de revisão das customizações e somente pode ser ativado na plataforma Windows. Enquanto estiver
     * em uso, o sistema não será compatível com outras plataformas que são obrigatoriamente
     * *case-sensitive*, como o Linux.
     * @example
     * if (engine.platform == 'win32') {
     *   engine.unionFS.enableCaseInsensitiveMode();
     * }
     */
    enableCaseInsensitiveMode(): void;
}
declare namespace UnionFileSystem {
    let FILTER_FILES: number;
    let FILTER_DIRS: number;
    let FILTER_ALL: number;
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {UnionFileSystem}
     */
    function getInstance(): UnionFileSystem;
}
