// Type definitions for twilio 2.11
// Project: https://github.com/twilio/twilio-node
// Definitions by: nickiannone <https://github.com/nickiannone>
//                 Ashley Brener <https://github.com/ashleybrener>
//                 Anthony Messerschmidt <https://github.com/CatGuardian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import Express = require("express");
import Http = require("http");
import Q = require("q");

declare interface twilio {
  (sid?: string, tkn?: string, options?: twilio.ClientOptions): twilio.RestClient
}

declare function twilio(sid?: string, tkn?: string, options?: twilio.ClientOptions): twilio.RestClient;

declare namespace twilio {

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

  /// Random stuff
  export interface GrantPayload {}

  export interface Grant {
    toPayload(): GrantPayload;
  }

  export interface RequestCallback { (err: any, data: any): void; }

  export interface RestMethod {
    (callback: RequestCallback): Q.Promise<any>;
    (args: any, callback?: RequestCallback): Q.Promise<any>;
  }

  /// Resource stock interfaces
  export interface BaseMappedResource<T> {
    (resourceSid: string): T;
  }

  export interface Resource {
    get: RestMethod;
  }

  export interface DeletableResource extends Resource {
    delete: RestMethod;
  }

  export interface ListableResource extends Resource {
    list: RestMethod;
  }

  export interface MappedResource<T> extends Resource, BaseMappedResource<T> {}

  export interface PostableResource extends Resource {
    post: RestMethod;
  }

  export interface InstanceResource extends PostableResource, DeletableResource {
    update: RestMethod;
  }

  export interface CreatableMappedResource<T> extends MappedResource<T>, PostableResource {
    create: RestMethod;
  }

  export interface ListMappedResource<T> extends CreatableMappedResource<T>, ListableResource {}

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
    method?: string;
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
  export class MonitorClient extends Client {
    events: EventResource;
    alerts: AlertResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// PricingClient.js
  export class PricingClient extends Client {
    voice: PricingVoiceResource;
    phoneNumbers: PricingPhoneNumberResource;
    messaging: PricingMessagingResource;

    constructor(sid?: string, tkn?: string, options?: ClientOptions);
  }

  /// RestClient.js
  export class RestClient extends Client {
    constructor(sid?: string, tkn?: string, options?: ClientOptions);

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
    sendSms: RestMethod;
    sendMms: RestMethod;
    sendMessage: RestMethod;
    listSms: RestMethod;
    listMessages: RestMethod;
    getSms(messageSid: string, callback?: RequestCallback): Q.Promise<any>;
    getMessage(messageSid: string, callback?: RequestCallback): Q.Promise<any>;

    // Calls shorthand
    makeCall: RestMethod;
    listCalls: RestMethod;
    getCall(callSid: string, callback?: RequestCallback): Q.Promise<any>;

    // Overrides Client.request(...)
    request(options: ClientRequestOptions, callback?: RequestCallback): Q.Promise<any>;
  }

  /// TaskRouterCapability.js

  export interface Policy {
    url: string;
    method: string;
    query_filter?: any; // Map<string, FilterRequirement>, where FilterRequirement ::= Map<string, boolean>
    post_filter?: any; // Map<string, FilterRequirement>, where FilterRequirement ::= Map<string, boolean>
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

    addPolicy(url: string, method: string, allowed?: boolean, queryFilter?: any, postFilter?: any): void;
    allow(url: string, method: string, queryFilter?: any, postFilter?: any): void;
    deny(url: string, method: string, queryFilter?: any, postFilter?: any): void;
    generate(ttl: number): string;
  }

  /// TaskRouterClient.js
  export class TaskRouterClient extends Client {
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

  export interface TwimlMethod {
    (): Node;
    (arg1: TwimlCallback | string, arg2?: any): Node;
    (arg1: any, arg2?: TwimlCallback | string): Node;
  }

  export interface TwimlCallback { (node: Node): void; }

  export class Node implements NodeOptions {
    name: string;
    attributes: any;
    text: any;
    topLevel: boolean;
    legalNodes: Array<string>;

    constructor(config?: NodeOptions);

    // TwiML Verbs/Nouns:
    gather: TwimlMethod;
    say: TwimlMethod;
    play: TwimlMethod;
    pause: TwimlMethod;

    dial: TwimlMethod;
    number: TwimlMethod;
    client: TwimlMethod;
    conference: TwimlMethod;
    queue: TwimlMethod;
    sip: TwimlMethod;

    message: TwimlMethod;
    media: TwimlMethod;
    body: TwimlMethod;

    enqueue: TwimlMethod;
    task: TwimlMethod;

    record: TwimlMethod;
    sms: TwimlMethod;
    hangup: TwimlMethod;
    redirect: TwimlMethod;
    reject: TwimlMethod;
    leave: TwimlMethod;

