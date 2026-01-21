export = SurrogateListener;
/**
 * @typedef {import('./Event')} Event
 * @private
 */
/**
 * Listener especial criado pelo método {@link Emitter#replaceListeners} para
 * permitir que a função de tratamento possa executar os listeners que foram substituídos.<br>
 * @param {function (Event, function(Event))} handler Função que deve
 * tratar o evento emitido. A função informada receberá, além do parâmetro
 * <em>event</em>, um segundo parâmetro que será uma função, que ao ser invocada, emitirá o
 * o evento informado para os listeners que foram substituídos.
 * @param {Array<Listener>} surrogatedListeners Listeners que foram substituídos
 * por este listener.
 * @constructor
 * @extends Listener
 */
declare function SurrogateListener(
    handler: (arg0: Event, arg1: (arg0: Event) => any) => any,
    surrogatedListeners: Listener[]
): void;
declare class SurrogateListener {
    /**
     * @typedef {import('./Event')} Event
     * @private
     */
    /**
     * Listener especial criado pelo método {@link Emitter#replaceListeners} para
     * permitir que a função de tratamento possa executar os listeners que foram substituídos.<br>
     * @param {function (Event, function(Event))} handler Função que deve
     * tratar o evento emitido. A função informada receberá, além do parâmetro
     * <em>event</em>, um segundo parâmetro que será uma função, que ao ser invocada, emitirá o
     * o evento informado para os listeners que foram substituídos.
     * @param {Array<Listener>} surrogatedListeners Listeners que foram substituídos
     * por este listener.
     * @constructor
     * @extends Listener
     */
    constructor(
        handler: (arg0: Event, arg1: (arg0: Event) => any) => any,
        surrogatedListeners: Listener[]
    );
    surrogatedListeners: Listener[];
    /**
     * Função de listener que deverá ser executada.
     * @type {function (Event, function(Event))}
     */
    handler: (arg0: Event, arg1: (arg0: Event) => any) => any;
    /**
     * Executa a função de listener.
     * @param {Event} event Evento a ser tratado pela função de listener.
     * @return {boolean} Retorno da função de listener executada.
     */
    handleEvent(event: Event): boolean;
    /**
     * Filtra o array de listeners substituídos por esta instância, mantendo apenas os listeners
     * que satisfaçam a função de filtro informada. A função de filtro informada receberá
     * o listener a ser filtrado.
     * @param {function(Listener)} filterFn Função que indicará se o listener deve ser
     * mantido.
     */
    filterSurrogatedListeners(filterFn: (arg0: Listener) => any): void;
}
declare namespace SurrogateListener {
    export { Event };
}
import Listener = require('./Listener.js');
type Event = import('./Event');
