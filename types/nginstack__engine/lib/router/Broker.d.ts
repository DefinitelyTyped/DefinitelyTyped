export = Broker;
/**
 * @typedef {import('../http/Request')} Request
 * @private
 */
/**
 * @typedef {import('../http/Response')} Response
 * @private
 */
/**
 * Classe responsável por tratar as requisições HTTP, avaliar as rotas definidas e
 * executar o controlador responsável por tratar a requisição, caso haja um.
 * @constructor
 */
declare function Broker(): void;
declare class Broker {
    /** @private */
    private controllerCache_;
    /** @private */
    private realmConfigCache_;
    /**
     * Logger utilizado por esta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Erro durante a carga das configurações.
     * @type {Error}
     * @private
     */
    private errorLoadingConfig_;
    /**
     * Identificação do engine em operações de balanceamento de carga.
     * @type {ServerId}
     * @const
     * @private
     */
    private serverId_;
    /**
     * Executa todos os scripts configurados em "/Configuração/Inicialização do Gerenciador de Classes".
     * Essa execução é disparada automaticamente pelo sistema.
     */
    runStartupScripts(): void;
    private userCanAccessRemotely_;
    private resolveType_;
    private resolveParameters_;
    private getControllerInstance_;
    private getRealmConfig_;
    /**
     * Tratamento para os vários tipos de autorização enviados por meio do cabeçalho
     * *authorization* da requisição HTTP.
     * @type {Object<function(string):boolean>}
     * @private
     */
    private authorizationHandlers_;
    /**
     * Autoriza a sessão com as credenciais enviadas pelo usuário.
     * @param {Request} request Requisição com os credenciais do usuário.
     * @param {{scope: string, path: string}} route Definição da rota que será autorizada.
     */
    authorizeUser(
        request: Request,
        route: {
            scope: string;
            path: string;
        }
    ): void;
    private validateAcceptHeader_;
    private configureAllowOriginHeader_;
    private validateScope_;
    /**
     * Trata uma requisição HTTP executando a ação no controlador indicado nas rotas HTTP.
     * @param {Object} route Rota que deverá ser tratada.
     * @param {string} route.path Caminho declarado na rota.
     * @param {string} route.controller Controladora a ser executada.
     * @param {string} route.action Ação da controladora a ser executada.
     * @param {boolean} route.requiresAuth Indica se a ação da controladora requer a autenticação
     * de um usuário.
     * @param {Array<string>} route.allowedOrigins Indica quais a origens permitidas para essa rota.
     * @param {string} route.realm Nome do realm associado à rota.
     * @param {boolean} route.debug Indica que devem ser geradas informações de depuração deste
     * atendimento.
     * @param {Object<{value: string, kind: string}>} pathParameters Mapa contendo os parâmetros
     * extraídos da URL. A chave do mapa será o nome do parâmetro.
     * @param {Object} [opt_options] Opções.
     * @param {Request} [opt_options.request] Requisição a ser tratada.
     * @param {Response} [opt_options.response] Objeto de resposta que será preenchido com o resultado
     * da ação.
     */
    handleRequest(
        route: {
            path: string;
            controller: string;
            action: string;
            requiresAuth: boolean;
            allowedOrigins: string[];
            realm: string;
            debug: boolean;
        },
        pathParameters: any,
        opt_options?: {
            request?: Request;
            response?: Response;
        }
    ): void;
    /**
     * Limpa todas as definições do broker, sendo necessário utilizar o método loadRoutesFromDirectory,
     * para recarregar as definições de rota, antes de utilizar o broker novamente.
     */
    clear(): void;
    /**
     * Solicita ao Engine que a sessão seja descartada na próxima execução a fim de limpar
     * o cache de includes. A limpeza da sessão é um workaround enquanto o Engine não implementa
     * o descarte correto do cache de scripts ou possibilite a gestão do cache.
     */
    clearIncludeCaches(): void;
    /**
     * Retorna a versão da vfs, ou o timestamp da ufs da controladora indicada em 'path'. Utilizada para
     * validar se uma controladora se encontra desatualizada.
     * @param path Caminho da controladora que se deseja obter a versão.
     */
    getModuleVersion_(path: any): number;
}
declare namespace Broker {
    export { getInstance, runStartupScripts, Request, Response };
}
/**
 * Retorna uma instância única do Broker para todas as execuções.
 * @return {Broker}
 */
declare function getInstance(): Broker;
/**
 * Executa todos os scripts configurados em "/Configuração/Inicialização do Gerenciador de Classes".
 * Essa execução é disparada automaticamente na construção de uma instância de Broker.
 */
declare function runStartupScripts(): void;
type Request = import('../http/Request');
type Response = import('../http/Response');
