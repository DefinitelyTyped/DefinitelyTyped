export = LookupDisplayEvent;
/**
 * Evento emitido para obter o valor de exibição de uma chave do sistema.
 * @example
 *  this.on('lookupDisplay', function (evt) {
 *    evt.displayValue = DBKey.str(evt.key, 'NOME');
 *  });
 * @constructor
 * @extends Event
 */
declare function LookupDisplayEvent(...args: any[]): void;
declare class LookupDisplayEvent {
    /**
     * Evento emitido para obter o valor de exibição de uma chave do sistema.
     * @example
     *  this.on('lookupDisplay', function (evt) {
     *    evt.displayValue = DBKey.str(evt.key, 'NOME');
     *  });
     * @constructor
     * @extends Event
     */
    constructor(...args: any[]);
    /**
     * Chave do sistema da qual se deseja obter o valor de exibição.
     * @type {number}
     */
    key: number;
    /**
     * Valor de exibição da chave indicado por {@link #key}. Os listeners que tratam este evento
     * devem atribuir esta propriedade para informar o valor de exibição da chave.
     * @type {string}
     */
    displayValue: string;
}
