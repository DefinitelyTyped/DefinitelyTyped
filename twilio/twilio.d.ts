// Type definitions for twilio
// Project: https://github.com/twilio/twilio-node
// Definitions by: nickiannone <https://github.com/nickiannone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../q/Q.d.ts" />

import * as express from 'express';
import * as Http from 'http';

import q = require('q');

export interface twilio {
  (sid?: string, tkn?: string, options?: twilio.ClientOptions): twilio.RestClient;
}

export module twilio {

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

  export interface RequestCallback { (err: any, data: any, response: Http.ClientResponse): void; }
  export interface BaseRequestCallback { (err: any, data: any): void; }

  export interface RestMethod { (args: any | BaseRequestCallback, callback?: RequestCallback): Q.Promise<any>; }

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

  export interface TwimlMethod { (arg1: any | string | TwimlCallback, arg2?: any | string | TwimlCallback): Node }
  
  export interface TwimlCallback { (node?: Node): void; }

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
  export interface OutgoingCallerIdInstance extends InstanceResource {
    put: RestMethod;
  }
  export type OutgoingCallerIdResource = CreatableMappedResource<OutgoingCallerIdInstance>;

  export type SMSMessageInstance = Resource;
  export type SMSMessageResource = CreatableMappedResource<SMSMessageInstance>;

  export interface SMSShortCodeInstance extends PostableResource {
    update: RestMethod;
  }
  export type SMSShortCodeResource = MappedResource<SMSShortCodeInstance>;

  export interface SMSIntermediary {
    messages: SMSMessageResource;
    shortCodes: SMSShortCodeResource;
  }

  export type ApplicationInstance = InstanceResource;
  export type ApplicationResource = CreatableMappedResource<ApplicationInstance>;

  export interface ConnectAppInstance extends PostableResource {
    update: RestMethod;
  }
  export type ConnectAppResource = MappedResource<ConnectAppInstance>;

  export type AuthorizedConnectAppInstance = Resource;
  export type AuthorizedConnectAppResource = MappedResource<AuthorizedConnectAppInstance>;

  export interface TokenInstance {}
  export interface TokenResource extends BaseMappedResource<TokenInstance> {
    post: RestMethod;
    create: RestMethod;
  }

  export type TranscriptionInstance = DeletableResource;
  export type TranscriptionResource = MappedResource<TranscriptionInstance>;

  export type NotificationInstance = DeletableResource;
  export type NotificationResource = MappedResource<NotificationInstance>;

  export type UsageTriggerInstance = InstanceResource;
  export type UsageTriggerResource = CreatableMappedResource<UsageTriggerInstance>;

  export interface UsageIntermediary {
    records: UsageRecordResource;
    triggers: UsageTriggerResource;
  }

  export interface SIPIntermediary {
    domains: DomainResource;
    ipAccessControlLists: IPAccessControlListResource;
    credentialLists: CredentialListResource;
  }

  export type KeyInstance = InstanceResource;
  export type KeyResource = CreatableMappedResource<KeyInstance>;

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
  export type DependentPhoneNumberResource = ListableResource;

  export interface AddressInstance extends PostableResource, DeletableResource {
    // Mixins
    dependentPhoneNumbers: DependentPhoneNumberResource;
  }
  export type AddressResource = ListMappedResource<AddressInstance>;

  /// resources/AvailablePhoneNumbers.js
  export interface AvailablePhoneNumberResourceGroup extends ListableResource {
    search: RestMethod;
  }
  export interface AvailablePhoneNumberInstance {
    local: AvailablePhoneNumberResourceGroup;
    tollFree: AvailablePhoneNumberResourceGroup;
    mobile: AvailablePhoneNumberResourceGroup;
  }
  export type AvailablePhoneNumberResource = BaseMappedResource<AvailablePhoneNumberInstance>;

  /// resources/Calls.js
  export type CallRecordingResource = ListableResource;
  export type CallNotificationResource = ListableResource;
  export interface CallFeedbackResource extends PostableResource, DeletableResource {
    create: RestMethod;
  }

  export interface CallInstance extends InstanceResource {
    recordings: CallRecordingResource;
    notifications: CallNotificationResource;
    feedback: CallFeedbackResource;
  }

  export type CallFeedbackSummaryInstance = DeletableResource;
  export interface CallFeedbackSummaryResource extends BaseMappedResource<CallFeedbackSummaryInstance> {
    post: RestMethod;
    create: RestMethod;
  }
  export interface CallResource extends CreatableMappedResource<CallInstance> {
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
  export type MessageMediaInstance = DeletableResource;
  export interface MessageMediaResource extends MappedResource<MessageMediaInstance>, ListableResource {}
  export interface MessageInstance extends PostableResource, DeletableResource {
    media: MessageMediaResource;
  }
  export type MessageResource = ListMappedResource<MessageInstance>;

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
  export type QueueResource = CreatableMappedResource<QueueInstance>;

  /// resources/Recordings.js
  export type RecordingTranscriptionResource = ListableResource;
  export interface RecordingInstance extends ListableResource, DeletableResource {
    transcriptions: RecordingTranscriptionResource;
  }
  export interface RecordingResource extends MappedResource<RecordingInstance>, ListableResource {}

