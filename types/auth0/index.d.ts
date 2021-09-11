// Type definitions for auth0 2.33
// Project: https://github.com/auth0/node-auth0
// Definitions by: Seth Westphal <https://github.com/westy92>
//                 Ian Howe <https://github.com/ianhowe76>
//                 Alex Bjørlig <https://github.com/dauledk>
//                 Dan Rumney <https://github.com/dancrumb>
//                 Peter <https://github.com/pwrnrd>
//                 Anthony Messerschmidt <https://github.com/CatGuardian>
//                 Meng Bernie Sung <https://github.com/MengRS>
//                 Léo Haddad Carneiro <https://github.com/Scoup>
//                 Isabela Morais <https://github.com/isabela-morais>
//                 Raimondo Butera <https://github.com/rbutera>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Dan Ursin <https://github.com/danursin>
//                 Nathan Hardy <https://github.com/nhardy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ManagementClientOptions {
    token?: string | undefined;
    domain: string;
    clientId?: string | undefined;
    clientSecret?: string | undefined;
    audience?: string | undefined;
    scope?: string | undefined;
    tokenProvider?: TokenProvider | undefined;
    retry?: RetryOptions | undefined;
}

export interface TokenProvider {
    enableCache: boolean;
    cacheTTLInSeconds?: number | undefined;
}

export interface RetryOptions {
    /**
     * Default value is `true`.
     */
    enabled?: boolean | undefined;
    /**
     * Default value is `10`.
     */
    maxRetries?: number | undefined;
}

export interface UserMetadata {
    [propName: string]: any;
}

export interface AppMetadata {
    [propName: string]: any;
}

export interface UserData<A = AppMetadata, U = UserMetadata> {
    email?: string | undefined;
    username?: string | undefined;
    email_verified?: boolean | undefined;
    verify_email?: boolean | undefined;
    user_id?: string | undefined;
    blocked?: boolean | undefined;
    nickname?: string | undefined;
    picture?: string | undefined;
    password?: string | undefined;
    phone_number?: string | undefined;
    phone_verified?: boolean | undefined;
    given_name?: string | undefined;
    family_name?: string | undefined;
    name?: string | undefined;
    user_metadata?: U | undefined;
    app_metadata?: A | undefined;
}

export interface CreateUserData extends UserData {
    connection: string;
}

export interface SignUpUserData extends UserData {
    connection?: string | undefined;
}

export interface UpdateUserData extends UserData {
    connection?: string | undefined;
    blocked?: boolean | undefined;
    verify_phone_number?: boolean | undefined;
    verify_password?: boolean | undefined;
    client_id?: string | undefined;
}

export interface GetUsersData {
    per_page?: number | undefined;
    page?: number | undefined;
    sort?: string | undefined;
    connection?: string | undefined;
    fields?: string | undefined;
    include_fields?: boolean | undefined;
    q?: string | undefined;
    search_engine?: string | undefined;
}

export interface GetUsersDataPaged extends GetUsersData {
    include_totals: boolean;
}

export interface Rule {
    /**
     * The name of the rule.
     */
    name?: string | undefined;
    /**
     * The rule's identifier.
     */
    id?: string | undefined;
    /**
     * The code to be executed when the rule runs.
     */
    script?: string | undefined;
    /**
     * The rule's execution stage.
     */
    stage?: string | undefined;
    /**
     * `true` if the connection is enabled, `false` otherwise.
     */
    enabled?: boolean | undefined;
    /**
     * The rule's order in relation to other rules. A rule with a lower order than another rule executes first.
     */
    order?: number | undefined;
}

export interface RulesConfig {
    /**
     * Key for a rules config variable.
     */
    key: string;
}

export interface RulesConfigData {
    /**
     * Value for a rules config variable.
     */
    value: string;
}

export interface Role {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
}

export interface GetRolesData {
    name_filter?: string | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
}

export interface GetRolesDataPaged extends GetRolesData {
    include_totals: boolean;
}

export interface RolePage extends Page {
    roles: Role[];
}

export interface CreateRoleData {
    name: string;
    description?: string | undefined;
}

export interface UpdateRoleData {
    name?: string | undefined;
    description?: string | undefined;
}

export interface RolesData {
    roles: string[];
}

export interface Permission {
    resource_server_identifier?: string | undefined;
    permission_name?: string | undefined;
    resource_server_name?: string | undefined;
    description?: string | undefined;
}

export interface PermissionsData {
    permissions: PermissionData[];
}

export interface PermissionData {
    resource_server_identifier: string;
    permission_name: string;
}

export interface GetRolePermissionsData extends ObjectWithId {
    per_page?: number | undefined;
    page?: number | undefined;
}

export interface GetRolePermissionsDataPaged extends GetRolePermissionsData {
    include_totals: boolean;
}

export interface GetRoleUsersData extends ObjectWithId {
    per_page?: number | undefined;
    page?: number | undefined;
}

export interface GetRoleUsersDataPaged extends GetRoleUsersData {
    include_totals: boolean;
}

export interface PermissionPage extends Page {
    permissions: Permission[];
}

export type Grant = 'authorization_code' | 'client_credentials' | 'implicit' | 'password' | 'refresh_token';

