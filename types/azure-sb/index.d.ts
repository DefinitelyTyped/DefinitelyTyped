export import ServiceBusService = require("./lib/servicebusservice");
export import NotificationHubService = require("./lib/notificationhubservice");
export import WrapService = require("./lib/wrapservice");

export function createServiceBusService(
    namespaceOrConnectionString?: string,
    accessKey?: string,
    issuer?: string,
    acsNamespace?: string,
    host?: string,
    authenticationProvider?: object,
): ServiceBusService;

export function createNotificationHubService(
    hubName: string,
    endpointOrConnectionString?: string,
    sharedAccessKeyName?: string,
    sharedAccessKeyValue?: string,
): NotificationHubService;

export function createWrapService(
    acsHost: string,
    issuer?: string,
    accessKey?: string,
): WrapService;

export namespace Azure.ServiceBus {
    export type Duration = string;
    export type DateString = string;

    export interface Dictionary<T> {
        [k: string]: T;
    }

    export interface ReceiveQueueMessageOptions {
        isPeekLock?: boolean | undefined;
        timeoutIntervalInS?: number | undefined;
    }

    export interface ReceiveSubscriptionMessageOptions extends ReceiveQueueMessageOptions {}

    interface IBrokerPropertiesResponse {
        readonly DeliveryCount: number;
        readonly LockedUntil: DateString;
        readonly LockToken: string;
        readonly SequenceNumber: number;
    }

    interface IBrokerProperties {
        CorrelationId: string;
        Label: string;
        MessageId: string;
        PartitionKey: string;
        ReplyTo: string;
        ReplyToSessionId: string;
        ScheduledEnqueueTimeUtc: string;
        SessionId: string;
        TimeToLive: string;
        To: string;
    }

    export interface Message {
        body: string;
        brokerProperties?: BrokerProperties | undefined;
        contentType?: string | undefined;
        customProperties?: Dictionary<any> | undefined;
    }

    /*
     * Options interfaces
     */

    interface CreateOptions {
        DefaultMessageTimeToLive: string;
        DuplicateDetectionHistoryTimeWindow: string;
        EnablePartitioning: boolean;
        MaxSizeInMegabytes: number;
        RequiresDuplicateDetection: boolean;
    }

    interface IQueueOptions extends CreateOptions {
        AutoDeleteOnIdle: string;
        DeadLetteringOnMessageExpiration: boolean;
        LockDuration: string;
        RequiresSession: boolean;
    }

    interface ICreateTopicOptions extends CreateOptions {
        EnableBatchedOperations: boolean;
        SizeInBytes: boolean;
        SupportOrdering: boolean;
    }

    interface ICreateTopicIfNotExistsOptions extends ICreateTopicOptions {
        EnableDeadLetteringOnFilterEvaluationExceptions: boolean;
        EnableDeadLetteringOnMessageExpiration: boolean;
        MaxCorrelationFiltersPerTopic: number;
        MaxSqlFiltersPerTopic: number;
        MaxSubscriptionsPerTopic: number;
    }

    interface ICreateSubscriptionOptions {
        DefaultMessageTimeToLive: string;
        EnableDeadLetteringOnFilterEvaluationExceptions: boolean;
        EnableDeadLetteringOnMessageExpiration: boolean;
        LockDuration: string;
        RequiresSession: boolean;
    }

    interface PaginationOptions {
        top: number;
        skip: number;
    }

    interface ICreateRuleOptions {
        trueFilter: string;
        falseFilter: string;
        sqlExpressionFilter: string;
        correlationIdFilter: string;
        sqlRuleAction: string;
    }

    interface ICreateNotificationHubOptions {
        apns: Dictionary<string>;
        gcm: Dictionary<string>;
        mpns: Dictionary<string>;
        wns: Dictionary<string>;
    }

    export interface NotificationHubRegistration {
        _: {
            ContentRootElement: string;
        };
        BodyTemplate?: any;
        ChannelUri?: string | undefined;
        DeviceToken?: string | undefined;
        Expiry?: Date | undefined;
        GcmRegistrationId?: string | undefined;
        MpnsHeaders?: any;
        RegistrationId: string;
        Tags?: string | undefined;
        WnsHeaders?: any;
    }

    export interface NotificationHubInstallation {
        installationId: string;
        userId?: string | undefined;
        readonly lastActiveOn?: string | undefined;
        readonly expirationTime?: string | undefined;
        readonly lastUpdate?: string | undefined;
        platform: "apns" | "wns" | "mpns" | "adm" | "gcm";
        pushChannel: string;
        readonly expiredPushChannel?: string | undefined;
        tags?: Array<string> | undefined;
        templates?: {
            [name: string]: {
                body: string;
                headers?: any;
                expiry?: string | undefined;
                tags?: Array<string> | undefined;
            };
        } | undefined;
        secondaryTile?: {
            [titleId: string]: {
                pushChannel: string;
                tags?: Array<string> | undefined;
                templates?: any;
            };
        } | undefined;
    }

    export interface Response {
        body: Dictionary<string | object>;
        headers: Dictionary<string>;
        isSuccessful: boolean;
        md5?: string | undefined;
        statusCode: number;
    }

    export interface ErrorResponse extends Response {
        body: {
            Error: {
                Code: string;
                Detail: string;
            };
        };
    }

