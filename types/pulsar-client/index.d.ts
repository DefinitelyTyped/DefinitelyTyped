// Type definitions for pulsar-client 1.2
// Project: https://github.com/apache/pulsar-client-node
// Definitions by: Brian Walendzinski <https://github.com/bwalendz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

export interface MessageProperties {
    [key: string ]: string;
}

export type MessageRoutingModes =
    'RoundRobinPartition' |
    'SinglePartition' |
    'CustomPartition';

export type HashingScheme =
    'BoostHash' |
    'JavaStringHash' |
    'Murmur3_32Hash';

export type CompressionType =
    'LZ4' |
    'Zlib';

export type SubscriptionType =
    'Exclusive' |
    'Shared' |
    'Failover' |
    'KeyShared';

export class AuthenticationTls {
    constructor(authTlsOpts: { certificatePath: string; privateKeyPath: string });
    certificatePath: string;
    privateKeyPath: string;
}

export class AuthenticationToken {
    constructor(authTokenOpts: { token: string });
    token: string;
}

export interface ClientOpts {
    /**
     * The connection URL for the Pulsar cluster.
     */
    serviceUrl: string;

    /**
     * Configure the authentication provider.
     * Default: No Authentication
     */
    authentication?: AuthenticationTls | AuthenticationToken;

    /**
     * The timeout for Node.js client operations (creating producers, subscribing to and unsubscribing from topics).
     * Retries will occur until this threshold is reached, at which point the operation will fail.
     * Default: 30
     */
    operationTimeoutSeconds?: number;

    /**
     * The number of threads to use for handling connections to Pulsar brokers.
     * Default: 1
     */
    ioThreads?: number;

    /**
     * The number of threads used by message listeners (consumers and readers).
     * Default: 1
     */
    messageListenerThreads?: number;

    /**
     * The number of concurrent lookup requests that can be sent on each broker connection.
     * Setting a maximum helps to keep from overloading brokers.
     * You should set values over the default only if the client needs to produce and/or subscribe to thousands of Pulsar topics.
     * Default: 50000
     */
    concurrentLookupRequest?: number;

    /**
     * The file path for the trusted TLS certificate.
     */
    tlsTrustCertsFilePath?: string;

    /**
     * The boolean value of setup whether to enable TLS hostname verification.
     * Default: false
     */
    tlsValidateHostname?: boolean;

    /**
     * The boolean value of setup whether the Pulsar client accepts untrusted TLS certificate from broker.
     * Default: false
     */
    tlsAllowInsecureConnection?: boolean;

    /**
     * Interval between each stat info. Stats is activated with positive statsInterval. The value should be set to >= 1 second.
     * Default: 600
     */
    statsIntervalInSeconds?: number;
}

export class Client {
    constructor(opts: ClientOpts);

    createProducer(data: ProducerOpts): Promise<Producer>;
    createReader(data: ReaderOpts): Promise<Reader>;
    subscribe(data: SubscribeOpts): Promise<Consumer>;

    close(): Promise<null>;
}

export class MessageId {
    /**
     * MessageId representing the earliest, or oldest available message stored in the topic.
     */
    static earliest(): MessageId;

    /**
     * MessageId representing the latest, or last published message in the topic.
     */
    static latest(): MessageId;

    /**
     * Deserialize a message id object from a Buffer.
     * @param data
     */
    static deserialize(data: Buffer): MessageId;

    /**
     * Serialize the message id into a Buffer for storing.
     */
    serialize(): Buffer;

    /**
     * Get message id as String.
     */
    toString(): string;
}

export class Message {
    /**
     * Getter method of topic name.
     */
    getTopicName(): string;

    /**
     * Getter method of properties.
     */
    getProperties(): MessageProperties;

    /**
     * Getter method of message data.
     */
    getData(): Buffer;

    /**
     * Getter method of message id object.
     */
    getMessageId(): MessageId;

    /**
     * Getter method of publish timestamp.
     */
    getPublishTimestamp(): number;

    /**
     * Getter method of event timestamp.
     */
    getEventTimestamp(): number;

    /**
     * Getter method of partition key.
     */
    getPartitionKey(): string;
}

export interface ProducerOpts {
    /**
     * The Pulsar topic to which the producer will publish messages.
     */
    topic: string;

