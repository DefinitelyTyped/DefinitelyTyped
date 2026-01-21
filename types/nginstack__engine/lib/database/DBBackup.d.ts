export = DBBackup;
/**
 * @typedef {Object} RestoredTable Informações de uma tabela restaurada.
 * @property {string} name Nome da tabela.
 * @property {number} recordCount Quantidade de registros.
 * @property {boolean} merged Indica se os registros foram mesclados com a tabela existente.
 * @property {boolean} ignored Indica se a restauração da tabela foi ignorada. A restauração de
 * uma tabela poderá ser ignorada quando são utilizadas as opções "dryRun" ou
 * "skipExistingTables".
 * @property {number[]} ignoredKeys Chaves ignoradas na restauração, caso tenha sido utilizada
 * a opção "ignoreDuplicateKeys".
 */
/**
 * @typedef {Object} RestoreResult Resultado da restauração da base de dados.
 * @property {boolean} success Indica se a restauração foi concluída com sucesso.
 * @property {string} error Mensagem de erro indicando a falha na restauração.
 * @property {RestoredTable[]} tables Informações das tabelas restauradas.
 */
/**
 * Classe que permite criar e restaurar cópias da base de dados.
 *
 * O formato do arquivo gerado por esta classe é proprietário e somente pode ser restaurado
 * pelo método `restore` desta mesma classe. A estratégia utilizada para a criação da cópia da
 * base de dados envolve consultas simples das tabelas do banco de dados, não apresentando
 * as mesmas características de integridade obtidas com ferramentas específicas do SGBD. Por este
 * motivo, recomenda-se que a cópia da base de dados seja utilizada apenas para fins de
 * migração ou transporte de dados entre bases de dados, e não como uma solução de backup
 * tradicional.
 * @param {Object} options Opções para criação do objeto DBBackup.
 * @param {string} options.serverHost Nome ou endereço do Engine que tem acesso direto à base de
 * dados.
 * @param {string} options.dbName Nome da base.
 * @param {string} options.dbUserName Nome do usuário no SGBD da base de dados. Deve ser o mesmo
 * usuário informado na configuração da base de dados no Manage.
 * @param {string} options.dbPassword Senha do usuário no SGBD da base de dados. Deve ser a mesma
 * senha informada na configuração da base de dados no Manage.
 * @param {string} [options.userName] Nome do usuário no sistema. Este parâmetro é obrigatório
 * na criação de uma cópia da base de dados e na restauração para uma base já existente. O usuário
 * deverá ter permissão para os escopos de autorização "security.restoreBackup" e
 * "security.createBackup" de acordo com a operação a ser realizada.
 * @param {string} [options.password] Senha do usuário no sistema. Este parâmetro é obrigatório
 * na criação de uma cópia da base de dados e na restauração para uma base já existente.
 * @constructor
 */
