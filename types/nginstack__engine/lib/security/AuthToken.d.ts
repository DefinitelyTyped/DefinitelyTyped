export = AuthToken;
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * Esta classe é responsável por gerar um token de autorização para ser executado posteriormente
 * em um outro script. O token de autorização é um mecanismo que permite o usuário do
 * sistema delegar uma autorização de login para uso posterior ou em outro Engine. Com a posse
 * do token, um script pode "logar" na sessão em nome do usuário que autorizou
 * o token.
 *
 * Tokens de autorização apresentam as seguintes vantagens em relação ao uso de credenciais:
 *
 * 1. Eles não expõem a senha do usuário em variáveis de ambientes, códigos-fontes ou
 * parametrizações.
 * 2. Eles podem ser revogados de forma individual pelo usuário.
 * 3. Eles podem ser configurados para ter um escopo de utilização mais restrito que o do
 * usuário, limitando assim o seu uso e os riscos do token ser interceptado e utilizado para
 * outros fins.
 *
 * O escopo de um token de autorização é configurado por meio de uma lista de identificadores
 * separada por espaço. Via de regra, os escopos são identificadores opacos para o
 * Engine e o desenvolvedor pode livremente defini-los. A validação e tratamento desses
 * escopos deve ser implementadas pos APIs de mais alto nível que utilizem o token
 * de autorização. No entanto, há dois formatos especiais que são interpretados e
 * validados diretamente pelo Engine. São eles:
 *
 * * `'vfs:ikey?<CHAVE>'`
 * * `'ufs:<path>'`
 *
 * Escopos com prefixos `vfs:` ou `ufs:` definem os scripts autorizados a utilizarem o token.
 * O método {@link module:@nginstack/engine/lib/session/Session~Session#loginByAuthToken} falhará
 * se o script que realizou o login não satisfizer ao menos um dos scripts autorizados por meio
 * desses escopos. Como os identificadores de escopos não podem conter espaços, é recomendado
 * que esses caracteres sejam removidos do caminho do script utilizando a função `escape`.
 *
 * Após um token ter sido criado, ele deve ser autorizado através dos métodos
 * {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken} ou
 * {@link module:@nginstack/engine/lib/session/Session~Session#authorizeToken}.
 *
 * Um token de autorização pode ser atualizado através do método
 * {@link module:@nginstack/engine/lib/security/Security~Security#updateAuthToken} onde é
 * permitido alterar as suas propriedades.
 *
 * Caso um token não seja mais desejado, ele pode ser revogado através do método
 * {@link module:@nginstack/engine/lib/security/Security~Security#revokeAuthToken}.
 *
 * @example
 * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
 * const Duration = require('@nginstack/engine/lib/date/Duration.js');
 *
 * // Authorize multiple scopes
 * const authToken = new AuthToken('console.read console.write console.admin');
 * authToken.description = 'Console API';
 * authToken.expires = new Date(Date.now() + 10 * Duration.DAY_MS);
 *
 * const accessToken = session.authorizeToken(authToken);
 *
 * @example
 * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
 * const Duration = require('@nginstack/engine/lib/date/Duration.js');
 *
 * // Authorize multiple scripts
 * const authToken = new AuthToken([
 *   scriptKey,
 *   'ufs:' + escape(scriptPath)
 * ]);
 * authToken.description = 'Atualização de valores relativos aos produtos.';
 * authToken.expires = new Date(Date.now() + 10 * Duration.DAY_MS);
 *
 * const accessToken = session.authorizeToken(authToken);
 *
 * @example
 * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
 * const Duration = require('@nginstack/engine/lib/date/Duration.js');
 *
 * // Authorize a VFS script
 * const authToken = new AuthToken(AUTHORIZED_SCRIPT_KEY, '{num: 10}');
 * authToken.description = 'Atualização de valores relativos aos produtos.';
 * authToken.expires = new Date(Date.now() + 10 * Duration.DAY_MS);
 *
 * const accessToken = session.authorizeToken(authToken);
 *
 * @param {string|Array<string>|number|DBKey} scope Lista separada por espaço dos identificadores
 * dos escopos de uso autorizados por este token. Caso seja informado um `Array`, ele será
 * unificado pelo método `join(' ')` e convertido em uma lista. Para fins de compatibilidade, é
 * permitido que seja informada uma URI ou chave de um script em vez da relação dos escopos. Nesse
 * caso, o valor informado será interpretado como um escopo de esquema `vfs:` ou `ufs:`.
 * @param {string} [data] Dados opcionais vinculados ao token.
 * @constructor
 * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
 * @see module:@nginstack/engine/lib/security/Security~Security#restoreAuthToken
 * @see module:@nginstack/engine/lib/security/Security~Security#updateAuthToken
 * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthToken
 * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthTokenByKey
 * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
 * @see module:@nginstack/engine/lib/session/Session~Session#updateAuthToken
 * @see module:@nginstack/engine/lib/session/Session~Session#revokeAuthTokenByKey
 * @see module:@nginstack/engine/lib/session/Session~Session#loginByAuthToken
 * @see module:@nginstack/engine/lib/runner/ScriptRunner~ScriptRunner#loginByAuthToken
 */
declare function AuthToken(scope: string | string[] | number | DBKey, data?: string): void;
declare class AuthToken {
    /**
     * @typedef {import('../dbkey/DBKey')} DBKey
     * @private
     */
    /**
     * Esta classe é responsável por gerar um token de autorização para ser executado posteriormente
     * em um outro script. O token de autorização é um mecanismo que permite o usuário do
     * sistema delegar uma autorização de login para uso posterior ou em outro Engine. Com a posse
     * do token, um script pode "logar" na sessão em nome do usuário que autorizou
     * o token.
     *
     * Tokens de autorização apresentam as seguintes vantagens em relação ao uso de credenciais:
     *
     * 1. Eles não expõem a senha do usuário em variáveis de ambientes, códigos-fontes ou
     * parametrizações.
     * 2. Eles podem ser revogados de forma individual pelo usuário.
     * 3. Eles podem ser configurados para ter um escopo de utilização mais restrito que o do
     * usuário, limitando assim o seu uso e os riscos do token ser interceptado e utilizado para
     * outros fins.
     *
     * O escopo de um token de autorização é configurado por meio de uma lista de identificadores
     * separada por espaço. Via de regra, os escopos são identificadores opacos para o
     * Engine e o desenvolvedor pode livremente defini-los. A validação e tratamento desses
     * escopos deve ser implementadas pos APIs de mais alto nível que utilizem o token
     * de autorização. No entanto, há dois formatos especiais que são interpretados e
     * validados diretamente pelo Engine. São eles:
     *
     * * `'vfs:ikey?<CHAVE>'`
     * * `'ufs:<path>'`
     *
     * Escopos com prefixos `vfs:` ou `ufs:` definem os scripts autorizados a utilizarem o token.
     * O método {@link module:@nginstack/engine/lib/session/Session~Session#loginByAuthToken} falhará
     * se o script que realizou o login não satisfizer ao menos um dos scripts autorizados por meio
     * desses escopos. Como os identificadores de escopos não podem conter espaços, é recomendado
     * que esses caracteres sejam removidos do caminho do script utilizando a função `escape`.
     *
     * Após um token ter sido criado, ele deve ser autorizado através dos métodos
     * {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken} ou
     * {@link module:@nginstack/engine/lib/session/Session~Session#authorizeToken}.
     *
     * Um token de autorização pode ser atualizado através do método
     * {@link module:@nginstack/engine/lib/security/Security~Security#updateAuthToken} onde é
     * permitido alterar as suas propriedades.
     *
     * Caso um token não seja mais desejado, ele pode ser revogado através do método
     * {@link module:@nginstack/engine/lib/security/Security~Security#revokeAuthToken}.
     *
     * @example
     * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
     * const Duration = require('@nginstack/engine/lib/date/Duration.js');
     *
     * // Authorize multiple scopes
     * const authToken = new AuthToken('console.read console.write console.admin');
     * authToken.description = 'Console API';
     * authToken.expires = new Date(Date.now() + 10 * Duration.DAY_MS);
     *
     * const accessToken = session.authorizeToken(authToken);
     *
     * @example
     * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
     * const Duration = require('@nginstack/engine/lib/date/Duration.js');
     *
     * // Authorize multiple scripts
     * const authToken = new AuthToken([
     *   scriptKey,
     *   'ufs:' + escape(scriptPath)
     * ]);
     * authToken.description = 'Atualização de valores relativos aos produtos.';
     * authToken.expires = new Date(Date.now() + 10 * Duration.DAY_MS);
     *
     * const accessToken = session.authorizeToken(authToken);
     *
     * @example
     * const AuthToken = require('@nginstack/engine/lib/security/AuthToken.js');
     * const Duration = require('@nginstack/engine/lib/date/Duration.js');
     *
     * // Authorize a VFS script
     * const authToken = new AuthToken(AUTHORIZED_SCRIPT_KEY, '{num: 10}');
     * authToken.description = 'Atualização de valores relativos aos produtos.';
     * authToken.expires = new Date(Date.now() + 10 * Duration.DAY_MS);
     *
     * const accessToken = session.authorizeToken(authToken);
     *
     * @param {string|Array<string>|number|DBKey} scope Lista separada por espaço dos identificadores
     * dos escopos de uso autorizados por este token. Caso seja informado um `Array`, ele será
     * unificado pelo método `join(' ')` e convertido em uma lista. Para fins de compatibilidade, é
     * permitido que seja informada uma URI ou chave de um script em vez da relação dos escopos. Nesse
     * caso, o valor informado será interpretado como um escopo de esquema `vfs:` ou `ufs:`.
     * @param {string} [data] Dados opcionais vinculados ao token.
     * @constructor
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#restoreAuthToken
     * @see module:@nginstack/engine/lib/security/Security~Security#updateAuthToken
     * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthToken
     * @see module:@nginstack/engine/lib/security/Security~Security#revokeAuthTokenByKey
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/session/Session~Session#updateAuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#revokeAuthTokenByKey
     * @see module:@nginstack/engine/lib/session/Session~Session#loginByAuthToken
     * @see module:@nginstack/engine/lib/runner/ScriptRunner~ScriptRunner#loginByAuthToken
     */
    constructor(scope: string | string[] | number | DBKey, data?: string);
    /**
     * Lista separada por espaço dos escopos de uso autorizados por este token.
     * @type {string}
     */
    scope: string;
    /**
     * Dados vinculados ao token.
     * @type {string}
     */
    data: string;
    /**
     * Data de validade deste token. Por padrão, o token terá validade de 30 dias. Caso seja informado
     * `null`, será desativado o controle de expiração e o token será válido até ser revogado.
     * @type {Date}
     */
    expires: Date;
    /**
     * Descrição que indique o propósito de utilização deste token.
     * @type {string}
     */
    description: string;
    /**
     * Chave do usuário que autorizou o token. A sessão que logar utilizando este
     * token, irá executar em nome deste usuário.
     * @type {number|DBKey}
     */
    userKey: number | DBKey;
}
declare namespace AuthToken {
    export { DBKey };
}
type DBKey = import('../dbkey/DBKey');