    /**
     * A name for the producer. If you do not explicitly assign a name, Pulsar will automatically generate a globally unique name.
     * If you choose to explicitly assign a name, it will need to be unique across all Pulsar clusters, otherwise the creation operation will throw an error.
     */
    producerName?: string;

    /**
     * When publishing a message to a topic, the producer will wait for an acknowledgment from the responsible Pulsar broker.
     * If a message is not acknowledged within the threshold set by this parameter, an error will be thrown. If you set sendTimeoutMs to -1,
     * the timeout will be set to infinity (and thus removed). Removing the send timeout is recommended when using Pulsar's message de-duplication feature.
     * Default: 30000
     */
    sendTimeoutMs?: number;

    /**
     * The initial sequence ID of the message. When producer send message, add sequence ID to message. The ID is increased each time to send.
     */
    initialSequenceId?: number;

    /**
     * The maximum size of the queue holding pending messages (i.e. messages waiting to receive an acknowledgment from the broker).
     * By default, when the queue is full all calls to the send method will fail unless blockIfQueueFull is set to true.
     * Default: 1000
     */
    maxPendingMessages?: number;

    /**
     * The maximum size of the sum of partition's pending queue.
     * Default: 50000
     */
    maxPendingMessagesAcrossPartitions?: number;

    /**
     * If set to true, the producer's send method will wait when the outgoing message queue is full rather than failing and throwing an error
     * (the size of that queue is dictated by the maxPendingMessages parameter); if set to false (the default),send operations will fail and
     * throw a error when the queue is full.
     * Default: false
     */
    blockIfQueueFull?: boolean;

    /**
     * The message routing logic (for producers on partitioned topics). This logic is applied only when no key is set on messages. The available
     * options are: round robin (RoundRobinDistribution), or publishing all messages to a single partition (UseSinglePartition).
     * Default: UseSinglePartition
     */
    messageRoutingMode?: MessageRoutingModes;

    /**
     * The hashing function that determines the partition on which a particular message is published (partitioned topics only).
     * The available options are: JavaStringHash (the equivalent of String.hashCode() in Java), Murmur3_32Hash (applies the Murmur3 hashing function),
     * or BoostHash (applies the hashing function from C++'s Boost library).
     * Default: BoostHash
     */
    hashingScheme?: HashingScheme;

    /**
     * The message data compression type used by the producer. The available options are LZ4, and Zlib.
     * Default: No Compression
     */
    compressionType?: CompressionType;

    /**
     * If set to true, the producer send message as batch.
     * Default: true
     */
    batchingEnabled?: boolean;

    /**
     * The maximum time of delay sending message in batching.
     * Default: 10
     */
    batchingMaxPublishDelayMs?: number;

    /**
     * The maximum size of sending message in each time of batching.
     * Default: 1000
     */
    batchingMaxMessages?: number;

    /**
     * The metadata of producer.
     */
    properties?: MessageProperties;
}

export interface ProducerMessage {
    /**
     * The actual data payload of the message.
     */
    data: Buffer;

    /**
     * A Object for any application-specific metadata attached to the message.
     */
    properties?: MessageProperties;

    /**
     * The timestamp associated with the message.
     */
    eventTimestamp?: number;

    /**
     * The sequence ID of the message.
     */
    sequenceId?: number;

    /**
     * The optional key associated with the message (particularly useful for things like topic compaction).
     */
    partitionKey?: string;

    /**
     * The clusters to which this message will be replicated. Pulsar brokers handle message replication automatically;
     * you should only change this setting if you want to override the broker default.
     */
    replicationClusters?: string[];
}

export class Producer {
    /**
     * Publishes a message to the producer's topic. When the message is successfully acknowledged by the Pulsar broker,
     * or an error will be thrown, the Promise object run executor function.
     * @param message Message to be published.
     */
    send(message: ProducerMessage): Promise<null>;

    /**
     * Sends message from send queue to Pulser broker. When the message is successfully acknowledged by the Pulsar broker,
     * or an error will be thrown, the Promise object run executor function.
     */
    flush(): Promise<null>;

    /**
     * Closes the producer and releases all resources allocated to it. If close() is called then no more messages will be accepted from the publisher.
     * This method will return Promise object, and when all pending publish requests have been persisted by Pulsar then run executor function.
     * If an error is thrown, no pending writes will be retried.
     */
    close(): Promise<null>;
}

