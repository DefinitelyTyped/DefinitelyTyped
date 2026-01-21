export = OpenIdProvider;
/**
 * @typedef {import('../crypto/CryptoPKey')} CryptoPKey
 * @private
 */
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Objeto literal contendo informações de configuração do provedor de identidade.
 * @typedef {Object} ProviderMetadata
 * @property {string} issuer Url de identificação do provedor de identidade.
 * @property {string} authorizationEndpoint Url do provedor de identidade utilizada para autenticação
 * dos usuários.
 * @property {string} userInfoEndpoint Url do provedor de identidade utilizada para consultar informações
 * sobre o usuário logado.
 * @property {string} tokenEndpoint Url do provedor de identidade utilizada para obtenção de tokens.
 * @property {string} introspectionEndpoint Url do provedor de identidade utilizada para consultar
 * informações sobre um token emitido previamente.
 * @property {string} revocationEndpoint Url do provedor de identidade utilizada para revogar um token.
 * @property {string} deviceAuthorizationEndpoint URL de autorização de dispositivo, utilizada no fluxo
 * de autorização de dispositivo.
 * @property {string[]} grantTypesSupported Fluxos de autorização suportados pelo provedor de identidade.
 * @property {string[]} responseTypesSupported Tipos de resposta suportadas pelo  provedor de identidade.
 * @property {string[]} responseModesSupported Modos suportados pelo provedor de identidade para o
 * envio das informações na requisição de resposta, enviada para a URL de redirecionamento.
 * @property {string[]} scopesSupported Escopos suportados pelo provedor de identidade.
 * @property {string[]} idTokenSigningAlgValuesSupported Algoritmos suportados para assinatura do
 * `ID Token`.
 * @property {string[]} userInfoSigningAlgValuesSupported Algoritmos suportados para assinatura do
 * token de informações do usuário autenticado.
 * @property {string[]} claimsSupported Conjunto de declarações suportadas pelo provedor de identidade.
 * @property {string} jwks JSON contendo a lista de chaves publicas utilizadas pelo provedor, no
 * formato JWKS.
 */
/**
 * Classe que representa os dados de configuração publicados pelo provedor de identidade.
 * @constructor
 */
