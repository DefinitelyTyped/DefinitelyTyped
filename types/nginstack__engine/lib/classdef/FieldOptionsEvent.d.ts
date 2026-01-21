export = FieldOptionsEvent;
/**
 * Evento emitido quando deseja-se obter as opções de um campo do tipo "combo".
 * @example
 *  field.on('getOptions', function (evt) {
 *    evt.options = [['Opção A', 'A'], ['Opção B', 'B']];
 *  });
 * @constructor
 * @extends FieldEvent
 */
declare function FieldOptionsEvent(...args: any[]): void;
declare class FieldOptionsEvent {
    /**
     * Evento emitido quando deseja-se obter as opções de um campo do tipo "combo".
     * @example
     *  field.on('getOptions', function (evt) {
     *    evt.options = [['Opção A', 'A'], ['Opção B', 'B']];
     *  });
     * @constructor
     * @extends FieldEvent
     */
    constructor(...args: any[]);
    /**
     * Opções que devem ser exibidas no campo do tipo "combo". Deve ser informado um array
     * com as opções, sendo cada opção um array de duas posições, a primeira contendo o valor
     * a ser exibido para o usuário e a segunda o valor a ser armazenado no campo.
     * @type {Array<Array<*>>}
     */
    options: any[][];
}
