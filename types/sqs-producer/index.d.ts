// Type definitions for sqs-producer 1.5
// Project: https://github.com/BBC/sqs-producer
// Definitions by: Daniel Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SQS } from "aws-sdk";

export interface Options {
  queueUrl: string;
  region?: string;
  batchSize?: number;
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
}

export interface Producer {
  send(messages: string[] | ProducerMessage[], cb: ProducerCallback<void>): void;
  queueSize(cb: ProducerCallback<number>): void;
}

export function create(opts: Options): Producer;
