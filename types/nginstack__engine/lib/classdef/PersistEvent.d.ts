export = PersistEvent;
/**
 * Evento emitido durante a persistência das alterações de um DataSet na base de dados.
 * @constructor
 * @extends Event
 */
declare function PersistEvent(...args: any[]): void;
declare class PersistEvent {
    /**
     * Evento emitido durante a persistência das alterações de um DataSet na base de dados.
     * @constructor
     * @extends Event
     */
    constructor(...args: any[]);
    /**
     * Tipo de alteração que foi realizada no registro. Valores possíveis:
     * ApplyUpdatesAction.INSERT, ApplyUpdatesAction.UPDATE e ApplyUpdatesAction.DELETE.
     * @type {ApplyUpdatesAction}
     */
    action: ApplyUpdatesAction;
    /**
     * Chave do registro que está sendo persistido.
     * @type {number}
     */
    key: number;
    /**
     * Classe do registro que está sendo persistido. No caso de registros inseridos e atualizados, a
     * a classe de dados será a classe após as modificações, ou seja, a classe do registro que será
     * gravado na base de dados. No caso de
     * do registro após a modificação
     * @type {number}
     */
    classKey: number;
}
import ApplyUpdatesAction = require('../dataset/ApplyUpdatesAction.js');
