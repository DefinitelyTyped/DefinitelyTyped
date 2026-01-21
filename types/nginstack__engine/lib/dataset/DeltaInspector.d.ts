export = DeltaInspector;
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * @typedef {import('./RecordIterator')} RecordIterator
 * @private
 */
/**
 * O DeltaInspector é responsável por prover uma API de acesso ao conjunto de registros
 * modificados (delta) de um DataSet.
 *
 * Ele deve ser obtido utilizando o método
 * {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#getDeltaInspector DataSet.getDeltaInspector}.
 * @constructor
 */
declare function DeltaInspector(): void;
declare class DeltaInspector {
    /**
     * Retorna os dados originais, antes das modificações, do registro informado. Caso seja um registro
     * inserido, serão retornados apenas os campos chave e versão, com os demais nulos.
     *
     * Este método retornará `null` caso o registro não tenha sido alterado ou se não existir
     * registro de alteração no Delta associado a chave informada.
     * @param {number|DBKey} key Chave do registro que se deseja buscar o valor original.
     * @return {Record<string, *>|null} Objeto com os campos e valores do registro informado.
     * @example
     * const recordInspector = ds.getDeltaInspector();
     * const currentRecord = recordInspector.getOriginalRecord(key);
     * currentRecord.iname;
     */
    getOriginalRecord(key: number | DBKey): Record<string, any> | null;
    /**
     * Retorna os dados da versão atual, após as modificações, do registro informado.
     *
     * Este método retornará `null` se o registro solicitado não existir no DataSet inspecionado.
     * @param {number|DBKey} key Chave do registro que se deseja buscar o valor corrente.
     * @return {Record<string, *>|null}} Objeto com os campos e valores do registro informado.
     * @example
     * const recordInspector = ds.getDeltaInspector();
     * const currentRecord = recordInspector.getCurrentRecord(key);
     * currentRecord.iname;
     */
    getCurrentRecord(key: number | DBKey): Record<string, any> | null;
    /**
     * Retorna um objeto RecordIterator sobre os registros modificados no DataSet. Os valores retornados
     * serão os valores correntes do DataSet.
     * @return {RecordIterator} Objeto RecordIterator referente aos registros modificados.
     * @see module:@nginstack/engine/lib/dataset/RecordIterator~RecordIterator
     * @example
     * const ds = database.query('SELECT * FROM iGroupUser WHERE iKey < -1 AND iClass = -1898142007');
     * ds.automaticApplyUpdates = false;
     * for (ds.first(); !ds.eof; ds.next() ) {
     *   ds.setField('iName', 'Teste');
     *   ds.post();
     * }
     *
     * const changes = [];
     * const deltaInspector = ds.getDeltaInspector();
     * const iterator = deltaInspector.getUpdatedRecords();
     * const fieldNames = ds.getFieldNames({ toLowerCase: true });
     * let next = iterator.next();
     * while (!next.done) {
     *   const key = next.value.ikey;
     *   const beforeValues = deltaInspector.getOriginalRecord(key);
     *   const afterValues = next.value;
     *   changes.push('Key: ' + key + '. Changes: ' + fieldNames.reduce(function (r, name) {
     *     const beforeValue = beforeValues[name];
     *     const afterValue = afterValues[name]
     *     if (beforeValue !== afterValue) {
     *       r.push(name + ': "' + beforeValue + '" => "' + afterValue + '"');
     *     }
     *     return r;
     *   }, []).join(', '));
     *
     *   next = iterator.next();
     * }
     * changes;
     * // [
     * //   'Key: -1891604012. Changes: iname: "Atualização do sistema" => "Teste"',
     * //   'Key: -1898142003. Changes: iname: "Papel Desenvolvedor" => "Teste"'
     * // ]
     */
    getUpdatedRecords(): RecordIterator;
    /**
     * Retorna um objeto RecordIterator sobre os registros excluídos do DataSet. Os valores retornados
     * serão os valores originais que foram excluídos do DataSet.
     * @return {RecordIterator} Objeto RecordIterator referente aos registros excluídos.
     * @see module:@nginstack/engine/lib/dataset/RecordIterator
     * @example
     * const ds = database.query('SELECT * FROM iGroupUser WHERE iKey = -1');
     * ds.automaticApplyUpdates = false;
     * ds.del();
     *
     * const removedRecords = [];
     * const deltaInspector = ds.getDeltaInspector();
     * const iterator = deltaInspector.getDeletedRecords();
     * let next = iterator.next();
     * while (!next.done) {
     *   const removedRecord = deltaInspector.getOriginalRecord(next.value.ikey);
     *   removedRecords.push({
     *     ikey: removedRecord.ikey,
     *     iname: removedRecord.iname
     *   });
     *   next = iterator.next();
     * }
     * removedRecords; // [{ ikey: -1, iname: 'anonymous' }]
     */
    getDeletedRecords(): RecordIterator;
    /**
     * Retorna um objeto RecordIterator sobre os registros inseridos no DataSet.
     * @return {RecordIterator} Objeto RecordIterator referente aos registros inseridos.
     * @see module:@nginstack/engine/lib/dataset/RecordIterator
     * @example
     * const ds = dbCache.newTableStructure('iHost');
     * ds.insertWithKey = true;
     * ds.automaticApplyUpdates = false;
     * ds.append();
     * ds.setField('iClass', -1898145089); // Servidores
     * ds.setField('iName', 'Test A');
     * ds.post();
     * ds.append();
     * ds.setField('iClass', -1898145089); // Servidores
     * ds.setField('iName', 'Test B');
     * ds.post();
     *
     * const names = [];
     * const iterator = ds.getDeltaInspector().getInsertedRecords();
     * let next = iterator.next();
     * while (!next.done) {
     *   names.push(next.value.iname);
     *   next = iterator.next();
     * }
     * names; // ['Test A', 'Test B']
     */
    getInsertedRecords(): RecordIterator;
}
declare namespace DeltaInspector {
    export { DBKey, DataSet, RecordIterator };
}
type DBKey = import('../dbkey/DBKey');
type DataSet = import('./DataSet');
type RecordIterator = import('./RecordIterator');
