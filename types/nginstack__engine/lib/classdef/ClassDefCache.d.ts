export = ClassDefCache;
/** @module @nginstack/engine/lib/classdef/ClassDefCache */
/**
 * Classe utilizada para guardar informações de cache associadas a uma definição de modelo
 * de dados de uma classe. Quando uma definição é modificada, todas as informações no cache
 * associadas a ela são descartadas. O sistema também poderá realizar descarte das informações
 * a qualquer momento por outros critérios, como limite do tamanho do cache ou redução do consumo
 * de memória da aplicação.
 *
 * **Importante**: como o cache a princípio é mantido durante toda a vida do sistema,
 * não utilize-o para guardar dados de informações úteis apenas para um processamento
 * específico que não será reutilizado em outro momento da vida de uma sessão.
 * @constructor
 */
declare function ClassDefCache(): void;
declare class ClassDefCache {
    /** @private */
    private data_;
    /**
     * Guarda um dado no cache associado ao id informado. Como o cache é compartilhado, garanta que
     * o id informado é único adotando algum critério de namespace.
     * @param {string} id Id único da informação que será armazenada no cache.
     * @param {*} value Valor associado ao id informado.
     */
    set(id: string, value: any): void;
    /**
     * Obtém um dado no cache associado ao id informado, gravado previamente por meio do método
     * {@link #set}.
     * @param {string} id Id único da informação armazenada no cache.
     * @return {*} Retorna o dado contido no cache ou null, caso não haja nenhum.
     */
    get(id: string): any;
    /**
     * Tenta obter um dado no cache associado ao id informado. Caso não haja, executa a função
     * informada, guarda o retorno da função no cache e retorna o valor obtido.
     * @param {string} id Id único da informação armazenada no cache.
     * @param {function():*} func Função que irá gerar o dado a ser gravado no cache e retornado
     * por este método.
     * @param {Object} [opt_obj] O objeto que será utilizado como o valor de 'this'
     * dentro de func.
     * @return {*} Retorna o dado contido no cache ou o resultado da função informado caso não
     * tenha encontrado no cache.
     */
    getOrElse(id: string, func: () => any, opt_obj?: any): any;
    /**
     * Indica se existe uma informação no cache associado ao id informado.
     * @param {string} id Id único da informação armazenada no cache.
     */
    has(id: string): boolean;
}
