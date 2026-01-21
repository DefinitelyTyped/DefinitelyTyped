export = DBTrackerPool;
/**
 * @typedef {import('./Database')} Database
 * @private
 */
/**
 * Estrutura utilizada para criar um pool de trackers compartilhados por várias
 * threads. Seu uso é desejado quando as threads utilizam um dbTracker de forma
 * esporádica ou intervalada, permitindo o reúso de um dbTracker em várias
 * threads, desde que não seja de forma simultânea.<br>
 * @param {Object} opt_options Opções.
 * @param {number} [opt_options.id] Caso queira recuperar um pool já existente
 * utilizar essa propriedade para identificá-lo.
 * @param {number} [opt_options.size] Caso queira criar um novo pool esta será a
 * quantidade de trackers que o pool terá.
 * @param {Database} [opt_options.database] Base de dados a ser rastreado.
 * Se não for informado, a instância de DBTrackerPool assume que a base a ser
 * rastreada é a mesma base onde ele foi criado.
 * @param {Object} [opt_options.trackerProperties] Propriedades pertencentes ao
 * {@link module:@nginstack/engine/lib/database/DBTracker} que serão aplicadas aos trackers do pool.
 * Exemplo: {autoUndo: true, activeTime: 172800000}
 * @constructor
 */
declare function DBTrackerPool(opt_options: {
    id?: number;
    size?: number;
    database?: Database;
    trackerProperties?: any;
}): void;
declare class DBTrackerPool {
    /**
     * @typedef {import('./Database')} Database
     * @private
     */
    /**
     * Estrutura utilizada para criar um pool de trackers compartilhados por várias
     * threads. Seu uso é desejado quando as threads utilizam um dbTracker de forma
     * esporádica ou intervalada, permitindo o reúso de um dbTracker em várias
     * threads, desde que não seja de forma simultânea.<br>
     * @param {Object} opt_options Opções.
     * @param {number} [opt_options.id] Caso queira recuperar um pool já existente
     * utilizar essa propriedade para identificá-lo.
     * @param {number} [opt_options.size] Caso queira criar um novo pool esta será a
     * quantidade de trackers que o pool terá.
     * @param {Database} [opt_options.database] Base de dados a ser rastreado.
     * Se não for informado, a instância de DBTrackerPool assume que a base a ser
     * rastreada é a mesma base onde ele foi criado.
     * @param {Object} [opt_options.trackerProperties] Propriedades pertencentes ao
     * {@link module:@nginstack/engine/lib/database/DBTracker} que serão aplicadas aos trackers do pool.
     * Exemplo: {autoUndo: true, activeTime: 172800000}
     * @constructor
     */
    constructor(opt_options: {
        id?: number;
        size?: number;
        database?: Database;
        trackerProperties?: any;
    });
    /** @private */
    private database_;
    id: number;
    private generateTrackers_;
    private getAvailableTrackers_;
    private getDBTracker_;
    /**
     * Retorna um {@link module:@nginstack/engine/lib/database/DBTracker} que esteja disponível no pool.<br>
     * Todos os trackers retornados por este método são definidos como em uso e
     * somente estarão disponíveis novamente com a utilização do método
     * {@link #release}.
     * @return {module:@nginstack/engine/lib/database/DBTracker} Nulo caso não haja trackers
     * disponíveis.
     */
    acquire(): any;
    /**
     * Executa uma tentativa de obter um DBTracker disponível para uso deste pool.
     * @return {DBTracker} Nulo caso não existam trackers disponíveis.
     */
    tryAcquire(): DBTracker;
    /**
     * Libera um DBTracker, tornando-o disponível para uso novamente.
     * @param {DBTracker} tracker {@link module:@nginstack/engine/lib/database/DBTracker} que se
     * deseja liberar.
     */
    release(tracker: DBTracker): void;
}
declare namespace DBTrackerPool {
    export { Database };
}
import DBTracker = require('./DBTracker.js');
type Database = import('./Database');