    toString(): string;
  }

  export class TwimlResponse extends Node {}

  /// webhook.js
  export interface WebhookOptions {
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
  export interface MiddlewareFunction { (request: Http.IncomingMessage, response: Http.ServerResponse, next: Express.NextFunction): void; }

  export function webhook(authToken: string, options?: WebhookOptions): MiddlewareFunction;
  export function webhook(options?: WebhookOptions): MiddlewareFunction;

  export function validateRequest(authToken: string, twilioHeader: string, url: string, params?: any): boolean;
  export function validateExpressRequest(request: Express.Request, authToken: string, options?: WebhookExpressOptions): boolean;

  /// resources/Accounts.js
  export interface OutgoingCallerIdInstance extends InstanceResource {
    put: RestMethod;
  }
  export interface OutgoingCallerIdResource extends CreatableMappedResource<OutgoingCallerIdInstance> {}

  export interface SMSMessageInstance extends Resource {}
  export interface SMSMessageResource extends CreatableMappedResource<SMSMessageInstance> {}

  export interface SMSShortCodeInstance extends PostableResource {
    update: RestMethod;
  }
  export interface SMSShortCodeResource extends MappedResource<SMSShortCodeInstance> {}

  export interface SMSIntermediary {
    messages: SMSMessageResource;
    shortCodes: SMSShortCodeResource;
  }

  export interface ApplicationInstance extends InstanceResource {}
  export interface ApplicationResource extends CreatableMappedResource<ApplicationInstance> {}

  export interface ConnectAppInstance extends PostableResource {
    update: RestMethod;
  }
  export interface ConnectAppResource extends MappedResource<ConnectAppInstance> {}

  export interface AuthorizedConnectAppInstance extends Resource {}
  export interface AuthorizedConnectAppResource extends MappedResource<AuthorizedConnectAppInstance> {}

  export interface TokenInstance {}
  export interface TokenResource extends BaseMappedResource<TokenInstance> {
    post: RestMethod;
    create: RestMethod;
  }

  export interface TranscriptionInstance extends DeletableResource {}
  export interface TranscriptionResource extends MappedResource<TranscriptionInstance> {}

  export interface NotificationInstance extends DeletableResource {}
  export interface NotificationResource extends MappedResource<NotificationInstance> {}

  export interface UsageTriggerInstance extends InstanceResource {}
  export interface UsageTriggerResource extends CreatableMappedResource<UsageTriggerInstance> {}

  export interface UsageIntermediary {
    records: UsageRecordResource;
    triggers: UsageTriggerResource;
  }

  export interface SIPIntermediary {
    domains: DomainResource;
    ipAccessControlLists: IPAccessControlListResource;
    credentialLists: CredentialListResource;
  }

  export interface KeyInstance extends InstanceResource {}
  export interface KeyResource extends CreatableMappedResource<KeyInstance> {}

  export interface AccountInstance extends PostableResource {
    update: RestMethod;
    put: RestMethod;

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
  }

  export interface AccountResource extends AccountInstance, ListMappedResource<AccountInstance> {}

  /// resources/Addresses.js
  export interface DependentPhoneNumberResource extends ListableResource {}

  export interface AddressInstance extends PostableResource, DeletableResource {
    // Mixins
    dependentPhoneNumbers: DependentPhoneNumberResource;
  }
  export interface AddressResource extends ListMappedResource<AddressInstance> {}

  /// resources/AvailablePhoneNumbers.js
  export interface AvailablePhoneNumberResourceGroup extends ListableResource {
    search: RestMethod;
  }
  export interface AvailablePhoneNumberInstance {
    local: AvailablePhoneNumberResourceGroup;
    tollFree: AvailablePhoneNumberResourceGroup;
    mobile: AvailablePhoneNumberResourceGroup;
  }
  export interface AvailablePhoneNumberResource extends BaseMappedResource<AvailablePhoneNumberInstance> {}

  /// resources/Calls.js
  export interface CallRecordingResource extends ListableResource {}
  export interface CallNotificationResource extends ListableResource {}
  export interface CallFeedbackResource extends PostableResource, DeletableResource {
    create: RestMethod;
  }

  export interface CallInstance extends InstanceResource {
    recordings: CallRecordingResource;
    notifications: CallNotificationResource;
    feedback: CallFeedbackResource;
  }

  export interface CallFeedbackSummaryInstance extends DeletableResource {}
  export interface CallFeedbackSummaryResource extends BaseMappedResource<CallFeedbackSummaryInstance> {
    post: RestMethod;
    create: RestMethod;
  }
  export interface CallResource extends CreatableMappedResource<CallInstance>, ListableResource {
    feedbackSummary: CallFeedbackSummaryResource;
  }

