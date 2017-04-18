// Type definitions for sqs-producer
// Project: https://github.com/BBC/sqs-producer
// Definitions by: Daniel Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SQS } from "aws-sdk";

interface Options {
  queueUrl: string;
  region?: string;
  batchSize?: number;
  sqs?: SQS;
}

type ProducerCallback<T> = (err?: Error, data?: T) => any;

interface ProducerMessageAttribute {
  DataType: "String" | "Binary";
  StringValue?: string;
  BinaryValue?: Buffer;
}

interface ProducerMessage {
  id: string;
  body: string;
  messageAttributes?: { [key: string]: ProducerMessageAttribute };
  delaySeconds?: number;
}

interface Producer {
  send(messages: string[] | ProducerMessage[], cb: ProducerCallback<void>): void;
  queueSize(cb: ProducerCallback<number>): void;
}

export function create(opts: Options): Producer;
