export = IdoDBManager;
/**
 * @typedef {import('./IdoDB')} IdoDB
 * @private
 */
/**
 * Classe que permite a gestão dos bancos IDO do Engine que está em execução.
 *
 * **Importante:** a criação de bancos de dados IDO normalmente ocorre em cenários com concorrência
 * de execução. Deve ser utilizada classe `CriticalSection` a fim de garantir que a criação da
 * base de dados seja realizada por uma única sessão JavaScript.
 * @example
 * criticalSection.enter(criticalSectionName);
 * try {
 *   const db = idoDBManager.databaseExists(dbName)
 *     ? idoDBManager.loadDatabase(dbName)
 *     : idoDBManager.createDatabase(dbName);
 *
 *   if (db.tableExists(tableName)) {
 *     return db.loadTable(tableName);
 *   } else {
 *     const ds = new DataSet(db);
 *     ds.fieldDefs.add(fieldDefs);
 *     ds.create(tableName);
 *     return ds;
 *   }
 * } finally {
 *   criticalSection.leave(criticalSectionName);
 * }
 * @constructor
 */
declare function IdoDBManager(): void;
declare class IdoDBManager {
    /**
     * Cria uma base de dados IDO.
     *
     * Os dados das tabelas da base de dados serão gravados em arquivos no diretório
     * `<engine.dataDir>/appdbs' e serão preservados após a finalização do Engine.
     * @param {string} name Nome da base de dados a ser criada.
     * @return {IdoDB} Instância da base de dados IDO criada.
     */
    createDatabase(name: string): IdoDB;
    /**
     * Cria uma base de dados IDO temporária.
     *
     * Por padrão, as bases de dados temporárias são mantidas enquanto o Engine estiver em execução.
     * Esse comportamento pode ser modificado por meio da opção `autoDrop`. Ao ativar essa opção,
     * a base temporária será mantida apenas enquanto houver sessões Javascript que a referenciem,
     * sendo uma opção recomendada para bases de dados temporárias utilizadas por uma única sessão
     * JavaScript.
     * @param {string} [dbName] Nome da base de dados a ser criada. Caso não seja informado, será
     * criada uma base de dados com nome aleatório com a opção `autoDrop` ativa, não
     * sendo possível reabrir essa base de dados posteriormente pelo método `loadDatabase`.
     * @param {Object} [options] Opções de criação da base de dados.
     * @param {boolean} [options.autoDrop] Cria uma base de dados temporária que é removida
     * automaticamente caso não esteja mais em uso.
     * @return {IdoDB} Instância da base de dados IDO criada.
     */
    createTempDatabase(
        dbName?: string,
        options?: {
            autoDrop?: boolean;
        }
    ): IdoDB;
    /**
     * Verifica se já existe uma base de dados IDO.
     * @param {string} name Nome da base de dados que será verificada a sua existência.
     * @return {boolean} Retorna o valor `true` se a base de dados existir.
     */
    databaseExists(name: string): boolean;
    /**
     * Carrega uma base de dados IDO.
     * @param {string} name Nome da base de dados que será carregada.
     * @return {IdoDB} Instância da base de dados IDO carregada.
     */
    loadDatabase(name: string): IdoDB;
    /**
     * Remove uma base de dados.
     * @param {string} name Nome da base de dados que será removida.
     */
    deleteDatabase(name: string): void;
    /**
     * Renomeia uma base de dados persistente.
     *
     * Este método não pode ser utilizado em bases de dados temporárias.
     * @param {string} oldName Nome atual da base de dados.
     * @param {string} newName Novo nome da base de dados.
     */
    renameDatabase(oldName: string, newName: string): void;
}
declare namespace IdoDBManager {
    export { IdoDB };
}
type IdoDB = import('./IdoDB');
