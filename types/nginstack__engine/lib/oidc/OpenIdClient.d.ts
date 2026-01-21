export = OpenIdClient;
/**
 * @typedef {import('../crypto/CryptoPKey')} CryptoPKey
 * @private
 */
/**
 * @typedef {import('../oauth2/OAuth2Client').TokenIntrospectionResponse} TokenIntrospectionResponse
 * @private
 */
/**
 * Objeto literal contendo informações de configuração para a construção de clientes da classe
 * OpenIdClient.
 * @typedef {Object} OpenIdClientConstructorOptions
 * @property {string} [clientId] Identificador da aplicação cliente junto ao autorizador externo.
 * Caso a instância esteja sendo criada via construtor, esse parâmetro se torna obrigatório.
 * @property {string} [clientSecret] Palavra secreta disponibilizada pelo autorizador externo para
 * ser enviada durante a autorização.
 * @property {string} [issuer] Url de identificação do provedor de identidade.
 * @property {string} [authEndpoint] Url do provedor de identidade utilizada para autenticação dos usuários.
 * @property {string} [jwks] JSON contendo o conjunto de chaves JWK disponibilizado pelo provedor.
 * @property {string} [tokenEndpoint] Url do provedor de identidade utilizada para obtenção de tokens.
 * @property {string} [userInfoEndpoint] Url do provedor de identidade utilizada para consultar informações
 * sobre o usuário logado.
 * @property {string} [introspectionEndpoint] Url do provedor de identidade utilizada para consultar
 * informações sobre um token emitido previamente.
 * @property {string} [revocationEndpoint] Url do provedor de identidade utilizada para revogar um token.
 * Podem ser revogados tokens de acesso ou tokens de renovação (refresh tokens).
 */
/**
 * @typedef {Object} AuthorizationRequestOptions
 * @property {string} redirectUri No processo de autorização, o usuário é encaminhado para uma tela
 * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
 * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
 * @property {string|string[]} [scopes] Escopos de autorização que terão acesso solicitado.
 * @property {string[]} [responseTypes] Indica o tipo de resposta que se espera do autorizador.
 * O tipo de resposta determina o fluxo de autorização que se deseja seguir:
 *
 * * `'code'`: fluxo de código de autorização (padrão);
 * * `'id_token'`: fluxo implícito;
 * * `'id_token'` e `'token'`: fluxo implícito;
 * * `'code'` e `'id_token'`: fluxo híbrido;
 * * `'code'` e `'token'`: fluxo híbrido;
 * * `'code'`, `'id_token'` e `'token'`: fluxo híbrido.
 * @property {string} [responseMode] Indica o modo como a resposta deve ser enviada pelo autorizador
 * na requisição de resposta enviada para a URL de redirecionamento:
 *
 * * `'query'`: o código de autorização será incluído na `query string` da URL de requisição;
 * * `'fragment'`: o código de autorização será incluído como um fragmento na URL da requisição;
 * * `'form_post'`: o código de autorização será enviado no corpo de uma requisição do tipo POST.
 * @property {string} [state] String aleatória utilizada para aumentar a segurança do processo,
 * mitigando ataques do tipo `Cross-site request forgery`. O autorizador repassa esse valor quando
 * redireciona o usuário de volta, e o sistema pode então comparar o valor para garantir que a
 * requisição recebida corresponde à resposta esperada do autorizador.
 * @property {string} [nonce] String aleatória utilizada para associar uma sessão de cliente a um
 * ID Token e evitar ataques do tipo `replay attack`. O valor informado é incluído no ID token
 * recebido do autorizador e deve ter suficiente entropia para dificultar que o valor seja deduzido.
 * @property {string} [codeChallenge] Ao utilizar o fluxo de código de autorização com o uso de
 * {@link https://tools.ietf.org/html/rfc7636 PKCE}, esse parâmetro permite incluir na requisição de
 * solicitação do código de acesso, o desafio gerado.
 * @property {string} [loginHint] Sugere ao provedor de identidade o nome ou e-mail do usuário
 * que será autenticado. Este parâmetro é útil para realizar a reautenticação de um usuário, ou
 * quando a identificação do cliente é previamente conhecida.
 * @property {string} [idTokenHint] ID Token gerado previamente pelo provedor de identidade que
 * será utilizado como sugestão na autenticação. Sempre que possível, ele deve ser informado
 * quando a propriedade `prompt` for atribuída com o valor `'none'`.
 * @property {number} [maxAge] Duração máxima da autenticação do usuário em milissegundos. Se o
 * tempo desde a última autenticação for maior que esse valor, o provedor de identidade tentará
 * autenticar novamente o usuário. Valores negativos não são suportados e serão considerados
 * como zero.
 * @property {string|string[]} [prompt] Indica para o provedor de identidade qual é o tipo de
 * interação do usuário que deve ser realizada. Os valores possíveis são:
 *
 * * 'none': indica que não deve ser apresentada ao usuário a tela de entrada das credenciais. Será
 * retornado um erro se o usuário não tiver sido autenticado anteriormente.
 * * 'login': força o usuário a inserir suas credenciais na solicitação.
 * * 'select_account': apresenta ao usuário um seletor das contas recentemente autenticadas.
 * * 'consent': exibe o diálogo de consentimento ao usuário recentemente autenticado, confirmando
 * a concessão das permissões ao sistema.
 * @property {Record<string,string>} [extraParams] Parâmetros adicionais que serão
 * inseridos na URL de autenticação gerada. Eles serão adicionados sem realizar
 * nenhum tipo de validação para verificar se os parâmetros informados conflitam com as demais
 * opções informadas.
 */
