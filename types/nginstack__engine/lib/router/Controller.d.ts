export = Controller;
/**
 * @typedef {import('../http/Response')} Response
 * @private
 */
/**
 * @typedef {import('../http/Request')} Request
 * @private
 */
/**
 * Classe base para todos os controladores que utilizem a API de roteamento do Engine.
 * @constructor
 * @extends Emitter
 */
declare function Controller(): void;
declare class Controller {
    /**
     * Objeto que contém as funções que devem ser executadas pelo método {@link #runAction}. Por
     * padrão, será a própria instância desta classe, ou seja, as ações são os métodos definidos
     * na controller. No entanto, poderá ser delegado essa responsabilidade para outro objeto.
     * @type {Object}
     * @protected
     */
    protected actions_: any;
    /**
     * Nome do módulo onde o controlador foi declarado. Utilizado apenas nas mensagens de erro
     * para auxiliar o desenvolvedor a localizar o controlador responsável por uma falha em uma
     * rota.
     * @type {string}
     */
    moduleFileName: string;
    private newResult_;
    /**
     * Cria uma resposta com estado OK. Opcionalmente, pode ser informado o conteúdo da resposta.
     * @param {Object} [opt_content] Conteúdo da resposta.
     * @returns {RouteResult}
     */
    ok(opt_content?: any): RouteResult;
    /**
     * Cria uma resposta com estado CREATED. Opcionalmente, pode ser informado o conteúdo da resposta.
     * @param {Object} [opt_content] Conteúdo da resposta.
     * @returns {RouteResult}
     */
    created(opt_content?: any): RouteResult;
    /**
     * Cria uma resposta com estado NO_CONTENT.
     * @returns {RouteResult}
     */
    noContent(): RouteResult;
    /**
     * Cria uma resposta com erro NOT_FOUND. Opcionalmente, pode ser informado o conteúdo da resposta.
     * @param {Object} [opt_content] Conteúdo da resposta.
     * @returns {RouteResult}
     */
    notFound(opt_content?: any): RouteResult;
    /**
     * Cria uma resposta com erro FORBIDDEN. Opcionalmente, pode ser informado o conteúdo da resposta.
     * @param {Object} [opt_content] Conteúdo da resposta.
     * @returns {RouteResult}
     */
    forbidden(opt_content?: any): RouteResult;
    /**
     * Cria uma resposta com erro BAD_REQUEST. Opcionalmente, pode ser informado o conteúdo da resposta.
     * @param {Object} [opt_content] Conteúdo da resposta.
     * @returns {RouteResult}
     */
    badRequest(opt_content?: any): RouteResult;
    /**
     * Cria uma resposta com status NOT_MODIFIED (304), indicando que o cache do cliente
     * continua válido em uma requisição com cabeçalhos de verificação de cache.
     * @returns {RouteResult}
     */
    notModified(): RouteResult;
    /**
     * Cria uma resposta com status SEE OTHER (303), indicando que o recurso da requisição
     * foi temporariamente alterado para a URL informada e ela deve ser acessada com o método GET.
     * @param {string} url Nova URL temporária do recurso da requisição.
     * @returns {RouteResult}
     */
    seeOther(url: string): RouteResult;
    /**
     * Cria uma resposta com status TEMPORARY_REDIRECT (307), indicando que o recurso da requisição
     * foi temporariamente alterado para a URL informada.
     * @param {string} url Nova URL temporária do recurso da requisição.
     * @returns {RouteResult}
     */
    temporaryRedirect(url: string): RouteResult;
    /**
     * Cria uma resposta com status PERMANENT_REDIRECT (308), indicando que o recurso requisitado foi
     * movido definitivamente para a URL informada.
     * @param {string} url Nova URL definitiva do recurso da requisição.
     * @returns {RouteResult}
     */
    permanentRedirect(url: string): RouteResult;
    /**
     * Executa uma ação do controlador com os parâmetros informados. Uma ação da controladora é um
     * método da classe. A diferença entre executar este método e executar diretamente o método do
     * controlador é que os eventos beforeAction e afterAction são emitidos.
     * @param {string} action Nome da ação a ser executada. Uma ação deverá ser implementada
     * como método do controlador.
     * @param {Array<*>} parameters Parâmetros que devem ser passados para o método do controlador
     * responsável pela ação.
     * @param {Request} request Requisição HTTP que está sendo atendida.
     * @param {Response} response Resposta da requisição HTTP que está sendo gerada.
     * @returns {RouteResult} Resultado da ação ou o erro que ocorreu durante a sua execução.
     */
    runAction(
        action: string,
        parameters: any[],
        request: Request,
        response: Response
    ): RouteResult;
    /**
     * Verifica se há uma ação com o nome informado.
     * @param {string} name Nome do método a ser validado sua presença.
     * @returns {boolean} Retorna true caso haja uma ação com o nome informado.
     */
    hasAction(name: string): boolean;
}
declare namespace Controller {
    export { wrap, Response, Request };
}
import RouteResult = require('./RouteResult.js');
/**
 * Evento emitido antes da execução do método associado à ação de uma rota HTTP.
 *
 * O seu uso é recomendado para tratamentos ou validações que devem ocorrer para todas as rotas
 * de uma API, ou para implementar um mecanismo de autorização customizado alternativo ao modelo
 * de autorização padrão do sistema.
 * @example
 *  this.on('beforeAction', function (evt) {
 *    if (session.userKey == -1) {
 *      customAuthorization(evt.request.headers['x-user-token']);
 *    }
 *  });
 * @event module:@nginstack/engine/lib/router/Controller~Controller#beforeAction
 * @type {ControllerEvent}
 * @see module:@nginstack/engine/lib/router/ControllerEvent~ControllerEvent
 */
