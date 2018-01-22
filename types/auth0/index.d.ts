// Type definitions for auth0 2.7
// Project: https://github.com/auth0/node-auth0
// Definitions by: Wilson Hobbs <https://github.com/wbhob>, Seth Westphal <https://github.com/westy92>, Amiram Korach <https://github.com/amiram>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Promise from 'bluebird';

export interface ManagementClientOptions {
  token?: string;
  domain: string;
  clientId?: string;
  clientSecret?: string;
  audience?: string;
  scope?: string;
  tokenProvider?: TokenProvider;
  retry?: RetryOptions;
}

export interface TokenProvider {
  enableCache: boolean;
  cacheTTLInSeconds?: number;
}

export interface RetryOptions {
  /**
   * Default value is `true`.
   */
  enabled?: boolean;
  /**
   * Default value is `10`.
   */
  maxRetries?: number;
}

export interface UserMetadata { }
export interface AppMetadata { }

export interface UserData {
  email?: string;
  username?: string;
  email_verified?: boolean;
  verify_email?: boolean;
  password?: string;
  phone_number?: string;
  phone_verified?: boolean,
  user_metadata?: UserMetadata;
  app_metadata?: AppMetadata;
}

export interface CreateUserData extends UserData {
  connection: string;
}

export interface UpdateUserData extends UserData {
  connection?: string;
  blocked?: boolean;
  verify_phone_number?: boolean,
  verify_password?: boolean,
  client_id?: string
}

export interface GetUsersData {
  per_page?: number;
  page?: number;
  include_totals?: boolean;
  sort?: string;
  connection?: string;
  fields?: string;
  include_fields?: boolean;
  q?: string;
  search_engine?: string;
}

export interface Rule {
  /**
   * The name of the rule.
   */
  name?: string;
  /**
   * The rule's identifier.
   */
  id?: string;
  /**
   * The code to be executed when the rule runs.
   */
  script?: string;
  /**
   * The rule's execution stage.
   */
  stage?: string;
  /**
   * `true` if the connection is enabled, `false` otherwise.
   */
  enabled?: boolean;
  /**
   * The rule's order in relation to other rules. A rule with a lower order than another rule executes first.
   */
  order?: number;
}

export interface Client {
  /**
   * The name of the client.
   */
  name?: string;
  /**
   * Free text description of the purpose of the Client. (Max character length: `140`).
   */
  description?: string;
  /**
   * The id of the client.
   */
  client_id?: string;
  /**
   * The client secret, it must not be public.
   */
  client_secret?: string;
  /**
   * The type of application this client represents.
   */
  app_type?: string;
  /**
   * The URL of the client logo (recommended size: 150x150).
   */
  logo_uri?: string;
  /**
   * Whether this client a first party client or not.
   */
  is_first_party?: boolean;
  /**
   * Whether this client will conform to strict OIDC specifications.
   */
  oidc_conformant?: boolean;
  /**
   * The URLs that Auth0 can use to as a callback for the client.
   */
  callbacks?: string[];
  allowed_origins?: string[];
  web_origins?: string[];
  client_aliases?: string[];
  allowed_clients?: string[];
  allowed_logout_urls?: string[];
  jwt_configuration?: any;
  /**
   * Client signing keys.
   */
  signing_keys?: string[];
  encryption_key?: any;
  sso?: boolean;
  /**
   * `true` to disable Single Sign On, `false` otherwise (default: `false`)
   */
  sso_disabled?: boolean;
  /**
   * `true` if this client can be used to make cross-origin authentication requests, `false` otherwise (default: `false`)
   */
  cross_origin_auth?: boolean;
  /**
   * Url fo the location in your site where the cross origin verification takes place for the cross-origin auth flow when performing Auth in your own domain instead of Auth0 hosted login page.
   */
  cross_origin_loc?: string;
  /**
   * `true` if the custom login page is to be used, `false` otherwise. (default: `true`)
   */
  custom_login_page_on?: boolean;
  custom_login_page?: string;
  custom_login_page_preview?: string;
  form_template?: string;
  addons?: any;
  /**
   * Defines the requested authentication method for the token endpoint. Possible values are 'none' (public client without a client secret), 'client_secret_post' (client uses HTTP POST parameters) or 'client_secret_basic' (client uses HTTP Basic) ['none' or 'client_secret_post' or 'client_secret_basic']
   */
  token_endpoint_auth_method?: string;
  client_metadata?: any;
  mobile?: any;
}

