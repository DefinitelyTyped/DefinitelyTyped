export = RouteSet;
/**
 * Representação de um conjunto de rotas HTTP, que poderá estar associada a uma API HTTP.
 * @param {RouteSet?} opt_base Conjunto de rotas onde esta rota foi
 * declarada, caso tenha sido declarada em uma. O conjunto de rotas é utilizado para
 * herdar propriedades que não tenham sido explicitamente configuradas na rota.
 * @constructor
 * @see module:@nginstack/engine/lib/router/RouteSetDef~RouteSetDef
 */
declare function RouteSet(opt_base: RouteSet | null): void;
declare class RouteSet {
    /**
     * Representação de um conjunto de rotas HTTP, que poderá estar associada a uma API HTTP.
     * @param {RouteSet?} opt_base Conjunto de rotas onde esta rota foi
     * declarada, caso tenha sido declarada em uma. O conjunto de rotas é utilizado para
     * herdar propriedades que não tenham sido explicitamente configuradas na rota.
     * @constructor
     * @see module:@nginstack/engine/lib/router/RouteSetDef~RouteSetDef
     */
    constructor(opt_base: RouteSet | null);
    /** @private */
    private base_;
    /**
     * Propriedades a serem copiadas pelo método {@link #assign}.
     * @type {Array<string>}
     * @private
     */
    private propertiesToAssign_;
    /**
     * Obtém todas as rotas, incluído as rotas definidas por {@link RouteSet} filhos
     * deste.
     * @return {Array<Route>} Todas as rotas mantendo a ordem em que foram definidas.
     */
    getAllRoutes(): Route[];
    /**
     * Atribui a esta instância os valores de uma definição de um conjunto de rotas.
     * @param {RouteSetDef} def Definição que terá as propriedades copiadas.
     */
    assign(def: RouteSetDef): void;
    routes: any[];
}
import Route = require('./Route.js');
import RouteSetDef = require('./RouteSetDef.js');