export interface Client {
    /**
     * The name of the client.
     */
    name?: string | undefined;
    /**
     * Free text description of the purpose of the Client. (Max character length: `140`).
     */
    description?: string | undefined;
    /**
     * The id of the client.
     */
    client_id?: string | undefined;
    /**
     * The client secret, it must not be public.
     */
    client_secret?: string | undefined;
    /**
     * The type of application this client represents.
     */
    app_type?: string | undefined;
    /**
     * The URL of the client logo (recommended size: 150x150).
     */
    logo_uri?: string | undefined;
    /**
     * Whether this client a first party client or not.
     */
    is_first_party?: boolean | undefined;
    /**
     * Whether this client will conform to strict OIDC specifications.
     */
    oidc_conformant?: boolean | undefined;
    /**
     * The URLs that Auth0 can use to as a callback for the client.
     */
    callbacks?: string[] | undefined;
    allowed_origins?: string[] | undefined;
    web_origins?: string[] | undefined;
    client_aliases?: string[] | undefined;
    allowed_clients?: string[] | undefined;
    allowed_logout_urls?: string[] | undefined;
    jwt_configuration?: {
        // The amount of time (in seconds) that the token will be valid after being issued
        lifetime_in_seconds?: number | undefined;
        scopes?: {} | undefined;
        // The algorithm used to sign the JsonWebToken
        alg?: 'HS256' | 'RS256' | undefined;
    } | undefined;
    /**
     * A set of grant types that the client is authorized to use
     */
    grant_types?: Grant[] | undefined;
    /**
     * Client signing keys.
     */
    signing_keys?: string[] | undefined;
    encryption_key?: {
        pub?: string | undefined;
        cert?: string | undefined;
        subject?: string | undefined;
    } | undefined;
    sso?: boolean | undefined;
    /**
     * `true` to disable Single Sign On, `false` otherwise (default: `false`)
     */
    sso_disabled?: boolean | undefined;
    /**
     * `true` if this client can be used to make cross-origin authentication requests, `false` otherwise (default: `false`)
     */
    cross_origin_auth?: boolean | undefined;
    /**
     * Url of the location in your site where the cross origin verification takes place for the cross-origin auth flow when performing Auth in your own domain instead of Auth0 hosted login page.
     */
    cross_origin_loc?: string | undefined;
    /**
     * `true` if the custom login page is to be used, `false` otherwise. (default: `true`)
     */
    custom_login_page_on?: boolean | undefined;
    custom_login_page?: string | undefined;
    custom_login_page_preview?: string | undefined;
    form_template?: string | undefined;
    addons?: any;
    /**
     * Defines the requested authentication method for the token endpoint.
     * Possible values are 'none' (public client without a client secret),
     * 'client_secret_post' (client uses HTTP POST parameters) or 'client_secret_basic' (client uses HTTP Basic)
     * ['none' or 'client_secret_post' or 'client_secret_basic']
     */
    token_endpoint_auth_method?: string | undefined;
    client_metadata?: any;
    mobile?: any;
    initiate_login_uri?: string | undefined;
}

export interface ResourceServer {
    /**
     * The identifier of the resource server.
     */
    identifier?: string | undefined;
    scopes?: { description: string; value: string }[] | undefined;
    /**
     * The algorithm used to sign tokens.
     */
    signing_alg?: 'HS256' | 'RS256' | undefined;
    /**
     * The secret used to sign tokens when using symmetric algorithms.
     */
    signing_secret?: string | undefined;
    /**
     * Allows issuance of refresh tokens for this entity.
     */
    allow_offline_access?: boolean | undefined;
    /**
     * Flag this entity as capable of skipping consent.
     */
    skip_consent_for_verifiable_first_party_clients?: boolean | undefined;
    /**
     * The amount of time (in seconds) that the token will be valid after being issued.
     */
    token_lifetime?: number | undefined;
    /**
     * The amount of time (in seconds) that the token will be valid after being issued from browser based flows. Value cannot be larger than token_lifetime..
     */
    token_lifetime_for_web?: number | undefined;
    /**
     * The ID of the resource server.
     */
    id?: string | undefined;
    /**
     * A friendly name for the resource server.
     */
    name?: string | undefined;
    /**
     * Enables the enforcement of the authorization policies.
     */
    enforce_policies?: boolean | undefined;
    /**
     * The dialect for the access token.
     */
    token_dialect?: 'access_token' | 'access_token_authz' | undefined;
}

export interface CreateResourceServer extends ResourceServer {
    /**
     * The identifier of the client.
     */
    identifier: string;
}

export interface CreateClientGrant {
    /**
     * The identifier of the resource server.
     */
    client_id: string;
    /**
     * The audience.
     */
    audience: string;
    scope: string[];
}

export type UpdateClientGrant = Pick<Partial<CreateClientGrant>, 'scope'>;

export type ClientGrant = Partial<CreateClientGrant> & {
    /**
     * The id of the client grant.
     */
    id?: string | undefined;
};

export interface GetClientGrantsOptions {
    /** @default 10 */
    per_page?: number | undefined;
    /** @default 0 */
    page?: number | undefined;
    /**
     * The audience.
     */
    audience?: string | undefined;
    /**
     * The id of the client (application).
     */
    client_id?: string | undefined;
}

export interface GetClientGrantsOptionsPaged extends GetClientGrantsOptions {
    /**
     * true if a query summary must be included in the result, false otherwise
     * @default false
     */
    include_totals?: boolean | undefined;
}

export interface ClientGrantPage extends Page {
    client_grants: ClientGrant[];
}

export interface CreateClientGrant {
    /**
     * The identifier of the resource server.
     */
    client_id: string;
    /**
     * The audience.
     */
    audience: string;
    scope: string[];
}

export type Strategy =
    | 'ad'
    | 'adfs'
    | 'amazon'
    | 'dropbox'
    | 'bitbucket'
    | 'aol'
    | 'auth0-adldap'
    | 'auth0-oidc'
    | 'auth0'
    | 'baidu'
    | 'bitly'
    | 'box'
    | 'custom'
    | 'daccount'
    | 'dwolla'
    | 'email'
    | 'evernote-sandbox'
    | 'evernote'
    | 'exact'
    | 'facebook'
    | 'fitbit'
    | 'flickr'
    | 'github'
    | 'google-apps'
    | 'google-oauth2'
    | 'guardian'
    | 'instagram'
    | 'ip'
    | 'linkedin'
    | 'miicard'
    | 'oauth1'
    | 'oauth2'
    | 'office365'
    | 'paypal'
    | 'paypal-sandbox'
    | 'pingfederate'
    | 'planningcenter'
    | 'renren'
    | 'salesforce-community'
    | 'salesforce-sandbox'
    | 'salesforce'
    | 'samlp'
    | 'sharepoint'
    | 'shopify'
    | 'sms'
    | 'soundcloud'
    | 'thecity-sandbox'
    | 'thecity'
    | 'thirtysevensignals'
    | 'twitter'
    | 'untappd'
    | 'vkontakte'
    | 'waad'
    | 'weibo'
    | 'windowslive'
    | 'wordpress'
    | 'yahoo'
    | 'yammer'
    | 'yandex';

export interface UpdateConnection {
    options?: any;
    /**
     * The identifiers of the clients for which the connection is to
     * be enabled. If the array is empty or the property is not
     * specified, no clients are enabled.
     */
    enabled_clients?: string[] | undefined;
    /**
     * Defines the realms for which the connection will be used
     * (ie: email domains). If the array is empty or the property is
     * not specified, the connection name will be added as realm.
     */
    realms?: string[] | undefined;
    metadata?: any;
    /**
     * True if the connection is domain level.
     */
    is_domain_connection?: boolean | undefined;
}