  /// resources/UsageRecords.js
  export type UsageRecordInstance = Resource;
  export type UsageRecordRange = ListableResource;

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
  export type CredentialInstance = InstanceResource;
  export type CredentialResource = ListMappedResource<CredentialInstance>;

  /// resources/ip_messaging/Services.js
  export type ServiceUserInstance = InstanceResource;
  export type ServiceUserResource = ListMappedResource<ServiceUserInstance>;
  export type ServiceRoleInstance = Resource;
  export interface ServiceRoleResource extends MappedResource<ServiceRoleInstance>, ListableResource {}

  export type ServiceChannelMessageInstance = InstanceResource;
  export type ServiceChannelMessageResource = ListMappedResource<ServiceChannelMessageInstance>;

  export type ServiceChannelMemberInstance = InstanceResource;
  export type ServiceChannelMemberResource = ListMappedResource<ServiceChannelMemberInstance>;

  export interface ServiceChannelInstance extends InstanceResource {
    messages: ServiceChannelMessageResource;
    members: ServiceChannelMemberResource;
  }
  export type ServiceChannelResource = ListMappedResource<ServiceChannelInstance>;

  export interface ServiceInstance extends InstanceResource {
    users: ServiceUserResource;
    roles: ServiceRoleResource;
    channels: ServiceChannelResource;
  }
  export type ServiceResource = ListMappedResource<ServiceInstance>;

  /// resources/lookups/PhoneNumbers.js
  export type PhoneNumberInstance = Resource;
  export type PhoneNumberResource = BaseMappedResource<PhoneNumberInstance>;

  /// resources/monitor/Alerts.js
  export type AlertInstance = Resource;
  export interface AlertResource extends MappedResource<AlertInstance>, ListableResource {}

  /// resources/monitor/Events.js
  export type EventInstance = Resource;
  export interface EventResource extends MappedResource<EventInstance>, ListableResource {}

  /// resources/pricing/Messaging.js
  export type CountryInstance = Resource;
  export interface CountryResource extends MappedResource<CountryInstance>, ListableResource {}

  export interface PricingMessagingResource {
    countries: CountryResource;
  }

  /// resources/pricing/PhoneNumbers.js
  export interface PricingPhoneNumberResource {
    countries: CountryResource;
  }

  /// resources/pricing/Voice.js
  export type NumberInstance = Resource;
  export interface NumberResource extends MappedResource<NumberInstance>, ListableResource {}

  export interface PricingVoiceResource {
    countries: CountryResource;
    numbers: NumberResource;
  }

  /// resources/sip/CredentialLists.js
  export interface CredentialListInstance extends InstanceResource {
    credentials: CredentialResource;
  }
  export type CredentialListResource = ListMappedResource<CredentialListInstance>;

  /// resources/sip/Domains.js
  export type IPAccessControlListMappingInstance = DeletableResource;
  export type IPAccessControlListMappingResource = ListMappedResource<IPAccessControlListMappingInstance>;

  export type CredentialListMappingInstance = DeletableResource;
  export type CredentialListMappingResource = ListMappedResource<CredentialListMappingInstance>;

  export interface DomainInstance extends InstanceResource {
    ipAccessControlListMappings: IPAccessControlListMappingResource;
    credentialListMappings: CredentialListMappingResource;
  }
  export type DomainResource = ListMappedResource<DomainInstance>;

  /// resources/sip/IpAccessControlLists.js
  export type IPAddressInstance = InstanceResource;
  export type IPAddressResource = ListMappedResource<IPAddressInstance>;

  export interface IPAccessControlListInstance extends InstanceResource {
    ipAddresses: IPAddressResource;
  }
  export type IPAccessControlListResource = ListMappedResource<IPAccessControlListInstance>;

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
  export type WorkspaceActivityInstance = InstanceResource;
  export type WorkspaceActivityResource = ListMappedResource<WorkspaceActivityInstance>;

  export type WorkspaceEventInstance = Resource;
  export interface WorkspaceEventResource extends MappedResource<WorkspaceEventInstance>, ListableResource {}

  export interface WorkspaceTaskReservationInstance extends PostableResource {
    update: RestMethod;
  }
  export interface WorkspaceTaskReservationResource extends MappedResource<WorkspaceTaskReservationInstance>, ListableResource {}

  export interface WorkspaceTaskInstance extends InstanceResource {
    reservations: WorkspaceTaskReservationResource;
  }
  export type WorkspaceTaskResource = ListMappedResource<WorkspaceTaskInstance>;

  export type WorkspaceInstanceStatisticResource = Resource;
  export type WorkspaceStatisticResource = ListableResource;

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
  export type WorkspaceResource = CreatableMappedResource<WorkspaceInstance>;

  /// resources/trunking/Trunks.js
  export type OriginationURLInstance = InstanceResource;
  export type OriginationURLResource = ListMappedResource<OriginationURLInstance>;

  export interface TrunkInstance extends InstanceResource {
    ipAccessControlLists: IPAccessControlListResource;
    credentialLists: CredentialListResource;
    phoneNumbers:  PhoneNumberResource;
    originationUrls: OriginationURLResource;
  }
  export type TrunkResource = ListMappedResource<TrunkInstance>;

}