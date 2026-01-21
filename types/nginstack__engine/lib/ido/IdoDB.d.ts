export = IdoDB;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Classe responsável pelo armazenamento e manipulação de uma coleção de tabelas de uma
 * base de dados IDO.
 * @example
 *  // Lista os nomes de todas as tabelas da base de dados
 *  const db = idoDBManager.loadDatabase('TEST');
 *  db.getTableNames();
 * @example
 * // Cria uma nova tabela na base de dados
 * const db = idoDBManager.createDatabase('TEST');
 * const ds = new DataSet(db);
 * ds.fieldDefs.add('fullName', 'string', 150);
 * ds.create('clients');
 * @constructor
 */
declare function IdoDB(): void;
declare class IdoDB {
    /**
     * Nome da base de dados.
     * @return {string}
     */
    name: string;
    /**
     * Id único desta base de dados no Engine corrente.
     * @return {number}
     */
    uniqueId: number;
    /**
     * Tamanho da base de dados em bytes
     * @return {number}
     */
    size: number;
    /**
     * Checa a existência de uma tabela na base de dados IDO.
     * @param {string} tableName Nome da tabela que será verificada.
     * @return {boolean} Retorna `true` se a tabela existir.
     */
    tableExists(tableName: string): boolean;
    /**
     * Retorna os nomes de todas as tabelas da base de dados.
     * @return {string[]} Nomes de todas as tabelas de base de dados.
     */
    getTableNames(): string[];
    /**
     * Remove uma tabela da base de dados.
     * @param {string} tableName Nome da tabela que será removida.
     */
    dropTable(tableName: string): void;
    /**
     * Obtém um DataSet com o conteúdo da tabela informada.
     * @param {string} tableName Nome da tabela que será aberta.
     * @return {DataSet} DataSet com o conteúdo da tabela informada.
     */
    getTable(tableName: string): DataSet;
    /**
     * Obtém XML que descreve a base de dados.
     * @return {string} XML que descreve a base de dados.
     */
    getDBStatistics(): string;
    /**
     * Encerra esta conexão com a base de dados.
     *
     * **Importante**: a base de dados poderá continuar aberta enquanto houver instâncias de `DataSet`
     * `IdoDB` que a referenciem.
     */
    close(): void;
}
declare namespace IdoDB {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