export interface Connection extends UpdateConnection {
    /**
     * The connection's identifier.
     */
    id?: string | undefined;
    /**
     * The name of the connection.
     */
    name?: string | undefined;
    /**
     * The type of the connection, related to the identity provider.
     */
    strategy?: Strategy | undefined;
}

export interface CreateConnection extends UpdateConnection {
    /**
     * The name of the connection. Must start and end with an
     * alphanumeric character and can only contain alphanumeric
     * characters and '-'. Max length 128.
     */
    name: string;
    /**
     * The identity provider identifier for the connection.
     */
    strategy: Strategy;
}

export interface User<A = AppMetadata, U = UserMetadata> {
    email?: string | undefined;
    email_verified?: boolean | undefined;
    username?: string | undefined;
    phone_number?: string | undefined;
    phone_verified?: boolean | undefined;
    user_id?: string | undefined;
    _id?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    identities?: Identity[] | undefined;
    app_metadata?: A | undefined;
    user_metadata?: U | undefined;
    picture?: string | undefined;
    name?: string | undefined;
    nickname?: string | undefined;
    multifactor?: string[] | undefined;
    last_ip?: string | undefined;
    last_login?: string | undefined;
    last_password_reset?: string | undefined;
    logins_count?: number | undefined;
    blocked?: boolean | undefined;
    given_name?: string | undefined;
    family_name?: string | undefined;
}

export interface Page {
    start: number;
    limit: number;
    length: number;
    total: number;
}

export interface UserPage<A = AppMetadata, U = UserMetadata> extends Page {
    users: User<A, U>[];
}

export interface GetUserRolesData extends ObjectWithId {
    page?: number | undefined;
    per_page?: number | undefined;
}

export interface GetUserRolesDataPaged extends GetUserRolesData {
    include_totals: boolean;
}

export interface GetUserPermissionsData extends ObjectWithId {
    page?: number | undefined;
    per_page?: number | undefined;
}

export interface GetUserPermissionsDataPaged extends GetUserPermissionsData {
    include_totals: boolean;
}

export interface Identity {
    connection: string;
    user_id: string;
    provider: string;
    isSocial: boolean;
    access_token?: string | undefined;
    profileData?: {
        email?: string | undefined;
        email_verified?: boolean | undefined;
        name?: string | undefined;
        phone_number?: string | undefined;
        phone_verified?: boolean | undefined;
        request_language?: string | undefined;
    } | undefined;
}

export interface AuthenticationClientOptions {
    clientId?: string | undefined;
    clientSecret?: string | undefined;
    domain: string;
}

interface Environment {
    name: string;
    version: string;
}

export interface ClientInfo {
    name: string;
    version: string;
    dependencies: any[];
    environment: Environment[];
}

export interface RequestEmailOptions {
    email: string;
    authParams: {};
}

export interface RequestSMSOptions {
    phone_number: string;
}

export interface VerifyOptions {
    username: string;
    password: string;
}

export interface DelegationTokenOptions {
    id_token: string;
    api_type: string;
    scope: string;
    target: string;
    grant_type: string;
}

export interface ResetPasswordOptions {
    connection: string;
    email: string;
    password: string;
}

export interface ResetPasswordEmailOptions {
    email: string;
    connection: string;
}

export interface ClientCredentialsGrantOptions {
    audience: string;
    scope?: string | undefined;
}

export interface PasswordGrantOptions {
    username: string;
    password: string;
    realm?: string | undefined;
    scope?: string | undefined;
    audience?: string | undefined;
}

export interface AuthorizationCodeGrantOptions {
    code: string;
    redirect_uri: string;
}

export interface AuthenticationClientRefreshTokenOptions {
    refresh_token: string;
    client_id?: string | undefined;
}

export interface RefreshTokenOptions {
    refresh_token: string;
}

export interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope?: string | undefined;
    id_token?: string | undefined;
    refresh_token?: string | undefined;
}

export interface ObjectWithId {
    id: string;
}

export interface Data {
    name?: string | undefined;
    [propName: string]: any;
}

export interface ClientParams {
    client_id: string;
}

export type DeleteDeleteMultifactorParamsProvider = 'duo' | 'google-authenticator';

export interface DeleteMultifactorParams {
    id: string;
    provider: DeleteDeleteMultifactorParamsProvider;
}

export type UnlinkAccountsParamsProvider =
    | 'ad'
    | 'adfs'
    | 'amazon'
    | 'dropbox'
    | 'bitbucket'
    | 'aol'
    | 'auth0-adldap'
    | 'auth0-oidc'
    | 'auth0'
    | 'baidu'
    | 'bitly'
    | 'box'
    | 'custom'
    | 'dwolla'
    | 'email'
    | 'evernote-sandbox'
    | 'evernote'
    | 'exact'
    | 'facebook'
    | 'fitbit'
    | 'flickr'
    | 'github'
    | 'google-apps'
    | 'google-oauth2'
    | 'guardian'
    | 'instagram'
    | 'ip'
    | 'linkedin'
    | 'miicard'
    | 'oauth1'
    | 'oauth2'
    | 'office365'
    | 'paypal'
    | 'paypal-sandbox'
    | 'pingfederate'
    | 'planningcenter'
    | 'renren'
    | 'salesforce-community'
    | 'salesforce-sandbox'
    | 'salesforce'
    | 'samlp'
    | 'sharepoint'
    | 'shopify'
    | 'sms'
    | 'soundcloud'
    | 'thecity-sandbox'
    | 'thecity'
    | 'thirtysevensignals'
    | 'twitter'
    | 'untappd'
    | 'vkontakte'
    | 'waad'
    | 'weibo'
    | 'windowslive'
    | 'wordpress'
    | 'yahoo'
    | 'yammer'
    | 'yandex';

export interface UnlinkAccountsParams {
    id: string;
    provider: UnlinkAccountsParamsProvider;
    user_id: string;
}

export interface UnlinkAccountsResponseProfile {
    email?: string | undefined;
    email_verified?: boolean | undefined;
    name?: string | undefined;
    username?: string | undefined;
    given_name?: string | undefined;
    phone_number?: string | undefined;
    phone_verified?: boolean | undefined;
    family_name?: string | undefined;
}

export interface UnlinkAccountsResponse {
    connection: string;
    user_id: string;
    provider: string;
    isSocial?: boolean | undefined;
    access_token?: string | undefined;
    profileData?: UnlinkAccountsResponseProfile | undefined;
}

