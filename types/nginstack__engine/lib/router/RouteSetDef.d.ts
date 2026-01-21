export = RouteSetDef;
/** @module @nginstack/engine/lib/router/RouteSetDef */
/**
 * @typedef {import('../i18n/ResourceString')} ResourceString
 * @private
 */
/**
 * @typedef {import('./RouteDef')} RouteDef
 * @private
 */
/**
 * Define um conjunto de rotas HTTP, que poderá estar associada a uma API HTTP.
 * @constructor
 */
declare function RouteSetDef(): void;
declare class RouteSetDef {
    routes: Array<import('./RouteDef') | import('./RouteSetDef')>;
    /**
     * Indica que este conjunto de rotas está associado a API informada. Essa informação é importante
     * para as ferramentas de documentação, que agrupam as rotas pelo mesmo nome da API.
     * @type {string}
     */
    apiName: string;
    /**
     * Explicação mais detalhada acerca da API disponibilizada por este conjunto de rotas. Deve ser
     * utilizado em conjunto com {@link #apiName}.
     * @type {ResourceString}
     */
    apiHelp: ResourceString;
    /**
     * Indica que as rotas definidas em {@link #routes} devem ser agrupadas com o nome informado. Esta
     * propriedade deve ser utilizada quando uma API define conjuntos de rotas que façam sentido de
     * serem observadas como um recurso ou uma operação específica.
     * @example
     *  module.exports = {
     *    apiName: 'Operação Requisição v1',
     *    apiHelp: new ResourceString(123456),
     *    requiresAuth: true,
     *    basePath: '/api/operacoes/v1',
     *    routes:[{
     *      groupName: 'Operação Requisição',
     *      groupHelp: new ResourceString(1234567),
     *      basePath: '/requisicao',
     *      controller: 378647746, //products/Custom/controllers/OperacaoRequisicao.ijs
     *      routes: [
     *        {method: 'GET', path: '', action: 'listar(request)'},
     *        {method: 'POST', path: '', action: 'criarOperacao(request)'},
     *
     *        {method: 'GET', path: ':id', action: 'obterOperacao(id)'},
     *        {method: 'DELETE', path: ':id', action: 'excluirOperacao(id)'},
     *      ]
     *    }, {
     *      groupName: 'Operação Pedido ou Provisão',
     *      groupHelp: new ResourceString(12345678),
     *      basePath: '/pedido',
     *      controller: 380027549, //products/Custom/controllers/OperacaoPedido.ijs
     *      routes: [
     *        {method: 'GET', path: '', action: 'listar(request)'},
     *        {method: 'POST', path: '', action: 'criarOperacao(request)'},
     *
     *        {method: 'GET', path: ':id', action: 'obterOperacao(id)'},
     *        {method: 'DELETE', path: ':id', action: 'excluirOperacao(id)'}
     *      ]
     *    }]
     *  };
     * @type {string}
     */
    groupName: string;
    /**
     * Explicação mais detalhada acerca do grupo de rotas definido por {@link #groupName}.
     * @type {ResourceString}
     */
    groupHelp: ResourceString;
    /**
     * Determina se as rotas exigem que o requisitante informe um usuário do sistema no cabeçalho
     * Authorization, podendo ser informado um bearer token (OAuth2) ou o usuário e senha seguindo
     * o formato de autorização básica do HTTP.<br>
     * Caso a autenticação seja solicitada, o objeto <em>session</em> estará autenticado
     * com o usuário indicado no token durante a execução do método do controlador.
     * @type {boolean}
     * @see RouteDef#requiresAuth
     */
    requiresAuth: boolean;
    /**
     * Indica o nome ou a chave da configuração do Realm HTTP que deve ser utilizado
     * no atendimento desta rota. As configurações dos realms estão disponíveis em
     * /Configuração/Realms.
     *
     * Um Realm HTTP define um isolamento dos ambientes JavaScript e sessões de usuário. Um
     * controlador em um determinado realm não compartilhará o ambiente JavaScript de um
     * outro controlador definido em outro realm.
     *
     * Defina um realm diferente do padrão quando observar que os recursos e scripts utilizados
     * por um controlador serão muito diferentes do padrão de uso dos demais controladores ou
     * quando for necessário um controle diferenciado do tempo de vida do ambiente JavaScript ou
     * do tipo de ambiente (stateful ou stateless).
     * @type {string|number}
     */
    realm: string | number;
    /**
     * Caminho comum a todas as rotas definidas em {@link #routes}. Ele será prefixado a
     * *path* de cada rota. Caso haja um {@link RouteSetDef} em <em>routes</em>,
     * *basePath* será prefixado ao valor desta propriedade deste conjunto de rotas.
     * @type {string}
     */
    basePath: string;
    /**
     * Chave ou caminho do módulo que define o construtor do controlador que executará a ação
     * indicada na rota. Caminhos na UFS devem ter o prefixo 'ufs:' e os da VFS o 'vfs:'. O arquivo
     * indicado deve ter a estrutura de um módulo CommonJS. O construtor do controlador deve
     * ser retornado por meio da propriedade <em>module.exports</em>.
     * @type {string|number}
     */
    controller: string | number;
    /**
     * Determina quais domínios podem acessar este conjunto de rotas. Por padrão, qualquer domínio
     * poderá acessar. Esta propriedade é validada apenas por clientes HTTP que respeitam
     * o protocolo CORS. Mais detalhes em
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS.
     * @type {Array<string>}
     * @default ['*']
     */
    allowedOrigins: string[];
    /**
     * Indica que o Engine deve adicionar no log do sistema informações de depuração sobre
     * a execução das rotas, como o trace das requisições e respostas geradas.
     * @type {boolean}
     */
    debug: boolean;
    /**
     * Ordem de pesquisa deste conjunto de rotas na busca de rotas realizada pelo roteador HTTP.
     *
     * Valores menores serão avaliados primeiro e o roteador interrompe a busca ao encontrar uma
     * rota que satisfaça um caminho de uma requisição, portanto uma rota de menor ordem se
     * sobrepõem a uma rota de maior ordem para o mesmo caminho.
     *
     * Caso esta definição faça parte de um conjunto de rotas (`RouteSet`), a ordem será utilizada
     * para determinar a ordem de pesquisa em relação às demais rotas definidas em `routes`. Por padrão,
     * a ordem será definida automaticamente com base na posição do array `routes`.
     *
     * Caso não seja informado, será determinado automaticamente pela ordem dos arquivos definidos no
     * diretório "Configuração/Rotas HTTP". Rotas definidas em pacotes JAZ terão ordem indefinida e por
     * padrão serão avaliadas após as configurações existentes no diretório de configuração da
     * Virtual File System.
     * @type {number}
     */
    order: number;
    /**
     * Lista separada por espaço dos escopos de autorização necessários para utilizar
     * as rotas definidas em {@link {#routes}. Opcionalmente pode ser informado um array
     * com os escopos, o qual será convertido em uma lista.
     *
     * Veja {@link module:@nginstack/engine/lib/router/RouteDef~RouteDef#scope} para mais detalhes
     * do formato desta propriedade.
     * @type {string|Array<string>}
     */
    scope: string | string[];
}
declare namespace RouteSetDef {
    export { isLike, ResourceString, RouteDef };
}
/**
 * Determina se o objeto informado tem uma estrutura similar a um {@link RouteSetDef}.
 * @param {Object} obj Objeto a ser verificado.
 * @return {boolean} Retorna true se o objeto tiver uma estrutura semelhante e puder ser processado
 * como um conjunto de rotas.
 */
declare function isLike(obj: any): boolean;
type ResourceString = import('../i18n/ResourceString');
type RouteDef = import('./RouteDef');
