/// <reference path="../express/express.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../Q/Q.d.ts" />

import * as Http from 'http';

/// index.js
/*
export class twilio extends RestClient {
  constructor(sid?: string, tkn?: string, options?: ClientOptions);
}
*/

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
  // TwimlResponse (TODO main export is generator function)
  // webhook

  // Methods:
  //===============================
  // validateRequest
  // validateExpressRequest



  /// ???
  export interface GrantPayload {}

  export interface Grant {
    toPayload(): GrantPayload;
  }

  export interface RequestCallback { (err: any, data: any, response: Http.ClientResponse): void; }
  export interface BaseRequestCallback { (err: any, data: any): void; }

  export interface RestMethod { (args: any | BaseRequestCallback, callback?: RequestCallback): Q.Promise<any>; }

  /// AccessToken.js
  export interface IpMessagingGrantOptions {
    serviceSid: string;
    endpointId: string;
    deploymentRoleSid: string;
    pushCredentialSid: string;
  }

  export interface IpMessagingGrantPayload extends GrantPayload {
    service_sid: string;
    endpoint_id: string;
    deployment_role_sid: string;
    push_credential_sid: string;
  }

  export class IpMessagingGrant implements Grant {
    serviceSid: string;
    endpointId: string;
    deploymentRoleSid: string;
    pushCredentialSid: string;
    key: string;

    constructor(options?: IpMessagingGrantOptions);

    toPayload(): IpMessagingGrantPayload;
  }

  export interface ConversationsGrantOptions {
    configurationProfileSid: string;
  }

  export interface ConversationsGrantPayload extends GrantPayload {
    configuration_profile_sid: string;
  }

  export class ConversationsGrant implements Grant {
    configurationProfileSid: string;

    constructor(options?: ConversationsGrantOptions);

    toPayload(): ConversationsGrantPayload;
  }

  export interface AccessTokenOptions {
    ttl: number;
    identity: string;
    nbf: number;
  }

  export class AccessToken {
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
  export class Capability {
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
  export interface ClientOptions {
    host?: string;
    apiVersion?: string;
    timeout?: number;
  }

  export interface ClientRequestOptions {
    url: string;
    form?: any;
  }

  export class Client {
    accountSid: string;
    authToken: string;
    host: string;
    apiVersion: string;
    timeout: number;

    constructor(sid?: string, tkn?: string, host?: string, api_version?: string, timeout?: number);

    getBaseUrl(): string;
    request(options: ClientRequestOptions, callback?: RequestCallback): Q.Promise<any>;
  }

  /// IpMessagingClient.js
  export class IpMessagingClient extends Client {
    services: ServiceResource;
    credentials: CredentialResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// LookupsClient.js
  export class LookupsClient extends Client {
    phoneNumbers: PhoneNumberResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// MonitorClient.js
  export class MonitorClient extends Client implements EventResource, AlertResource {
    events: EventResource;
    alerts: AlertResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// PricingClient.js
  export class PricingClient extends Client {
    voice: VoiceResource;
    phoneNumbers: PhoneNumberResource;
    messaging: MessagingResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// RestClient.js
  export class RestClient extends Client implements AccountResource {
    accounts: AccountResource;

    // Imported from AccountResource
    availablePhoneNumbers: AvailablePhoneNumberResource;
    outgoingCallerIds: OutgoingCallerIdResource;
    incomingPhoneNumbers: IncomingPhoneNumberResource;
    messages: MessageResource;
    sms: SMSIntermediary;
    applications: ApplicationResource;
    connectApps: ConnectAppResource;
    authorizedConnectApps: AuthorizedConnectAppResource;
    calls: CallResource;
    conferences: ConferenceResource;
    queues: QueueResource;
    recordings: RecordingResource;
    tokens: TokenResource;
    transcriptions: TranscriptionResource;
    notifications: NotificationResource;
    usage: UsageIntermediary;
    sip: SIPIntermediary;
    addresses: AddressResource;
    keys: KeyResource;

    // Mixed-in Methods
    put: RestMethod;
    post: RestMethod;
    get: RestMethod;
    update: RestMethod;
    list: RestMethod;

    // Messaging shorthand
    // TODO Pull in proper method signatures here!
    sendSms();
    sendMms();
    sendMessage();
    listSms();
    listMessages();
    getSms(messageSid: string, callback?: RequestCallback): Q.Promise<any>;
    getMessage(messageSid: string, callback?: RequestCallback): Q.Promise<any>;

    // Calls shorthand
    // TODO Pull in proper method signatures here!
    makeCall();
    listCalls();
    getCall(callSid: string, callback?: RequestCallback): Q.Promise<any>;

    // Overrides Client.request(...)
    request(options: ClientRequestOptions, callback?: RequestCallback): Q.Promise<any>;
  }

  /// TaskRouterCapability.js
  export interface QueryFilter {
    // TODO Populate me!
  }

  export interface PostFilter {
    // TODO Populate me!
  }

  export interface Policy {
    url: string;
    method: string;
    query_filter?: QueryFilter;
    post_filter?: PostFilter;
    allow: boolean;
  }

  export class TaskRouterCapability {
    accountSid: string;
    authToken: string;
    policies: Array<Policy>;
    workspaceSid: string;
    channelId: string;

    private _baseUrl: string;
    private _resourceUrl: string;

    constructor(accountSid: string, authToken: string, workspaceSid: string, channelId: string);

    protected _setupResource(): void;
    private _validateJWT(): void;
    private _generate(ttl: number, extraAttributes: any): string;

    allowFetchSubresources(): void;
    allowUpdates(): void;
    allowUpdatesSubresources(): void;
    allowDelete(): void;
    allowDeleteSubresources(): void;
    allowWorkerActivityUpdates(): void;
    allowWorkerFetchAttributes(): void;
    allowTaskReservationUpdates(): void;
    
    addPolicy(url: string, method: string, allowed?: boolean, queryFilter?: QueryFilter, postFilter?: PostFilter): void;
    allow(url: string, method: string, queryFilter?: QueryFilter, postFilter?: PostFilter): void;
    deny(url: string, method: string, queryFilter?: QueryFilter, postFilter?: PostFilter): void;
    generate(ttl: number): string;
  }

  /// TaskRouterClient.js
  export class TaskRouterClient extends Client implements WorkspaceResource {
    workspaces: WorkspaceResource;
    workspace: WorkspaceResource;

    constructor(sid?: string, tkn?: string, workspaceSid?: string, options?: ClientOptions);
  }

  /// TaskRouterTaskQueueCapability.js
  export class TaskRouterTaskQueueCapability extends TaskRouterCapability {
    constructor(accountSid: string, authToken: string, workspaceSid: string, taskQueueSid: string);

    protected _setupResource(): void;
  }

  /// TaskRouterWorkerCapability.js
  export class TaskRouterWorkerCapability extends TaskRouterCapability {
    reservationsUrl: string;
    activityUrl: string;
    workerReservationsUrl: string;

    constructor(accountSid: string, authToken: string, workspaceSid: string, workerSid: string);

    protected _setupResource(): void;

    allowActivityUpdates(): void;
    allowReservationUpdates(): void;
  }

  /// TaskRouterWorkspaceCapability.js
  export class TaskRouterWorkspaceCapability extends TaskRouterCapability {
    constructor(accountSid: string, authToken: string, workspaceSid: string);

    protected _setupResource(): void;
  }

  /// TrunkingClient.js
  export class TrunkingClient extends Client {
    trunks: TrunkResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// TwimlResponse.js
  // ???? - Someone else should look at this thing to make sure it's correct
  export interface NodeOptions {
    name: string;
    attributes?: any;
    text?: string;
    topLevel?: boolean;
    legalNodes: Array<string>;
  }

  export class Node implements NodeOptions {
    name: string;
    attributes: any;
    text: any;
    topLevel: boolean;
    legalNodes: Array<string>;

    constructor(config?: NodeOptions);

    toString(): string;
  }

  export function TwimlResponse(): Node;

  /// webhook.js
  export interface webhookOptions {
    validate?: boolean;
    includeHelpers?: boolean;
    host?: string;
    protocol?: string;
  }

  export interface WebhookExpressOptions {
    // The full URL (with query string) you used to configure the webhook with Twilio - overrides host/protocol options
    url?: string;
    
    // manually specify the host name used by Twilio in a number's webhook config
    host?: string;

    // manually specify the protocol used by Twilio in a number's webhook config
    protocol?: string;
  }

  // For interop with node middleware chains
  export interface MiddlewareFunction { (request: Http.ClientRequest, response: Http.ClientResponse, next: MiddlewareFunction): void; }

  export function webhook(options?: string | webhookOptions): MiddlewareFunction;

  export function validateRequest(authToken: string, twilioHeader: string, url: string, params?: any): boolean;
  export function validateExpressRequest(request: Express.Request, authToken: string, options?: WebhookExpressOptions): boolean;

  /// resources/Accounts.js
  export interface OutgoingCallerIdInstance {
    get: RestMethod;
    post: RestMethod;
    put: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface OutgoingCallerIdResource {
    (resourceSid: string): OutgoingCallerIdInstance;
    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  export interface SMSMessageInstance {
    get: RestMethod;
  }

  export interface SMSMessageResource {
    (resourceSid: string): SMSMessageInstance;
    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  export interface SMSShortCodeInstance {
    get: RestMethod;
    post: RestMethod;
    update: RestMethod;
  }

  export interface SMSShortCodeResource {
    get: RestMethod;
  }

  export interface SMSIntermediary {
    messages: SMSMessageResource;
    shortCodes: SMSShortCodeResource;
  }

  export interface ApplicationInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface ApplicationResource {
    (resourceSid: string): ApplicationInstance;
    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  export interface ConnectAppInstance {
    get: RestMethod;
    post: RestMethod;
    update: RestMethod;
  }

  export interface ConnectAppResource {
    (resourceSid: string): ConnectAppInstance;
    get: RestMethod;
  }

  export interface AuthorizedConnectAppInstance {
    get: RestMethod;
  }

  export interface AuthorizedConnectAppResource {
    (resourceSid: string): AuthorizedConnectAppInstance;
    get: RestMethod;
  }

  export interface TokenInstance {}

  export interface TokenResource {
    (resourceSid: string): TokenInstance;
    post: RestMethod;
    create: RestMethod;
  }

  export interface TranscriptionInstance {
    get: RestMethod;
    delete: RestMethod;
  }

  export interface TranscriptionResource {
    (resourceSid: string): TranscriptionInstance;
    get: RestMethod;
  }

  export interface NotificationInstance {
    get: RestMethod;
    delete: RestMethod;
  }

  export interface NotificationResource {
    (resourceSid: string): NotificationInstance;
    get: RestMethod;
  }

  export interface UsageTriggerInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface UsageTriggerResource {
    (resourceSid: string): UsageTriggerInstance;
    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  export interface UsageIntermediary {
    records: UsageRecordResource;
    triggers: UsageTriggerResource;
  }

  export interface SIPIntermediary {
    domains: DomainResource;
    ipAccessControlLists: IPAccessControlListResource;
    credentialLists: CredentialListResource;
  }

  export interface KeyInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface KeyResource {
    (resourceSid: string): KeyInstance;
    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  export interface AccountResource {
    (accountSid: string): AccountResource;

    // Mixed-in resources
    availablePhoneNumbers: AvailablePhoneNumberResource;
    outgoingCallerIds: OutgoingCallerIdResource;
    incomingPhoneNumbers: IncomingPhoneNumberResource;
    messages: MessageResource;
    sms: SMSIntermediary;
    applications: ApplicationResource;
    connectApps: ConnectAppResource;
    authorizedConnectApps: AuthorizedConnectAppResource;
    calls: CallResource;
    conferences: ConferenceResource;
    queues: QueueResource;
    recordings: RecordingResource;
    tokens: TokenResource;
    transcriptions: TranscriptionResource;
    notifications: NotificationResource;
    usage: UsageIntermediary;
    sip: SIPIntermediary;
    addresses: AddressResource;
    keys: KeyResource;

    // Mixed-in Methods
    put: RestMethod;
    post: RestMethod;
    get: RestMethod;
    update: RestMethod;
    list: RestMethod;
  }

  /// resources/Addresses.js
  export interface DependentPhoneNumberResource {
    get: RestMethod;
    list: RestMethod;
  }

  export interface AddressInstance {
    // Mixins
    dependentPhoneNumbers: DependentPhoneNumberResource;

    // Rest Methods
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
  }

  export interface AddressResource {
    (resourceSid: string): AddressInstance;
    get: RestMethod;
    list: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  /// resources/AvailablePhoneNumbers.js
  export interface AvailablePhoneNumberResourceGroup {
    get: RestMethod;
    list: RestMethod;
    search: RestMethod;
  }
  
  export interface AvailablePhoneNumberInstance {
    local: AvailablePhoneNumberResourceGroup;
    tollFree: AvailablePhoneNumberResourceGroup;
    mobile: AvailablePhoneNumberResourceGroup;
  }

  export interface AvailablePhoneNumberResource {
    (isoCode: string): AvailablePhoneNumberInstance;
  }

  /// resources/Calls.js
  export interface CallRecordingResource {
    get: RestMethod;
    list: RestMethod;
  }

  export interface CallNotificationResource {
    get: RestMethod;
    list: RestMethod;
  }

  export interface CallFeedbackResource {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    create: RestMethod;
  }

  export interface CallInstance {
    recordings: CallRecordingResource;
    notifications: CallNotificationResource;
    feedback: CallFeedbackResource;

    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface CallFeedbackSummaryInstance {
    get: RestMethod;
    delete: RestMethod;
  }

  export interface CallFeedbackSummaryResource {
    (resourceSid: string): CallFeedbackSummaryInstance;
    post: RestMethod;
    create: RestMethod;
  }

  export interface CallResource {
    (resourceSid: string): CallInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;

    feedbackSummary: CallFeedbackSummaryResource;
  }

  /// resources/Conferences.js
  export interface ConferenceParticipantInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
    kick: RestMethod;
  }

  export interface ConferenceParticipantResource {
    (resourceSid: string): ConferenceParticipantInstance;

    get: RestMethod;
    list: RestMethod;
  }

  export interface ConferenceInstance {
    get: RestMethod;

    participants: ConferenceParticipantResource;
  }

  export interface ConferenceResource {
    (resourceSid: string): ConferenceInstance;

    get: RestMethod;
    list: RestMethod;
  }

  /// resources/IncomingPhoneNumbers.js
  export interface IncomingPhoneNumberResourceGroup {
    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  export interface IncomingPhoneNumberInstance {
    get: RestMethod;
    post: RestMethod;
    put: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface IncomingPhoneNumberResource {
    (resourceSid: string): IncomingPhoneNumberInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;

    local: IncomingPhoneNumberResourceGroup;
    tollFree: IncomingPhoneNumberResourceGroup;
    mobile: IncomingPhoneNumberResourceGroup;
  }

  /// resources/Messages.js
  export interface MessageMediaInstance {
    get: RestMethod;
    delete: RestMethod;
  }

  export interface MessageMediaResource {
    (resourceSid: string): MessageMediaInstance;

    get: RestMethod;
    list: RestMethod;
  }

  export interface MessageInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;

    media: MessageMediaResource;
  }

  export interface MessageResource {
    (resourceSid: string): MessageInstance;

    get: RestMethod;
    list: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  /// resources/Queues.js
  export interface QueueMemberInstance {
    get: RestMethod;
    post: RestMethod;
    update: RestMethod;
  }

  export interface QueueMemberResource {
    (resourceSid: string): QueueMemberInstance;

    get: RestMethod;

    front: QueueMemberInstance;
  }

  export interface QueueInstance {
    members: QueueMemberResource;

    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface QueueResource {
    (resourceSid: string): QueueInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
  }

  /// resources/Recordings.js
  export interface RecordingTranscriptionResource {
    get: RestMethod;
    list: RestMethod;
  }

  export interface RecordingInstance {
    get: RestMethod;
    list: RestMethod;
    delete: RestMethod;

    transcriptions: RecordingTranscriptionResource;
  }

  export interface RecordingResource {
    (resourceSid: string): RecordingInstance;

    get: RestMethod;
    list: RestMethod;
  }

  /// resources/UsageRecords.js
  export interface UsageRecordInstance {
    get: RestMethod;
  }

  export interface UsageRecordRange {
    get: RestMethod;
    list: RestMethod;
  }

  export interface UsageRecordResource {
    (resourceSid: string): UsageRecordInstance;

    get: RestMethod;

    daily: UsageRecordRange;
    monthly: UsageRecordRange;
    yearly: UsageRecordRange;
    allTime: UsageRecordRange;
    today: UsageRecordRange;
    yesterday: UsageRecordRange;
    thisMonth: UsageRecordRange;
    lastMonth: UsageRecordRange;
  }

  /// resources/ip_messaging/Credentials.js
  export interface CredentialInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface CredentialResource {
    (resourceSid: string): CredentialInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  /// resources/ip_messaging/Services.js
  export interface ServiceUserInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface ServiceUserResource {
    (resourceSid: string): ServiceUserInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  export interface ServiceRoleInstance {
    get: RestMethod;
  }

  export interface ServiceRoleResource {
    (resourceSid: string): ServiceRoleInstance;

    get: RestMethod;
    list: RestMethod;
  }

  export interface ServiceChannelMessageInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface ServiceChannelMessageResource {
    (resourceSid: string): ServiceChannelMessageInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  export interface ServiceChannelMemberInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface ServiceChannelMemberResource {
    (resourceSid: string): ServiceChannelMemberInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  export interface ServiceChannelInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;

    messages: ServiceChannelMessageResource;
    members: ServiceChannelMemberResource;
  }

  export interface ServiceChannelResource {
    (resourceSid: string): ServiceChannelInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  export interface ServiceInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;

    users: ServiceUserResource;
    roles: ServiceRoleResource;
    channels: ServiceChannelResource;
  }

  export interface ServiceResource {
    (resourceSid: string): ServiceInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  /// resources/lookups/PhoneNumbers.js
  export interface PhoneNumberInstance {
    get: RestMethod;
  }

  export interface PhoneNumberResource {
    (resourceSid: string): PhoneNumberInstance;
  }

  /// resources/monitor/Alerts.js
  export interface AlertInstance {
    get: RestMethod;
  }

  export interface AlertResource {
    (resourceSid: string): AlertInstance;

    get: RestMethod;
    list: RestMethod;
  }

  /// resources/monitor/Events.js
  export interface EventInstance {
    get: RestMethod;
  }

  export interface EventResource {
    (resourceSid: string): EventInstance;

    get: RestMethod;
    list: RestMethod;
  }

  /// resources/pricing/Messaging.js
  export interface CountryInstance {
    get: RestMethod;
  }

  export interface CountryResource {
    (resourceSid: string): CountryInstance;

    get: RestMethod;
    list: RestMethod;
  }

  export interface MessagingResource {
    countries: CountryResource;
  }

  /// resources/pricing/PhoneNumbers.js
  export interface PhoneNumberResource {
    countries: CountryResource;
  }

  /// resources/pricing/Voice.js
  export interface NumberInstance {
    get: RestMethod;
  }

  export interface NumberResource {
    (resourceSid: string): NumberInstance;

    get: RestMethod;
    list: RestMethod;
  }

  export interface VoiceResource {
    countries: CountryResource;
    numbers: NumberResource;
  }

  /// resources/sip/CredentialLists.js
  export interface CredentialListInstance {
    credentials: CredentialResource;
    
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface CredentialListResource {
    (resourceSid: string): CredentialListInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  /// resources/sip/Domains.js
  export interface IPAccessControlListMappingInstance {
    get: RestMethod;
    delete: RestMethod;
  }

  export interface IPAccessControlListMappingResource {
    (resourceSid: string): IPAccessControlListMappingInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  export interface CredentialListMappingInstance {
    get: RestMethod;
    delete: RestMethod;
  }

  export interface CredentialListMappingResource {
    (resourceSid: string): CredentialListMappingInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  export interface DomainInstance {
    ipAccessControlListMappings: IPAccessControlListMappingResource;
    credentialListMappings: CredentialListMappingResource;

    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface DomainResource {
    (resourceSid: string): DomainInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  /// resources/sip/IpAccessControlLists.js
  export interface IPAddressInstance {
    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface IPAddressResource {
    (resourceSid: string): IPAddressInstance;

    get: RestMethod;
    post: RestMethod;
    list: RestMethod;
    create: RestMethod;
  }

  export interface IPAccessControlListInstance {
    ipAddresses: IPAddressResource;

    get: RestMethod;
    post: RestMethod;
    delete: RestMethod;
    update: RestMethod;
  }

  export interface IPAccessControlListResource {
    (resourceSid: string): IPAccessControlListInstance;

    get: RestMethod;
    post: RestMethod;
    create: RestMethod;
    list: RestMethod;
  }

  /// resources/task_router/WorkflowBuilder.js
  export interface WorkflowRuleTargetOptions {
    queue: string;
    expression?: string;
    priority?: number;
    timeout?: number;
  }

  export class WorkflowRuleTarget {
    queue: string;
    expression: string;
    priority: number;
    timeout: number;

    constructor(options?: WorkflowRuleTargetOptions);
  }

  export interface WorkflowRuleOptions {
    expression: string;
    targets: Array<WorkflowRuleTargetOptions>;
    // Don't ask me why, but all of these are supported options.
    friendly_name?: string;
    friendlyName?: string;
    filter_friendly_name?: string;
  }

  export class WorkflowRule {
    friendly_name: string;
    expression: string;
    targets: Array<WorkflowRuleTarget>;
    friendlyName: string; // Defined property mapped to friendly_name.

    constructor(options?: WorkflowRuleOptions);
  }

  export interface TaskRoutingConfigurationOptions {
    filters: Array<WorkflowRuleOptions>;
    default_filter?: WorkflowRuleOptions;
    defaultFilter?: WorkflowRuleOptions;
  }

  export class TaskRoutingConfiguration {
    filters: Array<WorkflowRule>;
    default_filter: WorkflowRuleOptions;
    defaultFilter: WorkflowRuleOptions; // Defined property mapped to default_filter.

    constructor(options?: TaskRoutingConfigurationOptions);
  }

  export interface WorkflowConfigurationOptions {
    task_routing?: TaskRoutingConfigurationOptions;
    taskRouting?: TaskRoutingConfigurationOptions;
  }

  export class WorkflowConfiguration {
    task_routing: TaskRoutingConfiguration;
    taskRouting: TaskRoutingConfiguration; // Defined property mapped to task_routing.

    constructor(options?: WorkflowConfigurationOptions);

    static fromJSON(json: string): WorkflowConfiguration;
    toJSON(): string;
  }

  /// resources/task_router/Workspaces.js
  

}