  /// resources/Conferences.js
  export interface ConferenceParticipantInstance extends InstanceResource {
    kick: RestMethod;
  }
  export interface ConferenceParticipantResource extends MappedResource<ConferenceParticipantInstance>, ListableResource {}
  export interface ConferenceInstance extends Resource {
    participants: ConferenceParticipantResource;
  }
  export interface ConferenceResource extends MappedResource<ConferenceInstance>, ListableResource {}

  /// resources/IncomingPhoneNumbers.js
  export interface IncomingPhoneNumberResourceGroup extends PostableResource {
    create: RestMethod;
  }
  export interface IncomingPhoneNumberInstance extends InstanceResource {
    put: RestMethod;
  }
  export interface IncomingPhoneNumberResource extends CreatableMappedResource<IncomingPhoneNumberInstance> {
    local: IncomingPhoneNumberResourceGroup;
    tollFree: IncomingPhoneNumberResourceGroup;
    mobile: IncomingPhoneNumberResourceGroup;
  }

  /// resources/Messages.js
  export interface MessageMediaInstance extends DeletableResource {}
  export interface MessageMediaResource extends MappedResource<MessageMediaInstance>, ListableResource {}
  export interface MessageInstance extends PostableResource, DeletableResource {
    media: MessageMediaResource;
  }
  export interface MessageResource extends ListMappedResource<MessageInstance> {}

  /// resources/Queues.js
  export interface QueueMemberInstance extends PostableResource {
    update: RestMethod;
  }
  export interface QueueMemberResource extends MappedResource<QueueMemberInstance> {
    front: QueueMemberInstance;
  }

  export interface QueueInstance extends InstanceResource {
    members: QueueMemberResource;
  }
  export interface QueueResource extends CreatableMappedResource<QueueInstance> {}

  /// resources/Recordings.js
  export interface RecordingTranscriptionResource extends ListableResource {}
  export interface RecordingInstance extends ListableResource, DeletableResource {
    transcriptions: RecordingTranscriptionResource;
  }
  export interface RecordingResource extends MappedResource<RecordingInstance>, ListableResource {}

  /// resources/UsageRecords.js
  export interface UsageRecordInstance extends Resource {}
  export interface UsageRecordRange extends ListableResource {}

  export interface UsageRecordResource extends MappedResource<UsageRecordInstance> {
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
  export interface CredentialInstance extends InstanceResource {}
  export interface CredentialResource extends ListMappedResource<CredentialInstance> {}

  /// resources/ip_messaging/Services.js
  export interface ServiceUserInstance extends InstanceResource {}
  export interface ServiceUserResource extends ListMappedResource<ServiceUserInstance> {}
  export interface ServiceRoleInstance extends Resource {}
  export interface ServiceRoleResource extends MappedResource<ServiceRoleInstance>, ListableResource {}

  export interface ServiceChannelMessageInstance extends InstanceResource {}
  export interface ServiceChannelMessageResource extends ListMappedResource<ServiceChannelMessageInstance> {}

  export interface ServiceChannelMemberInstance extends InstanceResource {}
  export interface ServiceChannelMemberResource extends ListMappedResource<ServiceChannelMemberInstance> {}

  export interface ServiceChannelInstance extends InstanceResource {
    messages: ServiceChannelMessageResource;
    members: ServiceChannelMemberResource;
  }
  export interface ServiceChannelResource extends ListMappedResource<ServiceChannelInstance> {}

  export interface ServiceInstance extends InstanceResource {
    users: ServiceUserResource;
    roles: ServiceRoleResource;
    channels: ServiceChannelResource;
  }
  export interface ServiceResource extends ListMappedResource<ServiceInstance> {}

  /// resources/lookups/PhoneNumbers.js
  export interface PhoneNumberInstance extends Resource {}
  export interface PhoneNumberResource extends BaseMappedResource<PhoneNumberInstance> {}

  /// resources/monitor/Alerts.js
  export interface AlertInstance extends Resource {}
  export interface AlertResource extends MappedResource<AlertInstance>, ListableResource {}

  /// resources/monitor/Events.js
  export interface EventInstance extends Resource {}
  export interface EventResource extends MappedResource<EventInstance>, ListableResource {}

  /// resources/pricing/Messaging.js
  export interface CountryInstance extends Resource {}
  export interface CountryResource extends MappedResource<CountryInstance>, ListableResource {}

  export interface PricingMessagingResource {
    countries: CountryResource;
  }

  /// resources/pricing/PhoneNumbers.js
  export interface PricingPhoneNumberResource {
    countries: CountryResource;
  }

