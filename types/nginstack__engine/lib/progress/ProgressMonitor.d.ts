export = ProgressMonitor;
/**
 * @typedef {import('./TaskProgressStatusArray')} TaskProgressStatusArray
 * @private
 */
/**
 * Classe que permite monitorar o progresso das tarefas que estão sendo realizadas.
 * Esta classe não possui construtor e uma instância é publicada no ambiente
 * através da propriedade "engine.progressMonitor".
 * @constructor
 * @see Engine
 */
declare function ProgressMonitor(): void;
declare class ProgressMonitor {
    /**
     * Obtém os status do progresso das tarefas de um thread.
     * @param {TaskProgressStatusArray} statusArray Pilha dos status do progresso das
     * tarefas em execução pelo thread informado. Este parâmetro será atualizado por
     * este método quando houver alguma alteração dos status desde a última execução
     * deste método.
     * @param {number} threadId Identificador do thread que será monitorado. Caso
     * não seja informado, será considerado o thread atual.
     * @return {boolean} Indica se houve uma alteração nos status desde a última execução
     * deste método.
     * @see TaskProgressStatusArray
     */
    getTaskProgressStackUpdate(statusArray: TaskProgressStatusArray, threadId: number): boolean;
}
declare namespace ProgressMonitor {
    export { TaskProgressStatusArray };
}
type TaskProgressStatusArray = import('./TaskProgressStatusArray');
