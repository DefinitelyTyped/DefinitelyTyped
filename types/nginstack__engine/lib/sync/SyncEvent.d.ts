export = SyncEvent;
/**
 * Classe de Evento de Sincronização. A classe SyncEvent
 * possibilita a uma trilha de execução aguardar inativamente uma sinalização,
 * economizando recursos de processamento.
 * @param {string} eventName Nome do evento.
 * @param {boolean} [opt_manualReset] Se o valor for True, o estado do evento é
 * alterado apenas pelos métodos setEvent e resetEvent. Se for False, seu
 * estado volta para não sinalizado assim que uma trilha de execução saia de
 * uma espera no método Wait.
 * @param {boolean} [opt_osScope] Se False, o evento é privativo do processo.
 * Se True, ele é acessível por outros processos do Sistema Operacional.
 * @constructor
 */
declare function SyncEvent(
    eventName: string,
    opt_manualReset?: boolean,
    opt_osScope?: boolean
): void;
declare class SyncEvent {
    /**
     * Classe de Evento de Sincronização. A classe SyncEvent
     * possibilita a uma trilha de execução aguardar inativamente uma sinalização,
     * economizando recursos de processamento.
     * @param {string} eventName Nome do evento.
     * @param {boolean} [opt_manualReset] Se o valor for True, o estado do evento é
     * alterado apenas pelos métodos setEvent e resetEvent. Se for False, seu
     * estado volta para não sinalizado assim que uma trilha de execução saia de
     * uma espera no método Wait.
     * @param {boolean} [opt_osScope] Se False, o evento é privativo do processo.
     * Se True, ele é acessível por outros processos do Sistema Operacional.
     * @constructor
     */
    constructor(eventName: string, opt_manualReset?: boolean, opt_osScope?: boolean);
    /**
     * Altera o estado do evento para sinalizado. Todas as trilhas de execução que estiverem
     * aguardando pelo evento serão despertadas. Se o objeto foi construído com a propriedade
     * manualResult False, o evento voltará para o estado de não sinalizado assim que as
     * trilhas de execução sejam despertas.
     */
    setEvent(): void;
    /**
     * Altera o estado do evento para não sinalizado.
     */
    resetEvent(): void;
    /**
     * Aguarda a ocorrência do Evento.
     * @param {number} [opt_timeout] Quantidade máxima(em ms) a se esperar. Se não
     * informado, espera até o evento ocorrer
     * @return {boolean} True se o evento ocorreu, False se ocorreu timeout.
     */
    wait(opt_timeout?: number): boolean;
}