  /// resources/pricing/Voice.js
  export interface NumberInstance extends Resource {}
  export interface NumberResource extends MappedResource<NumberInstance>, ListableResource {}

  export interface PricingVoiceResource {
    countries: CountryResource;
    numbers: NumberResource;
  }

  /// resources/sip/CredentialLists.js
  export interface CredentialListInstance extends InstanceResource {
    credentials: CredentialResource;
  }
  export interface CredentialListResource extends ListMappedResource<CredentialListInstance> {}

  /// resources/sip/Domains.js
  export interface IPAccessControlListMappingInstance extends DeletableResource {}
  export interface IPAccessControlListMappingResource extends ListMappedResource<IPAccessControlListMappingInstance> {}

  export interface CredentialListMappingInstance extends DeletableResource {}
  export interface CredentialListMappingResource extends ListMappedResource<CredentialListMappingInstance> {}

  export interface DomainInstance extends InstanceResource {
    ipAccessControlListMappings: IPAccessControlListMappingResource;
    credentialListMappings: CredentialListMappingResource;
  }
  export interface DomainResource extends ListMappedResource<DomainInstance> {}

  /// resources/sip/IpAccessControlLists.js
  export interface IPAddressInstance extends InstanceResource {}
  export interface IPAddressResource extends ListMappedResource<IPAddressInstance> {}

  export interface IPAccessControlListInstance extends InstanceResource {
    ipAddresses: IPAddressResource;
  }
  export interface IPAccessControlListResource extends ListMappedResource<IPAccessControlListInstance> {}

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
  export interface WorkspaceActivityInstance extends InstanceResource {}
  export interface WorkspaceActivityResource extends ListMappedResource<WorkspaceActivityInstance> {}

  export interface WorkspaceEventInstance extends Resource {}
  export interface WorkspaceEventResource extends MappedResource<WorkspaceEventInstance>, ListableResource {}

  export interface WorkspaceTaskReservationInstance extends PostableResource {
    update: RestMethod;
  }
  export interface WorkspaceTaskReservationResource extends MappedResource<WorkspaceTaskReservationInstance>, ListableResource {}

  export interface WorkspaceTaskInstance extends InstanceResource {
    reservations: WorkspaceTaskReservationResource;
  }
  export interface WorkspaceTaskResource extends ListMappedResource<WorkspaceTaskInstance> {}

  export interface WorkspaceInstanceStatisticResource extends Resource {}
  export interface WorkspaceStatisticResource extends ListableResource {}

  export interface WorkspaceTaskQueueInstance extends InstanceResource {
    statistics: WorkspaceInstanceStatisticResource;
  }
  export interface WorkspaceTaskQueueResource extends ListMappedResource<WorkspaceTaskQueueInstance> {
    statistics: WorkspaceStatisticResource;
  }

  export interface WorkspaceWorkerReservationInstance extends PostableResource {
    update: RestMethod;
  }
  export interface WorkspaceWorkerReservationResource extends MappedResource<WorkspaceWorkerReservationInstance>, ListableResource {}

  export interface WorkspaceWorkerInstance extends InstanceResource {
    statistics: WorkspaceInstanceStatisticResource;
    reservations: WorkspaceWorkerReservationResource;
  }
  export interface WorkspaceWorkerResource extends ListMappedResource<WorkspaceWorkerInstance> {
    statistics: WorkspaceStatisticResource;
  }

  export interface WorkspaceWorkflowInstance extends InstanceResource {
    statistics: WorkspaceInstanceStatisticResource;
  }
  export interface WorkspaceWorkflowResource extends ListMappedResource<WorkspaceWorkflowInstance> {
    statistics: WorkspaceStatisticResource;
  }

  export interface WorkspaceInstance extends InstanceResource {
    activities: WorkspaceActivityResource;
    events: WorkspaceEventResource;
    tasks: WorkspaceTaskResource;
    taskQueues: WorkspaceTaskQueueResource;
    workers: WorkspaceWorkerResource;
    workflows: WorkspaceWorkflowResource;

    statistics: WorkspaceInstanceStatisticResource;
  }
  export interface WorkspaceResource extends CreatableMappedResource<WorkspaceInstance> {}

  /// resources/trunking/Trunks.js
  export interface OriginationURLInstance extends InstanceResource {}
  export interface OriginationURLResource extends ListMappedResource<OriginationURLInstance> {}

  export interface TrunkInstance extends InstanceResource {
    ipAccessControlLists: IPAccessControlListResource;
    credentialLists: CredentialListResource;
    phoneNumbers:  PhoneNumberResource;
    originationUrls: OriginationURLResource;
  }
  export interface TrunkResource extends ListMappedResource<TrunkInstance> {}
}

export = twilio;
