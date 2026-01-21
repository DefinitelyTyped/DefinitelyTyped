export = Transaction;
/**
 * @typedef {import('../database/Database')} Database
 * @private
 */
/**
 * @typedef {import('../connection/Connection')} Connection
 * @private
 */
/**
 * Gerencia a persistência de um conjunto de datasets para que suas alterações sejam efetivadas em
 * uma única transação do banco de dados.
 * @param {(Database|Connection)} [opt_database] Instância que representa o banco de dados.
 * @constructor
 */
declare function Transaction(opt_database?: Database | Connection): void;
declare class Transaction {
    /**
     * @typedef {import('../database/Database')} Database
     * @private
     */
    /**
     * @typedef {import('../connection/Connection')} Connection
     * @private
     */
    /**
     * Gerencia a persistência de um conjunto de datasets para que suas alterações sejam efetivadas em
     * uma única transação do banco de dados.
     * @param {(Database|Connection)} [opt_database] Instância que representa o banco de dados.
     * @constructor
     */
    constructor(opt_database?: Database | Connection);
    /** @private */
    private database_;
    /** @private */
    private data_;
    /** @private */
    private dataById_;
    /**
     * Adiciona um dataset para ser persistido durante uma transação que não poderá ser obtido
     * pelos métodos {@link #get} ou {@link #getOrSet}. Seu uso é recomendado para DataSets
     * que não podem ser modificados por objetos que têm acesso à instância desta classe. Por
     * exemplo, eventos de persistência recebem uma instância da transação corrente, mas
     * não devem ter acesso aos dataSets internos dos objetos de gestão.
     * @param {DataSet} ds DataSet a ser adicionado na transação.
     */
    add(ds: DataSet): void;
    /**
     * Determina se um dataset já está dentro da transação. Caso o dataset esteja
     * true será retornado.
     * @param {DataSet} ds DataSet a ser analisado.
     * @returns {boolean} True se o dataset estiver contido na transação.
     */
    contains(ds: DataSet): boolean;
    /**
     * Obtém um dataset previamente adicionado pelos métodos {@link #set} ou {@link #getOrSet}.
     * Será gerado um erro caso não exista um dataSet registrado com o nome informado.
     * @param {string} id Id do DataSet previamente adicionado.
     * @return {DataSet} DataSet com o nome informado.
     * @see #set
     * @see #getOrSet
     */
    get(id: string): DataSet;
    /**
     * Adiciona um dataset a ser gravado nesta transação associando-o a um identificador único.
     * Esse DataSet poderá ser obtido por meio dos métodos {@link #get} ou {@link #getOrSet}.
     * @param {string} id Id único do DataSet.
     * @param {DataSet} dataSet DataSet a ser adicionado na transação, associado ao id informado.
     */
    set(id: string, dataSet: DataSet): void;
    /**
     * Obtém o dataset registrado com o id informado ou, caso não exista um, executa <em>create</em>
     * para criar o DataSet e o registra com o id informado.
     * @param {string} id Id único do DataSet.
     * @param {function(): DataSet} createFunc Função que deverá retornar o DataSet a ser adicionado
     * na transação, caso não haja um com o id informado.
     * @return DataSet com o id informado caso haja um ou o dataSet criado por <em>createFunc</em>
     * no caso contrário.
     * @example
     *  this.on('beforePersist', function (evt) {
     *    var evento = evt.transaction.getOrSet('erp.eventoUF', function () {
     *      var evento = new DataSet();
     *      dbCache.copyStructure('EVENTO', evento);
     *      evento.create();
     *    });
     *    if (evt.action === ApplyUpdatesAction.UPDATE &&
     *        evt.beforeValues.uf !== evt.afterValues.uf) {
     *      evento.append();
     *      // cria um registro na tabela evento com base evt.beforeValues e evt.afterValues
     *      evento.post();
     *      return evento;
     *    }
     *  });
     */
    getOrSet(id: string, createFunc: () => DataSet): any;
    /**
     * Persiste os dados que foram adicionados em uma transação.
     * @return {number} Versão da operação realizada pela transação.
     * @see Database#applyUpdates
     * @see DataSet#applyUpdates
     */
    commit(): number;
    /**
     * Desfaz todas as alterações que estão registradas no delta dos DataSets.
     * Nota: O rollback usa o delta dos DataSets para desfazer as alterações, ou seja, apenas o que
     * estiver no delta será desfeito.
     * @see DataSet.rollBack
     */
    rollback(): void;
}
declare namespace Transaction {
    export { Database, Connection };
}
import DataSet = require('./DataSet.js');
type Database = import('../database/Database');
type Connection = import('../connection/Connection');
