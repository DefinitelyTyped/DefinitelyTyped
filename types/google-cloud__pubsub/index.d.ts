// Type definitions for @google-cloud/pubsub 0.14
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/pubsub
// Definitions by: Paul Huynh <https://github.com/pheromonez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>
import { EventEmitter } from "events";
import { Duplex } from "stream";

declare namespace PubSub {
    // TODO write definitions for the for v1
    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/v1
    function v1(config?: GCloudConfiguration): any;

    interface GCloudConfiguration {
        projectId?: string;
        keyFilename?: string;
        email?: string;
        credentials?: {
            client_email?: string;
            private_key?: string
        };
        autoRetry?: boolean;
        maxRetries?: number;
        promise?: any;
    }

    interface PubSub {
        createSubscription(topic: Topic | string, name: string, options?: PubSub.CreateSubscriptionOptions): Promise<any[]>;
        createSubscription(topic: Topic | string, name: string, callback: PubSub.CreateSubscriptionCallback): void;
        createSubscription(topic: Topic | string, name: string, options: PubSub.CreateSubscriptionOptions, callback: PubSub.CreateSubscriptionCallback): void;

        createTopic(name: string, gaxOpts?: GAX.CallOptions): Promise<any[]>;
        createTopic(name: string, callback: PubSub.CreateTopicCallback): void;
        createTopic(name: string, gaxOpts: GAX.CallOptions, callback: PubSub.CreateTopicCallback): void;

        getSnapshots(options?: PubSub.GetSnapshotsOptions): Promise<any[]>;
        getSnapshots(callback: PubSub.GetSnapshotsCallback): void;
        getSnapshots(options: PubSub.GetSnapshotsOptions, callback: PubSub.GetSnapshotsCallback): void;

        getSnapshotsStream(options?: PubSub.GetSnapshotsOptions): Duplex;

        getSubscriptions(options?: PubSub.GetSubscriptionsOptions): Promise<any[]>;
        getSubscriptions(callback: PubSub.GetSubscriptionsCallback): void;
        getSubscriptions(options: PubSub.GetSubscriptionsOptions, callback: PubSub.GetSubscriptionsCallback): void;

        getSubscriptionsStream(options?: PubSub.GetSubscriptionsOptions): Duplex;

        getTopics(query?: PubSub.GetTopicsQuery): Promise<any[]>;
        getTopics(callback: PubSub.GetTopicsCallback): void;
        getTopics(query: PubSub.GetTopicsQuery, callback: PubSub.GetTopicsCallback): void;

        getTopicsStream(query?: PubSub.GetTopicsQuery): Duplex;

        snapshot(name: string): Snapshot;

        subscription(name: string, options?: PubSub.SubscriptionOptions): Subscription;

        topic(name: string): Topic;
    }
    namespace PubSub {
        interface CreateSubscriptionOptions {
            flowControl?: {
                maxBytes?: number;
                maxMessages?: number;
            };
            gaxOpts?: GAX.CallOptions;
            messageRetentionDuration?: number | Date;
            pushEndpoint?: string;
            retainAckedMessages?: boolean;
        }
        type CreateSubscriptionCallback = (err: Error | null, subscription: Subscription, apiResponse: object) => void;

        type CreateTopicCallback = (err: Error | null, topic: Topic, apiResponse: object) => void;

        interface GetSnapshotsOptions {
            autoPaginate?: boolean;
            gaxOpts?: GAX.CallOptions;
            pageSize?: number;
            pageToken?: string;
        }
        type GetSnapshotsCallback = (err: Error | null, snapshots: Snapshot[]) => void;

        interface GetSubscriptionsOptions {
            autoPaginate?: boolean;
            gaxOpts?: GAX.CallOptions;
            pageSize?: number;
            pageToken?: string;
            topic?: Topic | string;
        }
        type GetSubscriptionsCallback = (err: Error | null, subscriptions: Subscription[], apiResponse: object) => void;

        interface GetTopicsQuery {
            autoPaginate?: boolean;
            gaxOpts?: GAX.CallOptions;
            pageSize?: number;
            pageToken?: string;
        }
        type GetTopicsCallback = (err: Error | null, topics: Topic[], apiResponse: object) => void;

        interface SubscriptionOptions {
            flowControl?: {
                maxBytes?: number;
                maxMessages?: number;
            };
            maxConnections?: number;
        }
    }

    interface Publisher {
        publish(data: Buffer, callback: Publisher.PublishCallback): void;
        publish(data: Buffer, attributes: object, callback: Publisher.PublishCallback): void;
        publish(data: Buffer, attributes?: object): Promise<any[]>;
    }
    namespace Publisher {
        type PublishCallback = (error: Error | null, messageId: string) => void;
    }

    interface Snapshot {
        delete(): Promise<any[]>;
        delete(callback: Snapshot.DeleteCallback): void;
    }
    interface SnapshotFromSubscription extends Snapshot {
        create(name: string): Promise<any[]>;
        create(name: string, callback: Snapshot.CreateCallback): void;