export interface LinkAccountsParams {
    user_id: string;
    connection_id?: string | undefined;
    provider?: string | undefined;
}

export interface Token {
    aud: string;
    jti: string;
}

export interface StatsParams {
    from: string;
    to: string;
}

export type Job = ImportUsersJob | ExportUsersJob | VerificationEmailJob;

export type JobFormat = 'csv' | 'json';

export type JobStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface ExportUsersJob {
    id: string;
    type: 'users_export';
    status: JobStatus;
    created_at?: string | undefined;
    connection_id?: string | undefined;
    fields?: ExportUserField[] | undefined;
    location?: string | undefined;
    format?: JobFormat | undefined;
}

export interface ImportUsersJob {
    id: string;
    type: 'users_import';
    status: JobStatus;
    created_at?: string | undefined;
    connection_id?: string | undefined;
    upsert?: boolean | undefined;
    external_id?: string | undefined;
    send_completion_email?: boolean | undefined;
}

export interface VerificationEmailJob {
    id: string;
    type: 'verification_email';
    status: JobStatus;
    created_at?: string | undefined;
}

export type CustomDomainVerificationMethod = 'txt';

export type CustomDomainStatus = 'disabled' | 'pending' | 'pending_verification' | 'ready';

export type CustomDomainType = 'auth0_managed_certs' | 'self_managed_certs';

export interface CreateDomainData {
    domain: string;
    type: CustomDomainType;
    verification_method?: CustomDomainVerificationMethod | undefined;
    tls_policy?: string | undefined;
    custom_client_ip_header?: string | undefined;
}

export interface Domain {
    custom_domain_id: string;
    domain: string;
    primary: boolean;
    status: CustomDomainStatus;
    type: CustomDomainType;
    origin_domain_name?: string | undefined;
    verification: {
        methods: any[];
    };
    custom_client_ip_header?: string | undefined;
    tls_policy?: string | undefined;
}

export interface DomainVerification extends Domain {
    cname_api_key?: string | undefined;
}

export interface BaseImportUsersOptions {
    connection_id: string;
    upsert?: boolean | undefined;
    external_id?: string | undefined;
    send_completion_email?: boolean | undefined;
}

export interface ImportUsersFromFileOptions extends BaseImportUsersOptions {
    users: string;
}

export interface ImportUsersFromJsonOptions extends BaseImportUsersOptions {
    users_json: string;
}

export type ImportUsersOptions = ImportUsersFromFileOptions | ImportUsersFromJsonOptions;

export interface ExportUsersOptions {
    connection_id?: string | undefined;
    format?: JobFormat | undefined;
    limit?: number | undefined;
    fields?: ExportUserField[] | undefined;
}

export interface UserIdParams {
    user_id: string;
    client_id?: string | undefined;
}

export interface ExportUserField {
    name: string;
    export_as?: string | undefined;
}

export interface PasswordChangeTicketParams {
    result_url?: string | undefined;
    user_id?: string | undefined;
    new_password?: string | undefined;
    connection_id?: string | undefined;
    email?: string | undefined;
    ttl_sec?: number | undefined;
    mark_email_as_verified?: boolean | undefined;
    includeEmailInRedirect?: boolean | undefined;
}

export interface PasswordChangeTicketResponse {
    ticket: string;
}

export interface EmailVerificationTicketOptions {
    user_id: string;
    result_url: string;
}

export interface BaseClientOptions {
    baseUrl: string;
    clientId?: string | undefined;
}

export interface OAuthClientOptions extends BaseClientOptions {
    clientSecret?: string | undefined;
}

export interface DatabaseClientOptions extends BaseClientOptions {}

export interface PasswordLessClientOptions extends BaseClientOptions {}

export interface TokensManagerOptions extends BaseClientOptions {
    clientSecret?: string | undefined;
    headers?: any;
}
export interface UsersOptions extends BaseClientOptions {
    headers?: any;
}

export interface CustomDomainsManagerOptions extends BaseClientOptions {
    headers?: any;
    retry?: RetryOptions | undefined;
}

export interface SignInOptions {
    username: string;
    otp: string;
    realm?: 'email' | 'sms';
    /**
     * @deprecated
     */
    password?: string;
    /**
     * @deprecated
     */
    connection?: 'email' | 'sms';
}

export interface SocialSignInOptions {
    access_token: string;
    connection: string;
}

export interface SignInToken {
    access_token: string;
    id_token?: string | undefined;
    token_type?: string | undefined;
    expiry: number;
}

export interface RequestSMSCodeOptions extends RequestSMSOptions {
    client_id: string;
}

export type SendType = 'link' | 'code';
export interface RequestEmailCodeOrLinkOptions {
    email: string;
    send: SendType;
}

export interface PasswordlessOptions {
    forwardedFor?: string;
}

export interface ImpersonateSettingOptions {
    impersonator_id: string;
    protocol: string;
    token: string;
    clientId?: string | undefined;
}

export type ClientAppType =
    | 'native'
    | 'spa'
    | 'regular_web'
    | 'non_interactive'
    | 'rms'
    | 'box'
    | 'cloudbees'
    | 'concur'
    | 'dropbox'
    | 'mscrm'
    | 'echosign'
    | 'egnyte'
    | 'newrelic'
    | 'office365'
    | 'salesforce'
    | 'sentry'
    | 'sharepoint'
    | 'slack'
    | 'springcm'
    | 'zendesk'
    | 'zoom';
export interface GetClientsOptions {
    fields?: string[] | undefined;
    include_fields?: boolean | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    include_totals?: boolean | undefined;
    is_global?: boolean | undefined;
    is_first_party?: boolean | undefined;
    app_type?: ClientAppType[] | undefined;
}

export interface ObjectWithIdentifier {
    identifier: string;
}

export interface BlockedForEntry {
    identifier: string;
    ip?: string | undefined;
}

export interface UserBlocks {
    blocked_for: BlockedForEntry[];
}

export type EnrollmentStatus = 'pending' | 'confirmed';

export type AuthMethod = 'authentication' | 'guardian' | 'sms';

export interface Enrollment {
    id: string;
    status: EnrollmentStatus;
    enrolled_at: string;
    last_auth: string;
    type: string;
    auth_method: AuthMethod;
}

export interface PagingOptions {
    per_page?: number | undefined;
    page?: number | undefined;
}

export class AuthenticationClient {
    // Members
    database?: DatabaseAuthenticator | undefined;
    oauth?: OAuthAuthenticator | undefined;
    passwordless?: PasswordlessAuthenticator | undefined;
    tokens?: TokensManager | undefined;
    users?: UsersManager | undefined;