    export namespace Results.Models {
        export enum EntityStatus {
            Active = "Active",
            Creating = "Creating",
            Deleting = "Deleting",
            Disabled = "Disabled",
            ReceiveDisabled = "ReceiveDisabled",
            Renaming = "Renaming",
            Restoring = "Restoring",
            SendDisabled = "SendDisabled",
            Unknown = "Unknown",
        }

        export enum EntityAvailabilityStatus {
            Available = "Available",
            Limited = "Limited",
            Renaming = "Renaming",
            Restoring = "Restoring",
            Unknown = "Unknown",
        }

        interface Base {
            _: {
                ContentRootElement: string;
                id: string;
                title: string;
                published: DateString;
                updated: DateString;
                author?: {
                    name: string;
                } | undefined;
                link: string;
            };
            CreatedAt: DateString;
        }

        interface ExtendedBase extends Base {
            AuthorizationRules: string;
            AutoDeleteOnIdle: string;
            DefaultMessageTimeToLive: string;
            DuplicateDetectionHistoryTimeWindow: Duration;
            EnableBatchedOperations: string;
            EnableExpress: string;
            EnablePartitioning: string;
            EntityAvailabilityStatus: string;
            IsAnonymousAccessible: string;
            MaxSizeInMegabytes: string;
            RequiresDuplicateDetection: string;
            SizeInBytes: string;
            Status: EntityStatus;
            UpdatedAt: DateString;
        }

        // export interface Generic extends Base {
        //   [x: string]: string | Dictionary<string | object>;
        // }

        export const ActiveMessageCount = "d2p1:ActiveMessageCount";
        export const DeadLetterMessageCount = "d2p1:DeadLetterMessageCount";
        export const ScheduledMessageCount = "d2p1:ScheduledMessageCount";
        export const TransferMessageCount = "d2p1:TransferMessageCount";
        export const TransferDeadLetterMessageCount = "d2p1:TransferDeadLetterMessageCount";

        export interface Topic extends ExtendedBase {
            AccessedAt: DateString;
            CountDetails: { [key: string]: string };
            EnableSubscriptionPartitioning: string;
            FilteringMessagesBeforePublishing: string;
            IsExpress: string;
            SubscriptionCount: string;
            SupportOrdering: string;
            TopicName: string;
        }

        export interface Queue extends ExtendedBase {
            DeadLetteringOnMessageExpiration: string;
            LockDuration: Duration;
            MaxDeliveryCount: string;
            MessageCount: string;
            QueueName: string;
            RequiresSession: string;
            SupportOrdering: string;
        }

        export interface Subscription extends ExtendedBase {
            CountDetails: { [key: string]: string };
            DeadLetteringOnFilterEvaluationExceptions: string;
            DeadLetteringOnMessageExpiration: string;
            LockDuration: string;
            MaxDeliveryCount: string;
            MessageCount: string;
            RequiresSession: string;
            SubscriptionName: string;
            TopicName: string;
        }

        /**
         * @see https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-filter
         */
        interface SqlFilter {
            readonly CompatibilityLevel: string;
            Parameters?: Dictionary<any> | undefined;
            RequiresPreprocessing?: string | undefined;
            SqlExpression: string;
        }

        type CorrelationFilter = Partial<{
            ContentType: string;
            CorrelationId: string;
            Label: string;
            Properties: string;
            ReplyTo: string;
            ReplyToSessionId: string;
            RequiresPreprocessing: string;
            SessionId: string;
            To: string;
        }>;

        export interface Rule extends Base {
            Action: string | SqlFilter;
            Filter: SqlFilter | CorrelationFilter;
            Name: string;
            TopicName: string;
            SubscriptionName: string;
            RuleName: string;
        }
    }

    /*
     * Callbacks
     */
    export type ResponseCallback = (
        error: Error | null,
        response: Response,
    ) => void;

    export type ResultAndResponseCallback = (
        error: Error | null,
        result: boolean | Results.Models.Base | Results.Models.Base[],
        response: Response,
    ) => void;

    export type TypedResultAndResponseCallback<T> = (
        error: Error | null,
        result: T,
        response: Response,
    ) => void;

    /*
     * Options interfaces with all properties as optional
     */
    export type BrokerProperties = Partial<IBrokerProperties>;
    export type BrokerPropertiesResponse =
        & IBrokerPropertiesResponse
        & Partial<IBrokerProperties>;
    export type CreateQueueOptions = Partial<IQueueOptions>;
    export type CreateTopicOptions = Partial<ICreateTopicOptions>;
    export type CreateTopicIfNotExistsOptions = Partial<
        ICreateTopicIfNotExistsOptions
    >;
    export type CreateSubscriptionOptions = Partial<ICreateSubscriptionOptions>;
    export type ListSubscriptionsOptions = Partial<PaginationOptions>;
    export type ListRulesOptions = Partial<PaginationOptions>;
    export type ListTopicsOptions = Partial<PaginationOptions>;
    export type ListQueuesOptions = Partial<PaginationOptions>;
    export type CreateRuleOptions = Partial<ICreateRuleOptions>;
    export type CreateNotificationHubOptions = Partial<
        ICreateNotificationHubOptions
    >;
    export type ListNotificationHubsOptions = Partial<PaginationOptions>;

    export type MessageOrName = Message | string;
}
