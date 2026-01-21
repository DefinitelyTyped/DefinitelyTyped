export = Sequence;
/**
 * Objeto responsável por gerar números de uma sequência configurada previamente pelo
 * desenvolvedor.
 * @param {number} key A chave da configuração da sequência na base de dados. Deve ser um registro
 * filho da classe Dados > Sistema > Sequências.
 * @constructor
 */
declare function Sequence(key: number): void;
declare class Sequence {
    /**
     * Objeto responsável por gerar números de uma sequência configurada previamente pelo
     * desenvolvedor.
     * @param {number} key A chave da configuração da sequência na base de dados. Deve ser um registro
     * filho da classe Dados > Sistema > Sequências.
     * @constructor
     */
    constructor(key: number);
    key_: number;
    cacheFileName_: string;
    infoFileName_: string;
    /**
     * O caminho onde são guardados os arquivos de sequenciadores.
     * @type {string}
     * @private
     */
    private path_;
    /**
     * Tamanho do cache de números da sequência. Zero se não deve realizar cache e nulo quando não
     * inicializado.
     * @type {number|null}
     * @private
     */
    private cacheSize_;
    /**
     * A chave da sequência.
     * @type {number}
     */
    key: number;
    private getCacheSize_;
    private readInfoFile_;
    private updateInfoFile_;
    private getDataSetFromDB_;
    private cycle_;
    private reserveRange_;
    private loadCache_;
    private saveCache_;
    private nextValueFromCache_;
    /**
     * Obtém o próximo número da sequência.
     * @return {number} O próximo número da sequência.
     */
    nextValue(): number;
}
declare namespace Sequence {
    export { ReservedRange };
}
interface ReservedRange {
    /**
     * Início da faixa reservada.
     */
    start: number;
    /**
     * Fim da faixa reservada.
     */
    end: number;
}
