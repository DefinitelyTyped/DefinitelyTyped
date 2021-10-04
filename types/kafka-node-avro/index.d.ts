// Type definitions for kafka-node-avro 4.3.0
// Project: https://github.com/narcisoguillen/kafka-node-avro#readme
// Definitions by: Gediminas Katilevicius <https://github.com/alfamegaxq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4.3

import { Consumer, HighLevelProducer } from "kafka-node";

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
  /** Creates a HighLevelProducer on demand */
  addProducer: (options?, customPartitioner?) => Producer;
  /** Creates a Consumer on demand */
  addConsumer: (topics, options?) => Consumer;
}

/**
 * Initialize Kafka client
 */
export function init(settings: Settings): Promise<Kafka>;
