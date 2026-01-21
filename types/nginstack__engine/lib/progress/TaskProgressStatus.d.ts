export = TaskProgressStatus;
/**
 * Status do progresso de uma tarefa.
 * @constructor
 */
declare function TaskProgressStatus(): void;
declare class TaskProgressStatus {
    /**
     * Nome da tarefa.
     * @type {string}
     */
    taskName: string;
    /**
     * Índice da tarefa na pilha de tarefas que estão sendo executadas.
     * @type {number}
     */
    index: number;
    /**
     * Data e hora de início da tarefa.
     * @type {Date}
     */
    startTime: Date;
    /**
     * Quantidade total de trabalho que será realizado pela tarefa.
     * @type {number}
     */
    totalWork: number;
    /**
     * Quantidade de trabalho realizado.
     * @type {number}
     */
    completedWork: number;
    /**
     * Indica se a quantidade total de trabalho da tarefa é indeterminada, caso em que
     * o parâmetro totalWork do método Progress.beginTask() não foi informado.
     * @type {boolean}
     * @see Progress#beginTask
     */
    indeterminate: boolean;
}
