export = RouteDef;
/** @module @nginstack/engine/lib/router/RouteDef */
/**
 * @typedef {import('../http/Method')} Method
 * @private
 */
/**
 * Definição de uma rota na API de roteamento HTTP do Engine. Uma rota associa um caminho ao método
 * de um controlador que será responsável por processar a requisição.
 * @constructor
 */
declare function RouteDef(): void;
declare class RouteDef {
    /**
     * Indica qual método do controlador deve ser executada e com quais parâmetros ele deve ser
     * chamado. Os parâmetros solicitados serão extraídos do {@link #path} definido na rota. Para
     * isso, deve ser utilizada a sintaxe ':NAME' para indicar quais partes de *path* devem ser
     * interpretadas como parâmetros a serem passados para o controlador.
     *
     * Caso o controlador necessite dados da requisição que não estejam apenas no *path*, ele
     * poderá utilizar o parâmetro <em>request</em>, que será atribuído com uma instância de
     * {@link Request} com todos os dados da requisição.
     * @example
     * // Exemplo de uma definição literal em um arquivo de rotas:
     * {method: 'POST', path: '/api/operacoes/requisicao/:id/movdepos', action: 'criar(request, id)'}
     * @type {string}
     */
    action: string;
    /**
     * Caminho que será associado a ação indicada nesta rota. Dentro do caminho podem ser indicadas
     * partes que devem ser interpretados como parâmetros a serem passados para a ação do
     * controlador. Para isso, deverá ser utilizada as seguintes sintaxes:
     *
     * * `:param_name`: Extrai o parâmetro até localizar o próximo separador '/' dentro
     * de *path*. Exemplo: a rota com *path* /api/classes/:id/def interceptará
     * uma requisição para "/api/classes/123456/def" e irá extrair o parâmetro id com o
     * valor '123456'. Todos os parâmetros extraídos por essa sintaxe são do tipo `string`.
     * * `:param_name<type>`: extrai o parâmetro de forma similar a sintaxe anterior, mas
     * o converte para o tipo informado. Se o tipo não puder ser convertido, será
     * retornado um erro. Atualmente são suportados apenas os tipos `number`, `date`, `string` e
     * `boolean`. Datas deverão ser informadas no formato ISO 8601 e booleanos aceitarão `true` e `1`
     * como verdadeiro e `false` e `0` como falso.
     * * `*param_name`: extrai o restante de `path` e armazena o valor extraído em
     * `param_name`. O nome do parâmetro pode ser suprimido, informando apenas *, quando
     * deseja-se criar uma rota para o caminho informado e todos os subcaminhos dele. Exemplo: a rota
     * com `path` '/api/files/*path' interceptará uma requisição para
     * `/api/files/parent/file.js` e irá extrair o parâmetro path com o valor `parent/file.js`.
     * @type {string}
     */
    path: string;
    /**
     * Indica qual método da requisição HTTP esta rota trata. Poderá ser: 'GET', 'POST', 'PUT',
     * 'PATCH', 'DELETE' e 'OPTIONS'.
     * @type {Method|Array<Method>}
     */
    method: Method | Method[];
    /**
     * Determina se esta rota exige que o requisitante informe um usuário do sistema no cabeçalho
     * Authorization, podendo ser informado um bearer token (OAuth2) ou o usuário e senha seguindo
     * o formato de autorização básica do HTTP.<br>
     * Caso a autenticação seja solicitada, o objeto <em>session</em> estará autenticado
     * com o usuário indicado no token durante a execução do método do controlador.
     * @type {boolean}
     * @see RouteSetDef#requiresAuth
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
     * Determina quais domínios podem acessar esta rota. Por padrão, qualquer domínio poderá
     * acessar. Esta propriedade é validada apenas por clientes HTTP que respeitam
     * o protocolo CORS. Mais detalhes em
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS.
     * @type {Array<string>}
     * @default ['*']
     */
    allowedOrigins: string[];
    /**
     * Chave ou caminho do módulo que define o construtor do controlador que executará a ação
     * indicada na rota. Caminhos na UFS devem ter o prefixo 'ufs:' e os da VFS o 'vfs:'. O arquivo
     * indicado deve ter a estrutura de um módulo CommonJS. O construtor do controlador deve
     * ser retornado por meio da propriedade <em>module.exports</em>.
     * @type {string|number}
     */
    controller: string | number;
    /**
     * Indica que o Engine deve adicionar no log do sistema informações de depuração sobre
     * a execução do rota, como o trace das requisições e respostas geradas.
     * @type {boolean}
     */
    debug: boolean;
    /**
     * Ordem de pesquisa desta rota na busca de rotas realizada pelo roteador HTTP.
     *
     * Valores menores serão avaliados primeiro e o roteador interrompe a busca ao encontrar uma
     * rota que satisfaça um caminho de uma requisição, portanto uma rota de menor ordem se
     * sobrepõem a uma rota de maior ordem para o mesmo caminho.
     *
     * Caso esta definição faça parte de um conjunto de rotas (`RouteSet`), a ordem será utilizada
     * para determinar a ordem de pesquisa em relação às demais rotas definidas em `routes`. Por padrão,
     * a ordem será definida automaticamente com base na posição do array `routes`.
     * @type {number}
     */
    order: number;
    /**
     * Lista separada por espaço dos escopos de autorização necessários para utilizar
     * esta rota. Opcionalmente pode ser informado um array com os escopos, o qual será
     * convertido em uma lista.
     *
     * Via de regra, o acesso a esta rota será permitido se os escopos autorizados pelas credenciais
     * utilizadas na autenticação da sessão contiverem ao menos um dos escopos informados nesta
     * propriedade. Essa regra padrão pode ser alterada adicionando os prefixos '+' e '!' aos escopos
     * informados.
     *
     * O prefixo '+' tornará o escopo obrigatório e ele sempre deverá estar relacionado
     * nos escopos associados às credenciais. Já o prefixo '!' indica que a rota não será autorizada
     * se o escopo for encontrado. Por exemplo, o escopo
     * `'api.read api.readWrite +api.admin !api.readOnly'` requer que os escopos autorizados pelas
     * credenciais do usuário tenham o escopo `´api.admin´`, não tenham o `'api.readOnly'` e inclua
     * ao menos um dos escopos `'api.read'` ou `'api.readWrite'`.
     * @type {string|Array<string>}
     * @see module:@nginstack/engine/lib/router/RouteSetDef~RouteSetDef#scope
     */
    scope: string | string[];
}
declare namespace RouteDef {
    export { isLike, Method };
}
/**
 * Determina se o objeto informado tem uma estrutura similar a um {@link RouteDef}.
 * @param {Object} obj Objeto a ser verificado.
 * @return {boolean} Retorna true se o objeto tiver uma estrutura semelhante e puder ser processado
 * como definição de rota.
 */
declare function isLike(obj: any): boolean;
type Method = import('../http/Method');