declare function OpenIdProvider(): void;
declare class OpenIdProvider {
    /**
     * Localização ou endereço do emissor.
     * @type {string}
     */
    issuer: string;
    /**
     * Endereço utilizado para a autenticação dos usuários.
     * @type {string}
     */
    authorizationEndpoint: string;
    /**
     * Endereço utilizado para obter o ID token.
     * @type {string}
     */
    tokenEndpoint: string;
    /**
     * Endereço onde se pode obter informações sobre o usuário autenticado.
     * @type {string}
     */
    userInfoEndpoint: string;
    /**
     * Endereço onde se pode obter informações sobre um token de acesso.
     * @type {string}
     */
    introspectionEndpoint: string;
    /**
     * Endereço onde se pode revogar um token de acesso ou token de
     * renovação.
     * @type {string}
     */
    revocationEndpoint: string;
    /**
     * Endereço onde se pode realizar a autorização seguindo o fluxo de
     * autorização de dispositivo.
     * @type {string}
     */
    deviceAuthorizationEndpoint: string;
    /**
     * Fluxos de autorização suportados pelo provedor de identidade.
     * @type {string[]}
     */
    grantTypesSupported: string[];
    /**
     * Conjunto de declarações suportadas pelo provedor de identidade.
     * @type {string[]}
     */
    claimsSupported: string[];
    /**
     * Informações que o provedor de identidade suporta enviar como resposta. Ao acessar o endereço de
     * autorização, deve-se indicar qual desses tipos de resposta que se deseja receber no acesso
     * redirecionado após uma autenticação bem sucedida.
     *
     * O tipo de resposta determina o fluxo de autorização que se deseja seguir:
     *
     * * `'code'`: fluxo de código de autorização;
     * * `'id_token'`: fluxo implícito;
     * * `'id_token'` e `'token'`: fluxo implícito;
     * * `'code'` e `'id_token'`: fluxo híbrido;
     * * `'code'` e `'token'`: fluxo híbrido;
     * * `'code'`, `'id_token'` e `'token'`: fluxo híbrido.
     *
     * Para mais informações consultar a
     * {@link https://openid.net/specs/openid-connect-core-1_0.html#Authentication "documentação oficial"}.
     * @type {string[]}
     */
    responseTypesSupported: string[];
    /**
     * Modos suportados pelo provedor de identidade para o envio das informações na requisição de
     * resposta, enviada para a URL de redirecionamento:
     *
     * * `'query'`: As informações serão incluídas na `query string` de uma requisição do tipo GET;
     * * `'fragment'`: As informações serão incluídas como um fragmento de uma requisição do tipo GET;
     * * `'form_post'`: As informações serão enviadas no corpo de uma requisição do tipo POST.
     * @type {string[]}
     */
    responseModesSupported: string[];
    /**
     * Escopos suportados pelo provedor de identidade. Os escopos definem as claims que se deseja que o
     * provedor inclua no token JWS de resposta:
     *
     * * `'openid'`: o protocolo `OpenID Connect` define esse valor de escopo como obrigatório;
     * * `'profile'`: informações como nome, apelido, nome de usuário, gênero, foto, data de nascimento etc;
     * * `'email'`: requer acesso ao email do usuário;
     * * `'address'`: requer acesso ao endereço do usuário;
     * * `'phone'`: requer acesso ao número de telefone do usuário.
     *
     * Se for utilizado um fluxo de autorização que resulte em um Access Token, os dados solicitados por
     * meio dos escopos estarão disponíveis acessando o `userInfoEndpoint`. Se for utilizado um fluxo de
     * autorização que resulte em um ID Token, as informações estarão contidas no `payload` do token.
     *
     * Para mais informações consultar a documentação
     * {@link https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims oficial}.
     * @type {string[]}
     */
    scopesSupported: string[];
    /**
     * Algoritmos suportados para assinatura do `ID Token`.
     * @type {string[]}
     */
    idTokenSigningAlgValuesSupported: string[];
    /**
     * Algoritmos suportados para assinatura do token de informações do usuário autenticado.
     * @type {string[]}
     */
    userInfoSigningAlgValuesSupported: string[];
    /**
     * JSON contendo a lista de chaves publicas utilizadas pelo provedor, no formato JWKS.
     * @type {string}
     */
    jwks: string;
    /**
     * Retorna o JSON da chave JWK, cujo identificador `kid` corresponde ao valor indicado no parâmetro.
     * @param {string} kid Identificador da chave.
     * @returns {string} JSON da chave JWK.
     */
    jwk(kid: string): string;
    /**
     * Retorna um CryptoPKey contendo a chave pública do provedor de identidade, importada a partir do
     * JWK cujo identificador `kid` corresponde ao valor indicado no parâmetro.
     *
     * @param {string} kid Identificador da chave JWK.
     * @return {CryptoPKey} Objeto CryptoPKey contendo a chave pública do provedor.
     */
    getSigningKey(kid: string): CryptoPKey;
    /**
     * Obtém uma instância da classe 'OpenIdClient' configurada com os dados do provedor de identidade.
     * @param {import('./OpenIdClient').OpenIdClientConstructorOptions} [options] Parâmetros de construção
     * da instância do cliente.
     * @returns {import('./OpenIdClient')} Objeto cliente do protocolo OpenID Connect.
     */
    newOpenIdClient(
        options?: import('./OpenIdClient').OpenIdClientConstructorOptions
    ): import('./OpenIdClient');
    /**
     * Obtém uma instância da classe 'OAuth2Client' configurada com os dados do provedor de identidade.
     * @param {import('../oauth2/OAuth2Client').OAuth2ClientConstructorOptions} [options] Parâmetros de
     * construção da instância do cliente.
     * @returns {import('../oauth2/OAuth2Client')} Objeto cliente do protocolo OAuth2.
     */
    newOAuth2Client(
        options?: import('../oauth2/OAuth2Client').OAuth2ClientConstructorOptions
    ): import('../oauth2/OAuth2Client');
}
declare namespace OpenIdProvider {
    export {
        discover,
        fromConfig,
        signSupportAccountProvider,
        verifySupportAccountProvider,
        CryptoPKey,
        DBKey,
        DataSet,
        ProviderMetadata,
    };
}
/**
 * Retorna os dados de configuração publicados pelo provedor de identidade.
 * @param {string} discoverUri Endereço básico disponibilizado pelo provedor de identidade. Os dados
 * de configuração do provedor serão obtidos no endereço padrão
 * `'<discoverUri>/.well-known/openid-configuration'`.
 * @returns {ProviderMetadata} Objeto literal com os dados de configuração publicados pelo provedor
 * de identidade.
 */