    constructor(options: AuthenticationClientOptions);
    getClientInfo(): ClientInfo;

    requestMagicLink(data: RequestEmailOptions): Promise<any>;
    requestMagicLink(data: RequestEmailOptions, cb: (err: Error, message: string) => void): void;

    requestEmailCode(data: RequestEmailOptions): Promise<any>;
    requestEmailCode(data: RequestEmailOptions, cb: (err: Error, message: string) => void): void;

    requestSMSCode(data: RequestSMSOptions): Promise<any>;
    requestSMSCode(data: RequestSMSOptions, cb: (err: Error, message: string) => void): void;

    verifyEmailCode(data: VerifyOptions): Promise<any>;
    verifyEmailCode(data: VerifyOptions, cb: (err: Error, message: string) => void): void;

    verifySMSCode(data: VerifyOptions): Promise<any>;
    verifySMSCode(data: VerifyOptions, cb: (err: Error, message: string) => void): void;

    getDelegationToken(data: DelegationTokenOptions): Promise<any>;
    getDelegationToken(data: DelegationTokenOptions, cb: (err: Error, message: string) => void): void;

    changePassword(data: ResetPasswordOptions): Promise<any>;
    changePassword(data: ResetPasswordOptions, cb: (err: Error, message: string) => void): void;

    requestChangePasswordEmail(data: ResetPasswordEmailOptions): Promise<any>;
    requestChangePasswordEmail(data: ResetPasswordEmailOptions, cb: (err: Error, message: string) => void): void;

    getProfile(accessToken: string): Promise<any>;
    getProfile(accessToken: string, cb: (err: Error, message: string) => void): void;

    clientCredentialsGrant(options: ClientCredentialsGrantOptions): Promise<TokenResponse>;
    clientCredentialsGrant(
        options: ClientCredentialsGrantOptions,
        cb: (err: Error, response: TokenResponse) => void,
    ): void;

    passwordGrant(options: PasswordGrantOptions): Promise<TokenResponse>;
    passwordGrant(options: PasswordGrantOptions, cb: (err: Error, response: TokenResponse) => void): void;

    refreshToken(options: AuthenticationClientRefreshTokenOptions): Promise<TokenResponse>;
    refreshToken(
        options: AuthenticationClientRefreshTokenOptions,
        cb: (err: Error, response: TokenResponse) => void,
    ): void;
}

export class ManagementClient<A = AppMetadata, U = UserMetadata> {
    constructor(options: ManagementClientOptions);

    getClientInfo(): ClientInfo;

    // Connections
    getConnections(params: PagingOptions): Promise<Connection[]>;
    getConnections(): Promise<Connection[]>;
    getConnections(cb: (err: Error, connections: Connection[]) => void): void;

    createConnection(data: CreateConnection): Promise<Connection>;
    createConnection(data: CreateConnection, cb: (err: Error, connection: Connection) => void): void;

    getConnection(params: ObjectWithId, cb: (err: Error, connection: Connection) => void): void;
    getConnection(params: ObjectWithId): Promise<Connection>;

    deleteConnection(params: ObjectWithId, cb: (err: Error) => void): void;
    deleteConnection(params: ObjectWithId): Promise<void>;

    updateConnection(
        params: ObjectWithId,
        data: UpdateConnection,
        cb: (err: Error, connection: Connection) => void,
    ): void;
    updateConnection(params: ObjectWithId, data: UpdateConnection): Promise<Connection>;

    // Clients
    getClients(params?: GetClientsOptions): Promise<Client[]>;
    getClients(cb: (err: Error, clients: Client[]) => void): void;
    getClients(params: GetClientsOptions, cb: (err: Error, clients: Client[]) => void): void;

    getClient(params: ClientParams): Promise<Client>;
    getClient(params: ClientParams, cb: (err: Error, client: Client) => void): void;

    createClient(data: Data): Promise<Client>;
    createClient(data: Data, cb: (err: Error, client: Client) => void): void;

    updateClient(params: ClientParams, data: Data): Promise<Client>;
    updateClient(params: ClientParams, data: Data, cb: (err: Error, client: Client) => void): void;

    deleteClient(params: ClientParams): Promise<void>;
    deleteClient(params: ClientParams, cb: (err: Error) => void): void;

    // Client Grants
    getClientGrants(): Promise<ClientGrant[]>;
    getClientGrants(cb: (err: Error, data: ClientGrant[]) => void): void;
    getClientGrants(params: GetClientGrantsOptions): Promise<ClientGrant[]>;
    getClientGrants(params: GetClientGrantsOptions, cb: (err: Error, data: ClientGrant[]) => void): void;
    getClientGrants(params: GetClientGrantsOptionsPaged): Promise<ClientGrantPage>;
    getClientGrants(params: GetClientGrantsOptionsPaged, cb: (err: Error, data: ClientGrantPage) => void): void;

    createClientGrant(data: CreateClientGrant): Promise<ClientGrant>;
    createClientGrant(data: CreateClientGrant, cb: (err: Error, data: ClientGrant) => void): void;

    updateClientGrant(params: ObjectWithId, data: UpdateClientGrant): Promise<ClientGrant>;
    updateClientGrant(params: ObjectWithId, data: UpdateClientGrant, cb: (err: Error, data: ClientGrant) => void): void;

    deleteClientGrant(params: ObjectWithId): Promise<void>;
    deleteClientGrant(params: ObjectWithId, cb: (err: Error) => void): void;

    // Device Keys
    getDeviceCredentials(): Promise<User<A, U>>;
    getDeviceCredentials(cb: (err: Error, data: any) => void): void;

    createDevicePublicKey(data: Data): Promise<User<A, U>>;
    createDevicePublicKey(data: Data, cb: (err: Error, data: any) => void): void;

    deleteDeviceCredential(params: ClientParams): Promise<User<A, U>>;
    deleteDeviceCredential(params: ClientParams, cb: (err: Error, data: any) => void): void;

    // Roles
    getRoles(): Promise<Role[]>;
    getRoles(cb: (err: Error, roles: Role[]) => void): void;
    getRoles(params: GetRolesData): Promise<Role[]>;
    getRoles(params: GetRolesData, cb: (err: Error, roles: Role[]) => void): void;
    getRoles(params: GetRolesDataPaged): Promise<RolePage>;
    getRoles(params: GetRolesDataPaged, cb: (err: Error, rolePage: RolePage) => void): void;

