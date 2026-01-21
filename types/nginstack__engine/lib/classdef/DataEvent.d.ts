export = DataEvent;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Evento base para operações em DataSets.
 * @example
 *  this.on('afterEdit', function (evt) {
 *    evt.data.modificado = new Date();
 *    evt.data.modificador = session.userKey;
 *  });
 * @constructor
 * @extends Event
 */
declare function DataEvent(...args: any[]): void;
declare class DataEvent {
    /**
     * @typedef {import('../dataset/DataSet')} DataSet
     * @private
     */
    /**
     * Evento base para operações em DataSets.
     * @example
     *  this.on('afterEdit', function (evt) {
     *    evt.data.modificado = new Date();
     *    evt.data.modificador = session.userKey;
     *  });
     * @constructor
     * @extends Event
     */
    constructor(...args: any[]);
    /**
     * DataSet que está sendo alterado. Será uma instância protegida do DataSet contra a alteração do
     * registro corrente, portanto não poderão ser utilizados métodos que mudem a posição corrente,
     * como {@link DataSet#first}, {@link DataSet#next}, {@link DataSet#prior},
     * {@link DataSet#last}, {@link DataSet#find}, {@link DataSet#findKey}, etc.
     * @type {DataSet}
     */
    data: DataSet;
}
declare namespace DataEvent {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
