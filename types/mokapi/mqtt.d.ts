/**
 * Sends a single message to a MQTT topic.
 * https://mokapi.io/docs/javascript-api/mokapi-mqtt/publish
 * @param args - PublishArgs object contains MQTT publish arguments.
 * @returns The publish result.
 * @example
 * export default function() {
 *   publish({
 *     topic: 'foo',
 *     value: JSON.stringify({ foo: bar })
 *   });
 * }
 */
export function publish(args?: PublishArgs): PublishResult;

/**
 * Sends a single message to a MQTT topic asynchronously.
 * https://mokapi.io/docs/javascript-api/mokapi-mqtt/publishAsync
 * @param args - PublishArgs object contains MQTT publish arguments.
 * @returns The publish result.
 * @example
 * export default function() {
 *   publish({
 *     topic: 'foo',
 *     value: JSON.stringify({ foo: bar })
 *   });
 * }
 */
export function publishAsync(args?: PublishArgs): Promise<PublishResult>;

/**
 * Contains publish-specific arguments.
 * https://mokapi.io/docs/javascript-api/mokapi-mqtt/publishargs
 * @example
 * export default function() {
 *   const res = publish({
 *     topic: 'foo',
 *     value: `{"foo": "bar"}`
 *   });
 * }
 */
export interface PublishArgs {
    /** MQTT cluster name. Used when topic name is not unique. */
    cluster?: string;

    /** MQTT topic name. If not specified, message will be written to a random topic. */
    topic?: string;

    /** MQTT message value. If not specified, a random value will be generated based on the topic configuration. */
    value: string;

    /** Whether the message should be retained */
    retain?: boolean;

    /**
     * The retry option is used if script is executed before Kafka topic is set up.
     */
    retry?: ProduceRetry;
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
export interface PublishResult {
    /** Name of the Kafka cluster where the message was written. */
    readonly cluster: string;

    /** Kafka topic name where the message was written. */
    readonly topic: string;

    /** The value of the written message. */
    readonly value: string;
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
