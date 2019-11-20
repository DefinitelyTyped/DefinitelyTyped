// Type definitions for sqs-producer 1.6
// Project: https://github.com/BBC/sqs-producer
// Definitions by: Daniel Chao <http://dchao.co/>
//                 John Hamelink <https://johnhamelink.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SQS } from "aws-sdk";

export interface Options {
  accessKeyId?: string;
  batchSize?: number;
  queueUrl: string;
  region?: string;
  secretAccessKey?: string;
  sqs?: SQS;
}

export type ProducerCallback<T> = (err?: Error, data?: T) => any;

export interface ProducerMessageAttribute {
  DataType: "String" | "Binary";
  StringValue?: string;
  BinaryValue?: Buffer;
}

export interface ProducerMessage {
  id: string;
  body: string;
  messageAttributes?: { [key: string]: ProducerMessageAttribute };
  delaySeconds?: number;
  groupId?: string;
  deduplicationId?: string;
}

export interface Producer {
  send(messages: string | string[] | ProducerMessage | ProducerMessage[], cb: ProducerCallback<void>): void;
  queueSize(cb: ProducerCallback<number>): void;
}

export function create(opts: Options): Producer;
