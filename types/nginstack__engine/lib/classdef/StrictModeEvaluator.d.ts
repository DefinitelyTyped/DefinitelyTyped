export = StrictModeEvaluator;
/**
 * Estrutura de dados que representa um componente a ser protegido.
 * Os componentes podem ser protótipos ou outros objetos.
 * Devem ser fornecidas propriedades, métodos e eventos de {@link ProtectedObject} nos
 * descritores para o objeto definido na propriedade "object" de {@link ProtectedObject}.
 * Há a necessidade de serem enviadas funções que irão substituir os métodos originais em
 * "methods", com intuito de validar estritamente o uso dos métodos.
 * No caso de eventos deprecated e propriedades serão protegidos de acordo com o que
 * estiver definido na listas de "events" e "properties", respectivamente.
 * @typedef {Object} ProtectedObject
 * @property {string} id
 * @property {Object} object:
 * @property {Array<string>} properties
 * @property {Object<function(*)>} methods
 * @property {Array<string>} events
 */
/**
 * O validador de modo estrito é responsável por proteger propriedades, métodos e eventos
 * de um determinado objeto.
 * @param {...(ProtectedObject|Object)} var_protected Definição do objeto a ser protegido.
 * @constructor
 * @example
 * var StrictModeEvaluator = require('@nginstack/engine/lib/classdef/StrictModeEvaluator');
 * var evaluator = new StrictModeEvaluator({
 *   object: Grid.prototype,
 *   properties: [
 *    'canInsert'
 *   ],
 *   methods: {
 *     insert: function () {
 *       throw new Error('method');
 *     },
 *     on: function () {
 *       throw new Error('event');
 *     }
 *   },
 *   events: [
 *    'afterInsert'
 *   ],
 *    id: 'grid'
 *  });
 */
declare function StrictModeEvaluator(...args: any[]): void;
declare class StrictModeEvaluator {
    /**
     * Estrutura de dados que representa um componente a ser protegido.
     * Os componentes podem ser protótipos ou outros objetos.
     * Devem ser fornecidas propriedades, métodos e eventos de {@link ProtectedObject} nos
     * descritores para o objeto definido na propriedade "object" de {@link ProtectedObject}.
     * Há a necessidade de serem enviadas funções que irão substituir os métodos originais em
     * "methods", com intuito de validar estritamente o uso dos métodos.
     * No caso de eventos deprecated e propriedades serão protegidos de acordo com o que
     * estiver definido na listas de "events" e "properties", respectivamente.
     * @typedef {Object} ProtectedObject
     * @property {string} id
     * @property {Object} object:
     * @property {Array<string>} properties
     * @property {Object<function(*)>} methods
     * @property {Array<string>} events
     */
    /**
     * O validador de modo estrito é responsável por proteger propriedades, métodos e eventos
     * de um determinado objeto.
     * @param {...(ProtectedObject|Object)} var_protected Definição do objeto a ser protegido.
     * @constructor
     * @example
     * var StrictModeEvaluator = require('@nginstack/engine/lib/classdef/StrictModeEvaluator');
     * var evaluator = new StrictModeEvaluator({
     *   object: Grid.prototype,
     *   properties: [
     *    'canInsert'
     *   ],
     *   methods: {
     *     insert: function () {
     *       throw new Error('method');
     *     },
     *     on: function () {
     *       throw new Error('event');
     *     }
     *   },
     *   events: [
     *    'afterInsert'
     *   ],
     *    id: 'grid'
     *  });
     */
    constructor(...args: any[]);
    /** @private */
    private protected_;
    /** @private */
    private preserved_;
    /**
     * Controle da quantidade de vezes que foi habilitado o modo estrito de forma
     * aninhada. A desproteção será realizada apenas quando o nível for zero.
     * @type {number}
     * @private
     */
    private enableLevel_;
    /**
     * Controle da quantidade de vezes que foi solicitado a pausa temporária do modo
     * estrito.
     * @type {number}
     * @private
     */
    private pauseLevel_;
    /**
     * Determina se o modo estrito está habilitado ou desabilitado.
     * @type {boolean}
     */
    enabled: boolean;
    private preserve_;
    private restore_;
    private protectProperty_;
    private restoreProperty_;
    private protect_;
    private unprotect_;
    /**
     * Ativa o modo estrito para todos os objetos ou protótipos definidos em "object" de um
     * {@link ProtectedObject} de acordo com os descritores "properties", "methods" e "events".
     */
    enable(): void;
    /**
     * Desativa o modo estrito para todos os objetos ou protótipos definidos em "object" de um
     * {@link ProtectedObject} de acordo com os descritores "properties", "methods" e "events".
     */
    disable(): void;
    /**
     * Desativa temporariamente o modo estrito. Pausar o modo estrito é necessário quando
     * dentro de uma definição de modelo está sendo solicitada uma definição de visão ou,
     * mais comum, está sendo utilizada a API antiga de obtenção de definição de classes. Nestas
     * situações, a definição de visão deve ser montada sem o modo estrito estar ativo. Logo
     * após a sua construção, o modo estrito deve ser ativo novamente.
     */
    pause(): void;
    /**
     * Reativa o modo estrito, desativado temporariamente pelo método {@link #pause}.
     */
    resume(): void;
}
declare namespace StrictModeEvaluator {
    export { ProtectedObject };
}
/**
 * Estrutura de dados que representa um componente a ser protegido.
 * Os componentes podem ser protótipos ou outros objetos.
 * Devem ser fornecidas propriedades, métodos e eventos de {@link ProtectedObject} nos
 * descritores para o objeto definido na propriedade "object" de {@link ProtectedObject}.
 * Há a necessidade de serem enviadas funções que irão substituir os métodos originais em
 * "methods", com intuito de validar estritamente o uso dos métodos.
 * No caso de eventos deprecated e propriedades serão protegidos de acordo com o que
 * estiver definido na listas de "events" e "properties", respectivamente.
 */
interface ProtectedObject {
    id: string;
    /**
     * :
     */
    object: any;
    properties: string[];
    methods: any;
    events: string[];
}
