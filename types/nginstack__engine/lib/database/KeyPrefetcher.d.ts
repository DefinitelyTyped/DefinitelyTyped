export = KeyPrefetcher;
/**
 * @typedef {import('../database/Database')} Database
 * @private
 */
/**
 * @typedef {import('../connection/Connection')} Connection
 * @private
 */
/**
 * Gerador de chaves positivas em uma base de dados remota que permite reservar uma quantidade
 * de chaves para fins de otimização.
 * @param {(Database|Connection)} [database] Base de dados que será utilizada para gerar
 * as chaves.
 * @constructor
 */
declare function KeyPrefetcher(database?: Database | Connection): void;
declare class KeyPrefetcher {
    /**
     * @typedef {import('../database/Database')} Database
     * @private
     */
    /**
     * @typedef {import('../connection/Connection')} Connection
     * @private
     */
    /**
     * Gerador de chaves positivas em uma base de dados remota que permite reservar uma quantidade
     * de chaves para fins de otimização.
     * @param {(Database|Connection)} [database] Base de dados que será utilizada para gerar
     * as chaves.
     * @constructor
     */
    constructor(database?: Database | Connection);
    /** @private */
    private database_;
    /**
     * Logger utilizado para registrar as informações de log desta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Quantidade de chaves reservadas na base destino.
     * @type {number}
     * @private
     */
    private reservedQty_;
    /**
     * Base da reserva de chaves na base destino. A faixa de chaves consiste de
     * {@link #reservedBase_} até ({@link #reservedBase_} + {@link #reservedQty_} - 1).
     * @type {?number}
     * @private
     */
    private reservedBase_;
    /**
     * Reserva a quantidade de chaves informada, tornando a criação de chaves
     * pelo método {@link #createKey} mais eficiente.<br>
     * Importante: a quantidade de chaves reservadas deverá ser consumida, caso
     * contrário as chaves serão perdidas.
     * @param {number} qty Quantidade de chaves a serem criadas.
     */
    reserve(qty: number): void;
    /**
     * Cria uma chave positiva na base de dados.
     * @return {number} Chave criada.
     */
    createKey(): number;
}
declare namespace KeyPrefetcher {
    export { Database, Connection };
}
type Database = import('../database/Database');
type Connection = import('../connection/Connection');