    createRole(data: CreateRoleData): Promise<Role>;
    createRole(data: CreateRoleData, cb: (err: Error, role: Role) => void): void;

    getRole(params: ObjectWithId): Promise<Role>;
    getRole(params: ObjectWithId, cb: (err: Error, role: Role) => void): void;

    deleteRole(params: ObjectWithId): Promise<void>;
    deleteRole(params: ObjectWithId, cb: (err: Error) => void): void;

    updateRole(params: ObjectWithId, data: UpdateRoleData): Promise<Role>;
    updateRole(params: ObjectWithId, data: UpdateRoleData, cb: (err: Error, role: Role) => void): void;

    getPermissionsInRole(params: ObjectWithId): Promise<Permission[]>;
    getPermissionsInRole(params: ObjectWithId, cb: (err: Error, permissions: Permission[]) => void): void;
    getPermissionsInRole(params: GetRolePermissionsData): Promise<Permission[]>;
    getPermissionsInRole(params: GetRolePermissionsData, cb: (err: Error, permissions: Permission[]) => void): void;
    getPermissionsInRole(params: GetRolePermissionsDataPaged): Promise<PermissionPage>;
    getPermissionsInRole(
        params: GetRolePermissionsDataPaged,
        cb: (err: Error, permissionPage: PermissionPage) => void,
    ): void;

    removePermissionsFromRole(params: ObjectWithId, data: PermissionsData): Promise<void>;
    removePermissionsFromRole(params: ObjectWithId, data: PermissionsData, cb: (err: Error) => void): void;

    addPermissionsInRole(params: ObjectWithId, data: PermissionsData): Promise<void>;
    addPermissionsInRole(params: ObjectWithId, data: PermissionsData, cb: (err: Error) => void): void;

    getUsersInRole(params: GetRoleUsersDataPaged): Promise<UserPage<A, U>>;
    getUsersInRole(params: GetRoleUsersDataPaged, cb: (err: Error, userPage: UserPage<A, U>) => void): void;
    getUsersInRole(params: GetRoleUsersData): Promise<User<A, U>[]>;
    getUsersInRole(params: GetRoleUsersData, cb: (err: Error, users: User<A, U>[]) => void): void;
    getUsersInRole(params: ObjectWithId): Promise<User<A, U>[]>;
    getUsersInRole(params: ObjectWithId, cb: (err: Error, users: User<A, U>[]) => void): void;

    // Rules
    getRules(params: PagingOptions): Promise<Rule[]>;
    getRules(): Promise<Rule[]>;
    getRules(cb: (err: Error, rules: Rule[]) => void): void;

    getRule(params: ClientParams): Promise<Rule>;
    getRule(params: ClientParams, cb: (err: Error, rule: Rule) => void): void;

    createRule(data: Data): Promise<Rule>;
    createRule(data: Data, cb: (err: Error, rule: Rule) => void): void;

    updateRule(params: ObjectWithId, data: Data): Promise<Rule>;
    updateRule(params: ObjectWithId, data: Data, cb: (err: Error, rule: Rule) => void): void;

    deleteRule(params: ObjectWithId): Promise<void>;
    deleteRule(params: ObjectWithId, cb: (err: Error) => void): void;

    // Rules Configurations
    getRulesConfigs(): Promise<RulesConfig[]>;
    getRulesConfigs(cb: (err: Error, rulesConfigs: RulesConfig[]) => void): void;

    setRulesConfig(params: RulesConfig, data: RulesConfigData): Promise<RulesConfig & RulesConfigData>;
    setRulesConfig(
        params: RulesConfig,
        data: RulesConfigData,
        cb: (err: Error, rulesConfig: RulesConfig & RulesConfigData) => void,
    ): void;

    deleteRulesConfig(params: RulesConfig): Promise<void>;
    deleteRulesConfig(params: RulesConfig, cb: (err: Error) => void): void;

    // Users
    getUsers(params: GetUsersDataPaged): Promise<UserPage<A, U>>;
    getUsers(params: GetUsersDataPaged, cb: (err: Error, userPage: UserPage<A, U>) => void): void;
    getUsers(params?: GetUsersData): Promise<User<A, U>[]>;
    getUsers(cb: (err: Error, users: User<A, U>[]) => void): void;
    getUsers(params?: GetUsersData, cb?: (err: Error, users: User<A, U>[]) => void): void;

    getUser(params: ObjectWithId): Promise<User<A, U>>;
    getUser(params: ObjectWithId, cb?: (err: Error, user: User<A, U>) => void): void;

    getUsersByEmail(email: string): Promise<User<A, U>[]>;
    getUsersByEmail(email: string, cb?: (err: Error, users: User<A, U>[]) => void): void;

    createUser(data: CreateUserData): Promise<User<A, U>>;
    createUser(data: CreateUserData, cb: (err: Error, user: User<A, U>) => void): void;

    updateUser(params: ObjectWithId, data: UpdateUserData): Promise<User<A, U>>;
    updateUser(params: ObjectWithId, data: UpdateUserData, cb: (err: Error, data: User<A, U>) => void): void;

    updateUserMetadata(params: ObjectWithId, data: U): Promise<User<A, U>>;
    updateUserMetadata(params: ObjectWithId, data: U, cb: (err: Error, data: User<A, U>) => void): void;

    // Should be removed from auth0 also. Doesn't exist in api.
    deleteAllUsers(): Promise<User<A, U>>;
    deleteAllUsers(cb: (err: Error, data: any) => void): void;

    deleteUser(params: ObjectWithId): Promise<void>;
    deleteUser(params: ObjectWithId, cb?: (err: Error) => void): void;

    updateAppMetadata(params: ObjectWithId, data: A): Promise<User<A, U>>;
    updateAppMetadata(params: ObjectWithId, data: A, cb: (err: Error, data: User<A, U>) => void): void;

    deleteUserMultifactor(params: DeleteMultifactorParams): Promise<void>;
    deleteUserMultifactor(params: DeleteMultifactorParams, cb: (err: Error) => void): void;

    unlinkUsers(params: UnlinkAccountsParams): Promise<UnlinkAccountsResponse>;
    unlinkUsers(params: UnlinkAccountsParams, cb: (err: Error, data: UnlinkAccountsResponse) => void): void;

    linkUsers(userId: string, params: LinkAccountsParams): Promise<any>;
    linkUsers(userId: string, params: LinkAccountsParams, cb: (err: Error, data: any) => void): void;

