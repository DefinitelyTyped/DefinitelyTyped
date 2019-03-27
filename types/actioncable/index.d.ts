// Type definitions for ActionCable 5.2
// Project: https://github.com/rails/rails/tree/master/actioncable/app/assets/javascripts
// Definitions by: Vincent Zhu <https://github.com/zhu1230>
//                 Jared Szechy <https://github.com/szechyjs>
// Definitions: https://github.com/zhu1230/DefinitelyTyped
// TypeScript Version: 2.3

declare module ActionCable {
  interface Channel {
    unsubscribe(): void;
    perform(action: string, data: {}): void;
    send(data: any): boolean;
  }

  interface Subscriptions {
    create(channel: string|ChannelNameWithParams, obj: CreateMixin): Channel;
  }

  interface Cable {
    subscriptions: Subscriptions;
    send(data: any): void;
    connect(): void;
    disconnect(): void;
    ensureActiveConnection(): void;
  }

  interface CreateMixin {
    connected(): void;
    disconnected(): void;
    received(obj: any): void;
    [key: string]: Function;
  }

  interface ChannelNameWithParams {
    channel: string;
    [key: string]: any;
  }

  function createConsumer(): Cable;
  function createConsumer(url: string): Cable;
}

declare interface AppInterface {
  cable?: ActionCable.Cable;
  network?: ActionCable.Channel;
}

declare var App: AppInterface;

declare module 'actioncable' {
  export = ActionCable;
}
