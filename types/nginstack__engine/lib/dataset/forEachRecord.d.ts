export = forEachRecord;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Executa uma função para cada registro do dataSet informado.
 *
 * **Importante:**: a função que será executada a cada iteração não deve
 * provocar mudanças na quantidade de registros ou em campos que mudem a
 * posição corrente do dataSet.
 * @param {!DataSet} ds DataSet que será iterado.
 * @param {!function(DataSet)} f A função que será chamada para cada elemento.
 * Esta função recebe 1 parâmetro (o dataSet posicionado) e o retorno desta
 * função é ignorado.
 * @param {Object} [opt_obj] Indica o objeto 'this' dentro de f.
 * @example
 * var forEachRecord = require('@nginstack/engine/lib/dataset/forEachRecord');
 * var users = classes.getCachedDataSet(Classes.USERS);
 * forEachRecord(users, function (ds) {
 *     log.info(ds.ikey + ': ' + ds.iname);
 * });
 * @deprecated Utilize {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#iterate}.
 */
declare function forEachRecord(ds: DataSet, f: (arg0: DataSet) => any, opt_obj?: any): void;
declare namespace forEachRecord {
    export { DataSet };
}
type DataSet = import('./DataSet');
