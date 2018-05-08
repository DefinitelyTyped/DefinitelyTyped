// Type definitions for ActionCable
// Project: https://github.com/rails/rails/tree/master/actioncable
// Definitions by: Vincent Zhu <https://github.com/zhu1230>
// Definitions: https://github.com/zhu1230/DefinitelyTyped

declare module ActionCable {
  interface Channel {
    unsubscribe(): void;
    perform(action: string, data: {}): void;
    send(data: Object): boolean;
  }

  interface Subscriptions {
    create(channel: string|ChannelNameWithParams, obj: CreateMixin): Channel;
  }

  interface Cable {
    subscriptions: Subscriptions;
  }

  interface CreateMixin {
    connected(): void;
    disconnected(): void;
    received(obj: Object): void;
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