/**
 * Classe utilizada para autenticação de usuários em autorizadores externos utilizando o protocolo
 * {@link https://openid.net/connect "OpenID Connect"}.
 * @example
 * // Fluxo `Authorization Code with PKCE`
 * const OpenIdProvider = require('@nginstack/engine/lib/oidc/OpenIdProvider');
 * const provider = OpenIdProvider.fromConfig(99999999);
 * const client = provider.newOpenIdClient();
 * const verifier = client.getCodeVerifier();
 * const challenge = client.getCodeChallenge(verifier);
 * const url = client.getAuthorizationUri({
 *   redirectUri: 'https://127.0.0.1',
 *   scopes: ['profile', 'email'],
 *   responseTypes: ['code'],
 *   codeChallenge: challenge,
 *   state: '999999',
 *   nonce: '000000'
 * });
 *
 * // Usuário é então redirecionado para a url.
 * // Depois da coleta da senha o Engine recebe, na URL informada no parâmetro `redirectUri` uma
 * // requisição contendo o parâmetro 'code', que precisa ser trocado pelo token de acesso.
 *
 * const tokenData = client.exchangeCode({
 *   accessCode: request.params.code,
 *   codeVerifier: '888888888'
 * });
 * const token = tokenData.accessToken;
 * const pkey = client.getSigningKey(JWS.parseHeader(token).kid);
 * const jws = JWS.parse(token, pkey);
 * @param {OpenIdClientConstructorOptions} options Parâmetros para construção
 * do cliente.
 * @constructor
 */