    // User roles
    getUserRoles(params: ObjectWithId): Promise<Role[]>;
    getUserRoles(params: ObjectWithId, cb: (err: Error, roles: Role[]) => void): void;
    getUserRoles(params: GetUserRolesData): Promise<Role[]>;
    getUserRoles(params: GetUserRolesData, cb: (err: Error, roles: Role[]) => void): void;
    getUserRoles(params: GetUserRolesDataPaged): Promise<RolePage>;
    getUserRoles(params: GetUserRolesDataPaged, cb: (err: Error, rolePage: RolePage) => void): void;

    removeRolesFromUser(params: ObjectWithId, data: RolesData): Promise<void>;
    removeRolesFromUser(params: ObjectWithId, data: RolesData, cb: (err: Error) => void): void;

    // The lowercase 't' is like this in the auth0 sdk
    assignRolestoUser(params: ObjectWithId, data: RolesData): Promise<void>;
    assignRolestoUser(params: ObjectWithId, data: RolesData, cb: (err: Error) => void): void;

    // User permissions
    getUserPermissions(params: ObjectWithId): Promise<Permission[]>;
    getUserPermissions(params: ObjectWithId, cb: (err: Error, permissions: Permission[]) => void): void;
    getUserPermissions(params: GetUserPermissionsData): Promise<Permission[]>;
    getUserPermissions(params: GetUserPermissionsData, cb: (err: Error, permissions: Permission[]) => void): void;
    getUserPermissions(params: GetUserPermissionsDataPaged): Promise<PermissionPage>;
    getUserPermissions(
        params: GetUserPermissionsDataPaged,
        cb: (err: Error, permissionPage: PermissionPage) => void,
    ): void;

    removePermissionsFromUser(params: ObjectWithId, data: PermissionsData): Promise<void>;
    removePermissionsFromUser(params: ObjectWithId, data: PermissionsData, cb: (err: Error) => void): void;

    assignPermissionsToUser(params: ObjectWithId, data: PermissionsData): Promise<void>;
    assignPermissionsToUser(params: ObjectWithId, data: PermissionsData, cb: (err: Error) => void): void;

    // User Blocks
    getUserBlocks(params: ObjectWithId): Promise<UserBlocks>;
    getUserBlocks(params: ObjectWithId, cb: (err: Error, response: UserBlocks) => void): void;
    getUserBlocksByIdentifier(params: ObjectWithIdentifier): Promise<UserBlocks>;
    getUserBlocksByIdentifier(params: ObjectWithIdentifier, cb: (err: Error, response: UserBlocks) => void): void;
    unblockUser(params: ObjectWithId): Promise<string>;
    unblockUser(params: ObjectWithId, cb: (err: Error, response: string) => void): void;
    unblockUserByIdentifier(params: ObjectWithIdentifier): Promise<string>;
    unblockUserByIdentifier(params: ObjectWithIdentifier, cb: (err: Error, response: string) => void): void;

    // Tokens
    getAccessToken(): Promise<string>;

    getBlacklistedTokens(): Promise<any>;
    getBlacklistedTokens(cb?: (err: Error, data: any) => void): void;

    blacklistToken(token: Token): Promise<any>;
    blacklistToken(token: Token, cb: (err: Error, data: any) => void): void;

    // Templates
    createEmailTemplate(data: Data): Promise<any>;
    createEmailTemplate(data: Data, cb?: (err: Error) => void): void;

    getEmailTemplate(data: Data): Promise<any>;
    getEmailTemplate(data: Data, cb?: (err: Error, data: any) => void): void;

    updateEmailTemplate(params: {}, data: Data): Promise<any>;
    updateEmailTemplate(params: {}, data: Data, cb?: (err: Error, data: any) => void): void;

    // Providers
    getEmailProvider(): Promise<any>;
    getEmailProvider(cb?: (err: Error, data: any) => void): void;

    configureEmailProvider(data: Data): Promise<any>;
    configureEmailProvider(data: Data, cb: (err: Error, data: any) => void): void;

    deleteEmailProvider(): Promise<any>;
    deleteEmailProvider(cb?: (err: Error, data: any) => void): void;

    updateEmailProvider(params: {}, data: Data): Promise<any>;
    updateEmailProvider(params: {}, data: Data, cb?: (err: Error, data: any) => void): void;

    // Statistics
    getActiveUsersCount(): Promise<any>;
    getActiveUsersCount(cb?: (err: Error, data: any) => void): void;

    getDailyStats(data: StatsParams): Promise<any>;
    getDailyStats(data: StatsParams, cb: (err: Error, data: any) => void): void;

    // Tenant
    getTenantSettings(): Promise<any>;
    getTenantSettings(cb?: (err: Error, data: any) => void): void;

    updateTenantSettings(data: Data): Promise<any>;
    updateTenantSettings(data: Data, cb?: (err: Error, data: any) => void): void;

    // Jobs
    getJob(params: ObjectWithId): Promise<Job>;
    getJob(params: ObjectWithId, cb?: (err: Error, data: Job) => void): void;

    importUsers(data: ImportUsersOptions): Promise<ImportUsersJob>;
    importUsers(data: ImportUsersOptions, cb?: (err: Error, data: ImportUsersJob) => void): void;

    exportUsers(data: ExportUsersOptions): Promise<ExportUsersJob>;
    exportUsers(data: ExportUsersOptions, cb?: (err: Error, data: ExportUsersJob) => void): void;

    sendEmailVerification(data: UserIdParams): Promise<VerificationEmailJob>;
    sendEmailVerification(data: UserIdParams, cb?: (err: Error, data: VerificationEmailJob) => void): void;

    // Tickets
    createPasswordChangeTicket(params: PasswordChangeTicketParams): Promise<PasswordChangeTicketResponse>;
    createPasswordChangeTicket(
        params: PasswordChangeTicketParams,
        cb?: (err: Error, data: PasswordChangeTicketResponse) => void,
    ): void;

    createEmailVerificationTicket(data: EmailVerificationTicketOptions): Promise<any>;
    createEmailVerificationTicket(data: EmailVerificationTicketOptions, cb?: (err: Error, data: any) => void): void;

    // Logs
    getLog(params: ObjectWithId): Promise<any>;
    getLog(params: ObjectWithId, cb?: (err: Error, data: any) => void): void;

    getLogs(): Promise<any>;
    getLogs(cb?: (err: Error, data: any) => void): void;

