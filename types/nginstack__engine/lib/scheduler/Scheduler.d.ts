export = Scheduler;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Classe que permite o agendamento da execução de scripts.
 *
 * A execução agendada de um script é útil para permitir a execução automática de processos
 * rotineiros. Ela também é útil para implementar operações off-line, permitindo que um
 * script que não possa ser executado em um momento de indisponibilidade do banco de dados ou
 * conexão possa ser executado posteriormente quando a conexão for restabelecida.
 *
 * Um script agendado não tem acesso à interface com o usuário, nem tem acesso às variáveis
 * `request` e `response`. Ele deve ser desenvolvido com essas restrições e um
 * eventual resultado a ser comunicado para o usuário deve ser realizado por meio de logs,
 * arquivos, email ou alterações na base de dados.
 * @constructor
 */
declare function Scheduler(): void;
declare class Scheduler {
    /**
     * Quantidade de scripts agendados no Engine corrente.
     * @type {number}
     */
    taskCount: number;
    /**
     * Quantidade de scripts em execução no agendador de scripts do Engine corrente.
     * @type {number}
     */
    runningTaskCount: number;
    /**
     * Quantidade de scripts agendados no Engine corrente que falharam na última execução.
     * @type {number}
     */
    failingTaskCount: number;
    /**
     * Quantidade de scripts que serão executados concorrentemente pelo scheduler. Por padrão, o
     * Engine permite a execução de quatro scripts.
     * @type {number}
     */
    maxConcurrentTaskCount: number;
    /**
     * Propriedade legada equivalente a `maxConcurrentTaskCount`.
     * @type {number}
     * @deprecated Utilize ´maxConcurrentTaskCount`.
     */
    maxSimultaneousTasks: number;
    /**
     * Obtém todos os scripts agendados no Engine corrente. O esquema de campos do dataSet
     * retornado é similar ao da classe Scripts Agendados (-1898145133).
     * @return {DataSet} Scripts agendados no Engine.
     */
    getTasks(): DataSet;
    /**
     * Efetiva as alterações realizadas no dataSet `tasks`, obtido previamente por meio do método
     * {@link module:@nginstack/engine/lib/scheduler/Scheduler~Scheduler#getTasks getTasks}.
     * @param {DataSet} tasks Tarefas a serem gravadas.
     * @param {string} [userId] Nome ou e-mail do usuário que será utilizado para executar as
     * tarefas. Caso não seja informado, será utilizado o usuário corrente da sessão.
     * @param {string} [password] Senha do usuário que será utilizada para executar as tarefas.
     */
    saveTasks(tasks: DataSet, userId?: string, password?: string): void;
    /**
     * Remove as tarefas informadas por meio do seu identificador único, obtido na coluna
     * "iUniqueId" do DataSet retornado pelo método
     * {@link module:@nginstack/engine/lib/scheduler/Scheduler~Scheduler#getTasks getTasks}.
     * @param {string|Array<string>} taskIds Identificador único das tarefas a serem removidas.
     * @param {string} [userId] Nome ou e-mail do usuário que será utilizado para remover
     * as tarefas. Caso não seja informado, será utilizado o usuário corrente da sessão.
     * @param {string} [password] Senha do usuário que será utilizada para remover as tarefas.
     */
    delTasks(taskIds: string | string[], userId?: string, password?: string): void;
    /**
     * Inicia as tarefas informadas por meio do seu identificador único, obtido na coluna
     * "iUniqueId" do DataSet retornado pelo método
     * {@link module:@nginstack/engine/lib/scheduler/Scheduler~Scheduler#getTasks getTasks}.
     * @param {string|string[]} taskIds Identificador único das tarefas a serem iniciadas.
     */
    startTasks(taskIds: string | string[]): void;
    /**
     * Interrompe as tarefas informadas por meio do seu identificador único, obtido na coluna
     * "iUniqueId" do DataSet retornado pelo método
     * {@link module:@nginstack/engine/lib/scheduler/Scheduler~Scheduler#getTasks getTasks}.
     *
     * A interrupção de um script em execução não é imediata, pois nem todas as operações
     * bloqueantes permitem a interrupção, como o acesso a drivers externos e o uso de APIs do sistema
     * operacional.
     * @param {string|string[]} taskIds Identificador único das tarefas a serem interrompidas.
     */
    stopTasks(taskIds: string | string[]): void;
    /**
     * Obtém o identificador único da tarefa em execução no ambiente corrente JavaScript.
     *
     * Se o ambiente JavaScript corrente não for associado a uma tarefa do `Scheduler`, será retornado
     * `null`.
     * @example
     * const taskId = scheduler.getCurrentTaskId();
     * if (taskId) {
     *   const task = scheduler.getTaskById(taskId);
     *   task.name; // => 'Task name'
     * } else {
     *   throw new Error('Id da tarefa está disponível apenas durante a execução do script agendado'.);
     * }
     * @return {?string} Identificador único da tarefa em execução ou `null` caso não haja uma.
     */
    getCurrentTaskId(): string | null;
}
declare namespace Scheduler {
    export { getInstance, DataSet };
}
/**
 * Obtém uma instância compartilhada desta classe.
 * @return {Scheduler}
 */
declare function getInstance(): Scheduler;
type DataSet = import('../dataset/DataSet');
