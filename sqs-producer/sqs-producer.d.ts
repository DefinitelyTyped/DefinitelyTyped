// Type definitions for sqs-producer
// Project: https://github.com/BBC/sqs-producer
// Definitions by: Daniel Chao <http://dchao.co/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="aws-sdk"/>

declare module "sqs-producer" {

  import { SQS } from "aws-sdk";

  module SQSProducer {

    interface ProducerOpts {
      queueUrl: string;
      region?: string;
      batchSize?: number;
      sqs?: SQS;
    }

    interface ProducerCallback<T> {
      (err?: Error, data?: T): any;
    }

    interface ProducerMessageAttribute {
      DataType: "String"|"Binary";
      StringValue?: string;
      BinaryValue?: Buffer;
    }

    interface ProducerMessage {
      id: string;
      body: string;
      messageAttributes?: { [key: string]: ProducerMessageAttribute }
      delaySeconds?: number;
    }

    interface ProducerFactory {
      create(opts: ProducerOpts): Producer;
    }

    interface Producer {
      send(messages: string[], cb: ProducerCallback<void>): void;
      send(messages: ProducerMessage[], cb: ProducerCallback<void>): void;
      queueSize(cb: ProducerCallback<number>): void;
    }
  }

  const Producer: SQSProducer.ProducerFactory;
  export = Producer;
}
