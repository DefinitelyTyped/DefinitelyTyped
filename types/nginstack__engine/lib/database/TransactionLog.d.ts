export = TransactionLog;
/**
 * Classe que permite a manipulação de registros do log transacional.
 * @constructor
 */
declare function TransactionLog(): void;
declare class TransactionLog {
    /** @private */
    private classDefManager_;
    /** @private */
    private dbCache_;
    /** @private */
    private classes_;
    /** @private */
    private logger_;
    private deletePerDay_;
    /**
     * Varre as definições de classe e obtém uma lista de regras para limpeza da tabela iLog.
     * @returns {Array<ClearRule>} Lista de regras de limpeza.
     */
    getClearRules(): ClearRule[];
    /**
     * Limpa a tabela iLog com base nas configurações das classes de máximo de dias de
     * manutenção de registros (propriedade "transactionLogMaxDays").
     */
    clear(): void;
    /**
     * Realiza a consulta dos registros de log transacional com base nos parâmetros informados.
     *
     * A consulta falhará se não for informado pelo menos um dos parâmetros: "version",
     * "startDate" ou "recordKey".
     * @param {LogQueryOptions} options Filtros de busca dos logs transacionais.
     * @returns {DataSet} Resultado da consulta aos logs transacionais.
     */
    query(options: LogQueryOptions): DataSet;
    private prepareChanges_;
    private applyLog_;
    /**
     * Realiza o processo de reversão de logs transacionais com base num conjunto de filtros de pesquisa
     * ou num DataSet de logs consultados previamente.
     * @example
     * const TransactionLog = require('@nginstack/engine/lib/database/TransactionLog.js');
     * const LogTypes = require('@nginstack/engine/keys/LogTypes.js');
     * const transactionLog = new TransactionLog();
     * const undoVersion = transactionLog.undoLog({ // Desfaz as remoções executadas pelos usuários no período
     *   logType: LogTypes.DELETE,
     *   userKey: [8888, 9999],
     *   startDate: new Date(),
     *   endDate: new Date(),
     *   startTime: '21:00:00',
     *   endTime: '22:00:00'
     * });
     *
     * @param {LogQueryOptions|LogApplyOptions} options Parâmetros de filtragem dos logs transacionais
     * ou um DataSet contendo registros de log previamente consultados para serem revertidos.
     * @returns {number} Numero de versão gerado pela reversão.
     */
    undoLog(options: LogQueryOptions | LogApplyOptions): number;
    /**
     * Realiza o processo de reaplicação de logs transacionais com base num conjunto de filtros de
     * pesquisa ou num DataSet de logs consultados previamente.
     * @example
     * const TransactionLog = require('@nginstack/engine/lib/database/TransactionLog.js');
     * const transactionLog = new TransactionLog();
     * const redoVersion = transactionLog.redoLog({
     *   version: 999999 // Reaplica as alterações da versão especificada
     * });
     *
     * @param {LogQueryOptions|LogApplyOptions} options Parâmetros de filtragem dos logs transacionais
     * ou um DataSet contendo registros de log previamente consultados para serem reaplicados.
     * @returns {number} Numero de versão gerado pela reversão.
     */
    redoLog(options: LogQueryOptions | LogApplyOptions): number;
}
declare namespace TransactionLog {
    export {
        jazFilesTransactionLogMaxDays,
        errorEventsTransactionLogMaxDays,
        emailEventsTransactionLogMaxDays,
        Database,
        DataSet,
        ClearRule,
        LogQueryOptions,
        LogApplyOptions,
    };
}
declare let jazFilesTransactionLogMaxDays: number;
declare let errorEventsTransactionLogMaxDays: number;
declare let emailEventsTransactionLogMaxDays: number;
type Database = import('../database/Database');
type DataSet = import('../dataset/DataSet');
/**
 * Regra de limpeza do log transacional (tabela iLog).
 */
interface ClearRule {
    /**
     * Tipo da regra. Define se a regra limpará a tabela iLog
     * filtrando pela coluna 'iClass' ou 'iTableClass'.
     */
    kind: 'class' | 'table';
    /**
     * Número máximo de dias configurado para a permanência dos registros
     * pertencentes a essa regra. Qualquer registro que tenha excedido esse tempo será removido.
     */
    maxDays: number;
    /**
     * Nome da tabela a qual a regra se refere.
     */
    tableName: string;
    /**
     * Classe que define a tabela a qual a regra se refere.
     * Caso o tipo da regra seja "table", a limpeza usará esta chave para filtrar os registros a
     * serem removidos pela coluna 'iTableClass'.
     */
    tableClass: number;
    /**
     * Lista de classes usada para filtrar pela coluna 'iClass'
     * os registros a serem removidos. Esta propriedade é usada apenas quando o tipo da regra for
     * "class", sendo obrigatória neste caso.
     */
    classKeys?: number[];
}
/**
 * Informações para filtragem durante a consulta aos logs
 * transacionais. A consulta falhará se não for informado pelo menos um dos parâmetros: "version",
 * "startDate" ou "recordKey".
 */
interface LogQueryOptions {
    /**
     * Data inicial do intervalo de execução da transação.
     */
    startDate?: Date;
    /**
     * Data final do intervalo de execução da transação.
     */
    endDate?: Date;
    /**
     * Hora inicial de execução da transação.
     */
    startTime?: string;
    /**
     * Hora final de execução da transação.
     */
    endTime?: string;
    /**
     * Chave da tabela dos registros envolvidos na transação.
     */
    tableClass?: number | number[];
    /**
     * Chave do registro envolvido na transação.
     */
    recordKey?: number | number[];
    /**
     * Chave do usuário que realizou a transação.
     */
    userKey?: number | number[];
    /**
     * Versão gerada na gravação da transação.
     */
    version?: number | number[];
    /**
     * Tipo de log gerado pela transação.
     */
    logType?: number | number[];
    /**
     * Base de dados onde a consulta dos logs deve ser realizada.
     */
    sourceDatabase?: Database;
}
interface LogApplyOptions {
    /**
     * Registros de log que serão utilizados para reversão ou aplicação.
     */
    logs: DataSet;
    /**
     * Base de dados onde a consulta dos logs deve ser realizada.
     */
    sourceDatabase?: Database;
}
