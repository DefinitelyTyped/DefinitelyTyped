export = OAuth2Client;
/**
 * Objeto literal contendo informações de configuração para a construção de clientes da classe
 * OAuth2Client.
 * @typedef {Object} OAuth2ClientConstructorOptions
 * @property {string} [clientId] Identificador da aplicação cliente junto ao autorizador externo.
 * Caso a instância esteja sendo criada via construtor, esse parâmetro se torna obrigatório.
 * @property {string} [clientSecret] Palavra secreta disponibilizada pelo autorizador externo para
 * ser enviada durante a autorização.
 * @property {string} [redirectUri] No processo de autorização, o usuário é encaminhado para uma tela
 * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
 * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
 * @property {string} [authEndpoint] Url do provedor de identidade utilizada para autenticação dos usuários.
 * @property {string} [authType] Indica a forma como os dados de autenticação serão enviados para o
 * autorizador:
 *
 * * `'requestBody'`: o 'clientId' e 'clientSecret' serão enviados no corpo da requisição HTTP;
 * * `'basicAuth'`: o 'clientId' e 'clientSecret' serão enviados na requisição HTTP, em um cabeçalho
 * do tipo 'Http basic authentication'.
 * @property {string} [tokenEndpoint] Url do provedor de identidade utilizada para obtenção de tokens.
 * @property {string} [introspectionEndpoint] Url do provedor de identidade utilizada para consultar
 * informações sobre um token emitido previamente.
 * @property {string} [revocationEndpoint] Url do provedor de identidade utilizada para revogar um token.
 * Podem ser revogados tokens de acesso ou tokens de renovação (refresh tokens).
 * @property {string} [deviceAuthorizationEndpoint] URL de autorização de dispositivo, utilizada no fluxo
 * de autorização de dispositivo.
 */
/**
 * @typedef {Object} AuthorizationRequestOptions
 * @property {string} redirectUri No processo de autorização, o usuário é encaminhado para uma tela
 * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
 * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
 * @property {string|string[]} [scopes] Escopos de autorização que terão acesso solicitado.
 * @property {string} [responseType] Indica o tipo de resposta que se espera do autorizador:
 *
 * * `'code'`: para requisitar um código de autorização (padrão);
 * * `'token'`: para requisitar um token de acesso.
 * @property {string} state String aleatória utilizada para aumentar a segurança do processo,
 * mitigando ataques do tipo `Cross-site request forgery`. O autorizador repassa esse valor quando
 * redireciona o usuário de volta, e o sistema pode então comparar o valor para garantir que a
 * requisição recebida corresponde à resposta esperada do autorizador.
 * @property {string} [codeChallenge] Permite incluir na requisição de autorização um código de
 * {@link https://tools.ietf.org/html/rfc7636 PKCE}.
 */
/**
 * @typedef {Object} TokenResponse
 * @property {string} accessToken Token de acesso que deve ser enviado nas requisições.
 * @property {string} [refreshToken] Token de renovação, utilizado para obtenção de novos tokens de
 * acesso, quando estes expiram.
 * @property {string} tokenType Tipo do token, que pode ser 'Bearer' ou 'Mac' conforme a
 *  {@link https://datatracker.ietf.org/doc/html/rfc6749#section-7.1 documentação}.
 * @property {number} [expiresIn] Tempo de validade do token de acesso, em segundos.
 * @property {string[]} scope Escopos de acesso autorizados neste token.
 * @property {string} [idToken] Token com os dados do usuário autenticado. Este token é retornado
 * apenas quando o fluxo envolve a autenticação de um usuário, como nos fluxos do
 * OpenID Connect quando informado o escopo "openid".
 */
/**
 * @typedef {Object} TokenIntrospectionResponse
 * @property {boolean} active Indica se o token informado está ativo.
 * @property {string} [clientId] Identificador do cliente.
 * @property {string} [username] Identificador do usuário logado.
 * @property {string} [tokenType] Tipo do token.
 * @property {number} [issuedAt] Marca de tempo correspondente ao momento em que o token foi emitido.
 * Valor numérico representando o número de segundos desde 01/01/1970, às 00:00:00 horas (UTC).
 * @property {number} [expiresAt] Marca de tempo correspondente ao momento em que o token passa a ser
 * considerado expirado. Valor numérico representando o número de segundos desde 01/01/1970, às
 * 00:00:00 horas (UTC).
 * @property {number} [notBefore] Marca de tempo correspondente ao momento em que o token passa a ser
 * considerado válido. Valor numérico representando o número de segundos desde 01/01/1970, às
 * 00:00:00 horas (UTC).
 * @property {string[]} [scopes] Lista dos escopos autorizados pelo token.
 */