export interface ResourceServer {
  /**
   * The identifier of the resource server.
   */
  identifier?: string;
  scopes?: { description: string, value: string }[];
  /**
   * The algorithm used to sign tokens.
   */
  signing_alg?: 'HS256' | 'RS256';
  /**
   * The secret used to sign tokens when using symmetric algorithms.
   */
  signing_secret?: string;
  /**
   * Allows issuance of refresh tokens for this entity.
   */
  allow_offline_access?: boolean;
  /**
   * Flag this entity as capable of skipping consent.
   */
  skip_consent_for_verifiable_first_party_clients?: boolean;
  /**
   * The amount of time (in seconds) that the token will be valid after being issued.
   */
  token_lifetime?: number;
  /**
   * The amount of time (in seconds) that the token will be valid after being issued from browser based flows. Value cannot be larger than token_lifetime..
   */
  token_lifetime_for_web?: number;
  /**
   * The ID of the resource server.
   */
  id?: string;
  /**
   * A friendly name for the resource server.
   */
  name?: string;
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
  id?: string;
};

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
  'ad' | 'adfs' | 'amazon' | 'dropbox' | 'bitbucket' | 'aol' | 'auth0-adldap' | 'auth0-oidc' |
  'auth0' | 'baidu' | 'bitly' | 'box' | 'custom' | 'daccount' | 'dwolla' | 'email' |
  'evernote-sandbox' | 'evernote' | 'exact' | 'facebook' | 'fitbit' | 'flickr' | 'github' |
  'google-apps' | 'google-oauth2' | 'guardian' | 'instagram' | 'ip' | 'linkedin' | 'miicard' |
  'oauth1' | 'oauth2' | 'office365' | 'paypal' | 'paypal-sandbox' | 'pingfederate' |
  'planningcenter' | 'renren' | 'salesforce-community' | 'salesforce-sandbox' | 'salesforce' |
  'samlp' | 'sharepoint' | 'shopify' | 'sms' | 'soundcloud' | 'thecity-sandbox' | 'thecity' |
  'thirtysevensignals' | 'twitter' | 'untappd' | 'vkontakte' | 'waad' | 'weibo' | 'windowslive' |
  'wordpress' | 'yahoo' | 'yammer' | 'yandex';

export interface UpdateConnection {
  options?: any;
  /**
   * The identifiers of the clients for which the connection is to
   * be enabled. If the array is empty or the property is not
   * specified, no clients are enabled.
   */
  enabled_clients?: string[];
  /**
   * Defines the realms for which the connection will be used
   * (ie: email domains). If the array is empty or the property is
   * not specified, the connection name will be added as realm.
   */
  realms?: string[];
  metadata?: any;
  /**
 * True if the connection is domain level.
 */
  is_domain_connection?: boolean;
}

