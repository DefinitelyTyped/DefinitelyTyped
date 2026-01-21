export = Progress;
/**
 * @typedef {import('../log/Logger')} Logger
 * @private
 */
/**
 * Classe que permite o registro do progresso de tarefas. O progresso será gravado
 * no log na prioridade PROGRESS, um nível entre DEBUG e INFO. Para que o progresso
 * seja registrado, a categoria de log utilizada deve estar configurada com prioridade
 * DEBUG ou PROGRESS.
 * @param {Logger} [opt_logger] Logger que deve ser utilizado para gravar as mensagens de
 * progresso. Caso não seja informado, os logs serão gravados na categoria root.
 * @see Logger
 * @example
 * var progress = new Progress()
 * try {
 *   progress.beginTask( "Loop de 1 a 100", 100 )
 *   for ( var i = 0; i < 100; ++i ){
 *      // Faz algo
 *      progress.worked()
 *   }
 * } finally {
 *   progress.done()
 * }
 * @constructor
 */
declare function Progress(opt_logger?: Logger): void;
declare class Progress {
    /**
     * @typedef {import('../log/Logger')} Logger
     * @private
     */
    /**
     * Classe que permite o registro do progresso de tarefas. O progresso será gravado
     * no log na prioridade PROGRESS, um nível entre DEBUG e INFO. Para que o progresso
     * seja registrado, a categoria de log utilizada deve estar configurada com prioridade
     * DEBUG ou PROGRESS.
     * @param {Logger} [opt_logger] Logger que deve ser utilizado para gravar as mensagens de
     * progresso. Caso não seja informado, os logs serão gravados na categoria root.
     * @see Logger
     * @example
     * var progress = new Progress()
     * try {
     *   progress.beginTask( "Loop de 1 a 100", 100 )
     *   for ( var i = 0; i < 100; ++i ){
     *      // Faz algo
     *      progress.worked()
     *   }
     * } finally {
     *   progress.done()
     * }
     * @constructor
     */
    constructor(opt_logger?: Logger);
    /**
     * Inicia o registro do progresso de uma tarefa.
     * @param {string} name Nome da tarefa
     * @param {number} [opt_totalWork] Indica o total de trabalho necessário para concluir
     * a tarefa. O registro do trabalho será realizado pelo método worked(). A estimativa
     * de término será indefinido caso este parâmetro não seja informado.
     * @see #worked
     * @see #done
     */
    beginTask(name: string, opt_totalWork?: number): void;
    /**
     * Informa o avanço na tarefa.
     * @param {number} [opt_qty] Quantidade de trabalho realizado dentre o total informado
     * no método beginTask. Se não for informado, será considerado 1.
     * @see #beginTask
     */
    worked(opt_qty?: number): void;
    /**
     * Finaliza o progresso de uma tarefa.
     * @see #beginTask
     */
    done(): void;
    /**
     * Indica que uma subtarefa irá realizar parte do trabalho. O trabalho da subtarefa
     * será registrado proporcionalmente como trabalho da tarefa corrente. O registro
     * do progresso da subtarefa deve ser realizado através da criação de um novo objeto
     * Progress.
     * @param {number} workQty Quantidade de trabalho que a subtarefa irá realizar.
     */
    forkSubTask(workQty: number): void;
}
declare namespace Progress {
    export { Logger };
}
type Logger = import('../log/Logger');
