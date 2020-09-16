// Type definitions for @pager/jackrabbit 4.8
// Project: https://github.com/pagerinc/jackrabbit
// Definitions by: Benjamin Schuster-Boeckler <https://github.com/dagams>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as amqplib from "amqplib";

export = jackrabbit;
declare function jackrabbit(url: string): jackrabbit.JackRabbit;

declare namespace jackrabbit {
  type Message = amqplib.Message;

  type ExchangeOptions = amqplib.Options.AssertExchange & {
    noReply?: boolean;
  };

  interface JackRabbit extends NodeJS.EventEmitter {
    default(): Exchange;
    direct(name?: string, options?: ExchangeOptions): Exchange;
    fanout(name?: string, options?: ExchangeOptions): Exchange;
    topic(name?: string, options?: ExchangeOptions): Exchange;
    close(callback?: (e: Error) => any): void;
    getInternals: () => {
      amqp: any;
      connection: amqplib.Connection;
    };
  }

  enum exchangeType {
    direct = "direct",
    fanout = "fanout",
    topic = "topic"
  }

  interface Exchange extends NodeJS.EventEmitter {
    name: string;
    type: exchangeType;
    options: amqplib.Options.AssertExchange;
    queue(options: QueueOptions): Queue;
    connect(con: amqplib.Connection): Exchange;
    publish(message: any, options?: PublishOptions): Exchange;
  }

  type PublishOptions = amqplib.Options.Publish & {
    key: string;
    reply?: AckCallback;
  };

  type QueueOptions = amqplib.Options.AssertQueue & {
    name?: string;
    key?: string;
    keys?: ReadonlyArray<string>;
    prefetch?: number;
  };

  type AckCallback = (data?: any) => void;

  interface Queue extends NodeJS.EventEmitter {
    name: string;
    options: QueueOptions;
    connect(con: amqplib.Connection): void;
    consume: (
      callback: (
        data: any,
        ack: AckCallback,
        nack: () => void,
        msg: Message
      ) => void,
      options?: amqplib.Options.Consume
    ) => void;
    cancel(done: any): void;
    purge(done: any): void;
  }
}