export interface Connection extends UpdateConnection {
  /**
   * The connection's identifier.
   */
  id?: string;
  /**
   * The name of the connection.
   */
  name?: string;
  /**
   * The type of the connection, related to the identity provider.
   */
  strategy?: Strategy;
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

export interface User {
  email?: string;
  email_verified?: boolean;
  username?: string;
  phone_number?: string;
  phone_verified?: boolean;
  user_id?: string;
  created_at?: string;
  updated_at?: string;
  identities?: Identity[];
  app_metadata?: AppMetadata;
  user_metadata?: UserMetadata;
  picture?: string;
  name?: string;
  nickname?: string;
  multifactor?: string[];
  last_ip?: string;
  last_login?: string;
  logins_count?: number;
  blocked?: boolean;
  given_name?: string;
  family_name?: string;
}

export interface Identity {
  connection: string;
  user_id: string;
  provider: string;
  isSocial: boolean;
}

export interface AuthenticationClientOptions {
  clientId?: string;
  clientSecret?: string;
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
}

export interface PasswordGrantOptions {
  username: string;
  password: string;
  realm?: string;
}

export interface ObjectWithId {
  id: string;
}

export interface Data {
  name?: string;
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

export type UnlinkAccountsParamsProvider = 'ad' | 'adfs' | 'amazon' | 'dropbox' | 'bitbucket' | 'aol' | 'auth0-adldap' |
  'auth0-oidc' | 'auth0' | 'baidu' | 'bitly' | 'box' | 'custom' | 'dwolla' | 'email' | 'evernote-sandbox' | 'evernote' |
  'exact' | 'facebook' | 'fitbit' | 'flickr' | 'github' | 'google-apps' | 'google-oauth2' | 'guardian' | 'instagram' |
  'ip' | 'linkedin' | 'miicard' | 'oauth1' | 'oauth2' | 'office365' | 'paypal' | 'paypal-sandbox' | 'pingfederate' |
  'planningcenter' | 'renren' | 'salesforce-community' | 'salesforce-sandbox' | 'salesforce' | 'samlp' | 'sharepoint' |
  'shopify' | 'sms' | 'soundcloud' | 'thecity-sandbox' | 'thecity' | 'thirtysevensignals' | 'twitter' | 'untappd' |
  'vkontakte' | 'waad' | 'weibo' | 'windowslive' | 'wordpress' | 'yahoo' | 'yammer' | 'yandex';

export interface UnlinkAccountsParams {
  id: string;
  provider: UnlinkAccountsParamsProvider;
  user_id: string;
}

export interface UnlinkAccountsResponseProfile {
  email?: string;
  email_verified?: boolean;
  name?: string;
  username?: string;
  given_name?: string;
  phone_number?: string;
  phone_verified?: boolean;
  family_name?: string;
}

export interface UnlinkAccountsResponse {
  connection: string;
  user_id: string;
  provider: string;
  isSocial?: boolean;
  access_token?: string;
  profileData?: UnlinkAccountsResponseProfile
}

export interface LinkAccountsData {
  user_id: string;
  connection_id?: string;
  provider?: string;
}

export interface Token {
  aud: string;
  jti: string;
}

export interface StatsParams {
  from: string;
  to: string;
}

export interface ImportUsersOptions {
  connection_id: string;
  users: string;
}

export interface UserIdParams {
  user_id: string;
}

export interface PasswordChangeTicketParams {
  result_url: string;
  user_id: string;
  email: string;
  new_password: string;
}

export interface EmailVerificationTicketOptions {
  user_id: string;
  result_url: string;
}



export class AuthenticationClient {
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

  clientCredentialsGrant(options: ClientCredentialsGrantOptions): Promise<any>;
  clientCredentialsGrant(options: ClientCredentialsGrantOptions, cb: (err: Error, response: any) => void): void;

  passwordGrant(options: PasswordGrantOptions): Promise<any>;
  passwordGrant(options: PasswordGrantOptions, cb: (err: Error, response: any) => void): void;

}


export class ManagementClient {
  constructor(options: ManagementClientOptions);

  getClientInfo(): ClientInfo;

  // Connections
  getConnections(): Promise<Connection[]>;
  getConnections(cb: (err: Error, connections: Connection[]) => void): void;

  createConnection(data: CreateConnection): Promise<Connection>;
  createConnection(data: CreateConnection, cb: (err: Error, connection: Connection) => void): void;

  getConnection(params: ObjectWithId, cb: (err: Error, connection: Connection) => void): void;
  getConnection(params: ObjectWithId): Promise<Connection>;

  deleteConnection(params: ObjectWithId, cb: (err: Error) => void): void;
  deleteConnection(params: ObjectWithId): Promise<void>;

  updateConnection(params: ObjectWithId, data: UpdateConnection, cb: (err: Error, connection: Connection) => void): void;
  updateConnection(params: ObjectWithId, data: UpdateConnection): Promise<Connection>;


  // Clients
  getClients(): Promise<Client[]>;
  getClients(cb: (err: Error, clients: Client[]) => void): void;

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

  createClientGrant(data: CreateClientGrant): Promise<ClientGrant>;
  createClientGrant(data: CreateClientGrant, cb: (err: Error, data: ClientGrant) => void): void;

  updateClientGrant(params: ObjectWithId, data: UpdateClientGrant): Promise<ClientGrant>;
  updateClientGrant(params: ObjectWithId, data: UpdateClientGrant, cb: (err: Error, data: ClientGrant) => void): void;

  deleteClientGrant(params: ObjectWithId): Promise<void>;
  deleteClientGrant(params: ObjectWithId, cb: (err: Error) => void): void;


  // Device Keys
  getDeviceCredentials(): Promise<User>;
  getDeviceCredentials(cb: (err: Error, data: any) => void): void;

