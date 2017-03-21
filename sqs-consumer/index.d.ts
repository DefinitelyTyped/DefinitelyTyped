// Type definitions for sqs-consumer
// Project: https://github.com/BBC/sqs-consumer
// Definitions by: Daniel Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="aws-sdk"/>

declare module "sqs-consumer" {

  import { SQS } from "aws-sdk";

  module SQSConsumer {

    interface MessageHandler {
      (message: SQS.Message, done: Function): any;
    }

    interface ConsumerOpts {
      queueUrl: string;
      handleMessage: MessageHandler;
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
      start (): void;
      stop (): void;
    }

    interface ConsumerFactory {
      create(opts: ConsumerOpts): Consumer;
    }
  }
  const Consumer: SQSConsumer.ConsumerFactory;
  export = Consumer;

}