declare function DBBackup(options: {
    serverHost: string;
    dbName: string;
    dbUserName: string;
    dbPassword: string;
    userName?: string;
    password?: string;
}): void;
declare class DBBackup {
    /**
     * @typedef {Object} RestoredTable Informações de uma tabela restaurada.
     * @property {string} name Nome da tabela.
     * @property {number} recordCount Quantidade de registros.
     * @property {boolean} merged Indica se os registros foram mesclados com a tabela existente.
     * @property {boolean} ignored Indica se a restauração da tabela foi ignorada. A restauração de
     * uma tabela poderá ser ignorada quando são utilizadas as opções "dryRun" ou
     * "skipExistingTables".
     * @property {number[]} ignoredKeys Chaves ignoradas na restauração, caso tenha sido utilizada
     * a opção "ignoreDuplicateKeys".
     */
    /**
     * @typedef {Object} RestoreResult Resultado da restauração da base de dados.
     * @property {boolean} success Indica se a restauração foi concluída com sucesso.
     * @property {string} error Mensagem de erro indicando a falha na restauração.
     * @property {RestoredTable[]} tables Informações das tabelas restauradas.
     */
    /**
     * Classe que permite criar e restaurar cópias da base de dados.
     *
     * O formato do arquivo gerado por esta classe é proprietário e somente pode ser restaurado
     * pelo método `restore` desta mesma classe. A estratégia utilizada para a criação da cópia da
     * base de dados envolve consultas simples das tabelas do banco de dados, não apresentando
     * as mesmas características de integridade obtidas com ferramentas específicas do SGBD. Por este
     * motivo, recomenda-se que a cópia da base de dados seja utilizada apenas para fins de
     * migração ou transporte de dados entre bases de dados, e não como uma solução de backup
     * tradicional.
     * @param {Object} options Opções para criação do objeto DBBackup.
     * @param {string} options.serverHost Nome ou endereço do Engine que tem acesso direto à base de
     * dados.
     * @param {string} options.dbName Nome da base.
     * @param {string} options.dbUserName Nome do usuário no SGBD da base de dados. Deve ser o mesmo
     * usuário informado na configuração da base de dados no Manage.
     * @param {string} options.dbPassword Senha do usuário no SGBD da base de dados. Deve ser a mesma
     * senha informada na configuração da base de dados no Manage.
     * @param {string} [options.userName] Nome do usuário no sistema. Este parâmetro é obrigatório
     * na criação de uma cópia da base de dados e na restauração para uma base já existente. O usuário
     * deverá ter permissão para os escopos de autorização "security.restoreBackup" e
     * "security.createBackup" de acordo com a operação a ser realizada.
     * @param {string} [options.password] Senha do usuário no sistema. Este parâmetro é obrigatório
     * na criação de uma cópia da base de dados e na restauração para uma base já existente.
     * @constructor
     */
    constructor(options: {
        serverHost: string;
        dbName: string;
        dbUserName: string;
        dbPassword: string;
        userName?: string;
        password?: string;
    });
    /**
     * Cria uma cópia da base de dados.
     * @param {string} fileName Nome do arquivo onde será gravado a cópia da base de dados.
     * @param {Object} [options] Opções da criação da cópia da base de dados.
     * @param {string} [options.ignoredTables] Lista de tabelas separadas por vírgula que serão
     * ignoradas.
     * @param {Date} [options.logStartDate] Data inicial dos registros da tabela iLog que serão
     * incluídos na cópia da base de dados. Caso este parâmetro não seja informado, todos os
     * registros da tabela iLog serão incluídos na cópia.
     */
    backup(
        fileName: string,
        options?: {
            ignoredTables?: string;
            logStartDate?: Date;
        }
    ): void;
    /**
     * Restaura uma cópia da base de dados criada previamente pelo método `backup`.
     *
     * **Importante:** este método retornará um objeto contendo informações sobre as tabelas
     * restauradas, mesmo que a restauração tenha sido interrompida por um erro. Por esse motivo, as
     * propriedades `success` e `error` sempre devem ser verificadas e a ausência do lançamento de
     * um erro não deve ser interpretada como sucesso.
     * @example
     * const backup = new DBBackup({
     *   serverHost: serverHost,
     *   dbName: dbName,
     *   dbUserName: dbUserName,
     *   dbPassword: dbPassword,
     *   userName: userName,
     *   password: password
     * });
     * const result = backup.restore(backupFileName, {
     *   mergeLogTable: true,
     *   dryRun: true
     * });
     *
     * if (!result.success) {
     *   throw new Error(result.error);
     * }
     * @param {string} fileName Nome do arquivo que contém a cópia da base de dados a ser restaurada.
     * @param {Object} options Opções da restauração.
     * @param {boolean} options.ignoreDuplicateKeys Indica que as chaves duplicadas devem ser
     * ignoradas, sendo restaurada apenas a primeira ocorrência encontrada.
     * @param {boolean} options.skipExistingTables Indica que não serão restauradas as
     * tabelas já existentes na base de dados.
     * @param {boolean} options.mergeLogTable Indica que os dados da tabela iLog contidos no arquivo
     * devem ser mesclados com os dados já existentes na base de dados.
     * @param {boolean} options.dryRun Indica que o arquivo deve ser processado sem modificar a base
     * de dados, permitindo validar se o arquivo está íntegro.
     * @return {RestoreResult} Resultado da restauração. Observar a propriedade `success` para
     * determinar se houve uma falha durante o processo.
     */
    restore(
        fileName: string,
        options: {
            ignoreDuplicateKeys: boolean;
            skipExistingTables: boolean;
            mergeLogTable: boolean;
            dryRun: boolean;
        }
    ): RestoreResult;
}
declare namespace DBBackup {
    export { RestoredTable, RestoreResult };
}
/**
 * Informações de uma tabela restaurada.
 */
interface RestoredTable {
    /**
     * Nome da tabela.
     */
    name: string;
    /**
     * Quantidade de registros.
     */
    recordCount: number;
    /**
     * Indica se os registros foram mesclados com a tabela existente.
     */
    merged: boolean;
    /**
     * Indica se a restauração da tabela foi ignorada. A restauração de
     * uma tabela poderá ser ignorada quando são utilizadas as opções "dryRun" ou
     * "skipExistingTables".
     */
    ignored: boolean;
    /**
     * Chaves ignoradas na restauração, caso tenha sido utilizada
     * a opção "ignoreDuplicateKeys".
     */
    ignoredKeys: number[];
}
/**
 * Resultado da restauração da base de dados.
 */
interface RestoreResult {
    /**
     * Indica se a restauração foi concluída com sucesso.
     */
    success: boolean;
    /**
     * Mensagem de erro indicando a falha na restauração.
     */
    error: string;
    /**
     * Informações das tabelas restauradas.
     */
    tables: RestoredTable[];
}
