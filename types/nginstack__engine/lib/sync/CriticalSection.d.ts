export = CriticalSection;
/**
 * Permite serializar a execução de um trecho de código, impedindo assim a execução
 * simultânea dele por mais de um ambiente/sessão JavaScript.
 * @constructor
 */
declare function CriticalSection(): void;
declare class CriticalSection {
    /**
     * Define o início de uma seção crítica, a partir desse ponto apenas um processo
     * poderá acessar o trecho de código, não ocorrendo acesso simultâneo
     * @param {string} criticalSectionName Nome da Seção
     */
    enter(criticalSectionName: string): void;
    /**
     * Define o fim de uma seção crítica, a partir desse ponto, os processos poderão
     * acessar o trecho de código, voltando a ocorrer o acesso simultâneo
     * @param {string} criticalSectionName Nome da seção
     */
    leave(criticalSectionName: string): void;
}
declare namespace CriticalSection {
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {CriticalSection}
     */
    function getInstance(): CriticalSection;
}
