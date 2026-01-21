export = JavaRequest;
/**
 * Permite a leitura dos parâmetros informados ao método `EngineJavaInterface.runScript` durante
 * a execução do script.
 *
 * Uma instância desta classe é publicada automaticamente pelo Engine por meio da variável
 * global `javaRequest` quando o script é executado a partir da classe `EngineJavaInterface`.
 * Essa variável não é publicada em outros contextos de execução, como no atendimento das
 * requisições HTTP e no scripts executados pelo `Scheduler`.
 * @constructor
 */
declare function JavaRequest(): void;
declare class JavaRequest {
    /**
     * Obtém o valor do parâmetro através do ser nome ou do seu índice.
     * @param {number|string} indexOrName Índice número ou nome do parâmetro que se deseja obter
     * o valor.
     * @return {string} Valor do parâmetro.
     */
    getParameter(indexOrName: number | string): string;
    /**
     * Obtém o nome do parâmetro a partir do seu índice.
     * @param {number} index Índice do parâmetro.
     * @return {string} Nome do parâmetro.
     */
    getParameterName(index: number): string;
    /**
     * Quantidade de parâmetros enviados.
     * @type {number}
     */
    parameterCount: number;
}