declare function OpenIdClient(options: OpenIdClientConstructorOptions): void;
declare class OpenIdClient {
    /**
     * @typedef {import('../crypto/CryptoPKey')} CryptoPKey
     * @private
     */
    /**
     * @typedef {import('../oauth2/OAuth2Client').TokenIntrospectionResponse} TokenIntrospectionResponse
     * @private
     */
    /**
     * Objeto literal contendo informações de configuração para a construção de clientes da classe
     * OpenIdClient.
     * @typedef {Object} OpenIdClientConstructorOptions
     * @property {string} [clientId] Identificador da aplicação cliente junto ao autorizador externo.
     * Caso a instância esteja sendo criada via construtor, esse parâmetro se torna obrigatório.
     * @property {string} [clientSecret] Palavra secreta disponibilizada pelo autorizador externo para
     * ser enviada durante a autorização.
     * @property {string} [issuer] Url de identificação do provedor de identidade.
     * @property {string} [authEndpoint] Url do provedor de identidade utilizada para autenticação dos usuários.
     * @property {string} [jwks] JSON contendo o conjunto de chaves JWK disponibilizado pelo provedor.
     * @property {string} [tokenEndpoint] Url do provedor de identidade utilizada para obtenção de tokens.
     * @property {string} [userInfoEndpoint] Url do provedor de identidade utilizada para consultar informações
     * sobre o usuário logado.
     * @property {string} [introspectionEndpoint] Url do provedor de identidade utilizada para consultar
     * informações sobre um token emitido previamente.
     * @property {string} [revocationEndpoint] Url do provedor de identidade utilizada para revogar um token.
     * Podem ser revogados tokens de acesso ou tokens de renovação (refresh tokens).
     */
    /**
     * @typedef {Object} AuthorizationRequestOptions
     * @property {string} redirectUri No processo de autorização, o usuário é encaminhado para uma tela
     * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
     * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
     * @property {string|string[]} [scopes] Escopos de autorização que terão acesso solicitado.
     * @property {string[]} [responseTypes] Indica o tipo de resposta que se espera do autorizador.
     * O tipo de resposta determina o fluxo de autorização que se deseja seguir:
     *
     * * `'code'`: fluxo de código de autorização (padrão);
     * * `'id_token'`: fluxo implícito;
     * * `'id_token'` e `'token'`: fluxo implícito;
     * * `'code'` e `'id_token'`: fluxo híbrido;
     * * `'code'` e `'token'`: fluxo híbrido;
     * * `'code'`, `'id_token'` e `'token'`: fluxo híbrido.
     * @property {string} [responseMode] Indica o modo como a resposta deve ser enviada pelo autorizador
     * na requisição de resposta enviada para a URL de redirecionamento:
     *
     * * `'query'`: o código de autorização será incluído na `query string` da URL de requisição;
     * * `'fragment'`: o código de autorização será incluído como um fragmento na URL da requisição;
     * * `'form_post'`: o código de autorização será enviado no corpo de uma requisição do tipo POST.
     * @property {string} [state] String aleatória utilizada para aumentar a segurança do processo,
     * mitigando ataques do tipo `Cross-site request forgery`. O autorizador repassa esse valor quando
     * redireciona o usuário de volta, e o sistema pode então comparar o valor para garantir que a
     * requisição recebida corresponde à resposta esperada do autorizador.
     * @property {string} [nonce] String aleatória utilizada para associar uma sessão de cliente a um
     * ID Token e evitar ataques do tipo `replay attack`. O valor informado é incluído no ID token
     * recebido do autorizador e deve ter suficiente entropia para dificultar que o valor seja deduzido.
     * @property {string} [codeChallenge] Ao utilizar o fluxo de código de autorização com o uso de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}, esse parâmetro permite incluir na requisição de
     * solicitação do código de acesso, o desafio gerado.
     * @property {string} [loginHint] Sugere ao provedor de identidade o nome ou e-mail do usuário
     * que será autenticado. Este parâmetro é útil para realizar a reautenticação de um usuário, ou
     * quando a identificação do cliente é previamente conhecida.
     * @property {string} [idTokenHint] ID Token gerado previamente pelo provedor de identidade que
     * será utilizado como sugestão na autenticação. Sempre que possível, ele deve ser informado
     * quando a propriedade `prompt` for atribuída com o valor `'none'`.
     * @property {number} [maxAge] Duração máxima da autenticação do usuário em milissegundos. Se o
     * tempo desde a última autenticação for maior que esse valor, o provedor de identidade tentará
     * autenticar novamente o usuário. Valores negativos não são suportados e serão considerados
     * como zero.
     * @property {string|string[]} [prompt] Indica para o provedor de identidade qual é o tipo de
     * interação do usuário que deve ser realizada. Os valores possíveis são:
     *
     * * 'none': indica que não deve ser apresentada ao usuário a tela de entrada das credenciais. Será
     * retornado um erro se o usuário não tiver sido autenticado anteriormente.
     * * 'login': força o usuário a inserir suas credenciais na solicitação.
     * * 'select_account': apresenta ao usuário um seletor das contas recentemente autenticadas.
     * * 'consent': exibe o diálogo de consentimento ao usuário recentemente autenticado, confirmando
     * a concessão das permissões ao sistema.
     * @property {Record<string,string>} [extraParams] Parâmetros adicionais que serão
     * inseridos na URL de autenticação gerada. Eles serão adicionados sem realizar
     * nenhum tipo de validação para verificar se os parâmetros informados conflitam com as demais
     * opções informadas.
     */
    /**
     * Classe utilizada para autenticação de usuários em autorizadores externos utilizando o protocolo
     * {@link https://openid.net/connect "OpenID Connect"}.
     * @example
     * // Fluxo `Authorization Code with PKCE`
     * const OpenIdProvider = require('@nginstack/engine/lib/oidc/OpenIdProvider');
     * const provider = OpenIdProvider.fromConfig(99999999);
     * const client = provider.newOpenIdClient();
     * const verifier = client.getCodeVerifier();
     * const challenge = client.getCodeChallenge(verifier);
     * const url = client.getAuthorizationUri({
     *   redirectUri: 'https://127.0.0.1',
     *   scopes: ['profile', 'email'],
     *   responseTypes: ['code'],
     *   codeChallenge: challenge,
     *   state: '999999',
     *   nonce: '000000'
     * });
     *
     * // Usuário é então redirecionado para a url.
     * // Depois da coleta da senha o Engine recebe, na URL informada no parâmetro `redirectUri` uma
     * // requisição contendo o parâmetro 'code', que precisa ser trocado pelo token de acesso.
     *
     * const tokenData = client.exchangeCode({
     *   accessCode: request.params.code,
     *   codeVerifier: '888888888'
     * });
     * const token = tokenData.accessToken;
     * const pkey = client.getSigningKey(JWS.parseHeader(token).kid);
     * const jws = JWS.parse(token, pkey);
     * @param {OpenIdClientConstructorOptions} options Parâmetros para construção
     * do cliente.
     * @constructor
     */
    constructor(options: OpenIdClientConstructorOptions);
    /**
     * Este método realiza a montagem da URL do autorizador que deve ser utilizada no redirecionamento
     * do usuário, para que a autenticação seja realizada.
     * @param {AuthorizationRequestOptions} options Parâmetros para construção da URL de autorização.
     * @returns {string} URL montada com os parâmetros informados.
     */
    getAuthorizationUri(options: AuthorizationRequestOptions): string;
    /**
     * Substitui o código de acesso enviado pelo autorizador pelo token de acesso.
     *
     * Quando utilizado o fluxo de código de autorização (responseTypes contendo 'code'), o autorizador
     * envia uma requisição com o código de acesso para a URL informada em `redirectUri`, após a coleta
     * e validação das credenciais. Este método permite trocar esse código de acesso provisório pelo
     * token de acesso final.
     * @param {string} accessCode Código de acesso recebido no primeiro acesso.
     * @param {string} redirectUri URL de redirecionamento. Deve ser informada a mesma URL passada no
     * primeiro acesso caso contrário o provedor de identidade retorna um erro.
     * @param {string} [codeVerifier] Ao utilizar o fluxo de código de autorização com o uso de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}, esse parâmetro permite incluir na requisição de
     * solicitação do token o verificador utilizado na geração do desafio enviado anteriormente.
     * @return {import('../oauth2/OAuth2Client').TokenResponse} Dados sobre o token gerado.
     */
    exchangeCode(
        accessCode: string,
        redirectUri: string,
        codeVerifier?: string
    ): import('../oauth2/OAuth2Client').TokenResponse;
    /**
     * Método utilizado para obter um token de acesso com base nas credenciais do usuário, correspondente
     * ao fluxo {@link https://datatracker.ietf.org/doc/html/rfc6749#section-4.3 'Resource Owner'}.
     * @param {string} username Identificador do usuário.
     * @param {string} password Senha do usuário.
     * @param {string|string[]} [scopes] Escopos de autorização do novo token.
     * @return {import('../oauth2/OAuth2Client').TokenResponse} Dados sobre o token gerado.
     */
    exchangePassword(
        username: string,
        password: string
    ): import('../oauth2/OAuth2Client').TokenResponse;
    /**
     * Método utilizado para solicitar um novo token de acesso com base em um token de renovação, caso
     * o token anterior tenha expirado ou tenha sido revogado.
     * @param {string} refreshToken Token utilizado para obtenção de novos tokens de acesso.
     * @param {string|string[]} [scopes] Novos valores de escopo, caso seja necessário ajustar os escopos
     * do token anterior.
     * @return {import('../oauth2/OAuth2Client').TokenResponse} Dados sobre o token gerado.
     */
    exchangeRefreshToken(
        refreshToken: string,
        scopes?: string | string[]
    ): import('../oauth2/OAuth2Client').TokenResponse;
    /**
     * Método utilizado para obter um token de acesso utilizando apenas as
     * {@link https://datatracker.ietf.org/doc/html/rfc6749#section-4.4 credenciais} do próprio cliente.
     * @param {string|string[]} [scopes] Escopos de autorização do novo token.
     * @return {import('../oauth2/OAuth2Client').TokenResponse} Dados sobre o token gerado.
     */
    exchangeClientCredentials(
        scopes?: string | string[]
    ): import('../oauth2/OAuth2Client').TokenResponse;
    /**
     * Método utilizado para obter detalhes sobre um token emitido previamente.
     * @param {string} accessToken Token de acesso que se deseja obter detalhes.
     * @returns {TokenIntrospectionResponse} Objeto com detalhes sobre o token.
     */
    introspect(accessToken: string): TokenIntrospectionResponse;
    /**
     * Método utilizado para revogar um token emitido previamente. Podem ser revogados tokens de acesso
     * ou tokens de renovação conforme descrito na
     * {@link https://datatracker.ietf.org/doc/html/rfc7009#section-2 especificação}.
     * @param {string} token Token de acesso ou de renovação.
     * @param {string} [tokenType] Tipo do token informado. Aceita os valores 'refresh' ou 'access'.
     * Caso não seja informado será considerado o valor 'refresh'.
     */
    revoke(token: string, tokenType?: string): void;
    /**
     * Método que retorna um token com os dados do usuário autenticado.
     *
     * Para ajudar a proteger contra ataques de substituição de token, esta função opcionalmente permite
     * informar o assunto esperado no token de resposta. Se o assunto retornado pelo provedor
     * não corresponder ao informado, será apresentado erro.
     * @param {string} accessToken Token que permite acesso ao endpoint de informações do usuário.
     * @param {string} [subject] Valor esperado para a declaração "sub", para validação do token.
     * @returns {Object} Objeto com dados do usuario autenticado. Cada propriedade do objeto corresponde
     * a uma das declarações (claims) definidas na
     * {@link https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims documentação} do
     * protocolo. O provedor de identidade decide quais declarações serão incluídas e pode ainda incluir
     * declarações adicionais. Os nomes das propriedades são ajustados para o formato
     * {@link https://pt.wikipedia.org/wiki/CamelCase CamelCase}, assim a declaração 'given_name'
     * corresponde a propriedade 'givenName' no objeto retornado.
     */
    getUserInfo(accessToken: string, subject?: string): any;
    /**
     * Método que gera e retorna um verificador (string aleatória), para quando for utilizado o fluxo de
     * código de autorização com o uso de {@link https://tools.ietf.org/html/rfc7636 PKCE}.
     * @returns {string} String aleatória gerada para ser utilizada como verificador.
     */
    getCodeVerifier(): string;
    /**
     * Quando utilizado o fluxo de código de autorização com o uso de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}, esse método permite gerar um desafio com
     * base em um verificador (string aleatória).
     *
     * A geração do desafio consiste em aplicar: `Base64(SHA256(verifier))`
     * @param {string} verifier String aleatória que servirá como verificador do desafio.
     * @returns {string} Desafio gerado a partir do verificador.
     */
    getCodeChallenge(verifier: string): string;
    /**
     * Retorna um CryptoPKey contendo a chave pública do provedor de identidade, importada a partir do
     * JWK cujo identificador `kid` corresponde ao valor indicado no parâmetro.
     *
     * @param {string} kid Identificador da chave JWK.
     * @return {CryptoPKey} Objeto CryptoPKey contendo a chave pública do provedor.
     */
    getSigningKey(kid: string): CryptoPKey;
}
declare namespace OpenIdClient {
    export {
        CryptoPKey,
        TokenIntrospectionResponse,
        OpenIdClientConstructorOptions,
        AuthorizationRequestOptions,
    };
}
type CryptoPKey = import('../crypto/CryptoPKey');
type TokenIntrospectionResponse = import('../oauth2/OAuth2Client').TokenIntrospectionResponse;
/**
 * Objeto literal contendo informações de configuração para a construção de clientes da classe
 * OpenIdClient.
 */
