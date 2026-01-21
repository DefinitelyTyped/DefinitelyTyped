export = ClassDef;
/**
 * Classe comum a todas as definições gerenciadas pelo
 * {@link module:@nginstack/engine/lib/classdef/ClassDefManager}.
 * @constructor
 * @extends Emitter
 */
declare function ClassDef(): void;
declare class ClassDef {
    /**
     * Logger utilizado pela API de definição de classes.
     * @type {Logger}
     * @protected
     */
    protected logger_: Logger;
    /**
     * Indica que o código-fonte da definição está sendo executado.
     * @type {boolean}
     * @protected
     */
    protected evaluatingSource_: boolean;
    /**
     * Definição da qual esta definição é filha.
     * @type {ClassDef}
     */
    parentDef: ClassDef;
    /**
     * Chave da classe de dados a qual esta definição está associada.
     * @type {?number}
     */
    classKey: number | null;
    /**
     * Chave da classe de dados a qual esta definição está associada.
     * @type {?number}
     * @deprecated Utilize {@link #classKey}.
     */
    key: number | null;
    private init;
    /** @private */
    private __proto__;
    private evalSource;
}
import Logger = require('../log/Logger.js');
