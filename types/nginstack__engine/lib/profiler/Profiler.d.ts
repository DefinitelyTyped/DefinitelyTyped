export = Profiler;
/**
 * Classe que realiza a instrumentação do código fonte para fins
 * de análise de desempenho.
 *
 * O sistema automaticamente grava no arquivo de log "profiler.log" as estatísticas
 * com tempo de execução superior à configuração "Min RunTime to Log Profiler" existente
 * nas configurações gerais do Manage.
 * @constructor
 */
declare function Profiler(): void;
declare class Profiler {
    /**
     * Delimita o início de um trecho do código fonte que será instrumentado pelo profiler. O trecho
     * analisado será o código contido entre o startOperation() e o endOperation() correspondente.
     * A execução do endOperation() deve ser garantida através de um bloco try..finally.
     * O método startOperation() pode ser chamado dentro de um trecho já instrumentado, criando
     * um aninhamento de operações. Este aninhamento será representando por uma indentação
     * no resultado dos métodos getTxtStatistics() e getHtmlStatistics().
     * @param {string} name Identificação do trecho analisado. Se o trecho analisado for
     * o código de um método ou função é uma boa prática adotar a convenção "Class.methodName()" ou
     * "functionName()".
     * @param {string} [details] Detalhes sobre o trecho analisado, como os parâmetros
     * recebidos pela função, resultado ou outras informações relevantes.
     * @param {boolean} [sumInteractions] Indica se as execuções do código instrumentado
     * devem ser totalizadas nas estatísticas geradas pelo profiler, sendo exibido apenas
     * um registro com a quantidade total de execuções. Quando o sumInteractions está ativo
     * o parâmetro details torna-se irrelevante, pois ao totalizar as execuções o details
     * não é preservado.
     * @see #endOperation
     * @example
     * MyClass.prototype.do = function (){
     *    profiler.startOperation("MyClass.do()", null, true);
     *    try {
     *       myCode;
     *    } finally {
     *       profiler.endOperation();
     *    }
     * }
     */
    startOperation(name: string, details?: string, sumInteractions?: boolean): void;
    /**
     * Delimita o fim de um trecho do código fonte que será instrumentado pelo profiler.
     * @param {string} [details] Detalhes sobre o trecho analisado, como os parâmetros
     * de recebidos pela função, resultado ou outras informações relevantes.
     * @see #startOperation
     */
    endOperation(details?: string): void;
    /**
     * Gera um relatório HTML com as estatísticas geradas pelo Profiler.
     * @return {string} Relatório no formato HTML.
     * @see #getTxtStatistics
     */
    getHtmlStatistics(): string;
    /**
     * Gera um relatório TXT com as estatísticas geradas pelo Profiler. Este relatório
     * pode ser analisado pelo processo "Desenvolvimento > Profiler > Analisador de logs do Profiler".
     * @return {string} Relatório no formato TXT.
     * @see #getHtmlStatistics
     */
    getTxtStatistics(): string;
    /**
     * Determina que as estatísticas geradas pelo profiler serão gravadas no arquivo
     * de log "profiler.log", mesmo que o tempo de execução seja inferior à configuração
     * "Min RunTime to Log Profiler" existente nas configurações gerais do Manage.
     * @type {boolean}
     */
    forcedLog: boolean;
    /**
     * Indica que o profiler do Engine está ativo e que estão sendo coletadas estatísticas de
     * desempenho das operações registradas pelos métodos {@link #startOperation} e
     * {@link #endOperation}.
     *
     * O profiler do Engine pode ser ativo no Manage, pela variável de ambiente `NGIN_PROFILER` ou
     * por meio dos parâmetros de linha de comando `--enableProfiler` e `--enableAutoProfiler`. Mais
     * detalhes no manual [Configuração do Engine](https://nginstack.com/docs/engine/configuration/).
     * @type {boolean}
     */
    enabled: boolean;
    /**
     * Configura uma função para ser ignorada pelo profiler do Engine.
     * @param {function(...*):*} func Função a ser ignorada pelo profiler.
     */
    excludeFunction(func: (...args: any[]) => any): void;
}
declare namespace Profiler {
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {Profiler}
     */
    function getInstance(): Profiler;
}
