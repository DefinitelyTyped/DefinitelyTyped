/**
 * Sends one or more messages to a Kafka topic.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produce
 * @param args - Produce arguments. If omitted, a random message is written to a random topic.
 * @returns Information about the written messages.
 * @example
 * import { produce } from 'mokapi/kafka'
 *
 * export default function() {
 *   const res = produce({
 *     topic: 'foo',
 *     messages: [
 *       { key: 'foo-1', data: { foo: 'bar' } }
 *     ]
 *   })
 *   console.log(`new kafka message written with offset: ${res.messages[0].offset}`)
 * }
 */
export function produce(args?: ProduceArgs): ProduceResult;

/**
 * Sends one or more messages to a Kafka topic asynchronously.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produce
 * @param args - Produce arguments. If omitted, a random message is written to a random topic.
 * @returns A promise resolving to information about the written messages.
 * @example
 * import { produceAsync } from 'mokapi/kafka'
 *
 * export default async function() {
 *   const res = await produceAsync({
 *     topic: 'foo',
 *     messages: [
 *       { key: 'foo-1', data: { foo: 'bar' } }
 *     ]
 *   })
 *   console.log(`new kafka message written with offset: ${res.messages[0].offset}`)
 * }
 */
export function produceAsync(args?: ProduceArgs): Promise<ProduceResult>;

/**
 * Contains produce-specific arguments.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produceargs
 * @example
 * export default function() {
 *   produce({
 *     topic: 'foo',
 *     messages: [
 *       { key: 'foo-1', data: { foo: 'bar-1' } },
 *       { key: 'foo-2', data: { foo: 'bar-2' } }
 *     ]
 *   })
 * }
 */
export interface ProduceArgs {
    /**
     * Kafka cluster name. Only required if the topic name exists in more than one cluster.
     */
    cluster?: string;

    /**
     * Kafka topic name. If not specified, the message is written to a random topic.
     *
     * The name can also be a concrete instance of a parameterized channel address,
     * e.g. `shipments.eu.updates` for the address `shipments.{region}.updates`.
     * If that topic does not exist yet, set {@link allowAutoTopicCreation} to create it.
     */
    topic?: string;

    /**
     * Kafka partition index. If not specified, the partition is chosen based on the key.
     * Shorthand for a single message; prefer {@link messages}.
     */
    partition?: number;

    /**
     * Kafka message key. If not specified, a random key is generated based on the topic configuration.
     * Shorthand for a single message; prefer {@link messages}.
     */
    key?: any;

    /**
     * Kafka message value. If not specified, a random value is generated based on the topic configuration.
     * Shorthand for a single message; prefer {@link messages}.
     */
    value?: any;

    /**
     * Kafka message headers.
     * Shorthand for a single message; prefer {@link messages}.
     */
    headers?: { [name: string]: any };

    /**
     * Messages to write. Each message can define its own partition, key, value and headers.
     * @see Message
     * @example
     * export default function() {
     *   produce({
     *     topic: 'foo',
     *     messages: [
     *       { key: 'foo-1', data: { foo: 'bar-1' } },
     *       { key: 'foo-2', data: { foo: 'bar-2' } }
     *     ]
     *   })
     * }
     */
    messages?: Message[];

    /**
     * Creates the topic if it does not exist yet.
     *
     * The topic is only created if its name matches a channel address defined in the
     * AsyncAPI specification, including parameterized addresses such as
     * `shipments.{region}.updates`, and the channel is available on the target server.
     * Parameter values must satisfy the parameter's `enum`, if defined.
     * @default false
     * @example
     * export default function() {
     *   produce({
     *     topic: 'shipments.eu.updates',
     *     allowAutoTopicCreation: true,
     *     messages: [
     *       { key: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a', data: { status: 'IN_TRANSIT' } }
     *     ]
     *   })
     * }
     */
    allowAutoTopicCreation?: boolean;

    /**
     * Retries producing if the script runs before the Kafka topic is set up.
     * @see ProduceRetry
     */
    retry?: ProduceRetry;
}

/**
 * Represents a Kafka message to write.
 */
export interface Message {
    /** Kafka partition index. If not specified, the partition is chosen based on the key. */
    partition?: number;

    /** Kafka message key. If not specified, a random key is generated based on the topic configuration. */
    key?: any;

    /**
     * Kafka message value, validated against the message schema of the topic.
     * If neither `data` nor `value` is specified, a random value is generated based on the topic configuration.
     */
    data?: any;

    /**
     * Raw Kafka message value, written without schema validation.
     * Use it to simulate invalid messages. If neither `data` nor `value` is specified,
     * a random value is generated based on the topic configuration.
     */
    value?: string | number | boolean | null;

    /** Kafka message headers. */
    headers?: { [name: string]: any };
}

/**
 * Contains information about the written Kafka messages.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produceresult
 * @example
 * export default function() {
 *   const res = produce({ topic: 'foo' })
 *   for (const msg of res.messages) {
 *     console.log(`written to partition ${msg.partition} with offset ${msg.offset}`)
 *   }
 * }
 */
export interface ProduceResult {
    /** Name of the Kafka cluster where the messages were written. */
    readonly cluster: string;

    /** Name of the Kafka topic where the messages were written. */
    readonly topic: string;

    /** The written messages, in the same order as in {@link ProduceArgs.messages}. */
    readonly messages: readonly MessageResult[];

    /**
     * Partition of the first written message.
     * @deprecated Use `messages[i].partition` instead.
     */
    readonly partition: number;

    /**
     * Offset of the first written message.
     * @deprecated Use `messages[i].offset` instead.
     */
    readonly offset: number;

    /**
     * Key of the first written message.
     * @deprecated Use `messages[i].key` instead.
     */
    readonly key: string;

    /**
     * Value of the first written message.
     * @deprecated Use `messages[i].value` instead.
     */
    readonly value: string;

    /**
     * Headers of the first written message.
     * @deprecated Use `messages[i].headers` instead.
     */
    readonly headers: { [name: string]: string };
}

/**
 * Represents a single written Kafka message.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/kafkamessageresult
 */
export interface MessageResult {
    /** Zero-based index of the partition where the message was written. */
    readonly partition: number;

    /** Offset assigned to the message within its partition. */
    readonly offset: number;

    /** Key of the written message. */
    readonly key: string;

    /** Value of the written message. */
    readonly value: string;

    /** Headers of the written message. */
    readonly headers: { [name: string]: string };
}

/**
 * A duration, either as a number of milliseconds or as a string with unit suffix,
 * such as `"300ms"`, `"1.5s"` or `"2m30s"`.
 * Valid units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
 */
export type Duration = string | number;

/**
 * Configures the retry mechanism used when the topic is not available yet.
 * The wait time grows exponentially: `initialRetryTime * factor^(n-1)`,
 * capped at {@link maxRetryTime}.
 * @example
 * export default function() {
 *   produce({
 *     topic: 'foo',
 *     messages: [{ value: 'value-1' }],
 *     retry: { initialRetryTime: '500ms', retries: 10 }
 *   })
 * }
 */
export interface ProduceRetry {
    /**
     * Maximum wait time for a single retry.
     * @default '30s'
     */
    maxRetryTime?: Duration;

    /**
     * Wait time before the first retry.
     * @default '200ms'
     */
    initialRetryTime?: Duration;

    /**
     * Factor by which the wait time increases with each retry.
     * With the defaults: 1st retry 200ms, 2nd 800ms, 3rd 3200ms.
     * @default 4
     */
    factor?: number;

    /**
     * Maximum number of retries.
     * @default 5
     */
    retries?: number;
}
