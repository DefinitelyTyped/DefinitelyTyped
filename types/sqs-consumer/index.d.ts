// Type definitions for sqs-consumer 3.5
// Project: https://github.com/BBC/sqs-consumer
// Definitions by: Daniel Chao <http://dchao.co/>, Eric Byers <http://www.github.com/EricByers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SQS } from "aws-sdk";

export type ConsumerDone = (error?: SQSError) => void;

export interface Options {
  queueUrl: string;
  handleMessage(message: SQS.Message, done: ConsumerDone): any;
  region?: string;
  attributeNames?: string[];
  messageAttributeNames?: string[];
  batchSize?: number;
  visibilityTimeout?: number;
  waitTimeSeconds?: number;
  authenticationErrorTimeout?: number;
  sqs?: SQS;
}

declare class SQSError extends Error {}

declare class Consumer extends NodeJS.EventEmitter {
  start(): void;
  stop(): void;
  static create(opts: Options): Consumer;
}

export default Consumer;
