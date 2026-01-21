export = getStackTrace;
/**
 * Elemento do array retornado por {@link getStackTrace} contendo informações sobre a função em
 * execução.
 * @typedef {Object} StackTraceElement
 * @property {string} functionName Nome da função em execução.
 * @property {string} fileName Nome do arquivo que definiu a função.
 * @property {number} lineNumber Linha do arquivo.
 * @property {number} columnNumber Coluna do arquivo.
 * @property {number} tokenPosition Posição do token em execução em *source*.
 * @property {number} tokenLength Tamanho do token em execução em *source*.
 * @property {boolean} isNativeFunction Indica se a função em execução é nativa do Engine.
 * @property {string} source Trecho do código fonte em execução.
 */
/**
 * Obtém a pilha de funções chamadas do JavaScript. A lista só está disponível quando ocorre uma
 * exceção.
 * @param {Error} error Erro do qual será obtido a pilha de chamadas. Obrigatório no uso
 * do runtime V8.
 * @return {Array<StackTraceElement>} Retorna array com a pilha de chamadas JavaScript.
 */
declare function getStackTrace(error: Error): StackTraceElement[];
declare namespace getStackTrace {
    export { StackTraceElement };
}
/**
 * Elemento do array retornado por {@link getStackTrace} contendo informações sobre a função em
 * execução.
 */
interface StackTraceElement {
    /**
     * Nome da função em execução.
     */
    functionName: string;
    /**
     * Nome do arquivo que definiu a função.
     */
    fileName: string;
    /**
     * Linha do arquivo.
     */
    lineNumber: number;
    /**
     * Coluna do arquivo.
     */
    columnNumber: number;
    /**
     * Posição do token em execução em *source*.
     */
    tokenPosition: number;
    /**
     * Tamanho do token em execução em *source*.
     */
    tokenLength: number;
    /**
     * Indica se a função em execução é nativa do Engine.
     */
    isNativeFunction: boolean;
    /**
     * Trecho do código fonte em execução.
     */
    source: string;
}
