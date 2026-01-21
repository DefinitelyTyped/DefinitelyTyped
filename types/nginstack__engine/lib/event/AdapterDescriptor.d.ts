export = AdapterDescriptor;
/** @module @nginstack/engine/lib/event/AdapterDescriptor */
/**
 * @typedef {import('./Event')} Event
 * @private
 */
/**
 * @typedef {import('./Emitter')} Emitter
 * @private
 */
/**
 * Configuração da adaptação a ser realizada pela classe {@link Adapter}.
 * @constructor
 */
declare function AdapterDescriptor(): void;
declare class AdapterDescriptor {
    /**
     * Tipo do evento que será emitido.
     * @type {string}
     */
    type: string;
    /**
     * Parâmetros que são esperados pelo evento adaptado. Os valores das propriedades informadas
     * serão extraídas do evento emitido.
     * @type {Array}
     */
    parameters: any[];
    /**
     * Nome da propriedade do evento que receberá o resultado das funções de evento adaptada.
     * Informe o valor null caso o evento não necessite retornar um valor.
     * @type {string|null}
     */
    resultProperty: string | null;
    /**
     * Determina se o valor undefined deve ser considerado um valor válido como resultado
     * do evento.
     * @type {boolean}
     */
    acceptsUndefinedResult: boolean;
    /**
     * Construtor do evento que deverá ser emitido por esta classe.
     * @type {Event}
     */
    eventClass: Event;
    /**
     * Indica se o evento poderá ser cancelado.
     * @type {boolean}
     */
    cancelable: boolean;
    /**
     * Função executada antes de um listener adaptado ser executado. Ela é
     * executada antes das propriedades indicadas por {@link #parameters} serem
     * lidas e passadas como parâmetros para a função de listener adaptada.<br>
     * A variável <em>this</em> no contexto da execução desta função será o Emitter.
     * @type {function (Event)}
     */
    beforeAdaptedListener: (arg0: Event) => any;
    /**
     * Função executada depois de um listener adaptado ser executado.  Ela é
     * executada após a propriedade indicada por {@link #resultProperty} ter sido
     * atualizada com o retorno da função de listener adaptada.<br>
     * A variável <em>this</em> no contexto da execução desta função será o Emitter.
     * @type {function (Event)}
     */
    afterAdaptedListener: (arg0: Event) => any;
    /**
     * Função executada antes da execução da função global inherited, no contexto
     * de uma função listener adaptada.<br>
     * A variável <em>this</em> no contexto da execução desta função será o Emitter.
     * @type {function (Event)}
     */
    beforeInherited: (arg0: Event) => any;
    /**
     * Função executada depois da execução da função global inherited, no contexto
     * de uma função listener adaptada.<br>
     * A variável <em>this</em> no contexto da execução desta função será o Emitter.
     * @type {function (Event)}
     */
    afterInherited: (arg0: Event) => any;
    /**
     * Estrutura auxiliar utilizada para controlar parâmetros informados no dispatch
     * ou no inherited que não foram descritos na construção deste adapter.
     * @type {{event: Event, parameters: Array<*>}}
     * @private
     */
    private nonDescribedParameters_;
    /**
     * Essa propriedade possibilita configurar uma função de callback que recebe
     * como parâmetro o emissor do evento e a função/objeto que está sendo
     * registrado(a) no evento adaptado por meio do método set. A função deve
     * retornar um booleano como indicativo se a função de listener deve ou não ser
     * registrada. O retorno true indicará que a função deve ser registrada.
     * @type {function(Emitter, (function()|Record<*,*>)):boolean}
     */
    listenerFilter: (arg0: Emitter, arg1: (() => any) | Record<any, any>) => boolean;
}
declare namespace AdapterDescriptor {
    export { Event, Emitter };
}
type Event = import('./Event');
type Emitter = import('./Emitter');
