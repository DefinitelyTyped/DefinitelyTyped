export = appendRecords;
/** @module @nginstack/engine/lib/testing/dataset/appendRecords */
/**
 * @typedef {import('../../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Adiciona um ou mais registros com os valores informados. Após a execução da função,
 * o dataset poderá ser mantido em estado de inserção para o último registro adicionado, permitindo
 * que outros valores sejam informados antes da efetivação dele. Essa opção é recomendada para casos
 * em que se deseje adicionar apenas um registro.
 * @param {!DataSet} ds Dataset que receberá o registro.
 * @param {!Array<!Record<*,*>>|!Record<*,*>} records Dados de um ou mais registros a serem anexados
 * ao DataSet.
 * @param {boolean} [opt_post] Posta os dados do último registro que será adicionado.
 */
declare function appendRecords(
    ds: DataSet,
    records: Array<Record<any, any>> | Record<any, any>,
    opt_post?: boolean
): void;
declare namespace appendRecords {
    export { DataSet };
}
type DataSet = import('../../dataset/DataSet');
