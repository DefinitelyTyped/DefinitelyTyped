export = Adapter;
/**
 * @typedef {import('./Event')} Event
 * @private
 */
/**
 * Adaptador da API antiga de eventos (classe Event) com a classe {@link Emitter}.
 * O objeto construído poderá ser utilizado por APIs que esperam receber uma instância de
 * Event.
 * @param {Emitter} emitter Emissor de eventos que será adaptado. Todos os listeners
 * registrados por esta instância serão adicionados nesse emissor.
 * @param {AdapterDescriptor|Record<*,*>} descriptor Descrição do evento a ser adaptado
 * e os parâmetros esperados.
 * @constructor
 * @extends Event
 * @example
 * var Adapter = require('@nginstack/engine/lib/event/Adapter');
 * this.onBeforePost = new Adapter(listener, {
 *   type: 'beforeChange',
 *   parameters: ['target', 'newValue'],
 *   resultParameter: null,
 *   eventClass: BeforeChangeEvent
 * });
 */
declare function Adapter(emitter: Emitter, descriptor: AdapterDescriptor | Record<any, any>): void;
declare class Adapter {
    /**
     * @typedef {import('./Event')} Event
     * @private
     */
    /**
     * Adaptador da API antiga de eventos (classe Event) com a classe {@link Emitter}.
     * O objeto construído poderá ser utilizado por APIs que esperam receber uma instância de
     * Event.
     * @param {Emitter} emitter Emissor de eventos que será adaptado. Todos os listeners
     * registrados por esta instância serão adicionados nesse emissor.
     * @param {AdapterDescriptor|Record<*,*>} descriptor Descrição do evento a ser adaptado
     * e os parâmetros esperados.
     * @constructor
     * @extends Event
     * @example
     * var Adapter = require('@nginstack/engine/lib/event/Adapter');
     * this.onBeforePost = new Adapter(listener, {
     *   type: 'beforeChange',
     *   parameters: ['target', 'newValue'],
     *   resultParameter: null,
     *   eventClass: BeforeChangeEvent
     * });
     */
    constructor(emitter: Emitter, descriptor: AdapterDescriptor | Record<any, any>);
    /** @private */
    private emitter_;
    /** @private */
    private descriptor_;
    private updateEventWithArguments_;
    /** @private */
    private nonDescribedParameters_;
    /**
     * Indica que não há listeners registrados.
     * @type {boolean}
     */
    isEmpty: boolean;
    /**
     * Propriedade utilizada para determinar o comportamento do Event quando for
     * adicionada uma função ou instância de Method duplicado. Será considerado
     * duplicado se o código fonte da função for igual à uma outra função adicionada
     * anteriormente.
     *
     *
     * Os possíveis valores são: "accept","remove","error":
     *
     * * "ignore": ignora o registro de eventos duplicados;
     * * "accept": permite a ocorrência de eventos duplicados;
     * * "remove": remove o evento duplicado existente da pilha de eventos;
     * * "error": gera um erro antes impedindo a inserção do evento duplicado.
     * @type {string}
     * @default "accept"
     */
    duplicates: string;
    /**
     * Elimina todos os listeners registrados.
     */
    clear(): void;
    /**
     * Elimina todos os listeners registrados.
     * @deprecated Utilize {@link #clear}.
     * @function
     */
    clearMethods: any;
    /**
     * Adiciona uma nova função de listener para este evento.
     * @param {{method: function(*):*, object: Object}|function(*):*} listener Função que tratará este evento.
     */
    set(
        listener:
            | {
                  method: (arg0: any) => any;
                  object: any;
              }
            | ((arg0: any) => any)
    ): void;
    /**
     * Emite o evento executando os listeners registrados previamente pelo método {@link #set}.
     */
    dispatch(...args: any[]): any;
    /**
     * Cria uma cópia desta instância.
     * @return {Adapter}
     */
    clone(): Adapter;
    /**
     * Copia a pilha de eventos do source para este objeto.
     * @param {Event|Adapter} source Evento que deve ser copiado.
     * @param {boolean} [opt_preserveMethods] Indica que os eventos existentes neste
     * objeto não devem ser excluídos. Os eventos do source serão adicionados
     * aos já existentes.
     */
    assign(source: Event | Adapter, opt_preserveMethods?: boolean): void;
    /**
     * Array contendo todas as funções de listeners registradas por meio do método {@link #set}.
     * @type {Array<function(*):*>}
     */
    methods: Array<(arg0: any) => any>;
}
declare namespace Adapter {
    export { adaptEvent, Event };
}
import Emitter = require('./Emitter.js');
import AdapterDescriptor = require('./AdapterDescriptor.js');
/**
 * Cria um adaptador da API de eventos antiga (classe global Event) com a nova API
 * Emitter. Esse adaptador terá os mesmos métodos de Event, mas os eventos
 * registrados por eles serão adicionados como listeners dos eventos da grade por meio
 * método *on*.
 * @param {Object} obj Objeto onde deverá ser criado o evento adaptado.
 * @param {string} name Nome do evento.
 * @param {AdapterDescriptor|Record<*,*>} adapterDescriptor Regras de como deve
 * ser feita a adaptação do evento.
 */
declare function adaptEvent(
    obj: any,
    name: string,
    adapterDescriptor: AdapterDescriptor | Record<any, any>
): void;
type Event = import('./Event');
