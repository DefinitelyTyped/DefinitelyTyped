export = Listener;
/** @module @nginstack/engine/lib/event/Listener */
/**
 * @typedef {import('./Event')} Event
 * @private
 */
/**
 * Representa uma função de listener registrada em um emitter. O seu uso é opcional, pois os
 * métodos {@link module:@nginstack/engine/lib/event/Emitter#on} e
 * {@link module:@nginstack/engine/lib/event/Emitter#replaceListeners} aceitam
 * uma função como parâmetro.
 * @param {function (Event)} handler Função que deve tratar o evento emitido.
 * @constructor
 */
declare function Listener(handler: (arg0: Event) => any): void;
declare class Listener {
    /** @module @nginstack/engine/lib/event/Listener */
    /**
     * @typedef {import('./Event')} Event
     * @private
     */
    /**
     * Representa uma função de listener registrada em um emitter. O seu uso é opcional, pois os
     * métodos {@link module:@nginstack/engine/lib/event/Emitter#on} e
     * {@link module:@nginstack/engine/lib/event/Emitter#replaceListeners} aceitam
     * uma função como parâmetro.
     * @param {function (Event)} handler Função que deve tratar o evento emitido.
     * @constructor
     */
    constructor(handler: (arg0: Event) => any);
    handler: (arg0: Event) => any;
    /**
     * Executa a função de listener.
     * @param {module:@nginstack/engine/lib/event/Event} evt Evento a ser tratado pela função de listener.
     * @return {boolean} Retorno da função de listener executada.
     */
    handleEvent(evt: any): boolean;
    toString(): string;
}
declare namespace Listener {
    export { Event };
}
type Event = import('./Event');
