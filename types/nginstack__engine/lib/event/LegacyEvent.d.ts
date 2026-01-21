export = LegacyEvent;
/**
 * Classe utilizada para armazenar uma pilha de eventos. Ela implementa uma função
 * global inherited() que permite um evento chamar a definição anterior na pilha.
 * @constructor
 * @deprecated Utilize a nova API de eventos {@link module:@nginstack/engine/lib/event/Emitter}.
 */
declare function LegacyEvent(): void;
declare class LegacyEvent {
    /**
     * Propriedade utilizada para determinar o comportamento do LegacyEvent quando for
     * adicionada uma função ou instância de Method duplicado. Será considerado duplicado
     * se o código fonte da função for igual à uma outra função adicionada anteriormente. <br><br>
     * Os possíveis valores são: "accept","remove","error":<br>
     *  - "accept": permite a ocorrência de eventos duplicados;<br>
     *  - "remove": remove o evento duplicado existente da pilha de eventos;<br>
     *  - "error": gera um erro antes impedindo a inserção do evento duplicado.<br>
     * @type {string}
     * @default "accept"
     */
    duplicates: string;
    /**
     * Tabela hash onde o nome da propriedade é uma chave da iVfs e o valor da propriedade
     * é um array de dois elementos. O primeiro com a função contida dentro do script e o
     * segundo com a versão do script no momento do cache. API pouco usada, onde o set recebe
     * a chave de um script que contém a função a ser adicionada na pilha de eventos.
     * @type {Object}
     * @private
     */
    private _scriptMethodsCache;
    private getMethod;
    /**
     * Cria uma cópia deste objeto, incluindo a pilha de eventos.
     * @return {LegacyEvent} Cópia deste objeto.
     */
    clone(): LegacyEvent;
    /**
     * Adiciona os eventos existentes em source neste objeto.
     * @param {LegacyEvent} source Instância de LegacyEvent, que terá a pilha copiada
     * @see #assign
     */
    assignAddingMethods(source: LegacyEvent): void;
    /**
     * Esvazia a pilha de eventos já registrados.
     */
    clear(): void;
    _methods: Array<Method | ((arg0: any) => any)>;
    /**
     * Método deprecated. Utilize LegacyEvent.clear()
     * @deprecated Utilize {@link #clear}.
     */
    clearMethods(): void;
    /**
     * Copia a pilha de eventos do source para este objeto.
     * @param {LegacyEvent} source Evento que deve ser copiado
     * @param {boolean} preserveMethods Indica que os eventos existentes neste
     * objeto não devem ser excluídos. Os eventos do source serão adicionados
     * aos já existentes
     */
    assign(source: LegacyEvent, preserveMethods: boolean): void;
    /**
     * Dispara o último evento adicionado através do método set. Os itens do array informado
     * serão passados como argumentos para a função ou método que será executado. O retorno
     * deste método será o resultado desta execução.
     * @param {Array} params Array com os argumentos do evento que deve ser executado
     * @see #dispatch
     */
    dispatchWithParameterArray(params: any[]): any;
    /**
     * Dispara o último evento adicionado através do método set. Os argumentos e o
     * retorno deste método serão os argumentos e retorno da função ou método executado.
     * @see #dispatchWithParameterArray
     */
    dispatch(...args: any[]): any;
    private _indexOf;
    /**
     * Inclui na pilha de eventos uma função, método ou a chave de um script que os contenha.
     * A última função ou método adicionada
     * será a primeira a ser executada, tendo a possibilidade de chamar as definições anteriores
     * através da função inherited(). Caso seja informada uma chave de script, ela será
     * exibida no stack trace, após a string que indica que a origem do código foi um eval.
     * @param {function(*)|Method} method Função ou método (instância da classe Method) que
     * deve ser adicionada na pilha de eventos.
     * @see Method
     */
    set(method: ((arg0: any) => any) | Method): void;
    /**
     * Indica se a pilha de eventos está vazia, indicando que não existe método a
     * ser executado pelo dispatch().
     * @type {boolean}
     */
    isEmpty: boolean;
}
declare namespace LegacyEvent {
    let inheritedEvent: any;
    let inheritedIndexEventsMethods: number;
    let inheritedEventsMethodsStack: any[];
    /** @private */
    function executeEventMethod(methodIndex: any, params: any): any;
    /**
     * Dispara o evento declarado antes do evento sendo executado no momento, os argumentos
     * desta função será os argumentos do evento executado. Também é publicado como uma
     * função global durante a execução do evento.<br>
     * @example
     *    // Declaração de uma classe qualquer que possui evento.
     *    function ClasseA( objQualquer ) {
     *       this.onBeforeAction = new LegacyEvent()
     *       this.onBeforeAction.set( function ( sender ) {
     *          ...
     *       } )
     *    }
     *    function ClasseB() {
     *       ClasseA.call( this )
     *       this.onBeforeAction.set( function ( sender ) {
     *          // neste momento será executado a função declarada na ClasseA
     *          inherited( sender )
     *          ...
     *       } )
     *    }
     */
    function inherited(...args: any[]): any;
}
import Method = require('./LegacyMethod.js');
