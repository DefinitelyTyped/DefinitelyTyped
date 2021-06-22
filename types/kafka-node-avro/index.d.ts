// Type definitions for kafka-node-avro 4.0
// Project: https://github.com/narcisoguillen/kafka-node-avro#readme
// Definitions by: Gediminas Katilevicius <https://github.com/alfamegaxq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface SchemaSettings {
    /** Kafka schema registry url */
    registry: string;
}

export interface KafkaSettings {
    /** Kafka broker host name */
    kafkaHost: string;
}

export interface Settings {
    /** Kafka broker settings */
    kafka: KafkaSettings;
    /** Kafka schema registry settings */
    schema: SchemaSettings;
}

export interface SendOptions {
    /** Kafka topic name to publish message */
    topic: string;
    /** Message key */
    key: string;
    /**
     * Object to send to kafka.
     * It will be automatically Avro encoded if schema registry finds a valid schema for topic
     */
    messages: object;
}

export interface Kafka {
    /** Publishes message to Kafka */
    send: (options: SendOptions) => Promise<{}>;
}

/**
 * Initialize Kafka client
 */
export function init(settings: Settings): Promise<Kafka>;