  createDevicePublicKey(data: Data): Promise<User>;
  createDevicePublicKey(data: Data, cb: (err: Error, data: any) => void): void;

  deleteDeviceCredential(params: ClientParams): Promise<User>;
  deleteDeviceCredential(params: ClientParams, cb: (err: Error, data: any) => void): void;


  // Rules
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


  // Users
  getUsers(params?: GetUsersData): Promise<User[]>;
  getUsers(cb: (err: Error, users: User[]) => void): void;
  getUsers(params?: GetUsersData, cb?: (err: Error, users: User[]) => void): void;

  getUser(params: ObjectWithId): Promise<User>;
  getUser(params: ObjectWithId, cb?: (err: Error, user: User) => void): void;

  getUsersByEmail(email: string): Promise<User[]>;
  getUsersByEmail(email: string, cb?: (err: Error, users: User[]) => void): void;

  createUser(data: CreateUserData): Promise<User>;
  createUser(data: CreateUserData, cb: (err: Error, user: User) => void): void;

  updateUser(params: ObjectWithId, data: UpdateUserData): Promise<User>;
  updateUser(params: ObjectWithId, data: UpdateUserData, cb: (err: Error, data: User) => void): void;

  updateUserMetadata(params: ObjectWithId, data: UserMetadata): Promise<User>;
  updateUserMetadata(params: ObjectWithId, data: UserMetadata, cb: (err: Error, data: User) => void): void;

  // Should be removed from auth0 also. Doesn't exist in api.
  deleteAllUsers(): Promise<User>;
  deleteAllUsers(cb: (err: Error, data: any) => void): void;

  deleteUser(params: ObjectWithId): Promise<void>;
  deleteUser(params: ObjectWithId, cb?: (err: Error) => void): void;

  updateAppMetadata(params: ObjectWithId, data: AppMetadata): Promise<User>;
  updateAppMetadata(params: ObjectWithId, data: AppMetadata, cb: (err: Error, data: User) => void): void;

  deleteUserMultifactor(params: DeleteMultifactorParams): Promise<void>;
  deleteUserMultifactor(params: DeleteMultifactorParams, cb: (err: Error) => void): void;

  unlinkUsers(params: UnlinkAccountsParams): Promise<UnlinkAccountsResponse>;
  unlinkUsers(params: UnlinkAccountsParams, cb: (err: Error, data: UnlinkAccountsResponse) => void): void;

  linkUsers(params: ObjectWithId, data: LinkAccountsData): Promise<any>;
  linkUsers(params: ObjectWithId, data: LinkAccountsData, cb: (err: Error, data: any) => void): void;


  // Tokens
  getBlacklistedTokens(): Promise<any>;
  getBlacklistedTokens(cb?: (err: Error, data: any) => void): void;

  blacklistToken(token: Token): Promise<any>;
  blacklistToken(token: Token, cb: (err: Error, data: any) => void): void;


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
  getJob(params: ObjectWithId): Promise<any>;
  getJob(params: ObjectWithId, cb?: (err: Error, data: any) => void): void;

  importUsers(data: ImportUsersOptions): Promise<any>;
  importUsers(data: ImportUsersOptions, cb?: (err: Error, data: any) => void): void;

  sendEmailVerification(data: UserIdParams): Promise<any>;
  sendEmailVerification(data: UserIdParams, cb?: (err: Error, data: any) => void): void;

  // Tickets
  createPasswordChangeTicket(params: PasswordChangeTicketParams): Promise<any>;
  createPasswordChangeTicket(params: PasswordChangeTicketParams, cb?: (err: Error, data: any) => void): void;

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

  getResourceServers(): Promise<ResourceServer[]>;
  getResourceServers(cb?: (err: Error, data: ResourceServer[]) => void): void;

  getResourceServer(data: ObjectWithId): Promise<ResourceServer>;
  getResourceServer(data: ObjectWithId, cb?: (err: Error, data: ResourceServer) => void): void;

  deleteResourceServer(params: ObjectWithId): Promise<void>;
  deleteResourceServer(params: ObjectWithId, cb?: (err: Error) => void): void;

  updateResourceServer(params: ObjectWithId, data: ResourceServer): Promise<ResourceServer>;
  updateResourceServer(params: ObjectWithId, data: ResourceServer, cb?: (err: Error, data: ResourceServer) => void): void;
}
