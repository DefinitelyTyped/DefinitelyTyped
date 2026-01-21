export = TaskProgressStatusArray;
/**
 * @typedef {import('./TaskProgressStatus')} TaskProgressStatus
 * @private
 */
/**
 * Classe que agrupa objetos da classe TaskProgressStatus. Esta classe é utilizada
 * pelo método {@link module:@nginstack/engine/lib/progress/ProgressMonitor#getTaskProgressStackUpdate}.
 *
 * **Importante**: apesar do nome essa classe não herda de Array. Seu nome foi mantido apenas
 * para fins de compatibilidade.
 * @constructor
 * @see ProgressMonitor#getTaskProgressStackUpdate
 */
declare function TaskProgressStatusArray(): void;
declare class TaskProgressStatusArray {
    /**
     * Quantidade de elementos.
     * @type {number}
     */
    length: number;
    /**
     * Retorna um objeto com informações do estado do progresso na posição indicada por `index`.
     * @param {number} index Índice dos dados a serem obtidos.
     * @return {TaskProgressStatus}
     */
    item(index: number): TaskProgressStatus;
}
declare namespace TaskProgressStatusArray {
    export { TaskProgressStatus };
}
type TaskProgressStatus = import('./TaskProgressStatus');
