import { JSONValue } from ".";

/**
 * Sends a single message to a Kafka topic.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produce
 * @param args - ProduceArgs object contains Kafka produce arguments.
 * @returns The produce result.
 * @example
 * export default function() {
 *   const res = produce({
 *     topic: 'foo',
 *     messages: [
 *       {
 *         key: 'foo-1',
 *         data: { foo: 'bar' }
 *       }
 *     ]
 *   });
 *   console.log(`new kafka message written with offset: ${res.offset}`)
 * }
 */
export function produce(args?: ProduceArgs): ProduceResult;

/**
 * Sends a single message to a Kafka topic asynchronously.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produce
 * @param args - ProduceArgs object contains Kafka produce arguments.
 * @returns The produce result.
 * @example
 * export default function() {
 *   const res = produce({
 *     topic: 'foo',
 *     messages: [
 *       {
 *         key: 'foo-1',
 *         data: { foo: 'bar' }
 *       }
 *     ]
 *   });
 *   console.log(`new kafka message written with offset: ${res.offset}`)
 * }
 */
export function produceAsync(args?: ProduceArgs): Promise<ProduceResult>;

/**
 * Contains produce-specific arguments.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produceargs
 * @example
 * export default function() {
 *   const res = produce({
 *     topic: 'foo',
 *     messages: [
 *       {
 *         key: 'foo-1',
 *         data: { foo: 'bar-1' }
 *       },
 *       {
 *         key: 'foo-2',
 *         data: { foo: 'bar-2' }
 *       }
 *     ]
 *   });
 * }
 */
export interface ProduceArgs {
    /** Kafka cluster name. Used when topic name is not unique. */
    cluster?: string;

    /** Kafka topic name. If not specified, message will be written to a random topic. */
    topic?: string;

    /** Kafka partition index. If not specified, the message will be written to any partition */
    partition?: number;

    /** Kafka message key. If not specified, a random key will be generated based on the topic configuration. */
    key?: JSONValue;

    /** Kafka message value. If not specified, a random value will be generated based on the topic configuration. */
    value?: JSONValue;

    /** Kafka message headers. */
    headers?: { [name: string]: JSONValue };

    /**
     * An array of Kafka messages
     * @see Message
     * @example
     * export default function() {
     *   const res = produce({
     *     topic: 'foo',
     *     messages: [
     *       {
     *         key: 'foo-1',
     *         data: { foo: 'bar-1' }
     *       },
     *       {
     *         key: 'foo-2',
     *         data: { foo: 'bar-2' }
     *       }
     *     ]
     *   });
     * }
     */
    messages?: Message[];

    /**
     * The retry option is used if script is executed before Kafka topic is set up.
     */
    retry?: ProduceRetry;
}

/**
 * Represents a Kafka message
 */
export interface Message {
    /** Kafka partition index. If not specified, the message will be written to any partition */
    partition?: number;

    /** Kafka message key. If not specified, a random key will be generated based on the topic configuration. */
    key?: JSONValue;

    /** Kafka message value. If data and value are not specified, a random value will be generated based on the topic configuration. */
    data?: JSONValue;

    /** Kafka message value not validating against schema. If data and value are not specified, a random value will be generated based on the topic configuration. */
    value?: string | number | boolean | null;

    /** Kafka message headers. */
    headers?: { [name: string]: JSONValue };
}

/**
 * Contains information of the written Kafka message.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/produceresult
 * @example
 * export default function() {
 *   const res = produce({ topic: 'foo' })
 *   console.log(`new kafka message written with offset: ${res.offset}`)
 * }
 */
export interface ProduceResult {
    /** Name of the Kafka cluster where the message was written. */
    readonly cluster: string;

    /** Kafka topic name where the message was written. */
    readonly topic: string;

    // ** List of produced Kafka messages */
    messages: MessageResult[];

    /** Kafka partition where the message was written. */
    readonly partition: number;

    /** The offset of the written message. */
    readonly offset: number;

    /** The key of the written message, */
    readonly key: string;

    /** The value of the written message. */
    readonly value: string;

    /** The headers of the written message */
    readonly headers: { [name: string]: string };
}

/**
 * Contains information of the written Kafka message.
 * https://mokapi.io/docs/javascript-api/mokapi-kafka/kafkamessageresult
 */
export interface MessageResult {
    /**
     * Kafka partition index in which the message was written.
     */
    readonly partition: number;

    /**
     * Kafka offset of the written message.
     */
    readonly offset: number;

    /**
     * Kafka written message key.
     */
    readonly key: string;

    /**
     * Kafka written message value.
     */
    readonly value: string;

    /**
     * Kafka written message headers.
     */
    readonly headers: { [name: string]: string };
}

/**
 * The retry option can be used to customize the configuration of the retry mechanism.
 */
export interface ProduceRetry {
    /**
     * Maximum wait time for a retry
     * MaxRetryTime number express the wait time in milliseconds.
     * MaxRetryTime string is a possibly signed sequence of
     * decimal numbers, each with optional fraction and a unit suffix,
     * such as "300ms", "-1.5h" or "2h45m".
     * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
     * @default 30000ms
     * @example
     * export default function() {
     *   produce({ topic: 'foo', messages: [{ value: 'value-1' }], retry: { maxRetryTime: '30s' } })
     * }
     */
    maxRetryTime: string | number;

    /**
     * Initial value used to calculate the wait time
     * InitialRetryTime number express the wait time in milliseconds.
     * InitialRetryTime string is a possibly signed sequence of
     * decimal numbers, each with optional fraction and a unit suffix,
     * such as "300ms", "-1.5h" or "2h45m".
     * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
     * @default 200ms
     * @example
     * export default function() {
     *   produce({ topic: 'foo', messages: [{ value: 'value-1' }], retry: { initialRetryTime: '2s' } })
     * }
     */
    initialRetryTime: string | number;

    /**
     * Factor for increasing the wait time for next retry.
     * 1st retry: 200ms
     * 2nd retry: 4 * 200ms = 800ms
     * 3th retry: 4 * 800ms = 3200ms
     * @default 4
     */
    factor: number;

    /**
     * Max number of retries
     * @default 5
     */
    retries: number;
}