    // Resource Server
    createResourceServer(data: CreateResourceServer): Promise<ResourceServer>;
    createResourceServer(data: CreateResourceServer, cb?: (err: Error, data: ResourceServer) => void): void;

    getResourceServers(params: PagingOptions): Promise<ResourceServer[]>;
    getResourceServers(): Promise<ResourceServer[]>;
    getResourceServers(cb?: (err: Error, data: ResourceServer[]) => void): void;

    getResourceServer(data: ObjectWithId): Promise<ResourceServer>;
    getResourceServer(data: ObjectWithId, cb?: (err: Error, data: ResourceServer) => void): void;

    deleteResourceServer(params: ObjectWithId): Promise<void>;
    deleteResourceServer(params: ObjectWithId, cb?: (err: Error) => void): void;

    updateResourceServer(params: ObjectWithId, data: ResourceServer): Promise<ResourceServer>;
    updateResourceServer(
        params: ObjectWithId,
        data: ResourceServer,
        cb?: (err: Error, data: ResourceServer) => void,
    ): void;

    // Custom Domains
    createCustomDomain(data: CreateDomainData): Promise<Domain>;
    createCustomDomain(data: CreateDomainData, cb: (err: Error, domain: Domain) => void): void;

    getCustomDomains(): Promise<Domain[]>;
    getCustomDomains(cb: (err: Error, data: Domain[]) => void): void;

    getCustomDomain(params: ObjectWithId): Promise<Domain>;
    getCustomDomain(params: ObjectWithId, cb: (err: Error, data: Domain) => void): void;

    verifyCustomDomain(params: ObjectWithId): Promise<DomainVerification>;
    verifyCustomDomain(params: ObjectWithId, cb: (err: Error, data: DomainVerification) => void): void;

    deleteCustomDomain(params: ObjectWithId): Promise<void>;
    deleteCustomDomain(params: ObjectWithId, cb: (err: Error) => void): void;

    // User enrollment
    getGuardianEnrollments(params: ObjectWithId): Promise<Enrollment[]>;
    getGuardianEnrollments(params: ObjectWithId, cb: (err: Error, response: Enrollment[]) => void): void;

    deleteGuardianEnrollment(params: ObjectWithId): Promise<void>;
    deleteGuardianEnrollment(params: ObjectWithId, cb?: (err: Error) => void): void;

    // MFA invalidate remember browser
    invalidateRememberBrowser(params: ObjectWithId): Promise<void>;
    invalidateRememberBrowser(params: ObjectWithId, cb?: (err: Error) => void): void;
}

export class DatabaseAuthenticator<A = AppMetadata, U = UserMetadata> {
    constructor(options: DatabaseClientOptions, oauth: OAuthAuthenticator);

    changePassword(data: ResetPasswordOptions): Promise<any>;
    changePassword(data: ResetPasswordOptions, cb: (err: Error, message: string) => void): void;

    requestChangePasswordEmail(data: ResetPasswordEmailOptions): Promise<any>;
    requestChangePasswordEmail(data: ResetPasswordEmailOptions, cb: (err: Error, message: string) => void): void;

    signIn(data: SignInOptions): Promise<SignInToken>;
    signIn(data: SignInOptions, cb: (err: Error, data: SignInToken) => void): void;

    signUp(data: SignUpUserData): Promise<User<A, U>>;
    signIn(data: SignUpUserData, cb: (err: Error, data: User) => void): void;
}

export class OAuthAuthenticator {
    constructor(options: OAuthClientOptions);

    passwordGrant(options: PasswordGrantOptions): Promise<SignInToken>;
    passwordGrant(options: PasswordGrantOptions, cb: (err: Error, response: SignInToken) => void): void;

    signIn(data: SignInOptions): Promise<SignInToken>;
    signIn(data: SignInOptions, cb: (err: Error, data: SignInToken) => void): void;

    socialSignIn(data: SocialSignInOptions): Promise<SignInToken>;
    socialSignIn(data: SocialSignInOptions, cb: (err: Error, data: SignInToken) => void): void;

    authorizationCodeGrant(data: AuthorizationCodeGrantOptions): Promise<SignInToken>;
    authorizationCodeGrant(data: AuthorizationCodeGrantOptions, cb: (err: Error, data: SignInToken) => void): void;

    refreshToken(options: RefreshTokenOptions): Promise<TokenResponse>;
    refreshToken(options: RefreshTokenOptions, cb: (err: Error, response: TokenResponse) => void): void;
}

export class PasswordlessAuthenticator {
    constructor(options: PasswordLessClientOptions, oauth: OAuthAuthenticator);

    signIn(userData: SignInOptions, options?: PasswordlessOptions): Promise<SignInToken>;
    signIn(userData: SignInOptions, cb: (err: Error, data: SignInToken) => void): void;
    signIn(userData: SignInOptions, options: PasswordlessOptions, cb: (err: Error, data: SignInToken) => void): void;

    sendEmail(userData: RequestEmailCodeOrLinkOptions, options?: PasswordlessOptions): Promise<any>;
    sendEmail(userData: RequestEmailCodeOrLinkOptions, cb: (err: Error, message: string) => void): void;
    sendEmail(userData: RequestEmailCodeOrLinkOptions, options: PasswordlessOptions, cb: (err: Error, message: string) => void): void;

    sendSMS(userData: RequestSMSCodeOptions, options?: PasswordlessOptions): Promise<any>;
    sendSMS(userData: RequestSMSCodeOptions, cb: (err: Error, message: string) => void): void;
    sendSMS(userData: RequestSMSCodeOptions, options: PasswordlessOptions, cb: (err: Error, message: string) => void): void;
}

export interface RevokeRefreshTokenOptions {
    client_id?: string | undefined;
    client_secret?: string | undefined;
    token: string;
}

export class TokensManager {
    constructor(options: TokensManagerOptions);

    revokeRefreshToken(data: RevokeRefreshTokenOptions): Promise<void>;
    revokeRefreshToken(data: RevokeRefreshTokenOptions, cb: (err: Error) => void): void;
}

export class UsersManager<A = AppMetadata, U = UserMetadata> {
    constructor(options: UsersOptions);

    getInfo(accessToken: string): Promise<User<A, U>>;
    getInfo(accessToken: string, cb: (err: Error, user: User<A, U>) => void): void;

    impersonate(userId: string, settings: ImpersonateSettingOptions): Promise<any>;
    impersonate(userId: string, settings: ImpersonateSettingOptions, cb: (err: Error, data: any) => void): void;
}
