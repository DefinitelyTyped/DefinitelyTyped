export = DBTracker;
/**
 * Classe que cria um rastreador de registros criados durante a execução da sessão do usuário.
 * @param {Object} [opt_options] Opções
 * @param {string} [opt_options.id] Identificador de rastreio. Quando informado,
 * é aberto um DBTracker criado anteriormente. A abertura de um DBTracker
 * permite o desfazimento das alterações rastreadas anteriormente ou
 * complementar o rastreio em uma outra sessão.
 * @param {Database} [opt_options.database] Base de dados a ser rastreado.
 * Se não for informado, a instância de DBTracker assume que a base a ser
 * rastreada é da mesma base onde ele foi criado.
 * @param {number} [opt_options.poolId] No caso de criação de um DBTracker, este
 * parâmetro identifica a que pool ele faz parte, caso ele faça parte de um.
 * @constructor
 */
declare function DBTracker(opt_options?: {
    id?: string;
    database?: Database;
    poolId?: number;
}): void;
declare class DBTracker {
    /**
     * Classe que cria um rastreador de registros criados durante a execução da sessão do usuário.
     * @param {Object} [opt_options] Opções
     * @param {string} [opt_options.id] Identificador de rastreio. Quando informado,
     * é aberto um DBTracker criado anteriormente. A abertura de um DBTracker
     * permite o desfazimento das alterações rastreadas anteriormente ou
     * complementar o rastreio em uma outra sessão.
     * @param {Database} [opt_options.database] Base de dados a ser rastreado.
     * Se não for informado, a instância de DBTracker assume que a base a ser
     * rastreada é da mesma base onde ele foi criado.
     * @param {number} [opt_options.poolId] No caso de criação de um DBTracker, este
     * parâmetro identifica a que pool ele faz parte, caso ele faça parte de um.
     * @constructor
     */
    constructor(opt_options?: { id?: string; database?: Database; poolId?: number });
    /** @private */
    private database_;
    /** @private */
    private id_;
    poolId: number;
    /** @private */
    private event_;
    /**
     * Logger utilizado pelo DBTracker.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Identificação do {@link DBTrackerPool} que este tracker faz
     * parte.
     * @type {number}
     * @private
     */
    private poolId_;
    /**
     * Quando ativo, irá desfazer automaticamente as alterações rastreadas na
     * execução do método {@link #finish}.
     * @type {boolean}
     * @see DBTracker#finish
     */
    autoUndo: boolean;
    /**
     * Identificador do rastreio.
     * @type {string}
     */
    id: string;
    private getDBDate_;
    private searchEvent_;
    /**
     * Tempo máximo em milissegundos de atividade dos registros que estão sendo
     * rastreados. Após esse tempo, um DBTracker será considerado abandonado e
     * poderá ser finalizado automaticamente pelo sistema.
     * @type {number}
     * @default 172800000
     */
    maxActiveTime: number;
    /**
     * Determina se um rastreador está em atividade.
     * @type {boolean}
     */
    active: boolean;
    /**
     * Inicia o rastreio de todos os registros que serão criados.
     */
    start(): void;
    /**
     * Finaliza o rastreio de registros na base de dados.
     */
    finish(): void;
    /**
     * Reverte todas as alterações que foram rastreadas.
     * @return {number} Versão das alterações de desfazimento.
     */
    undoChanges(): number;
}
declare namespace DBTracker {
    export { finishAbandoned, Database };
}
/**
 * Finaliza todos os rastreamentos que foram abandonados.
 * @param {Database} [database] Base de dados para finalizar os
 * registros abandonados.
 * @return {number} Número de eventos finalizados.
 * @memberOf DBTracker
 */
declare function finishAbandoned(database?: Database): number;
type Database = import('./Database');