        seek(): Promise<any[]>;
        seek(callback: Snapshot.SeekCallback): void;
    }
    namespace Snapshot {
        type DeleteCallback = (err: Error | null, apiResponse: object) => void;

        type CreateCallback = (err: Error | null, snapshot: Snapshot, apiResponse: object) => void;

        type SeekCallback = (err: Error | null, apiResponse: object) => void;
    }

    interface Subscription extends EventEmitter {
        close(): Promise<void>;
        close(callback: Subscription.CloseCallback): void;

        createSnapshot(name: string, gaxOpts?: GAX.CallOptions): Promise<any[]>;
        createSnapshot(name: string, callback: Subscription.CreateSnapshotCallback): void;
        createSnapshot(name: string, gaxOpts: GAX.CallOptions, callback: Subscription.CreateSnapshotCallback): void;

        delete(gaxOpts?: GAX.CallOptions): Promise<any[]>;
        delete(callback: Subscription.DeleteCallback): void;
        delete(gaxOpts: GAX.CallOptions, callback: Subscription.DeleteCallback): void;

        exists(): Promise<any[]>;
        exists(callback: Subscription.ExistsCallback): void;

        get(gaxOpts?: GAX.CallOptions): Promise<any[]>; // TODO: only expose autoCreate
        // NOTE: The following are not documented, but are possible signatures base on the source code
        get(callback: Subscription.GetCallback): void;
        get(gaxOpts: GAX.CallOptions, callback: Subscription.GetCallback): void;

        getMetadata(gaxOpts?: GAX.CallOptions): Promise<any[]>;
        getMetadata(callback: Subscription.GetMetadataCallback): void;
        getMetadata(gaxOpts: GAX.CallOptions, callback: Subscription.GetMetadataCallback): void;

        iam: IAM;

        modifyPushConfig(config: Subscription.PushConfig, gaxOpts?: GAX.CallOptions): Promise<any[]>;
        modifyPushConfig(config: Subscription.PushConfig, callback: Subscription.ModifyPushConfigCallback): void;
        modifyPushConfig(config: Subscription.PushConfig, gaxOpts: GAX.CallOptions, callback: Subscription.ModifyPushConfigCallback): void;

        seek(snapshot: string | Date, callback: Subscription.SeekCallback): void;
        seek(snapshot: string | Date, gaxOpts: GAX.CallOptions, callback: Subscription.SeekCallback): void;

        setMetadata(metadata: object, gaxOpts?: GAX.CallOptions): Promise<any[]>;
        setMetadata(metadata: object, callback: Subscription.SetMetadataCallback): void;
        setMetadata(metadata: object, gaxOpts: GAX.CallOptions, callback: Subscription.SetMetadataCallback): void;

        snapshot(name: string): SnapshotFromSubscription;
    }
    namespace Subscription {
        type CloseCallback = (err: Error | null) => void;

        type CreateSnapshotCallback = (err: Error | null, snapshot: SnapshotFromSubscription, apiResponse: object) => void;

        type DeleteCallback = (err: Error | null, apiResponse: object) => void;

        type ExistsCallback = (err: Error | null, exists: boolean) => void;

        type GetCallback = (err: Error | null, subscription: Subscription, apiResponse: object) => void;

        type GetMetadataCallback = (err: Error | null, apiResponse: object) => void;

        interface PushConfig {
            pushEndpoint?: string;
            // https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions#pushconfig
            attributes?: PushConfigAttributes;
        }
        interface PushConfigAttributes {
            'x-goog-version': 'v1beta' | 'v1' | 'v1beta2';
        }
        type ModifyPushConfigCallback = (err: Error | null, apiResponse: object) => void;

        type SeekCallback = (err: Error | null, apiResponse: object) => void;

        type SetMetadataCallback = (err: Error | null, apiResponse: object) => void;
    }

    interface Topic {
        create(gaxOpts?: GAX.CallOptions): Promise<any[]>;
        create(callback: Topic.CreateCallback): void;
        create(gaxOpts: GAX.CallOptions, callback: Topic.CreateCallback): void;

        createSubscription(nameOrOptions?: string | Topic.CreateSubscriptionOptions): Promise<any[]>;
        createSubscription(name: string, options: Topic.CreateSubscriptionOptions): Promise<any[]>;
        createSubscription(callback: Topic.CreateSubscriptionCallback): void;
        createSubscription(nameOrOptions: string | Topic.CreateSubscriptionOptions, callback: Topic.CreateSubscriptionCallback): void;
        createSubscription(name: string, options: Topic.CreateSubscriptionOptions, callback: Topic.CreateSubscriptionCallback): void;

        delete(gaxOpts?: GAX.CallOptions): Promise<any[]>;
        delete(callback: Topic.DeleteCallback): void;
        delete(gaxOpts: GAX.CallOptions, callback: Topic.DeleteCallback): void;

