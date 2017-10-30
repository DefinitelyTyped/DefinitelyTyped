// Type definitions for pubnub 4.0
// Project: https://github.com/pubnub/javascript
// Definitions by: bitbankinc <https://github.com/bitbankinc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Pubnub {
  constructor(config: Pubnub.PubnubConfig);

  publish(
    params: {channel: string, message: any},
    callback: (status: any, response: any) => void
  ): void;

  subscribe(params: {channels: string[]}): void;

  unsubscribe(params: {channels: string[]}): void;

  addListener(params: {
    status?: (statusEvent: Pubnub.StatusEvent) => void;
    message?: (data: Pubnub.PubnubData) => void;
    presence?: (presenceEvent: any) => void;
  }): void;
}

declare namespace Pubnub {
  interface PubnubConfig {
    subscribeKey: string;
    publishKey?: string;
    secretKey?: string;
    authKey?: string;
    ssl?: boolean;
  }

  interface PubnubData {
    channel: string;
    message: any;
  }

  interface StatusEvent {
    category: string;
    operation: string;
    affectedChannels: string[];
    subscribedChannels: string[];
    affectedChannelGroups: string[];
    lastTimetoken: number | string;
    currentTimetoken: number | string;
  }
}

export default Pubnub;
