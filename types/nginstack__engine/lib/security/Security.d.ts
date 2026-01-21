export = Security;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * @typedef {Object} AuthTokenInfo
 * @property {number} userKey Chave do usuário autenticado.
 * @property {string} userName Nome do usuário autenticado.
 * @property {number} tokenKey Chave do registro do token. Presente apenas em tokens criados
 * pelo sistema (nulo caso contrário).
 * @property {number} providerKey Chave do provedor de autenticação. Presente apenas em tokens
 * criados por provedores de identidade externos (nulo caso contrário).
 * @property {string} scope Escopos de autorização associados ao token.
 * @property {string} data String opaca armazenada no token. Funcionalidade existente apenas em
 * tokens criados pelo sistema.
 * @constructor
 */
/**
 * Classe base de interação com o sistema no contexto da segurança.
 *
 * Este é um objeto poderoso, portanto, deve-se prestar muita atenção ao seu uso
 * Este objeto tem o poder de criar e apagar grupos e usuários, alterar
 * senha e grupos de usuários, entre outros. O desenvolvedor é o único responsável
 * pelos efeitos indesejados que possam decorrer da má utilização desse objeto.
 * @constructor
 */
declare function Security(): void;
declare class Security {
    /**
     * Cria um usuário no sistema.
     * @param {string} userName Nome do usuário a ser criado.
     * @param {string} password Senha do usuário de acesso ao sistema.
     * @param {Array<number>} groups Grupos dos quais o usuário participará.
     * @return {number} Chave do usuário criado.
     * @see #deleteUser
     * @see #createGroup
     */
    createUser(userName: string, password: string, groups: number[]): number;
    /**
     * Pesquisa um usuário no sistema a partir do seu nome ou e-mail.
     *
     * Este método retornará `null` se não localizar um usuário ou se houver mais de um usuário
     * com o e-mail informado.
     * @param {string} userId Nome ou e-mail do usuário.
     * @return {?number} Chave do usuário ou `null` caso não encontre um usuário válido.
     */
    findUser(userId: string): number | null;
    /**
     * Exclui um usuário do sistema.
     * @param {number} userKey Chave do usuário.
     * @see #createUser
     * @see #deleteGroup
     */
    deleteUser(userKey: number): void;
    /**
     * Cria um grupo no sistema.
     * @param {string} groupName Nome do grupo a ser criado.
     * @param {Array} groups Grupos dos quais o grupo participará.
     * @return {number} Chave do grupo criado.
     * @see #deleteGroup
     * @see #createUser
     */
    createGroup(groupName: string, groups: any[]): number;
    /**
     * Exclui um grupo do sistema.
     * @param {number} groupKey Chave do grupo.
     * @see #createGroup
     * @see #deleteUser
     */
    deleteGroup(groupKey: number): void;
    /**
     * Altera o estado da conta do usuário.
     *
     * Estados possíveis:
     *
     *  * **Ativo**: -1898143909
     *  * **Bloqueado**: -1898143908
     *  * **Desativado**: -1898141728
     *  * **Expirado**: -1898143907
     *
     * Este método gerará um erro caso o estado informado seja "Expirado" (-1898143907)
     * e esteja sendo utilizada uma política de autenticação que envolva um autorizador externo, como
     * a SSPI (Active Directory). Nesse caso, a modificação deve ser realizada pela interface do
     * autorizador externo. Utilize o método {@link #getAuthPolicyClass} para determinar a política
     * de autenticação do usuário.
     *
     * **Importante:** alterações do estado da conta do usuário somente podem ser realizadas por
     * este método. Modificações realizadas diretamente no registro da tabela tornarão inválida a
     * assinatura de integridade do registro, impedindo a utilização da conta de usuário.
     * @param {number|DBKey} userKey Chave do usuário.
     * @param {DBKey} status Chave de um registro da classe Estados dos Usuários (-1898143910).
     * @see #getUserStatus
     */
    setUserStatus(userKey: number | DBKey, status: DBKey): void;
    /**
     * Obtém o status de um usuário.
     * @param {number|DBKey} userKey Chave do usuário.
     * @return {DBKey} Chave de um registro da classe Estados dos Usuários (-1898143910).
     * @see #setUserStatus
     */
    getUserStatus(userKey: number | DBKey): DBKey;
    /**
     * Altera o tipo da conta do usuário.
     *
     * **Importante:** alterações do tipo da conta do usuário somente podem ser realizadas por
     * este método. Modificações realizadas diretamente no registro da tabela tornarão inválida a
     * assinatura de integridade do registro, impedindo a utilização da conta de usuário.
     * @param {number|DBKey} userKey Chave do usuário.
     * @param {DBKey} accountType Chave de um registro da classe Tipos de Conta de Usuário (-1898139529).
     * @see #getUserAccountType
     */
    setUserAccountType(userKey: number | DBKey, accountType: DBKey): void;
    /**
     * Obtém o tipo de conta de um usuário.
     * @param {number|DBKey} userKey Chave do usuário.
     * @return {DBKey} Chave de um registro da classe Tipos de Conta de Usuário (-1898139529).
     * @see #setUserAccountType
     */
    getUserAccountType(userKey: number | DBKey): DBKey;
    /**
     * Verifica se a assinatura de integridade da conta de usuário é válida, garantindo que as
     * alterações da conta de usuário foram realizadas de forma segura pela classe `Security`.
     * @param {number|DBKey} userKey Chave do usuário.
     * @return {boolean} True se assinatura for válida.
     */
    userSignatureIsValid(userKey: number | DBKey): boolean;
    /**
     * Altera a senha de um usuário.
     *
     * **Importante**: este método gerará um erro caso esteja sendo utilizada uma política
     * de autenticação que envolva um autorizador externo, como a SSPI (Active Directory). Nesse
     * caso, a modificação deve ser realizada pela interface do autorizador externo. Utilize
     * o método {@link #getAuthPolicyClass} para determinar a política de autenticação do usuário.
     * @param {number} userKey Chave do usuário.
     * @param {string} oldPassword Senha antiga.
     * @param {string} newPassword Nova Senha.
     */
    changePassword(userKey: number, oldPassword: string, newPassword: string): void;
    /**
     * Altera a senha do usuário informado.
     *
     * O usuário autenticado na sessão deverá ter o escopo de autorização "security.changeUserPassword"
     * caso esteja modificando a senha de um outro usuário.
     * @param {Object} userKey Chave do usuário que terá a senha alterada.
     * @param {Object} password Nova senha.
     */
    setPassword(userKey: any, password: any): void;
    /**
     * Autentica as credenciais de um usuário e retorna a chave dele se as credenciais
     * forem válidas.
     *
     * Este método retorna -1 se as credenciais informadas forem inválidas ou se o e-mail informado
     * estiver associado a mais de um usuário. Um erro é lançado se as credenciais estiverem
     * corretas, mas se a conta não puder ser utilizada por estar bloqueada ou desativada.
     * @param {string} userId Nome ou e-mail do usuário.
     * @param {string} password Senha do usuário.
     * @return {number} Chave do usuário autenticado ou -1 se as credenciais forem inválidas.
     */
    authenticateUser(userId: string, password: string): number;
    /**
     * Autentica um token de autorização e retorna suas informações.
     * Este método não realiza login no sistema, apenas valida o token.
     *
     * Um erro é lançado se o token informado for inválido ou se estiver associado a um usuário inválido.
     * @param {string} authToken Token de autorização.
     * @return {AuthTokenInfo} Informações do token autenticado, podendo incluir as propriedades
     * `userKey`, `userName`, `tokenKey`, `providerKey`, `scope` e `data`.
     */
    authenticateAuthToken(authToken: string): AuthTokenInfo;
    /**
     * Cria um token de autenticação legado, permitindo a autenticação automática numa sessão.
     *
     * @param {string} userId Nome ou e-mail do usuário dono do token.
     * @param {string} password Senha de usuário.
     * @param {Date} expiration Data de validade do token(somente é considerado o dia).
     * @param {string} data String opaca, armazenada no token.
     * @param {boolean} localAuthentication Se True, o token será autenticado localmente, sem
     * consultar o banco de dados.
     * @return {string} O token criado(somente os caracteres A-Z,a-z,0-9, @, _, =).
     * @see Session#loginByAuthToken
     * @see module:@nginstack/engine/lib/security/AuthToken
     * @deprecated Este método foi substituído por {@link module:@nginstack/engine/lib/security/AuthToken}.
     */
    createAuthToken(
        userId: string,
        password: string,
        expiration: Date,
        data: string,
        localAuthentication: boolean
    ): string;
    /**
     * Retorna true caso o usuário seja um Administrador do sistema.
     * @param {number} userKey Chave do usuário.
     * @return {boolean} True se é um Administrador.
     */
    isAdministrator(userKey: number): boolean;
    /**
     * Retorna true caso o usuário seja um Developer.
     * @param {number} userKey Chave do usuário.
     * @return {boolean} True se é um Developer.
     */
    isDeveloper(userKey: number): boolean;
    /**
     * Efetiva a criação de um token de autorização com objetivo de autorizar sessões, conexões ou APIs
     * HTTP do sistema em nome do usuário informado sem que seja necessário o uso de suas credenciais.
     *
     * Via de regra, a emissão de tokens de autorização requer que seja informada a senha do usuário
     * para o qual o token será emitido. No entanto, esse parâmetro pode ser suprimido quando este
     * método é executado por usuários com permissão ao escopo de autorização
     * "security.issueImpersonationToken". Esse escopo permite que um usuário crie tokens para
     * outros usuários sem que seja necessário informar as suas credenciais. Essa é uma permissão
     * sensível e deve ser utilizada apenas em fluxos bem controlados e restritos onde a autorização
     * por representação é necessária, como em serviços de autenticação alternativos ou complementares
     * ao do sistema.
     * @example
     * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
     * const Duration = require('@nginstack/engine/lib/date/Duration.js');
     *
     * const authToken = new AuthToken('api.monitoring');
     * authToken.description = 'Sistema externo de monitoramento';
     * authToken.expires = new Date(Date.now() + 60 * Duration.DAY_MS);
     * const accessToken = session.authorizeToken(authToken);
    
     * @param {import('./AuthToken')} authToken Configurações do token a ser autorizado.
     * @param {string|number|DBKey} userId Nome, e-mail ou chave do usuário que terá o acesso
     * autorizado pelo token.
     * @param {string} [password] Senha do usuário passado para autorização.
     * @returns {string} Identificador único do token que será utilizado para restaurar ou
     * validar uma sessão. Esse identificador é uma string opaca que pode ser utilizada como
     * token de portador para autorizar as APIs HTTP do sistema, sessões JavaScript ou conexões
     * entre Engines.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     */
    authorizeToken(
        authToken: import('./AuthToken'),
        userId: string | number | DBKey,
        password?: string
    ): string;
    /**
     * Recupera um token autorizado anteriormente através dos métodos
     * {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken} ou
     * {@link module:@nginstack/engine/lib/session/Session~Session#authorizeToken Session.authorizeToken}.
     * @param {string} accessToken Identificador do token que será restaurado.
     * @return {import('./AuthToken')} Token recuperado.
     * @see module:@nginstack/engine/lib/security/AuthToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     */
    restoreAuthToken(accessToken: string): import('./AuthToken');
    /**
     * Atualiza um token previamente autorizado pelo método
     * {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken}.
     * Após a autorização de um token, apenas as
     * propriedades {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken#description} e
     * {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken#expires} podem ser modificadas.
     * @param {import('./AuthToken')} token Token que terá as suas propriedades
     * atualizadas.
     * @param {string} userId Nome ou e-mail do usuário que autorizou o token.
     * @param {string} password Senha do usuário vinculado ao token.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see Session#updateAuthToken
     */
    updateAuthToken(token: import('./AuthToken'), userId: string, password: string): void;
    /**
     * Revoga a autorização de um token, tornando-o inutilizável.
     * @param {string} accessToken Token que será revogado e não poderá ser mais utilizado.
     * @see module:@nginstack/engine/lib/security/AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthTokenByKey
     */
    revokeAuthToken(accessToken: string): void;
    /**
     * Revoga a autorização de um token, tornando-o inutilizável.
     * @param {number} key Chave do registro do AuthToken.
     * @param {string} userId Nome ou e-amil do usuário que autorizou o token.
     * @param {string} password Senha referente ao nome de usuário.
     * @see module:@nginstack/engine/lib/security/AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthToken
     */
    revokeAuthTokenByKey(key: number, userId: string, password: string): void;
    /**
     * Método utilizado para obter as permissões de um usuário em uma determinada
     * classe ou script da Virtual File System
     * @example
     *   // Testa se o usuário corrente tem acesso à classe Entidades (-2007900000)
     *   if ( security.getPermission(-2007900000, 'iView') ){
     *       ...
     *   }
     *
     *   // Obtém a lista de campos alteráveis para um determinado usuário. Retornará
     *   // null se ele possui acesso a todos os campos
     *   var chgFldNames = security.getPermission(-1896048403,
     *                                            'iChangeableFieldNames',
     *                                            userKey,
     *                                            'distinct');
     *
     * @param {number} classKeyOrVfsKey Chave ou nome da classe da qual deseja-se saber se o
     * usuário tem permissão.
     * @param {string} permissionFieldName Nome do campo da tabela iPermission que define a
     * permissão a ser obtida.
     * @param {number} userKey Chave do usuário do qual se deseja descobrir a permissão.
     * @param {string} [getMode] Determina como a permissão deve ser obtida. Os valores possíveis
     * são:<br>
     * <b>"withoutInheritance"</b>: Obtém a permissão para a classe informada sem levar em
     *  conta as permissões definidas nas classes mães. Este parâmetro não é adequado para
     *  utilização com campos do tipo "string" que podem ser multivalorados,
     * recomendamos o uso do parâmetro "distinct".<br>
     * <b>"first"</b>: Obtém a primeira permissão definida para a classe ou uma de suas
     *  mães, levando em conta a ordem da
     *  classe informada. A ordem considerada no sentido da classe atual até a classe root.<br>
     *  Neste modo não há herança se a chave informada for um script da iVFS como, por exemplo, um
     *  processo.<br>
     * <b>"max"</b>: Obtém o maior valor informado para a classe ou para uma de suas mães.<br>
     *   Neste modo não há herança se a chave informada for um script da iVFS como, por exemplo,
     *   um processo.<br>
     * <b>"min"</b>: Obtém o menor valor informado para a classe ou para uma de suas mães.<br>
     *   Neste modo não há herança se a chave informada for um script da iVFS como, por exemplo,
     *   um processo.<br>
     * <b>"distinct"</b>: Obtém todos os valores distintos informados para a classe ou para uma
     *  de suas mães. Se a permissão informada para uma classe possuir os separadores ";" ou ",", a
     *  mesma será dividida e cada elemento será considerado um valor distinto. Neste modo não há
     *  herança se a chave informada for um script da iVFS como, por exemplo, um processo.<br>
     * <b>"concat"</b>: Obtém todos os valores informados para a classe ou para uma de suas mães
     *  concatenados. Se a permissão informada para uma classe possuir os separadores ";" ou ",", a
     *  mesma será dividida e cada elemento será considerado um valor distinto. Neste modo não há
     *  herança se a chave informada for um script da iVFS como, por exemplo, um processo.<br>
     * <br>
     * Se getMode não for informado, ele será considerado como 'withoutInheritance'.
     * @param {(string|Array)} [extraFilter] Filtro extra que trás a possibilidade de filtrar a
     *  permissão por um outro campo da tabela de permissões(iPermission).
     * @example
     *  // Para verificar se o usuário "37860639 -  Teste" tem acesso a classe "43614400 - Contatos" e
     *  // se o campo "estabeleci" no cadastro de permissões tem o valor
     *  // "3002932 - Estabelecimento Demonstração"
     *  security.getPermission(43614400, "iView", 37860639, "withoutInheritance",
     *      [['Estabeleci', 3002932]]);
     */
    getPermission(
        classKeyOrVfsKey: number,
        permissionFieldName: string,
        userKey: number,
        getMode?: string,
        extraFilter?: string | any[]
    ): void;
    /**
     * Retorna um array contendo as chaves dos grupos aos quais o usuário pertence,
     * onde primeiro item será sempre a chave do próprio usuário.
     *
     * Esta lista define a ordem de prioridade dos grupos, onde os grupos de um grupo
     * são inseridos logo após este na lista completa. Exemplo: se X participa dos grupos A, B, C,
     * D e E, e o grupo B participa dos grupos D e C, a ordem será: X, A, B, D, C, C, D, E, Todos;
     * que é simplificada para X, A, B, D, C, E e Todos.
     *
     * Observe que com este conceito, o grupo "Todos" não necessariamente é o último grupo, visto
     * que ele pode ser incluído explicitamente em um grupo.
     *
     * Eventuais chaves de grupos inválidas, que não existam no cache local, serão ignoradas e não
     * serão inseridas no array retornado, sendo esses casos registrados apenas no log. O motivo
     * desse comportamento é evitar que um eventual erro de integridade impeça o login do
     * usuário no sistema.
     * @param {number} userKey Chave do usuário.
     * @return {Array} Array com as chaves dos grupos.
     */
    getUserAndGroupsKeys(userKey: number): any[];
    /**
     * Obtém a política de autenticação aplicada ao usuário informado.
     *
     * A política de autenticação é uma configuração da política de segurança associada diretamente ao
     * usuário ou a um dos seus grupos e papéis. Será retornada a chave da política de autenticação
     * padrão do sistema caso não haja nenhuma política de segurança associada ao usuário ou aos
     * seus grupos e papéis.
     * @param {DBKey|number} userKey Chave do usuário do qual deseja-se obter a política de
     * autenticação associada.
     * @return {number} Chave da política de autenticação.
     */
    getAuthPolicy(userKey: DBKey | number): number;
    /**
     * Obtém a classe da política de autenticação configurada para o usuário.
     *
     * Atualmente, há três classes possíveis:
     *
     *  * **Políticas de autenticação padrão (-1898141725)**: onde o Engine é responsável por
     * autenticar as credenciais do usuário.
     *  * **Políticas de autenticação externa (-1898139694)**: onde o Engine delega a
     * autenticação das credenciais do usuário a um provedor de identidade externo.
     *  * **Política de autenticação SSPI (-1898141724)**: onde o Engine delega a autenticação das
     * credenciais do usuário ao Windows via API
     * [SSPI](https://docs.microsoft.com/en-us/windows/desktop/secauthn/sspi). Atualmente, é suportado
     * apenas o protocolo Microsoft NTLM.
     * @param {DBKey|number} userKey Chave do usuário.
     * @return {DBKey} Chave da classe da política de autenticação do usuário.
     */
    getAuthPolicyClass(userKey: DBKey | number): DBKey;
    /**
     * Encripta um segredo de acesso utilizado nas APIs do Engine de comunicação com serviços
     * de terceiros, permitindo que ele possa ser gravado em um registro da base de dados com
     * um nível adicional de segurança.
     *
     * Uma vez encriptados, os segredos protegidos por este método somente podem ser lidos pelo
     * Engine durante a utilização de APIs nativas, como a classe `ObjectStorage`, não sendo
     * possível a recuperação do segredo via código JavaScript ou qualquer outro meio.
     *
     * **Importante**: este método permite a gravação de segredos na base de dados com um maior
     * nível de segurança, no entanto essa segurança não deve ser considerada inviolável. Por
     * esse motivo, as credenciais gravadas devem ser únicas para o sistema e não devem ser
     * compartilhadas com outros serviços. Elas também devem ser renovadas periodicamente.
     * @param {DBKey|number} key Chave de um cadastro associado a esse segredo.
     * @param {string} secret Segredo de acesso.
     * @return {string} Segredo de acesso encriptado.
     */
    encryptSecret(key: DBKey | number, secret: string): string;
    /**
     * Indica se a chave informada possui controle de permissão ou não.
     * @param {number} key Chave que se deseja saber se há controle de permissões.
     * @return {boolean} True Caso tenha controle de permissão.
     * chave.
     */
    hasPermissionControl(key: number): boolean;
    /**
     * Sugere o modo de aplicação padrão para uma permissão da classe ou arquivo informado.
     * @param {number} parent Chave da classe ou arquivo ao qual a permissão está associada.
     * @return {?number} Chave do modo de aplicação de permissão ou null caso a chave informada
     * não exista ou não seja uma classe.
     */
    suggestPermissionApplyMode(parent: number): number | null;
    /**
     * Obtém as chaves dos tipos de arquivos que tem controle de permissões.
     * @return {Array<number>}
     */
    getMimeTypesWithPermissionControl(): number[];
    private userCanModifyKeyUnsafe_;
    /**
     * Verifica se o usuário pode alterar o registro informado. Caso seja uma chave
     * do sistema, será verificado se o usuário está habilitado como desenvolvedor
     * do produto do qual a chave faz parte.
     * @param {number} key Chave do registro.
     * @param {number} classKey Classe do registro.
     * @param {number} [userKey] Chave do usuário que deseja saber se possui
     * permissão para alterar um registro. Caso não seja informado será considerado
     * o usuário logado na sessão.
     * @return {boolean} True se é possível modificar. False, caso contrário.
     */
    userCanModifyKey(key: number, classKey: number, userKey?: number): boolean;
    /**
     * Verifica se o usuário pode alterar o registro corrente do DataSet. Caso
     * seja um registro do sistema, será verificado se o usuário está habilitado
     * como desenvolvedor do produto do qual o registro faz parte.
     * @param {!DataSet} ds Dataset que contém o registro que será verificado.
     * @param {number} [userKey] Chave do usuário que deseja saber se possui
     * permissão para alterar um registro. Caso não seja informado será considerado
     * o usuário logado na sessão.
     * @return {boolean} True se é possível alterar. False, caso contrário.
     */
    userCanModifyRecord(ds: DataSet, userKey?: number): boolean;
    /**
     * Obtém os escopos de autorização associados diretamente ao usuário ou indiretamente aos seus
     * grupos e papéis.
     * @param {DBKey|number} userKey Chave do usuário do qual serão obtidos os escopos de autorização
     * atribuídos.
     * @return {Array<string>} Escopos de autorização atribuídos ao usuário.
     */
    getUserScopes(userKey: DBKey | number): string[];
    /**
     * Verifica se o escopo informado foi atribuído ao usuário.
     * @param {DBKey|number} userKey Chave do usuário ao qual se deseja verificar a atribuição do
     * escopo.
     * @param {string|DBKey|number} scope Nome ou chave do escopo a ter a atribuição verificada.
     * @return {boolean} True se o escopo indicado por `scope` tiver sido atribuído ao usuário.
     */
    userHasScope(userKey: DBKey | number, scope: string | DBKey | number): boolean;
    /**
     * Concede ao usuário, grupo ou papel permissão ao escopo de autorização informado.
     *
     * A execução deste método será ignorada caso o escopo já tenha sido atribuído ao usuário,
     * grupo ou papel.
     * @example
     * // Concede ao usuário indicado por userKey permissão para acesso a partir de Engines externos
     * security.grantScope(userKey, 'security.externalAccess');
     * @param {DBKey|number} assignee Chave do usuário, grupo ou papel ao qual será concedida
     * permissão ao escopo de autorização.
     * @param {string|DBKey|number} scope Nome ou chave do escopo a ser atribuído.
     */
    grantScope(assignee: DBKey | number, scope: string | DBKey | number): void;
    /**
     * Revoga do usuário, grupo ou papel a permissão ao escopo de autorização informado.
     *
     * A execução deste método será ignorada caso o usuário, grupo ou papel não tenha permissão
     * ao escopo indicado. Será gerado um erro caso este método seja utilizado para tentar revogar
     * atribuições de escopos definidas pelos produtos do sistema. As atribuições de escopos de
     * autorização realizadas pelos produtos do sistema somente podem ser revogadas pelo
     * desenvolvedor do produto diretamente na configuração dos usuários, grupos ou papéis.
     * @example
     * // Revoga do usuário indicado por userKey a permissão de acesso a partir de Engines externos
     * security.revokeScope(userKey, 'security.externalAccess');
     * @param {DBKey|number} assignee Chave do usuário, grupo ou papel do qual será revogada
     * a permissão ao escopo de autorização.
     * @param {string|DBKey|number} scope Nome ou chave do escopo a ser revogado.
     */
    revokeScope(assignee: DBKey | number, scope: string | DBKey | number): void;
}
declare namespace Security {
    export { getInstance, DataSet, AuthTokenInfo };
}
import DBKey = require('../dbkey/DBKey.js');
/**
 * Obtém uma instância compartilhada desta classe.
 * @return {Security}
 */
declare function getInstance(): Security;
type DataSet = import('../dataset/DataSet');
interface AuthTokenInfo {
    /**
     * Chave do usuário autenticado.
     */
    userKey: number;
    /**
     * Nome do usuário autenticado.
     */
    userName: string;
    /**
     * Chave do registro do token. Presente apenas em tokens criados
     * pelo sistema (nulo caso contrário).
     */
    tokenKey: number;
    /**
     * Chave do provedor de autenticação. Presente apenas em tokens
     * criados por provedores de identidade externos (nulo caso contrário).
     */
    providerKey: number;
    /**
     * Escopos de autorização associados ao token.
     */
    scope: string;
    /**
     * String opaca armazenada no token. Funcionalidade existente apenas em
     * tokens criados pelo sistema.
     */
    data: string;
}
