export = KeyReplacer;
/**
 * Ajusta referências no banco de uma determinada chave.
 * @constructor
 */
declare function KeyReplacer(): void;
declare class KeyReplacer {
    references: DataSet;
    tableStructuresByName: {};
    segmentMaxDate: Date;
    segmentMinDate: Date;
    versions: number[];
    /**
     * Logger utilizado pela classe KeyReplacer.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Guarda estruturas do cache local pelo nome da tabela.
     * @type {Record<string, DataSet>}
     * @private
     */
    private tableStructuresByName_;
    /**
     * Quantidade de dias em que deve ser segmentado um update quebrado por datas.
     * @type {number}
     */
    segmentInDays: number;
    private getTableFieldName_;
    private getFieldType_;
    private getMemoStringReplaced_;
    private updateTableByDateRange_;
    private updateTableWithDateRange_;
    private updateTableWithoutDateRange_;
    /**
     * Procura por referências a uma chave no banco e substitui pela chave indicada.
     * @param {number} keyMatch Chave a ser localizada.
     * @param {number} keyChange Nova chave.
     * @param {string} tableName Nome da tabela da qual faz parte a chave a ser substituída.
     * @param {string} ignoredTables Lista de tabelas que devem ser ignoradas na substituição.
     * @param {number} keysLimit Determina um limite para a quantidade de registros que terão sua
     * referência substituída.
     * @param {boolean} createLog Define se as alterações serão registradas na tabela de log do
     * sistema (iLog).
     * @return {number} Quantidade de chaves que foram substituídas.
     */
    replaceKey(
        keyMatch: number,
        keyChange: number,
        tableName: string,
        ignoredTables: string,
        keysLimit: number,
        createLog: boolean
    ): number;
}
declare namespace KeyReplacer {
    let partitionDateFields_: Record<string, string>;
    /**
     * Registra o campo de data que deve ser utilizado para segmentação dos registros de uma determinada
     * tabela durante a substituição de uma chave dessa tabela.
     * @param {string} tableName Nome da tabela.
     * @param {string} dateFieldName Nome do campo de data para segmentação.
     */
    function registerPartitionDateField(tableName: string, dateFieldName: string): void;
}
import DataSet = require('../dataset/DataSet.js');
