export = Route;
/**
 * Representação de uma rota na API de roteamento HTTP do Engine. Uma rota associa um
 * caminho ao método de um controlador que será responsável por processar a requisição.
 * @param {RouteSet?} opt_routeSet Conjunto de rotas onde esta rota foi
 * declarada, caso tenha sido declarada em um. O conjunto de rotas é utilizado para
 * herdar propriedades que não tenham sido explicitamente configuradas na rota.
 * @constructor
 * @extends RouteDef
 * @see module:@nginstack/engine/lib/router/RouteDef~RouteDef
 */
declare function Route(opt_routeSet: RouteSet | null): void;
declare class Route {
    /**
     * Representação de uma rota na API de roteamento HTTP do Engine. Uma rota associa um
     * caminho ao método de um controlador que será responsável por processar a requisição.
     * @param {RouteSet?} opt_routeSet Conjunto de rotas onde esta rota foi
     * declarada, caso tenha sido declarada em um. O conjunto de rotas é utilizado para
     * herdar propriedades que não tenham sido explicitamente configuradas na rota.
     * @constructor
     * @extends RouteDef
     * @see module:@nginstack/engine/lib/router/RouteDef~RouteDef
     */
    constructor(opt_routeSet: RouteSet | null);
    /** @private */
    private routeSet_;
    /**
     * Propriedades a serem copiadas pelo método {@link #assign}.
     * @type {Array<string>}
     * @private
     */
    private propertiesToAssign_;
    /**
     * Representação do *path* em regexp. Este objeto é construído atrasado e sob demanda
     * com o objetivo de reduzir o consumo de memória das rotas pouco utilizadas.
     * @type {Regex}
     * @private
     */
    private matcher_;
    /**
     * Mapa contendo os parâmetros definidos no caminho da rota que devem ser extraídos. Associado
     * a cada parâmetro é indicado a posição dele dentro caminho e o tipo esperado.
     * @type {Object<{type: string, position: number}>}
     * @private
     */
    private pathParameters_;
    /**
     * Parâmetros esperados pela ação
     * @type {null}
     * @private
     */
    private action_;
    /**
     * Expressão regular que identifica os parâmetros a serem extraídos do caminho da rota.
     * @type {Regex}
     * @private
     */
    private paramRegExp_;
    /**
     * Expressão regular que identifica parâmetros dinâmicos a serem extraídos do caminho da rota.
     * @type {Regex}
     * @private
     */
    private dynamicRegExp_;
    /**
     * Expressão regular que identifica tipos de parâmetros a serem extraídos do caminho da rota.
     * @type {Regex}
     * @private
     */
    private typeRegExp_;
    /**
     * Array com os nomes dos parâmetros extraídos de {@link #path}.
     * @type {Array<string>}
     */
    parameterNames: string[];
    private updateMatcher_;
    /**
     * Atribui a esta instância os valores de uma definição de rota.
     * @param {RouteDef|Record<*,*>} def Definição que terá as propriedades copiadas.
     */
    assign(def: RouteDef | Record<any, any>): void;
    /**
     * Verifica se o escopo informado satisfaz o escopo requerido pela rota.
     * @param {string} scope Escopo a ser verificado.
     * @return {boolean} True se o escopo satisfizer a configuração desta rota.
     */
    testScope(scope: string): boolean;
}
declare namespace Route {
    export { resolveGlobalParameter, parseAction, testScope, RouteSet };
}
import RouteDef = require('./RouteDef.js');
declare let resolveGlobalParameter: any;
/**
 * Interpreta a expressão da ação definida na rota e retorna o nome do método a ser executado
 * no controlador e os parâmetros que devem ser informados.
 * @param {string} action Ação definida na rota.
 * @return {{action: string, method: string, parameters: Array<*>, openParameters: Object<number>}}
 */
declare function parseAction(action: string): {
    action: string;
    method: string;
    parameters: any[];
    openParameters: any;
};
/**
 * Verifica se `scope` satisfaz o escopo requerido por `requiredScope`.
 * @param {string|Array<string>} scope Escopos de autorização atribuídos a um usuário e que serão
 * testados. Poderá ser informada uma lista de escopos separados por espaço ou um array de
 * identificadores.
 * @param {string|Array<string>} requiredScope Escopo que deve ser satisfeito.
 * @return {boolean} True se `scope` satisfizer `requiredScope`.
 */
declare function testScope(
    scope: string | string[],
    requiredScope: string | string[]
): boolean;
type RouteSet = import('./RouteSet');