        exists(): Promise<any[]>;
        exists(callback: Topic.ExistsCallback): void;

        // NOTE: The documentation in the link is incomplete; the function takes a callback
        // as second argument (in the source):
        // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=get
        get(gaxOpts?: GAX.CallOptions): Promise<any[]>;
        get(callback: Topic.GetCallback): void;
        get(gaxOpts: GAX.CallOptions, callback: Topic.GetCallback): void;

        getMetadata(gaxOpts?: GAX.CallOptions): Promise<any[]>;
        getMetadata(callback: Topic.GetMetadataCallback): void;
        getMetadata(gaxOpts: GAX.CallOptions, callback: Topic.GetMetadataCallback): void;

        getSubscriptions(options?: Topic.GetSubscriptionsOptions): Promise<any[]>;
        getSubscriptions(callback: Topic.GetSubscriptionsCallback): void;
        getSubscriptions(options: Topic.GetSubscriptionsOptions, callback: Topic.GetSubscriptionsCallback): void;

        // Note: The documention lists the parameter as 'query', when it probably should be 'options'.
        getSubscriptionsStream(options?: Topic.GetSubscriptionsOptions): Duplex;

        iam: IAM;

        publisher(options?: Topic.PublisherOptions): Publisher;

        subscription(name: string, options?: Topic.SubscriptionOptions): Subscription;
    }
    namespace Topic {
        type CreateCallback = PubSub.CreateTopicCallback;

        type CreateSubscriptionOptions = PubSub.CreateSubscriptionOptions;
        type CreateSubscriptionCallback = PubSub.CreateSubscriptionCallback;

        // Note: This is not fully documented in the link; browse the source code to find the callback parameters
        // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=delete
        type DeleteCallback = (err: Error | null, apiResponse: object) => void;

        type ExistsCallback = (err: Error | null, exists: boolean) => void;

        // Note: This is not fully documented in the link; browse the source code to find the callback parameters
        // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=get
        type GetCallback = (err: Error | null, topic: Topic, apiResponse: object) => void;

        type GetMetadataCallback = (err: Error | null, apiResponse: object) => void;

        // Options are SLIGHTLY different to PubSub.getSubscriptions(...), so we can't just reuse it
        interface GetSubscriptionsOptions {
            autoPaginate?: boolean;
            gaxOpts?: GAX.CallOptions;
            pageSize?: number;
            pageToken?: string;
        }
        // Callback signature also slightly different to PubSub.getSubscriptions(callback), so we can't just reuse it
        type GetSubscriptionsCallback = (err: Error | null, subscriptions: Subscription[]) => void;

        interface PublisherOptions {
            batching?: {
                maxBytes?: number;
                maxMessages?: number;
                maxMilliseconds?: number;
            };
        }

        type SubscriptionOptions = PubSub.SubscriptionOptions;
    }

    // Allow this interface to start with 'I', since it's an acronym!
    // tslint:disable-next-line interface-name
    interface IAM {
        getPolicy(): Promise<any[]>;
        getPolicy(callback: IAM.GetPolicyCallback): void;

        setPolicy(policy: IAM.Policy): Promise<any[]>;
        setPolicy(policy: IAM.Policy, callback: IAM.SetPolicyCallback): void;

        testPermissions(permissions: string | string[]): Promise<any[]>;
        testPermissions(permissions: string | string[], callback: IAM.TestPermissionsCallback): void;
    }
    namespace IAM {
        type GetPolicyCallback = (err: Error | null, policy: Policy, apiResponse: object) => void;

        type SetPolicyCallback = (err: Error | null, policy: Policy, apiResponse: object) => void;

        type TestPermissionsCallback = (err: Error | null, permissions: string | string[], apiResponse: object) => void;

        interface Policy {
            bindings?: any[];
            rules?: object[];
            etag?: string;
        }
    }

    namespace GAX {
        /** https://googleapis.github.io/gax-nodejs/global.html#CallOptions */
        interface CallOptions {
            timeout?: number;
            retry?: RetryOptions;
            autoPaginate?: boolean;
            pageToken?: object;
            isBundling?: boolean;
            longrunning?: BackoffSettings;
            promise?: PromiseConstructor; // FIXME Unsure if this is the correct type; remove this comment if it is
        }

        /** https://googleapis.github.io/gax-nodejs/global.html#RetryOptions */
        interface RetryOptions {
            retryCodes: string[];
            backoffSettings: BackoffSettings;
        }

        /** https://googleapis.github.io/gax-nodejs/global.html#BackoffSettings */
        interface BackoffSettings {
            initialRetryDelayMillis: number;
            retryDelayMultiplier: number;
            maxRetryDelayMillis: number;
            initialRpcTimeoutMillis: number;
            maxRpcTimeoutMillis: number;
            totalTimeoutMillis: number;
        }
    }
}

declare function PubSub(config?: PubSub.GCloudConfiguration): PubSub.PubSub;
export = PubSub;
