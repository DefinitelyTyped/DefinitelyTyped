export = FileSynchronizer;
/**
 * Classe que possibilita a sincronização de arquivos ou diretórios com um
 * computador remoto.
 *
 * **Atenção:** os Engines do computador local e remoto devem estar configurados
 * para permitir a leitura e gravação de arquivos. Esta configuração é realizada
 * através do parâmetro "FileSynchronizer allowed paths" existente no Manage dentro da
 * seção Configuration.General. Os parâmetros localPath e remotePath deverão ser um
 * sub-path da configuração informada.
 *
 * A exceção desta regra é o diretório "shared" dentro da pasta de instalação do sistema.
 * A gravação e leitura de arquivos e diretórios filhos de "shared" sempre serão permitidas.
 *
 * @param {string} localPath Nome de um arquivo ou diretório local. Paths não absolutos
 * serão relativos ao diretório de instalação do sistema.
 * @param {string} remotePath Nome de um arquivo ou diretório no terminal remoto.
 * Paths não absolutos serão relativos ao diretório de instalação do sistema.
 * @param {import('../database/Database')|import('../connection/Connection')} db Conexão remota
 * utilizada na sincronização. É necessário que a conexão já esteja autenticada com um usuário
 * com permissão ao escopo de autorização "api.fileSynchronizer".
 * @constructor
 */
declare function FileSynchronizer(
    localPath: string,
    remotePath: string,
    db: import('../database/Database') | import('../connection/Connection')
): void;
declare class FileSynchronizer {
    /**
     * Classe que possibilita a sincronização de arquivos ou diretórios com um
     * computador remoto.
     *
     * **Atenção:** os Engines do computador local e remoto devem estar configurados
     * para permitir a leitura e gravação de arquivos. Esta configuração é realizada
     * através do parâmetro "FileSynchronizer allowed paths" existente no Manage dentro da
     * seção Configuration.General. Os parâmetros localPath e remotePath deverão ser um
     * sub-path da configuração informada.
     *
     * A exceção desta regra é o diretório "shared" dentro da pasta de instalação do sistema.
     * A gravação e leitura de arquivos e diretórios filhos de "shared" sempre serão permitidas.
     *
     * @param {string} localPath Nome de um arquivo ou diretório local. Paths não absolutos
     * serão relativos ao diretório de instalação do sistema.
     * @param {string} remotePath Nome de um arquivo ou diretório no terminal remoto.
     * Paths não absolutos serão relativos ao diretório de instalação do sistema.
     * @param {import('../database/Database')|import('../connection/Connection')} db Conexão remota
     * utilizada na sincronização. É necessário que a conexão já esteja autenticada com um usuário
     * com permissão ao escopo de autorização "api.fileSynchronizer".
     * @constructor
     */
    constructor(
        localPath: string,
        remotePath: string,
        db: import('../database/Database') | import('../connection/Connection')
    );
    /**
     * Sincroniza o diretório local informado em localPath com o diretório ou arquivo
     * informado em remotePath.<br>
     * A execução deste método poderá retornar o erro "O iEngine remoto não permite a leitura
     * de arquivos no path informado.". Caso ocorra, altere o path remoto para um subdiretório
     * ou arquivo filho do diretório "shared" ou altere a opção "FileSynchronizer allowed paths"
     * do computador remoto através do Manage, seção Configuration.General.<br><br>
     * @example
     * const Database = require('@nginstack/engine/lib/database/Database.js');
     * const FileSynchronizer = require('@nginstack/engine/lib/filesync/FileSynchronizer');
     * // Obtém os subdiretórios e arquivos da pasta "sourceFiles" do computador "host" e
     * // grava na pasta "sourceFilesCopy"
     * const db = new Database(host, database.dbName);
     * db.loginBySession(session);
     * const fileSync = new FileSynchronizer("shared\\sourceFilesCopy", "shared\\sourceFiles", db);
     * fileSync.syncLocal();
     */
    syncLocal(): void;
    /**
     * Sincroniza o diretório remoto informado em remotePath com o diretório ou arquivo
     * informado em localPath.<br>
     * A execução deste método poderá retornar o erro "O iEngine remoto não permite a gravação
     * de arquivos no path informado". Caso ocorra, altere o path remoto para um subdiretório
     * filho do diretório "shared" ou altere a opção "FileSynchronizer allowed paths" do computador
     * remoto através do Manage, seção Configuration.General.<br><br>
     * @example
     * const Database = require('@nginstack/engine/lib/database/Database.js');
     * const FileSynchronizer = require('@nginstack/engine/lib/filesync/FileSynchronizer');
     * // Envia todos os subdiretórios e arquivos da pasta "teste" para o servidor
     * const db = new Database(host, database.dbName);
     * db.loginBySession(session);
     * const fileSync = new FileSynchronizer("shared\\teste", "shared\\teste", db);
     * fileSync.syncRemote();
     */
    syncRemote(): void;
    /**
     * Quantidade de arquivos excluídos em todas as sincronizações realizadas desde
     * a construção deste objeto.
     * @type {number}
     */
    deletedFileCount: number;
    /**
     * Quantidade de arquivos atualizados no terminal local em todas as sincronizações
     * realizadas desde a construção deste objeto.
     * @type {number}
     */
    receivedFileCount: number;
    /**
     * Quantidade de arquivos atualizados no terminal remoto em todas as sincronizações
     * realizadas desde a construção deste objeto.
     * @type {number}
     */
    sentFileCount: number;
    /**
     * Determina se os arquivos e diretórios existentes no destino da sincronização que não
     * existem na origem devem ser preservados. Caso esta propriedade seja false (valor padrão),
     * os mesmos serão excluídos.
     * @type {boolean}
     */
    preserveDeletedFiles: boolean;
    /**
     * Restringe a sincronização aos arquivos cujos nomes satisfaçam os filtros informados.
     * As expressões de filtros devem ser separadas por ";". Exemplo: "*.doc;*.txt;??a.log". <br>
     * @type {string}
     */
    includeFilters: string;
    /**
     * Indica que não deverá ser realizada a sincronização de arquivos cujos nomes satisfaçam
     * os filtros informados. As expressões de filtros devem ser separadas por ";".
     * Exemplo: "*.doc;*.txt;??a.log".
     * @type {string}
     */
    excludeFilters: string;
}
