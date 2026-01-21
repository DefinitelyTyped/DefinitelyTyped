export = ControllerEvent;
/**
 * @typedef {import('../http/Response')} Response
 * @private
 */
/**
 * @typedef {import('../http/Request')} Request
 * @private
 */
/**
 * @typedef {import('./Controller')} Controller
 * @private
 */
/**
 * @typedef {import('./RouteResult')} RouteResult
 * @private
 */
/**
 * Evento emitido pela classe Controller do roteador HTTP.
 *
 * Ver {@link module:@nginstack/engine/lib/router/Controller} para mais detalhes sobre o seu uso.
 * @constructor
 * @extends Event
 * @see module:@nginstack/engine/lib/event/Event
 * @see module:@nginstack/engine/lib/router/Controller
 */
declare function ControllerEvent(...args: any[]): void;
declare class ControllerEvent {
    /**
     * @typedef {import('../http/Response')} Response
     * @private
     */
    /**
     * @typedef {import('../http/Request')} Request
     * @private
     */
    /**
     * @typedef {import('./Controller')} Controller
     * @private
     */
    /**
     * @typedef {import('./RouteResult')} RouteResult
     * @private
     */
    /**
     * Evento emitido pela classe Controller do roteador HTTP.
     *
     * Ver {@link module:@nginstack/engine/lib/router/Controller} para mais detalhes sobre o seu uso.
     * @constructor
     * @extends Event
     * @see module:@nginstack/engine/lib/event/Event
     * @see module:@nginstack/engine/lib/router/Controller
     */
    constructor(...args: any[]);
    /**
     * Nome da ação do controlador que está sendo executada.
     * @type {string}
     */
    action: string;
    /**
     * Controlador que está executando a ação.
     * @type {Controller}
     * @see module:@nginstack/engine/lib/router/Controller
     */
    controller: Controller;
    /**
     * Requisição HTTP que está sendo atendida pelo controlador.
     * @type {Request}
     * @see module:@nginstack/engine/lib/http/Request
     */
    request: Request;
    /**
     * Resposta da requisição HTTP que está sendo gerada pelo controlador.
     *
     * O conteúdo da resposta será gerado automaticamente com base no resultado da ação. Utilize
     * este objeto apenas para adicionar informações complementares, como os cabeçalhos HTTP da
     * resposta.
     * @type {Response}
     * @see module:@nginstack/engine/lib/http/Response
     */
    response: Response;
    /**
     * Resultado da ação da rota HTTP.
     *
     * Esta propriedade pode ser modificada caso seja desejado alterar o resultado gerado pelos
     * métodos do controlador.
     * @type {RouteResult}
     * @see module:@nginstack/engine/lib/router/RouteResult
     */
    result: RouteResult;
}
declare namespace ControllerEvent {
    export { Response, Request, Controller, RouteResult };
}
type Response = import('../http/Response');
type Request = import('../http/Request');
type Controller = import('./Controller');
type RouteResult = import('./RouteResult');
