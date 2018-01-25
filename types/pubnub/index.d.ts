// Type definitions for pubnub 4.0
// Project: https://github.com/pubnub/javascript
// Definitions by: bitbankinc <https://github.com/bitbankinc>
//                 rollymaduk <https://github.com/rollymaduk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// @see https://www.pubnub.com/docs/web-javascript/api-reference-configuration

declare class Pubnub {
  constructor(config: Pubnub.PubnubConfig);

  setAuthKey(authKey: string): void;

  setFilterExpression(filterExpression: string): void;

  getFilterExpression(): string;

  publish(
    params: Pubnub.PublishParameters,
    callback: (status: any, response: Pubnub.PublishResponse) => void
  ): void;

  publish(
    params: Pubnub.PublishParameters
  ): Promise<Pubnub.PublishResponse>;

  fire(
    params: Pubnub.FireParameters,
    callback: (status: any, response: Pubnub.PublishResponse) => void
  ): void;

  fire(
    params: Pubnub.FireParameters
  ): Promise<Pubnub.PublishResponse>;

  subscribe(params: Pubnub.SubscribeParameters): void;

  unsubscribe(params: Pubnub.UnsubscribeParameters): void;

  unsubscribeAll(): void;

  stop(): void;

  addListener(params: Pubnub.ListenerParameters): void;

  removeListener(params: Pubnub.ListenerParameters): void;

  hereNow(
    params: Pubnub.HereNowParameters,
    callback: (status: any, response: Pubnub.HereNowResponse) => void
  ): void;

  hereNow(
    params: Pubnub.HereNowParameters
  ): Promise<Pubnub.HereNowResponse>;

  whereNow(
    params: {uuid: string},
    callback: (status: Pubnub.WhereNowStatus, response: Pubnub.WhereNowResponse) => void
  ): void;
}

declare namespace Pubnub {
  interface PubnubConfig {
    subscribeKey: string;
    publishKey?: string;
    cipherKey?: string;
    authKey?: string;
    logVerbosity?: boolean;
    uuid?: string;
    ssl?: boolean;
    origin?: string;
    presenceTimeout?: number;
    heartbeatInterval?: number;
    restore?: boolean;
    keepAlive?: boolean;
    keepAliveSettings?: {
      keepAliveMsecs?: number;
      freeSocketKeepAliveTimeout?: number;
      timeout?: number;
      maxSockets?: number;
      maxFreeSockets?: number;
    };
    suppressLeaveEvents?: boolean;
    secretKey?: string;
  }

  interface PubnubData {
    actualChannel: string;
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

  // publish
  interface PublishParameters {
    message: any;
    channel: string;
    storeInHistory?: boolean;
    sendByPost?: boolean;
    meta?: any;
    ttl?: number;
  }

  interface PublishResponse {
    timetoken: number;
  }

  // fire
  interface FireParameters {
    message: any;
    channel: string;
    sendByPost?: boolean;
    meta?: any;
  }

  // subscribe
  interface SubscribeParameters {
    channels?: string[];
    channelGroups?: string[];
    withPresence?: boolean;
    timetoken?: number;
  }

  // unsubscribe
  interface UnsubscribeParameters {
    channels?: string[];
    channelGroups?: string[];
  }

  // addListener
  interface ListenerParameters {
    status?: (statusEvent: StatusEvent) => void;
    message?: (data: PubnubData) => void;
    presence?: (presenceEvent: any) => void;
  }

  // hereNow
  interface HereNowParameters {
    channels?: string[];
    channelGroups?: string[];
    includeUUIDs?: boolean;
    includeState?: boolean;
  }

  interface HereNowResponse {
    totalChannels: number;
    totalOccupancy: number;
    channels: {[channel: string]: any};
  }

  // whereNow
  interface WhereNowStatus {
    error: boolean;
    operation: string;
    statusCode: number;
  }

  interface WhereNowResponse {
    channels: string[];
  }

  // setState
  interface SetStateParameters {
    channels?: string[];
    channelGroups?: string[];
    state?: any;
  }

  // getState
  interface GetStateParameters {
    uuid?: string;
    channels?: string[];
    channelGroups?: string[];
  }
}

export = Pubnub;
