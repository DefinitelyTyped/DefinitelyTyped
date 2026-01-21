export = AfterPersistEvent;
/**
 * Evento emitido após a persistência das alterações de um DataSet na base de dados. Este evento
 * é emitido para cada registro inserido, modificado ou excluído.
 * @example
 *  var logger = Logger.getLogger('package.MyClass');
 *  this.on('afterPersist', function (evt) {
 *    logger.info('Registro ' + evt.key + ' da classe ' + evt.classKey +
 *        ' foi gravado com sucesso. Alteração: ' + evt.action +
 *        '. Versão: ' + evt.version);
 *  });
 * @constructor
 * @extends PersistEvent
 */
declare function AfterPersistEvent(...args: any[]): void;
declare class AfterPersistEvent {
    /**
     * Evento emitido após a persistência das alterações de um DataSet na base de dados. Este evento
     * é emitido para cada registro inserido, modificado ou excluído.
     * @example
     *  var logger = Logger.getLogger('package.MyClass');
     *  this.on('afterPersist', function (evt) {
     *    logger.info('Registro ' + evt.key + ' da classe ' + evt.classKey +
     *        ' foi gravado com sucesso. Alteração: ' + evt.action +
     *        '. Versão: ' + evt.version);
     *  });
     * @constructor
     * @extends PersistEvent
     */
    constructor(...args: any[]);
    /**
     * Versão (campo iVersion ou VERSAO) dos registros após a persistência no banco de dados.
     * @type {number}
     */
    version: number;
}