/**
 * @typedef {Object} DeviceAuthorizationResponse
 * @property {string} verificationUri URL de verificação, que deve ser acessada pelo usuário para
 * autenticação.
 * @property {string} verificationUriComplete URL de verificação que já inclui o 'userCode'.
 * @property {string} userCode Código de verificação de usuário, que deve ser informado na tela de
 * autenticação.
 * @property {string} deviceCode Código de verificação de dispositivo.
 * @property {number} expiresIn Tempo de validade dos códigos de usuário e de dispositivo, em segundos.
 */
/**
 * Classe utilizada para autenticação de usuários e sistemas em autorizadores externos
 * utilizando o protocolo {@link https://oauth.net/2/ "OAuth 2.0"}.
 * @example
 * const OpenIdProvider = require('@nginstack/engine/lib/oidc/OpenIdProvider');
 * const provider = OpenIdProvider.fromConfig(99999999);
 * const client = provider.newOAuth2Client();
 * const authData = client.getDeviceAuthorizationCode(); // Device Flow
 * authData.verificationUri
 * @param {OAuth2ClientConstructorOptions} options Parâmetros para construção do cliente.
 * @constructor
 */
declare function OAuth2Client(options: OAuth2ClientConstructorOptions): void;
declare class OAuth2Client {
    /**
     * Objeto literal contendo informações de configuração para a construção de clientes da classe
     * OAuth2Client.
     * @typedef {Object} OAuth2ClientConstructorOptions
     * @property {string} [clientId] Identificador da aplicação cliente junto ao autorizador externo.
     * Caso a instância esteja sendo criada via construtor, esse parâmetro se torna obrigatório.
     * @property {string} [clientSecret] Palavra secreta disponibilizada pelo autorizador externo para
     * ser enviada durante a autorização.
     * @property {string} [redirectUri] No processo de autorização, o usuário é encaminhado para uma tela
     * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
     * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
     * @property {string} [authEndpoint] Url do provedor de identidade utilizada para autenticação dos usuários.
     * @property {string} [authType] Indica a forma como os dados de autenticação serão enviados para o
     * autorizador:
     *
     * * `'requestBody'`: o 'clientId' e 'clientSecret' serão enviados no corpo da requisição HTTP;
     * * `'basicAuth'`: o 'clientId' e 'clientSecret' serão enviados na requisição HTTP, em um cabeçalho
     * do tipo 'Http basic authentication'.
     * @property {string} [tokenEndpoint] Url do provedor de identidade utilizada para obtenção de tokens.
     * @property {string} [introspectionEndpoint] Url do provedor de identidade utilizada para consultar
     * informações sobre um token emitido previamente.
     * @property {string} [revocationEndpoint] Url do provedor de identidade utilizada para revogar um token.
     * Podem ser revogados tokens de acesso ou tokens de renovação (refresh tokens).
     * @property {string} [deviceAuthorizationEndpoint] URL de autorização de dispositivo, utilizada no fluxo
     * de autorização de dispositivo.
     */
    /**
     * @typedef {Object} AuthorizationRequestOptions
     * @property {string} redirectUri No processo de autorização, o usuário é encaminhado para uma tela
     * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
     * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
     * @property {string|string[]} [scopes] Escopos de autorização que terão acesso solicitado.
     * @property {string} [responseType] Indica o tipo de resposta que se espera do autorizador:
     *
     * * `'code'`: para requisitar um código de autorização (padrão);
     * * `'token'`: para requisitar um token de acesso.
     * @property {string} state String aleatória utilizada para aumentar a segurança do processo,
     * mitigando ataques do tipo `Cross-site request forgery`. O autorizador repassa esse valor quando
     * redireciona o usuário de volta, e o sistema pode então comparar o valor para garantir que a
     * requisição recebida corresponde à resposta esperada do autorizador.
     * @property {string} [codeChallenge] Permite incluir na requisição de autorização um código de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}.
     */
    /**
     * @typedef {Object} TokenResponse
     * @property {string} accessToken Token de acesso que deve ser enviado nas requisições.
     * @property {string} [refreshToken] Token de renovação, utilizado para obtenção de novos tokens de
     * acesso, quando estes expiram.
     * @property {string} tokenType Tipo do token, que pode ser 'Bearer' ou 'Mac' conforme a
     *  {@link https://datatracker.ietf.org/doc/html/rfc6749#section-7.1 documentação}.
     * @property {number} [expiresIn] Tempo de validade do token de acesso, em segundos.
     * @property {string[]} scope Escopos de acesso autorizados neste token.
     * @property {string} [idToken] Token com os dados do usuário autenticado. Este token é retornado
     * apenas quando o fluxo envolve a autenticação de um usuário, como nos fluxos do
     * OpenID Connect quando informado o escopo "openid".
     */
    /**
     * @typedef {Object} TokenIntrospectionResponse
     * @property {boolean} active Indica se o token informado está ativo.
     * @property {string} [clientId] Identificador do cliente.
     * @property {string} [username] Identificador do usuário logado.
     * @property {string} [tokenType] Tipo do token.
     * @property {number} [issuedAt] Marca de tempo correspondente ao momento em que o token foi emitido.
     * Valor numérico representando o número de segundos desde 01/01/1970, às 00:00:00 horas (UTC).
     * @property {number} [expiresAt] Marca de tempo correspondente ao momento em que o token passa a ser
     * considerado expirado. Valor numérico representando o número de segundos desde 01/01/1970, às
     * 00:00:00 horas (UTC).
     * @property {number} [notBefore] Marca de tempo correspondente ao momento em que o token passa a ser
     * considerado válido. Valor numérico representando o número de segundos desde 01/01/1970, às
     * 00:00:00 horas (UTC).
     * @property {string[]} [scopes] Lista dos escopos autorizados pelo token.
     */
    /**
     * @typedef {Object} DeviceAuthorizationResponse
     * @property {string} verificationUri URL de verificação, que deve ser acessada pelo usuário para
     * autenticação.
     * @property {string} verificationUriComplete URL de verificação que já inclui o 'userCode'.
     * @property {string} userCode Código de verificação de usuário, que deve ser informado na tela de
     * autenticação.
     * @property {string} deviceCode Código de verificação de dispositivo.
     * @property {number} expiresIn Tempo de validade dos códigos de usuário e de dispositivo, em segundos.
     */
    /**
     * Classe utilizada para autenticação de usuários e sistemas em autorizadores externos
     * utilizando o protocolo {@link https://oauth.net/2/ "OAuth 2.0"}.
     * @example
     * const OpenIdProvider = require('@nginstack/engine/lib/oidc/OpenIdProvider');
     * const provider = OpenIdProvider.fromConfig(99999999);
     * const client = provider.newOAuth2Client();
     * const authData = client.getDeviceAuthorizationCode(); // Device Flow
     * authData.verificationUri
     * @param {OAuth2ClientConstructorOptions} options Parâmetros para construção do cliente.
     * @constructor
     */
    constructor(options: OAuth2ClientConstructorOptions);
    /**
     * Este método realiza a montagem da URL do autorizador que deve ser utilizada no redirecionamento
     * do usuário, para que a autenticação seja realizada.
     * @param {AuthorizationRequestOptions} [options] Parâmetros para construção da URL de autorização.
     * @returns {string} URL montada com os parâmetros informados.
     */
    getAuthorizationUri(options?: AuthorizationRequestOptions): string;
    /**
     * Substitui o código de acesso enviado pelo autorizador pelo token de acesso.
     *
     * Quando utilizado o fluxo de código de autorização (responseTypes igual a 'code'), o autorizador
     * envia uma requisição com o código de acesso para a URL informada em `redirectUri`, após a coleta
     * e validação das credenciais. Este método permite trocar esse código de acesso provisório pelo
     * token de acesso final.
     * @param {string} accessCode Código de acesso recebido no primeiro acesso.
     * @param {string} redirectUri URL de redirecionamento. Deve ser informada a mesma URL passada no
     * primeiro acesso caso contrário o provedor de identidade retorna um erro.
     * @param {string} [codeVerifier] Ao utilizar o fluxo de código de autorização com o uso de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}, esse parâmetro permite incluir na requisição de
     * solicitação do token o verificador utilizado na geração do desafio enviado anteriormente.
     * @return {TokenResponse} Dados sobre o token gerado.
     */
    exchangeCode(accessCode: string, redirectUri: string, codeVerifier?: string): TokenResponse;
    /**
     * Obtém um token de acesso com base nas credenciais do usuário, correspondente
     * ao fluxo {@link https://datatracker.ietf.org/doc/html/rfc6749#section-4.3 'Resource Owner'}.
     * @param {string} username Identificador do usuário.
     * @param {string} password Senha do usuário.
     * @param {string|string[]} [scopes] Escopos de autorização do novo token.
     * @return {TokenResponse} Dados sobre o token gerado.
     */
    exchangePassword(username: string, password: string): TokenResponse;
    /**
     * Solicita um novo token de acesso com base em um token de renovação, caso o token anterior tenha
     * expirado.
     * @param {string} refreshToken Token utilizado para obtenção de novos tokens de acesso.
     * @param {string|string[]} [scopes] Novos valores de escopo, caso seja necessário ajustar os escopos
     * do token anterior.
     * @return {TokenResponse} Dados sobre o token gerado.
     */
    exchangeRefreshToken(refreshToken: string, scopes?: string | string[]): TokenResponse;
    /**
     * Obtém um token de acesso utilizando apenas as
     * {@link https://datatracker.ietf.org/doc/html/rfc6749#section-4.4 credenciais} do próprio cliente.
     * @param {string|string[]} [scopes] Escopos de autorização do novo token.
     * @return {TokenResponse} Dados sobre o token gerado.
     */
    exchangeClientCredentials(scopes?: string | string[]): TokenResponse;
    /**
     * Obtém detalhes sobre um token emitido previamente.
     * @param {string} accessToken Token de acesso que se deseja obter detalhes.
     * @returns {TokenIntrospectionResponse} Objeto com detalhes sobre o token.
     */
    introspect(accessToken: string): TokenIntrospectionResponse;
    /**
     * Revoga um token emitido previamente. Podem ser revogados tokens de acesso ou tokens de renovação
     * conforme descrito na {@link https://datatracker.ietf.org/doc/html/rfc7009#section-2 especificação}.
     * @param {string} token Token de acesso ou de renovação.
     * @param {string} [tokenType] Tipo do token informado. Aceita os valores 'refresh' ou 'access'.
     * Caso não seja informado será considerado o valor 'refresh'
     */
    revoke(token: string, tokenType?: string): void;
    /**
     * Retorna as informações necessárias para iniciar o fluxo de autorização de dispositivo, como a URL
     * que o usuário deve acessar.
     * @param {string|string[]} [scopes] Escopos de autorização que terão acesso solicitado.
     * @returns {DeviceAuthorizationResponse} Objeto com os detalhes retornados pelo autorizador sobre
     * esse processo de autorização.
     */
    getDeviceAuthorization(scopes?: string | string[]): DeviceAuthorizationResponse;
    /**
     * Consulta o autorizador para saber se o usuário concluiu o processo de login.
     * Quando o login é realizado pelo usuário no navegador, o autorizador responde a requisição enviada
     * por este método com o token de acesso.
     * @param {DeviceAuthorizationResponse} deviceAuthResponse Objeto retornado pelo método
     * 'getDeviceAuthorization'.
     * @param {number} [timeout] Quantidade de tempo, em milissegundos, que o processo deve esperar pela
     * autenticação do usuário na página do autorizador. Se não for informado será considerado o valor
     * da propriedade 'expires_in' do objeto retornado pela método 'getDeviceAuthorization'.
     * @return {TokenResponse} Dados sobre o token gerado.
     */
    exchangeDeviceAuthorization(
        deviceAuthResponse: DeviceAuthorizationResponse,
        timeout?: number
    ): TokenResponse;
    /**
     * Gera um verificador (string aleatória), para quando for utilizado o fluxo de código de autorização
     * com o uso de {@link https://tools.ietf.org/html/rfc7636 PKCE}.
     * @returns {string} String aleatória gerada para ser utilizada como verificador.
     */
    getCodeVerifier(): string;
    /**
     * Gera um desafio com base em um verificador (string aleatória), para quando é utilizado o fluxo de
     * código de autorização com o uso de {@link https://tools.ietf.org/html/rfc7636 PKCE}.
     *
     * A geração do desafio consiste em aplicar: `Base64(SHA256(verifier))`
     * @param {string} verifier String aleatória que servirá como verificador do desafio.
     * @returns {string} Desafio gerado a partir do verificador.
     */
    getCodeChallenge(verifier: string): string;
}
declare namespace OAuth2Client {
    export {
        encryptClientSecret,
        OAuth2ClientConstructorOptions,
        AuthorizationRequestOptions,
        TokenResponse,
        TokenIntrospectionResponse,
        DeviceAuthorizationResponse,
    };
}
/**
 * Encripta o segredo do cliente para ser armazenado na base de dados de forma mais segura.
 * O valor encriptado pode ser informado diretamente para as APIs do sistema de OAuth2 e
 * OpenID Connect, sendo descriptografado internamente de forma automática.
 * @param {string} secret Segredo do cliente.
 * @return {string} Segredo do cliente encriptado.
 */
