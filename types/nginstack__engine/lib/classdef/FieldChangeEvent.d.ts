export = FieldChangeEvent;
/**
 * Evento de alteração do valor de um campo.
 * @example
 *  field.on('beforeChange', function (evt) {
 *    if (evt.newValue && isValidCode(evt.newValue)) {
 *      evt.newValue = formatCode(evt.newValue);
 *    }
 *  });
 * @constructor
 * @extends FieldEvent
 */
declare function FieldChangeEvent(...args: any[]): void;
declare class FieldChangeEvent {
    /**
     * Evento de alteração do valor de um campo.
     * @example
     *  field.on('beforeChange', function (evt) {
     *    if (evt.newValue && isValidCode(evt.newValue)) {
     *      evt.newValue = formatCode(evt.newValue);
     *    }
     *  });
     * @constructor
     * @extends FieldEvent
     */
    constructor(...args: any[]);
    /**
     * Novo valor do campo, que será assumido após a modificação. O listener do evento pode modificar
     * essa propriedade para indicar o valor que o campo deve assumir, caso o evento tenha sido emitido
     * antes da modificação do campo do DataSet.
     * @type {*}
     */
    newValue: any;
    /**
     * Valor do campo antes da modificação.
     * @type {*}
     */
    beforeValue: any;
}