declare function discover(discoverUri: string): ProviderMetadata;
/**
 * Cria uma instância da classe OpenIdProvider com os dados obtidos a partir do cadastro
 * do provedor de identidade.
 *
 * Será gerado um erro caso o provedor de identidade informado tenha sido desativado pelo
 * administrador do sistema.
 * @param {DBKey} key Chave de um dos provedores de identidade cadastrados.
 * @returns {OpenIdProvider} Instância da classe do provedor de identidade informado.
 */
declare function fromConfig(key: DBKey): OpenIdProvider;
/**
 * Assina digitalmente um provedor de identidade e preenche o DataSet com a assinatura.
 * @param {DataSet} ds DataSet localizado em um registro de provedor de identidade.
 * @param {string} privateKey Chave privada para realizar assinatura.
 * @returns {string} Assinatura digital.
 */
declare function signSupportAccountProvider(ds: DataSet, privateKey: string): string;
/**
 * Verifica a assinatura digital dos dados de um provedor de identidade.
 * @param {DataSet} ds DataSet localizado em um registro de provedor de identidade.
 * @returns {boolean} Verdadeiro se a assinatura é válida, falso caso contrário.
 */
declare function verifySupportAccountProvider(ds: DataSet): boolean;
type CryptoPKey = import('../crypto/CryptoPKey');
type DBKey = import('../dbkey/DBKey');
type DataSet = import('../dataset/DataSet');
/**
 * Objeto literal contendo informações de configuração do provedor de identidade.
 */
interface ProviderMetadata {
    /**
     * Url de identificação do provedor de identidade.
     */
    issuer: string;
    /**
     * Url do provedor de identidade utilizada para autenticação
     * dos usuários.
     */
    authorizationEndpoint: string;
    /**
     * Url do provedor de identidade utilizada para consultar informações
     * sobre o usuário logado.
     */
    userInfoEndpoint: string;
    /**
     * Url do provedor de identidade utilizada para obtenção de tokens.
     */
    tokenEndpoint: string;
    /**
     * Url do provedor de identidade utilizada para consultar
     * informações sobre um token emitido previamente.
     */
    introspectionEndpoint: string;
    /**
     * Url do provedor de identidade utilizada para revogar um token.
     */
    revocationEndpoint: string;
    /**
     * URL de autorização de dispositivo, utilizada no fluxo
     * de autorização de dispositivo.
     */
    deviceAuthorizationEndpoint: string;
    /**
     * Fluxos de autorização suportados pelo provedor de identidade.
     */
    grantTypesSupported: string[];
    /**
     * Tipos de resposta suportadas pelo  provedor de identidade.
     */
    responseTypesSupported: string[];
    /**
     * Modos suportados pelo provedor de identidade para o
     * envio das informações na requisição de resposta, enviada para a URL de redirecionamento.
     */
    responseModesSupported: string[];
    /**
     * Escopos suportados pelo provedor de identidade.
     */
    scopesSupported: string[];
    /**
     * Algoritmos suportados para assinatura do
     * `ID Token`.
     */
    idTokenSigningAlgValuesSupported: string[];
    /**
     * Algoritmos suportados para assinatura do
     * token de informações do usuário autenticado.
     */
    userInfoSigningAlgValuesSupported: string[];
    /**
     * Conjunto de declarações suportadas pelo provedor de identidade.
     */
    claimsSupported: string[];
    /**
     * JSON contendo a lista de chaves publicas utilizadas pelo provedor, no
     * formato JWKS.
     */
    jwks: string;
}