export interface SubscribeOpts {
    /**
     * The Pulsar topic on which the consumer will establish a subscription and listen for messages.
     */
    topic: string;

    /**
     * The subscription name for this consumer.
     */
    subscription: string;

    /**
     * Available options are Exclusive, Shared, and Failover.
     * Default: Exclusive
     */
    subscriptionType?: SubscriptionType;

    /**
     * Acknowledge timeout in milliseconds.
     * Default: 0
     */
    ackTimeoutMs?: number;

    /**
     * Sets the size of the consumer's receiver queue, i.e. the number of messages that can be accumulated by the consumer before the application calls receive.
     * A value higher than the default could increase consumer throughput, though at the expense of more memory utilization.
     * Default: 1000
     */
    receiverQueueSize?: number;

    /**
     * Set the max total receiver queue size across partitions.
     * This setting will be used to reduce the receiver queue size for individual partitions if the total exceeds this value.
     * Default: 50000
     */
    receiverQueueSizeAcrossPartitions?: number;

    /**
     * The name of consumer. Currently, failover mode uses consumer name for ordering.
     */
    consumerName?: string;

    /**
     * The metadata of consumer.
     */
    properties?: MessageProperties;
}

export class Consumer {
    /**
     * Receives a single message from the topic with optional specific timeout in milliseconds.
     * @param timeout Wait timeout in milliseconds.
     */
    receive(timeout?: number): Promise<Message>;

    /**
     * Acknowledges a message to the Pulsar broker by message object.
     * @param message Message to acknowledge.
     */
    acknowledge(message: Message): void;

    /**
     * Acknowledges a message to the Pulsar broker by message ID object.
     * @param messageId Message ID to acknowledge.
     */
    acknowledgeId(messageId: MessageId): void;

    /**
     * Negatively acknowledges a message to the Pulsar broker by message object.
     * @param message Message to acknowledge.
     */
    negativeAcknowledge(message: Message): void;

    /**
     * Negatively acknowledges a message to the Pulsar broker by message ID object.
     * @param messageId Message ID to acknowledge.
     */
    negativeAcknowledgeId(messageId: MessageId): void;

    /**
     * Acknowledges all the messages in the stream, up to and including the specified message.
     * The acknowledgeCumulative method will return void, and send the ack to the broker asynchronously.
     * After that, the messages will not be redelivered to the consumer. Cumulative acking can not be used with a shared subscription type.
     * @param message Message to acknowledge cumulatively.
     */
    acknowledgeCumulative(message: Message): void;

    /**
     * Acknowledges all the messages in the stream, up to and including the specified message ID.
     * @param messageId Message ID to acknowledge cumulatively.
     */
    acknowledgeCumulativeId(messageId: MessageId): void;

    /**
     * Closes the consumer, disabling its ability to receive messages from the broker.
     */
    close(): Promise<null>;
}

export interface ReaderOpts {
    /**
     * The Pulsar topic on which the reader will establish a subscription and listen for messages.
     */
    topic: string;

    /**
     * The initial reader position, i.e. the message at which the reader begins processing messages.
     * The options are Pulsar.MessageId.earliest (the earliest available message on the topic), Pulsar.MessageId.latest (the latest available message on the topic),
     * or a message ID object for a position that is not earliest or latest.
     */
    startMessageId: MessageId;

    /**
     * Sets the size of the reader's receiver queue, i.e. the number of messages that can be accumulated by the reader before the application calls readNext.
     * A value higher than the default of 1000 could increase reader throughput, though at the expense of more memory utilization.
     * Default 1000
     */
    receiverQueueSize?: number;

    /**
     * The name of the reader.
     */
    readerName?: string;

    /**
     * The subscription role prefix.
     */
    subscriptionRolePrefix?: string;
}

export class Reader {
    /**
     * Receives the next message on the topic (analogous to the receive method for consumers)
     * with optional specific timeout in milliseconds.
     * @param timeout Wait timeout in milliseconds.
     */
    readNext(timeout?: number): Promise<Message>;

    /**
     * Return whether Broker has next message in target topic.
     */
    hasNext(): boolean;

    /**
     * Closes the reader, disabling its ability to receive messages from the broker.
     */
    close(): Promise<null>;
}
