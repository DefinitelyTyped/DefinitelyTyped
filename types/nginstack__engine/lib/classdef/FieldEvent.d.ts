export = FieldEvent;
/**
 * Evento de alteração do valor de um campo.
 * @constructor
 * @extends DataEvent
 */
declare function FieldEvent(...args: any[]): void;
declare class FieldEvent {
    /**
     * Evento de alteração do valor de um campo.
     * @constructor
     * @extends DataEvent
     */
    constructor(...args: any[]);
    /**
     * Campo ao qual se refere o evento.
     * @type {Field}
     */
    field: Field;
}
import Field = require('./Field.js');