/**
 * Evento emitido se ocorrer um erro durante a execução do método associado à ação de uma rota HTTP.
 *
 * O seu uso é recomendado para geração de logs ou para a geração de erros em um formato
 * diferente do padrão do roteador HTTP, o qual expõe as propriedades do erro como propriedades
 * de um objeto literal.
 *
 * **Observação**: este evento irá capturar erros gerados nos eventos `beforeAction` e
 * `afterAction`, portanto ele será executado após esses eventos.
 * @example
 *  this.on('error', function (evt) {
 *    evt.result = RouteResult()
 *      .withStatus(Status.OK)
 *      .withContent({
 *        error: evt.error.message
 *      });
 *  });
 * @event module:@nginstack/engine/lib/router/Controller~Controller#error
 * @type {ControllerEvent}
 * @see module:@nginstack/engine/lib/router/ControllerEvent~ControllerEvent
 */
/**
 * Evento emitido após a execução do método associado à ação de uma rota HTTP, mesmo que tenha
 * ocorrido um erro durante a sua execução.
 *
 * O seu uso é recomendado para fins de geração de logs ou para padronizar os resultados em
 * um formato específico esperado pelo cliente da API HTTP.
 * @example
 *  this.on('afterAction', function (evt) {
 *    const original = evt.result;
 *    evt.result = RouteResult()
 *      .withStatus(Status.OK)
 *      .withContent({
 *        success: !evt.error
 *        data: JSON.stringify(original.content)
 *      });
 *  });
 * @event module:@nginstack/engine/lib/router/Controller~Controller#afterEvent
 * @type {ControllerEvent}
 * @see module:@nginstack/engine/lib/router/ControllerEvent~ControllerEvent
 */
/**
 * Cria um controlador que encapsula o objeto informado. Todas as ações do controlador serão
 * delegadas para o objeto informado e deverão ser criadas como métodos dele.
 * @param {Object} object Objeto que será encapsulado pelo controlador.
 */
declare function wrap(object: any): Controller;
type Response = import('../http/Response');
type Request = import('../http/Request');
