export = SystemMonitor;
/**
 * Classe responsável por fornecer informações de desempenho e consumo de recursos do sistema.
 * @constructor
 */
declare function SystemMonitor(): void;
declare class SystemMonitor {
    /**
     * Quantidade de bytes de memória física alocada e em uso pelo Engine.
     *
     * No Windows, esta propriedade retorna o conjunto de trabalho do processo (working set). No Linux,
     * é retornado o tamanho do conjunto residente (RSS).
     * @type {number}
     */
    usedPhysical: number;
    /**
     * Maior quantidade de bytes de memória física que foi alocada pelo Engine durante a sua execução.
     * @type {number}
     */
    peakPhysical: number;
    /**
     * Quantidade de bytes de memória virtual que de fato está sendo utilizada pelo Engine. Este valor
     * desconsidera a memória virtual reservada para as bibliotecas compartilhadas e as páginas de
     * memória que foram reservadas, mas que não foram confirmadas.
     *
     * No Windows, esta propriedade retorna o tamanho de confirmação do processo (commit charge). No
     * Linux, é retornada a soma da memória residente e da paginada em disco (RSS + Swap).
     * @type {number}
     */
    usedVirtual: number;
    /**
     * Maior quantidade de bytes de memória virtual que foi utilizada pelo Engine durante a
     * sua execução.
     * @type {number}
     */
    peakVirtual: number;
    /**
     * Quantidade em bytes da memória física instalada no sistema operacional.
     * @type {number}
     */
    totalPhysical: number;
    /**
     * Quantidade em bytes da memória física do sistema operacional disponível para os processos.
     * @type {number}
     */
    availablePhysical: number;
    /**
     * Tamanho do arquivo de paginação do sistema operacional que pode ser utilizado como
     * memória virtual.
     * @type {number}
     */
    totalPageFile: number;
    /**
     * Espaço livre do arquivo de paginação do sistema operacional.
     * @type {number}
     */
    availablePageFile: number;
    /**
     * Quantidade de sessões stateful criadas no Engine.
     * @type {number}
     */
    statefulSessionsCount: number;
    /**
     * Quantidade de sessões stateless criadas no Engine.
     * @type {number}
     */
    statelessSessionsCount: number;
    /**
     * Quantidade de sessões standalone criadas no Engine.
     * @type {number}
     */
    standaloneSessionsCount: number;
    /**
     * Quantidade em bytes da memória reservada para cache de tabelas e índices dos DataSets criados
     * pelo Engine.
     * @type {number}
     */
    idoCacheSize: number;
    /**
     * Propriedade legada equivalente a {@link #usedPhysical}.
     * @type {number}
     * @deprecated
     */
    allocated: number;
    /**
     * Propriedade legada equivalente a {@link #usedVirtual}.
     * @type {number}
     * @deprecated
     */
    virtualAllocated: number;
}
declare namespace SystemMonitor {
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {SystemMonitor}
     */
    function getInstance(): SystemMonitor;
}
