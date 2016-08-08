/// <reference path="../node/node.d.ts" />
/// <reference path="../Q/Q.d.ts" />


/// index.js
export class twilio extends RestClient {
  constructor(sid?: string, tkn?: string, options?: ClientOptions);
}

export namespace twilio {

  // Composite Classes:
  //==============================
  // RestClient
  // PricingClient
  // MonitorClient
  // TaskRouterClient
  // IpMessagingClient
  // LookupsClient
  // TrunkingClient

  // Classes:
  //==============================
  // AccessToken
  // Capability
  // TaskRouterCapability
  // TaskRouterWorkerCapability
  // TaskRouterWorkspaceCapability
  // TaskRouterTaskQueueCapability
  // TwimlResponse
  // webhook

  // Methods:
  //===============================
  // validateRequest
  // validateExpressRequest
}


/// ???
declare interface GrantPayload {}

declare interface Grant {
  toPayload(): GrantPayload;
}

declare interface RequestCallback { (err: any, data: any, response: ): void }

/// AccessToken.js
declare interface IpMessagingGrantOptions {
  serviceSid: string;
  endpointId: string;
  deploymentRoleSid: string;
  pushCredentialSid: string;
}

declare interface IpMessagingGrantPayload extends GrantPayload {
  service_sid: string;
  endpoint_id: string;
  deployment_role_sid: string;
  push_credential_sid: string;
}

declare class IpMessagingGrant implements Grant {
  serviceSid: string;
  endpointId: string;
  deploymentRoleSid: string;
  pushCredentialSid: string;
  key: string;

  constructor(options?: IpMessagingGrantOptions);

  toPayload(): IpMessagingGrantPayload;
}

declare interface ConversationsGrantOptions {
  configurationProfileSid: string;
}

declare interface ConversationsGrantPayload extends GrantPayload {
  configuration_profile_sid: string;
}

declare class ConversationsGrant implements Grant {
  configurationProfileSid: string;

  constructor(options?: ConversationsGrantOptions);

  toPayload(): ConversationsGrantPayload;
}

declare interface AccessTokenOptions {
  ttl: number;
  identity: string;
  nbf: number;
}

declare class AccessToken {
  accountSid: string;
  keySid: string;
  secret: string;
  ttl: number;
  identity: string;
  nbf: number;
  grants: Array<Grant>;

  static IpMessagingGrant: IpMessagingGrant;
  static ConversationGrant: ConversationsGrant;
  static DEFAULT_ALGORITHM: string;
  static ALGORITHMS: Array<string>;

  constructor(accountSid: string, keySid: string, secret: string, opts?: AccessTokenOptions);

  addGrant(grant: Grant): void;
  toJwt(algorithm: string): any;  // TODO Find correct typedef
}

/// Capability.js
declare class Capability {
  accountSid: string;
  authToken: string;
  capabilities: Array<string>;
  clientName: string;
  outgoingScopeParams: any;
  scopeParams: any;
  
  constructor(sid?: string, tkn?: string);

  allowClientIncoming(clientName: string): Capability;
  allowClientOutgoing(appSid: string, params?: any): Capability;
  allowEventStream(filters?: any): Capability;
  generate(timeout?: number): string;
}

/// Client.js
declare interface ClientOptions {
  host?: string;
  apiVersion?: string;
  timeout?: number;
}

declare interface ClientRequestOptions {
  url: string;
  form?: any;
}

declare class Client {
  accountSid: string;
  authToken: string;
  host: string;
  apiVersion: string;
  timeout: number;

  constructor(sid?: string, tkn?: string, host?: string, api_version?: string, timeout?: number);

  getBaseUrl(): string;
  request(options: ClientRequestOptions, callback: RequestCallback): Q.Promise<any>;
}

/// IpMessagingClient.js
declare class IpMessagingClient extends Client {
  services: ServiceResource;
  credentials: CredentialsResource;

  constructor(sid?: string, tkn?: string, options?: ClientOptions);
}

/// LookupsClient.js
declare class LookupsClient extends Client {
  phoneNumbers: PhoneNumbersResource;

  constructor(sid?: string, tkn?: string, options?: ClientOptions);
}

/// MonitorClient.js
declare class MonitorClient extends Client implements EventResource, AlertResource {
  events: EventResource;
  alerts: AlertResource;

  constructor(sid?: string, tkn?: string, options?: ClientOptions);
}

/// PricingClient.js
declare class PricingClient extends Client {
  voice: VoiceResource;
  phoneNumbers: PhoneNumbersResource;
  messaging: MessagingResource;

  constructor(sid?: string, tkn?: string, options?: ClientOptions);
}

/// RestClient.js
declare class RestClient extends Client implements AccountResource {
  accounts: AccountResource;

  // Messaging shorthand
  // TODO Pull in proper method signatures here!
  sendSms();
  sendMms();
  sendMessage();
  listSms();
  listMessages();
  getSms(messageSid: string, callback: (/* ??? */) => void): void;
  getMessage(messageSid: string, callback: (/* ??? */) => void): void;

  // Calls shorthand
  // TODO Pull in proper method signatures here!
  makeCall();
  listCalls();
  getCall(callSid: string, callback: (/* ??? */) => void): void;

  request(options: ClientRequestOptions, callback: RequestCallback): Q.Promise<any>;
}