export = RemoteScheduler;
/**
 * @typedef {import('../database/Database')} Database
 * @private
 */
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Classe que permite o agendamento da execução de scripts em um Engine remoto.
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
 * @param {Database} database Base de dados que será utilizada para consultar ou agendar a execução
 * de scripts.
 * @constructor
 * @see module:@nginstack/engine/lib/scheduler/Scheduler~Scheduler
 */
declare function RemoteScheduler(database: Database): void;
declare class RemoteScheduler {
    /**
     * @typedef {import('../database/Database')} Database
     * @private
     */
    /**
     * @typedef {import('../dataset/DataSet')} DataSet
     * @private
     */
    /**
     * Classe que permite o agendamento da execução de scripts em um Engine remoto.
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
     * @param {Database} database Base de dados que será utilizada para consultar ou agendar a execução
     * de scripts.
     * @constructor
     * @see module:@nginstack/engine/lib/scheduler/Scheduler~Scheduler
     */
    constructor(database: Database);
    /** @private */
    private database_;
    private runAction_;
    /**
     * Quantidade de scripts que serão executados concorrentemente pelo scheduler em um Engine remoto.
     * Por padrão, a base de dados permite a execução de quatro scripts.
     * @type {number}
     */
    maxConcurrentTaskCount: number;
    /**
     * Quantidade de scripts que serão executados concorrentemente pelo scheduler em um Engine remoto.
     * Por padrão, a base de dados permite a execução de quatro scripts.
     * @type {number}
     * @deprecated Utilize `maxConcurrentTaskCount`.
     */
    maxSimultaneousTasks: number;
    /**
     * Obtém todos os scripts agendados no Engine remoto. O esquema de campos do dataSet
     * retornado é similar ao da classe Scripts Agendados (-1898145133).
     * @param {Object} [options] Opções de filtragem
     * @param {string} [options.scriptKey] Chave do script cadastrada no script agendado.
     * @param {string} [options.scriptURI] URI do script da Virtual File System ou da Union File System
     * cadastrada no script agendado. Para mais detalhes, veja
     * {@link module:@nginstack/engine/lib/scheduler/Task~Task#scriptURI}
     * @return {DataSet} Scripts agendados no Engine remoto.
     */
    getTasks(options?: { scriptKey?: string; scriptURI?: string }): DataSet;
    /**
     * Efetiva as alterações realizadas no dataSet `tasks`, obtido previamente por meio do método
     * {@link module:@nginstack/engine/lib/scheduler/RemoteScheduler~RemoteScheduler#getTasks getTasks}.
     * @param {DataSet} tasks Tarefas a serem gravadas.
     * @param {string} [userName] Nome do usuário que será utilizado para executar as tarefas. Caso
     * não seja informado, será utilizado o usuário corrente da sessão.
     * @param {string} [password] Senha do usuário que será utilizada para executar as tarefas.
     */
    saveTasks(tasks: DataSet, userName?: string, password?: string): void;
    /**
     * Remove as tarefas informadas por meio do seu identificador único, obtido na coluna
     * "iUniqueId" do DataSet retornado pelo método
     * {@link module:@nginstack/engine/lib/scheduler/RemoteScheduler~RemoteScheduler#getTasks getTasks}.
     * @param {string|string[]} taskIds Identificador único das tarefas a serem removidas.
     * @param {string} [userName] Nome do usuário que será utilizado para remover as tarefas. Caso
     * não seja informado, será utilizado o usuário corrente da sessão.
     * @param {string} [password] Senha do usuário que será utilizada para remover as tarefas.
     */
    delTasks(taskIds: string | string[], userName?: string, password?: string): void;
    /**
     * Inicia as tarefas informadas por meio do seu identificador único, obtido na coluna
     * "iUniqueId" do DataSet retornado pelo método
     * {@link module:@nginstack/engine/lib/scheduler/RemoteScheduler~RemoteScheduler#getTasks getTasks}.
     * @param {string|string[]} taskIds Identificador único das tarefas a serem iniciadas.
     */
    startTasks(taskIds: string | string[]): void;
    /**
     * Interrompe as tarefas informadas por meio do seu identificador único, obtido na coluna
     * "iUniqueId" do DataSet retornado pelo método
     * {@link module:@nginstack/engine/lib/scheduler/RemoteScheduler~RemoteScheduler#getTasks getTasks}.
     *
     * A interrupção de um script em execução não é imediata, pois nem todas as operações
     * bloqueantes permitem a interrupção, como o acesso a drivers externos e o uso de APIs do sistema
     * operacional.
     * @param {string|string[]} taskIds Identificador único das tarefas a serem interrompidas.
     */
    stopTasks(taskIds: string | string[]): void;
}
declare namespace RemoteScheduler {
    export { Database, DataSet };
}
type Database = import('../database/Database');
type DataSet = import('../dataset/DataSet');