declare function encryptClientSecret(secret: string): string;
/**
 * Objeto literal contendo informações de configuração para a construção de clientes da classe
 * OAuth2Client.
 */
interface OAuth2ClientConstructorOptions {
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
     * No processo de autorização, o usuário é encaminhado para uma tela
     * do autorizador externo para coleta de senha. Após a validação da senha, o autorizador encaminha o
     * usuário de volta, redirecionando-o para a URL informada nesta propriedade.
     */
    redirectUri?: string;
    /**
     * Url do provedor de identidade utilizada para autenticação dos usuários.
     */
    authEndpoint?: string;
    /**
     * Indica a forma como os dados de autenticação serão enviados para o
     * autorizador:
     *
     * * `'requestBody'`: o 'clientId' e 'clientSecret' serão enviados no corpo da requisição HTTP;
     * * `'basicAuth'`: o 'clientId' e 'clientSecret' serão enviados na requisição HTTP, em um cabeçalho
     * do tipo 'Http basic authentication'.
     */
    authType?: string;
    /**
     * Url do provedor de identidade utilizada para obtenção de tokens.
     */
    tokenEndpoint?: string;
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
    /**
     * URL de autorização de dispositivo, utilizada no fluxo
     * de autorização de dispositivo.
     */
    deviceAuthorizationEndpoint?: string;
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
     * Indica o tipo de resposta que se espera do autorizador:
     *
     * * `'code'`: para requisitar um código de autorização (padrão);
     * * `'token'`: para requisitar um token de acesso.
     */
    responseType?: string;
    /**
     * String aleatória utilizada para aumentar a segurança do processo,
     * mitigando ataques do tipo `Cross-site request forgery`. O autorizador repassa esse valor quando
     * redireciona o usuário de volta, e o sistema pode então comparar o valor para garantir que a
     * requisição recebida corresponde à resposta esperada do autorizador.
     */
    state: string;
    /**
     * Permite incluir na requisição de autorização um código de
     * {@link https://tools.ietf.org/html/rfc7636 PKCE}.
     */
    codeChallenge?: string;
}
interface TokenResponse {
    /**
     * Token de acesso que deve ser enviado nas requisições.
     */
    accessToken: string;
    /**
     * Token de renovação, utilizado para obtenção de novos tokens de
     * acesso, quando estes expiram.
     */
    refreshToken?: string;
    /**
     * Tipo do token, que pode ser 'Bearer' ou 'Mac' conforme a
     * {@link https://datatracker.ietf.org/doc/html/rfc6749#section-7.1 documentação}.
     */
    tokenType: string;
    /**
     * Tempo de validade do token de acesso, em segundos.
     */
    expiresIn?: number;
    /**
     * Escopos de acesso autorizados neste token.
     */
    scope: string[];
    /**
     * Token com os dados do usuário autenticado. Este token é retornado
     * apenas quando o fluxo envolve a autenticação de um usuário, como nos fluxos do
     * OpenID Connect quando informado o escopo "openid".
     */
    idToken?: string;
}
interface TokenIntrospectionResponse {
    /**
     * Indica se o token informado está ativo.
     */
    active: boolean;
    /**
     * Identificador do cliente.
     */
    clientId?: string;
    /**
     * Identificador do usuário logado.
     */
    username?: string;
    /**
     * Tipo do token.
     */
    tokenType?: string;
    /**
     * Marca de tempo correspondente ao momento em que o token foi emitido.
     * Valor numérico representando o número de segundos desde 01/01/1970, às 00:00:00 horas (UTC).
     */
    issuedAt?: number;
    /**
     * Marca de tempo correspondente ao momento em que o token passa a ser
     * considerado expirado. Valor numérico representando o número de segundos desde 01/01/1970, às
     * 00:00:00 horas (UTC).
     */
    expiresAt?: number;
    /**
     * Marca de tempo correspondente ao momento em que o token passa a ser
     * considerado válido. Valor numérico representando o número de segundos desde 01/01/1970, às
     * 00:00:00 horas (UTC).
     */
    notBefore?: number;
    /**
     * Lista dos escopos autorizados pelo token.
     */
    scopes?: string[];
}
interface DeviceAuthorizationResponse {
    /**
     * URL de verificação, que deve ser acessada pelo usuário para
     * autenticação.
     */
    verificationUri: string;
    /**
     * URL de verificação que já inclui o 'userCode'.
     */
    verificationUriComplete: string;
    /**
     * Código de verificação de usuário, que deve ser informado na tela de
     * autenticação.
     */
    userCode: string;
    /**
     * Código de verificação de dispositivo.
     */
    deviceCode: string;
    /**
     * Tempo de validade dos códigos de usuário e de dispositivo, em segundos.
     */
    expiresIn: number;
}
