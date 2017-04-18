// Type definitions for sqs-consumer
// Project: https://github.com/BBC/sqs-consumer
// Definitions by: Daniel Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SQS } from "aws-sdk";

interface Options {
  queueUrl: string;
  handleMessage(message: SQS.Message, done: Function): any;
  region?: string;
  attributeNames?: string[];
  messageAttributeNames?: string[];
  batchSize?: number;
  visibilityTimeout?: number;
  waitTimeSeconds?: number;
  authenticationErrorTimeout?: number;
  sqs?: SQS;
}

interface Consumer extends NodeJS.EventEmitter {
  start(): void;
  stop(): void;
}

export function create(opts: Options): Consumer;