interface OpenIdClientConstructorOptions {
    /**
     * Identificador da aplicação cliente junto ao autorizador externo.
     * Caso a instância esteja sendo criada via construtor, esse parâmetro se torna obrigatório.
     */
    clientId?: string;
    /**
     * Palavra secreta disponibilizada pelo autorizador externo para
     * ser enviada durante a autorização.
     */
    clientSecret?: string;
    /**
     * Url de identificação do provedor de identidade.
     */
    issuer?: string;
    /**
     * Url do provedor de identidade utilizada para autenticação dos usuários.
     */
    authEndpoint?: string;
    /**
     * JSON contendo o conjunto de chaves JWK disponibilizado pelo provedor.
     */
    jwks?: string;
    /**
     * Url do provedor de identidade utilizada para obtenção de tokens.
     */
    tokenEndpoint?: string;
    /**
     * Url do provedor de identidade utilizada para consultar informações
     * sobre o usuário logado.
     */
    userInfoEndpoint?: string;
    /**
     * Url do provedor de identidade utilizada para consultar
     * informações sobre um token emitido previamente.
     */
    introspectionEndpoint?: string;
    /**
     * Url do provedor de identidade utilizada para revogar um token.
     * Podem ser revogados tokens de acesso ou tokens de renovação (refresh tokens).
     */
    revocationEndpoint?: string;
}
interface AuthorizationRequestOptions {
    /**
     * No processo de autorização, o usuário é encaminhado para uma tela
     * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
     * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
     */
    redirectUri: string;
    /**
     * Escopos de autorização que terão acesso solicitado.
     */
    scopes?: string | string[];
    /**
     * Indica o tipo de resposta que se espera do autorizador.
     * O tipo de resposta determina o fluxo de autorização que se deseja seguir:
     *
     * * `'code'`: fluxo de código de autorização (padrão);
     * * `'id_token'`: fluxo implícito;
     * * `'id_token'` e `'token'`: fluxo implícito;
     * * `'code'` e `'id_token'`: fluxo híbrido;
     * * `'code'` e `'token'`: fluxo híbrido;
     * * `'code'`, `'id_token'` e `'token'`: fluxo híbrido.
     */
    responseTypes?: string[];
    /**
     * Indica o modo como a resposta deve ser enviada pelo autorizador
     * na requisição de resposta enviada para a URL de redirecionamento:
     *
     * * `'query'`: o código de autorização será incluído na `query string` da URL de requisição;
     * * `'fragment'`: o código de autorização será incluído como um fragmento na URL da requisição;
     * * `'form_post'`: o código de autorização será enviado no corpo de uma requisição do tipo POST.
     */
    responseMode?: string;
    /**
     * String aleatória utilizada para aumentar a segurança do processo,
     * mitigando ataques do tipo `Cross-site request forgery`. O autorizador repassa esse valor quando
     * redireciona o usuário de volta, e o sistema pode então comparar o valor para garantir que a
     * requisição recebida corresponde à resposta esperada do autorizador.
     */
    state?: string;
    /**
     * String aleatória utilizada para associar uma sessão de cliente a um
     * ID Token e evitar ataques do tipo `replay attack`. O valor informado é incluído no ID token
     * recebido do autorizador e deve ter suficiente entropia para dificultar que o valor seja deduzido.
     */
    nonce?: string;
    /**
     * Ao utilizar o fluxo de código de autorização com o uso de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}, esse parâmetro permite incluir na requisição de
     * solicitação do código de acesso, o desafio gerado.
     */
    codeChallenge?: string;
    /**
     * Sugere ao provedor de identidade o nome ou e-mail do usuário
     * que será autenticado. Este parâmetro é útil para realizar a reautenticação de um usuário, ou
     * quando a identificação do cliente é previamente conhecida.
     */
    loginHint?: string;
    /**
     * ID Token gerado previamente pelo provedor de identidade que
     * será utilizado como sugestão na autenticação. Sempre que possível, ele deve ser informado
     * quando a propriedade `prompt` for atribuída com o valor `'none'`.
     */
    idTokenHint?: string;
    /**
     * Duração máxima da autenticação do usuário em milissegundos. Se o
     * tempo desde a última autenticação for maior que esse valor, o provedor de identidade tentará
     * autenticar novamente o usuário. Valores negativos não são suportados e serão considerados
     * como zero.
     */
    maxAge?: number;
    /**
     * Indica para o provedor de identidade qual é o tipo de
     * interação do usuário que deve ser realizada. Os valores possíveis são:
     *
     * * 'none': indica que não deve ser apresentada ao usuário a tela de entrada das credenciais. Será
     * retornado um erro se o usuário não tiver sido autenticado anteriormente.
     * * 'login': força o usuário a inserir suas credenciais na solicitação.
     * * 'select_account': apresenta ao usuário um seletor das contas recentemente autenticadas.
     * * 'consent': exibe o diálogo de consentimento ao usuário recentemente autenticado, confirmando
     * a concessão das permissões ao sistema.
     */
    prompt?: string | string[];
    /**
     * Parâmetros adicionais que serão
     * inseridos na URL de autenticação gerada. Eles serão adicionados sem realizar
     * nenhum tipo de validação para verificar se os parâmetros informados conflitam com as demais
     * opções informadas.
     */
    extraParams?: Record<string, string>;
}
