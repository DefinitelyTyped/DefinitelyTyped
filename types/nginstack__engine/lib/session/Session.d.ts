export = Session;
/**
 * Representa a sessão JavaScript corrente, responsável pela execução do script.
 * @constructor
 */
declare function Session(): void;
declare class Session {
    /**
     * Chave da tabela iGroupUser que indica o usuário desta sessão. Caso o usuário
     * não tenha realizado login, será retornado -1, chave do usuário "anonymous".
     * Uma sessão que não tenha realizado login não tem acesso ao banco de dados.<br>
     * Em bases de dados antigas, que ainda utilizam o antigo modelo de segurança, a
     * chave retornada pode ser da tabela ENTIDADE.
     * @type {number}
     */
    userKey: number;
    /**
     * Nome do usuário logado. Corresponde ao campo iName da tabela iGroupUser do
     * registro indicado pela propriedade session.userKey.
     * @type {string}
     */
    userName: string;
    /**
     * Identificador único.
     * @type {string}
     */
    id: string;
    /**
     * URL do último script executado. Esta propriedade é desaconselhada e não deve
     * mais ser utilizada.
     * @type {string}
     * @deprecated
     */
    lastPath: string;
    /**
     * Utilizado para habilitar a geração de chaves negativas de um produto. Deve ser
     * informada a chave do produto (tabela iLicense) para chaves negativas ou
     * zero para chaves positivas.<br>
     * Será gerado um erro ao tentar alterar esta propriedade quando o usuário logado não
     * tiver poder para alterar o produto informado.
     * @type {number}
     */
    createKeyLicense: number;
    /**
     * Indica o script que está em execução neste ambiente.
     * @type {string|number}
     */
    scriptURI: string | number;
    /**
     * Indica se o método {@link #executeStartupScripts} já foi chamado.
     * @type {boolean}
     */
    startupScriptsExecuted: boolean;
    /**
     * Aplicativo ao qual esta sessão JavaScript está associada.
     *
     * A associação de uma sessão a um aplicativo é realizada indiretamente por meio da propriedade
     * {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#application}.
     * @type {number}
     */
    application: number;
    /**
     * Nome do *realm* ao qual esta sessão JavaScript pertence.
     *
     * O *realm* de sessões tem o objetivo de isolar as sessões JavaScript com propósito comum, evitando
     * que uma sessão JavaScript de um aplicativo seja utilizada por outro. Por meio dele, é possível
     * indicar se a sessão deve preservar o seu estado (*stateful* ou *stateless*), além do seu tempo
     * de vida e de inatividade. Ver {@link module:@nginstack/engine/lib/http/RealmConfig} para
     * mais detalhes.
     * @type {string}
     */
    realm: string;
    /**
     * Runtime JavaScript utilizado por esta sessão. Valores possíveis: "ije" e "v8".
     *
     * O runtime JavaScript é definido pela propriedade "runtime" da configuração do *realm* e
     * não pode ser modificado uma vez que a sessão é criada. Ver
     * {@link module:@nginstack/engine/lib/http/RealmConfig} para mais detalhes.
     * @type {string}
     */
    runtime: string;
    /**
     * Relação dos escopos de autorização permitidos na sessão corrente do usuário.
     *
     * Caso a sessão tenha sido autenticada por meio de um token de autorização, será retornado
     * o escopo desse token. Caso tenha sido via credenciais do usuário, serão
     * retornados todos os escopos de autorização atribuídos a esse usuário.
     * @type {string}
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken#scope
     * @see module:@nginstack/engine/lib/security/Security~Security#getUserScope
     */
    scope: string;
    /**
     * Chave do provedor de identidade externo que foi utilizado para autenticar a sessão.
     *
     * Caso a sessão tenha sido autenticada utilizando outro método, esta propriedade retorna `null`.
     * @type {number}
     */
    identityProviderKey: number;
    /**
     * Identificador único associado ao dispositivo ou navegador utilizado pelo cliente no acesso
     * ao sistema.
     *
     * Esta propriedade somente estará preenchida se o *realm* desta sessão estiver configurado com
     * a propriedade
     * {@link module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#clientTrackingEnabled clientTrackingEnabled}
     * ativa.
     * @type {string}
     * @see module:@nginstack/engine/lib/http/RealmConfig~RealmConfig#clientTrackingEnabled
     */
    clientId: string;
    /**
     * Esta é uma propriedade que, se definida, será utilizada pelo applyUpdates e pelo executeDDL para
     * preencher o campo iTag da iLog em todas as alterações realizadas nos registros do sistema nesta
     * sessão.
     *
     * Com o preenchimento do trackingId, é possível agrupar os registros na iLog por tag, facilitando
     * a auditoria e desfazimento das alterações.
     *
     * Recomenda-se que a string utilizada nesta propriedade seja um identificador único. Para isto,
     * utilize a função `createGUID(removeFormatChars)`.
     *
     * Todas as instâncias de `Connection` e `Database` criadas nesta sessão utilizarão o
     * identificador de rastreio configurado, ao não ser que a propriedade `trackingId` dessas
     * instâncias tenha sido configurada com um valor diferente.
     * @type {string}
     * @see module:@nginstack/engine/lib/database/Database~Database#trackingId
     */
    trackingId: string;
    /**
     * Realiza o login da sessão, permitindo que o usuário tenha acesso a informações do banco de dados.
     * @param {string} userName Nome do usuário.
     * @param {string} password Senha do usuário.
     * @return {boolean} True se o usuário e a senha são válidos.
     * @see #logout
     */
    login(userName: string, password: string): boolean;
    /**
     * Realiza o login da sessão através de um token de autenticação, permitindo que o usuário
     * tenha acesso a informações do banco de dados. Se o token é do tipo "local autenticação",
     * não será possível executar funções que necessitem autenticação em outro
     * servidor(executeScript).
     * @param {string} token Token de Autenticação
     * @return {boolean} True se o usuário foi autenticado com sucesso.
     * @deprecated Utilize a função {@link #loginByAuthToken}.
     */
    loginByToken(token: string): boolean;
    /**
     * Realiza o logout da sessão, impedindo que o usuário possa acessar informações
     * do banco de dados enquanto não ocorrer um novo login.
     * @see #login
     */
    logout(): void;
    /**
     * Indica o tempo máximo de inatividade da sessão. Após o período definido, a sessão
     * não poderá ser mais utilizada e será destruída, liberando os recursos de memória
     * alocados. Se for informado apenas o parâmetro minutes com 0, será indicado que a
     * sessão deve ser expirada logo após a execução do script.<br>
     * Este método é desaconselhado e não deve mais ser utilizado. A configuração de
     * inatividade deve ser realizada no x-class da classe que contém o script através
     * das propriedades "this.session.maxEnvironmentLifeTime",
     * "this.session.maxEnvironmentInactiveTime" e "this.session.maxSessionInactiveTime".
     * @param {number} minutes
     * @param {number} [opt_hours]
     * @param {number} [opt_days]
     * @param {number} [opt_months]
     * @param {number} [opt_years]
     */
    setTimeout(
        minutes: number,
        opt_hours?: number,
        opt_days?: number,
        opt_months?: number,
        opt_years?: number
    ): void;
    /**
     * Autoriza um token previamente criado a ser utilizado pelo sistema. Este token
     * será vinculado ao usuário desta sessão.
     * @param {AuthToken} authToken Token de autorização.
     * @returns {string} Id único do token que será utilizado para restaurar ou
     * validar uma sessão.
     */
    authorizeToken(authToken: AuthToken): string;
    /**
     * Atualiza um token previamente autorizado pelo método
     * {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken}.
     * Após a autorização de um token, apenas as propriedades
     * {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken#description} e
     * {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken#expires} podem ser modificadas.
     * @param {AuthToken} authToken Token que terá as suas propriedades
     * atualizadas.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthTokenByKey
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     */
    updateAuthToken(authToken: AuthToken): void;
    /**
     * Revoga a autorização de um token, tornando-o inutilizável.
     * @param {number} key Chave do registro do AuthToken.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthTokenByKey
     */
    revokeAuthTokenByKey(key: number): void;
    /**
     * Cria um token de autorização temporário com as credenciais do usuário logado que é válido
     * apenas enquanto esta sessão existir.
     *
     * O token de sessão somente pode ser criado em sessões do tipo *stateful* e deve ser utilizado
     * exclusivamente no Engine onde foi gerado. Portanto, o seu uso em rotas HTTP em um cliente
     * Web deve ser realizado com o envio de credenciais, permitindo que os cookies de controle
     * de afinidade de sessão sejam enviados para os eventuais balanceadores de carga que necessitem
     * deles.
     * @param {string|string[]} scope Lista separada por espaço dos identificadores dos escopos de
     * uso autorizados por este token. Caso seja informado um `Array`, ele será unificado pelo
     * método `join(' ')` e convertido em uma lista.
     * @return {string} Token de acesso temporário vinculado à sessão.
     */
    newSessionToken(scope: string | string[]): string;
    /**
     * Efetua o login na sessão utilizando um token criado no sistema anteriormente pela classe
     * {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken AuthToken} ou por meio de
     * tokens de identificação gerados por provedores de identidade externos ao sistema.
     *
     * Tokens do sistema devem ser autorizados utilizando os métodos
     * {@link module:@nginstack/engine/lib/session/Session~Session#authorizeToken Session.authorizeToken}
     * ou {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken},
     * momento em que será gerado o token de identificação esperado por este método.
     *
     * Tokens de identificação externos podem ser gerados utilizando a classe
     * {@link module:@nginstack/engine/lib/oidc/OpenIdClient~OpenIdClient OpenIdClient}. Somente
     * serão aceitos tokens dos provedores de identidade configurados em
     * "Administração do sistema > Segurança > Provedores de identidade".
     * @param {string} authToken Token de autorização do usuário.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     */
    loginByAuthToken(authToken: string): void;
    /**
     * Configura o número máximo de chaves, positivas e negativas, a serem criadas em uma mesma sessão.
     * Caso seja passado null como parâmetro, a restrição é retirada, permitindo a criação sem limite.
     * @param {number} limit Número máximo de chaves para criação.
     */
    limitKeyCreation(limit: number): void;
    /**
     * Altera a senha do usuário logado na sessão.
     * @param {string} newPassword Nova senha do usuário.
     */
    setPassword(newPassword: string): void;
    /**
     * Executa todos os registros da virtual file system que possuam o mime-type
     * "application/x-startup" ordenados pelo campo iUrl.
     */
    executeStartupScripts(): void;
    /**
     * Verifica se a sessão está associada a uma requisição HTTP.
     *
     * Sessões criadas no contexto de uma requisição HTTP têm acesso às informações da requisição
     * por meio da variável global `request`. Para elas, este método retornará `true` durante o
     * atendimento da requisição HTTP.
     *
     * Sessões criadas em contextos onde não há uma requisição HTTP, como as sessões criadas pelas
     * classes `Scheduler` e `ScriptRunner`, também têm a variável `request` publicada como
     * global por motivos históricos. No entanto, as propriedades e métodos de `request` falham
     * com um erro indicando que os dados da requisição não estão disponíveis. Para
     * esses tipos de sessões, este método retornará `false`, permitindo verificar se a variável
     * global `request` pode ser utilizada.
     * @example
     * if (session.hasRequest()) {
     *   const isLocalHost = request.remoteAddress == '127.0.0.1';
     * }
     * @return {boolean} True se a sessão estiver associada a uma requisição HTTP em atendimento.
     */
    hasRequest(): boolean;
}
import AuthToken = require('../security/AuthToken.js');
