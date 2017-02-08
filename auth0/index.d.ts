// Type definitions for auth0 2.4
// Project: https://github.com/auth0/node-auth0
// Definitions by: Wilson Hobbs <https://github.com/wbhob>, Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Promise from 'bluebird';

export interface ManagementClientOptions {
  token: string;
  domain?: string;
}

export interface UserMetadata { }
export interface AppMetadata { }

export interface UserData {
  connection: string;
  email?: string;
  username?: string;
  password?: string;
  phone_number?: string;
  user_metadata?: UserMetadata;
  email_verified?: boolean;
  app_metadata?: AppMetadata;
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

export interface UpdateUserParameters {
  id: string;
}

export interface AuthenticationClientOptions {
  clientId?: string;
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

export interface DeleteMultifactorParams {
  id: string;
  provider: string;
}

export interface LinkAccountsParams {
  id: string;
  provider: string;
  user_id: string;
}

export interface LinkAccountsData {
  user_id: string;
  connection_id: string;
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

  getCredentialsGrant(scope: string): Promise<any>;
  getCredentialsGrant(scope: string, cb: (err: Error, message: string) => void): void;

}


export class ManagementClient {
  constructor(options: ManagementClientOptions);

  getClientInfo(): ClientInfo;

  // Connections
  getConnections(): Promise<User>;
  getConnections(cb: (err: Error, data: any) => void): void;

  createConnection(data: ObjectWithId): Promise<User>;
  createConnection(data: ObjectWithId, cb: (err: Error, data: any) => void): void;

  getConnection(params: ObjectWithId, cb: (err: Error, data: any) => void): void;
  getConnection(params: ObjectWithId): Promise<User>;

  deleteConnection(params: ObjectWithId, cb: (err: Error, data: any) => void): void;
  deleteConnection(params: ObjectWithId): Promise<User>;

  deleteConnection(params: ObjectWithId, cb: (err: Error, data: any) => void): void;
  deleteConnection(params: ObjectWithId): Promise<User>;

  updateConnection(params: ObjectWithId, data: Data, cb: (err: Error, data: any) => void): void;
  updateConnection(params: ObjectWithId, data: Data): Promise<User>;


  // Clients
  getClients(): Promise<User>;
  getClients(cb: (err: Error, data: any) => void): void;

  getClient(params: ClientParams): Promise<User>;
  getClient(params: ClientParams, cb: (err: Error, data: any) => void): void;

  createClient(data: Data): Promise<User>;
  createClient(data: Data, cb: (err: Error, data: any) => void): void;

  updateClient(params: ClientParams, data: Data): Promise<User>;
  updateClient(params: ClientParams, data: Data, cb: (err: Error, data: any) => void): void;

  deleteClient(params: ClientParams): Promise<User>;
  deleteClient(params: ClientParams, cb: (err: Error, data: any) => void): void;

  // Client Grants
  getClientGrants(): Promise<User>;
  getClientGrants(cb: (err: Error, data: any) => void): void;

  createClientGrant(data: Data): Promise<User>;
  createClientGrant(data: Data, cb: (err: Error, data: any) => void): void;

  updateClientGrant(params: ObjectWithId, data: Data): Promise<User>;
  updateClientGrant(params: ObjectWithId, data: Data, cb: (err: Error, data: any) => void): void;

  deleteClientGrant(params: ObjectWithId): Promise<User>;
  deleteClientGrant(params: ObjectWithId, cb: (err: Error, data: any) => void): void;


  // Device Keys
  getDeviceCredentials(): Promise<User>;
  getDeviceCredentials(cb: (err: Error, data: any) => void): void;

  createDevicePublicKey(data: Data): Promise<User>;
  createDevicePublicKey(data: Data, cb: (err: Error, data: any) => void): void;

  deleteDeviceCredential(params: ClientParams): Promise<User>;
  deleteDeviceCredential(params: ClientParams, cb: (err: Error, data: any) => void): void;


  // Rules
  getRules(): Promise<User>;
  getRules(cb: (err: Error, data: any) => void): void;

  getRule(params: ClientParams): Promise<User>;
  getRule(params: ClientParams, cb: (err: Error, data: any) => void): void;

  createRules(data: Data): Promise<User>;
  createRules(data: Data, cb: (err: Error, data: any) => void): void;

  updateRule(params: ObjectWithId, data: Data): Promise<User>;
  updateRule(params: ObjectWithId, data: Data, cb: (err: Error, data: any) => void): void;

  deleteRule(params: ObjectWithId): Promise<User>;
  deleteRule(params: ObjectWithId, cb: (err: Error, data: any) => void): void;


  // Users
  getUsers(params?: GetUsersData): Promise<User[]>;
  getUsers(params?: GetUsersData, cb?: (err: Error, users: User[]) => void): void;

  getUser(params?: ObjectWithId): Promise<User[]>;
  getUser(params?: ObjectWithId, cb?: (err: Error, users: User[]) => void): void;

  createUser(data: UserData): Promise<User>;
  createUser(data: UserData, cb: (err: Error, data: User) => void): void;

  updateUser(params: UpdateUserParameters, data: User): Promise<User>;
  updateUser(params: UpdateUserParameters, data: User, cb: (err: Error, data: User) => void): void;

  updateUserMetadata(params: UpdateUserParameters, data: UserMetadata): Promise<User>;
  updateUserMetadata(params: UpdateUserParameters, data: UserMetadata, cb: (err: Error, data: User) => void): void;

  deleteAllUsers(): Promise<User>;
  deleteAllUsers(cb: (err: Error, data: any) => void): void;

  deleteUser(params?: ObjectWithId): Promise<any>;
  deleteUser(params?: ObjectWithId, cb?: (err: Error, users: User[]) => void): void;

  updateAppMetadata(params: UpdateUserParameters, data: AppMetadata): Promise<User>;
  updateAppMetadata(params: UpdateUserParameters, data: AppMetadata, cb: (err: Error, data: User) => void): void;

  deleteUserMultifactor(params: DeleteMultifactorParams): Promise<any>;
  deleteUserMultifactor(params: DeleteMultifactorParams, cb: (err: Error, data: any) => void): void;

  unlinkUsers(params: LinkAccountsParams): Promise<any>;
  unlinkUsers(params: LinkAccountsParams, cb: (err: Error, data: any) => void): void;

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

  updateEmailProvider(data: Data): Promise<any>;
  updateEmailProvider(data: Data, cb?: (err: Error, data: any) => void): void;


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
  createResourceServer(data: Data): Promise<any>;
  createResourceServer(data: Data, cb?: (err: Error, data: any) => void): void;

  getResourceServers(): Promise<any>;
  getResourceServers(cb?: (err: Error, data: any) => void): void;

  getResourceServer(data: ObjectWithId): Promise<any>;
  getResourceServer(data: ObjectWithId, cb?: (err: Error, data: any) => void): void;

  deleteResourceServer(params: ObjectWithId): Promise<any>;
  deleteResourceServer(params: ObjectWithId, cb?: (err: Error, data: any) => void): void;

  updateResourceServer(params: ObjectWithId, data: Data): Promise<any>;
  updateResourceServer(params: ObjectWithId, data: Data, cb?: (err: Error, data: any) => void): void;




}
