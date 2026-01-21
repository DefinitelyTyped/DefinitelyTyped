export = SessionManager;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Representa o gerenciador de sessões JavaScript, permitindo controlar e
 * obter informações das demais sessões existentes no engine, inclusive de outras bases de dados.
 * @constructor
 * @see module:@nginstack/engine/lib/session/Session
 */
declare function SessionManager(): void;
declare class SessionManager {
    /**
     * Quantidade de sessões(todos os tipos e estados)
     * @type {number}
     */
    sessionsCount: number;
    /**
     * Quantidade de sessões stateful.
     * @type {number}
     */
    statefulSessionsCount: number;
    /**
     * Quantidade de sessões stateless
     * @type {number}
     */
    statelessSessionsCount: number;
    /**
     * Quantidade de sessões standalone
     * @type {number}
     */
    standaloneSessionsCount: number;
    /**
     * Quantidade máxima de sessões stateless
     * @type {number}
     */
    maxStatelessSessionsCount: number;
    /**
     * Quantidade máxima de sessões stateful.
     * @type {number}
     */
    maxStatefulSessionsCount: number;
    /**
     * Quantidade de sessões em uso
     * @type {number}
     */
    inUseSessionsCount: number;
    /**
     * Marca uma sessão stateful para exclusão pelo garbage collector.
     * @param {string} sid Identificador da sessão que será marcada para exclusão pelo garbage
     * collector.
     * @deprecated Utilize `dropSession`.
     */
    dropStatefulSession(sid: string): void;
    /**
     * Marca uma sessão stateless para exclusão pelo garbage collector.
     * @param {string} sid Identificador da sessão que será marcada para exclusão pelo garbage
     * collector.
     * @deprecated Utilize `dropStatelessSessions`.
     */
    dropStatelessSession(sid: string): void;
    /**
     * Marca uma sessão para exclusão pelo garbage collector.
     * @param {string} sid Identificador da sessão que será marcada para exclusão pelo garbage
     * collector.
     */
    dropSession(sid: string): void;
    /**
     * Remove todas as sessões do realm informado que não estejam em uso.
     * @param {string} realm Realm cujas sessões serão removidas.
     */
    dropStatelessSessions(realm: string): void;
    /**
     * Solicita a interrupção da execução de uma sessão JavaScript.
     *
     * A interrupção não é imediata, nem é garantida. Nem todas as operações realizadas pelo
     * Engine podem ser abortadas, principalmente na interação com o sistema operacional e com sistemas
     * de terceiros.
     * @param {string} sid Identificador da sessão cuja execução deverá ser abortada.
     */
    abortSession(sid: string): void;
    /**
     * Obtém o id do thread que está utilizando a sessão informada ou zero caso a
     * mesma não esteja em uso ou não exista.
     * @param {string} sid Id da sessão, obtida através da propriedade Session.id.
     * @return {number} Id do thread que está utilizando a sessão ou 0 se não estiver em uso.
     * @see Session#id
     */
    getSessionThreadId(sid: string): number;
    /**
     * Retorna um DataSet com as estatísticas das sessões do sistema.
     * @return {DataSet} DataSet com os dados das sessões do sistema.
     */
    getStatistics(): DataSet;
    /**
     * Libera os recursos associados às sessões expiradas e descartadas, e executa a rotina de
     * *garbage collector* das sessões inativas.
     *
     * A rotina de limpeza do `SessionManager` é executada automaticamente pelo Engine e este método
     * deve ser utilizado apenas quando for necessário antecipar a liberação dos recursos que não
     * são mais necessários. O seu uso deve ser restrito a testes de desempenho e de estresse, pois
     * a sua execução pode provocar o bloqueio temporário no atendimento de requisições. Este método
     * não deve ser utilizado em processos ou bibliotecas em ambientes de produção.
     * @param {boolean} [wait] Indica que o método aguardará a finalização da limpeza até o tempo
     * indicado por `timeout`.
     * @param {number} [timeout] Quantidade de milissegundos que o método aguardará para a conclusão
     * da limpeza. Caso não seja informado, será considerado `30000` (30 segundos).
     * @return {boolean} True se a rotina de limpeza foi concluída no tempo informado.
     */
    cleanUp(wait?: boolean, timeout?: number): boolean;
}
declare namespace SessionManager {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
