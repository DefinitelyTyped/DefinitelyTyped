export = BeforePersistEvent;
/**
 * @typedef {import('../dataset/Transaction')} Transaction
 * @private
 */
/**
 * Evento emitido durante a persistência das alterações de um DataSet na base de dados.
 * @example
 *  this.on('beforePersist', function (evt) {
 *    var evento = evt.transaction.getOrSet('erp.eventoModificacaoUF', function () {
 *      var evento = new DataSet();
 *      dbCache.copyStructure('EVENTO', evento);
 *      evento.create();
 *      return evento;
 *    });
 *    if (evt.action === ApplyUpdatesAction.UPDATE &&
 *        evt.beforeValues.uf !== evt.afterValues.uf) {
 *      evento.append();
 *      // cria um registro na tabela evento com base evt.beforeValues e evt.afterValues
 *      evento.post();
 *    }
 *  });
 * @constructor
 * @extends PersistEvent
 */
declare function BeforePersistEvent(...args: any[]): void;
declare class BeforePersistEvent {
    /**
     * @typedef {import('../dataset/Transaction')} Transaction
     * @private
     */
    /**
     * Evento emitido durante a persistência das alterações de um DataSet na base de dados.
     * @example
     *  this.on('beforePersist', function (evt) {
     *    var evento = evt.transaction.getOrSet('erp.eventoModificacaoUF', function () {
     *      var evento = new DataSet();
     *      dbCache.copyStructure('EVENTO', evento);
     *      evento.create();
     *      return evento;
     *    });
     *    if (evt.action === ApplyUpdatesAction.UPDATE &&
     *        evt.beforeValues.uf !== evt.afterValues.uf) {
     *      evento.append();
     *      // cria um registro na tabela evento com base evt.beforeValues e evt.afterValues
     *      evento.post();
     *    }
     *  });
     * @constructor
     * @extends PersistEvent
     */
    constructor(...args: any[]);
    /**
     * Transação que contém todos os DataSets que serão gravados na transação de banco de dados,
     * permitindo que sejam adicionados outros DataSets.
     * @type {Transaction}
     */
    transaction: Transaction;
    /**
     * Mapa que contém os valores dos campos antes da modificação que será persistida. Os nomes
     * dos campos com letras minúsculas devem ser utilizados como chaves de pesquisa deste mapa.
     * @type {Object<*>}
     */
    beforeValues: any;
    /**
     * Mapa que contém os valores dos campos que serão persistidos no banco de dados. Os nomes
     * dos campos com letras minúsculas devem ser utilizados como chaves de pesquisa deste mapa.
     * @type {Object<*>}
     */
    afterValues: any;
}
declare namespace BeforePersistEvent {
    export { Transaction };
}
type Transaction = import('../dataset/Transaction');
