// Type definitions for pubnub 4.0
// Project: https://github.com/pubnub/javascript
// Definitions by: bitbankinc <https://github.com/bitbankinc>, rollymaduk <https://github.com/rollymaduk>, vitosamson <https://github.com/vitosamson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// @see https://www.pubnub.com/docs/web-javascript/api-reference-configuration

declare class Pubnub {
  constructor(config: Pubnub.PubnubConfig);

  static CATEGORIES: Pubnub.Categories;

  static OPERATIONS: Pubnub.Operations;

  static generateUUID(): string;

  setUUID(uuid: string): void;

  getUUID(): string;

  setAuthKey(authKey: string): void;

  setFilterExpression(filterExpression: string): void;

  getFilterExpression(): string;

  publish(
    params: Pubnub.PublishParameters,
    callback: (status: Pubnub.PublishStatus, response: Pubnub.PublishResponse) => void
  ): void;

  publish(
    params: Pubnub.PublishParameters
  ): Promise<Pubnub.PublishResponse>;

  fire(
    params: Pubnub.FireParameters,
    callback: (status: Pubnub.PublishStatus, response: Pubnub.PublishResponse) => void
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
    callback: (status: Pubnub.HereNowStatus, response: Pubnub.HereNowResponse) => void
  ): void;

  hereNow(
    params: Pubnub.HereNowParameters
  ): Promise<Pubnub.HereNowResponse>;

  whereNow(
    params: Pubnub.WhereNowParameters,
    callback: (status: Pubnub.WhereNowStatus, response: Pubnub.WhereNowResponse) => void
  ): void;

  whereNow(
    params: Pubnub.WhereNowParameters
  ): Promise<Pubnub.WhereNowResponse>;

  getState(
    params: Pubnub.GetStateParameters,
    callback: (status: Pubnub.GetStateStatus, state: Pubnub.GetStateResponse) => void
  ): void;

  getState(
    params: Pubnub.GetStateParameters
  ): Promise<Pubnub.GetStateResponse>;

  setState(
    params: Pubnub.SetStateParameters,
    callback: (status: Pubnub.SetStateStatus, state: Pubnub.SetStateResponse) => void
  ): void;

  setState(
    params: Pubnub.SetStateParameters
  ): Promise<Pubnub.SetStateResponse>;
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

  interface MessageEvent {
    channel: string;
    subscription: string;
    timetoken: string;
    message: any;
    publisher: string;

    /**
     * @deprecated
     */
    actualChannel: string;

    /**
     * @deprecated
     */
    subscribedChannel: string;
  }

  // PubnubData was renamed to MessageEvent, keep old name for backwards compatibility
  type PubnubData = MessageEvent;

  interface StatusEvent {
    category: string; // see Pubnub.Categories
    operation: string; // see Pubnub.Operations
    affectedChannels: string[];
    subscribedChannels: string[];
    affectedChannelGroups: string[];
    lastTimetoken: number | string;
    currentTimetoken: number | string;
  }

  interface PresenceEvent {
    action: 'join' | 'leave' | 'state-change' | 'timeout';
    channel: string;
    occupancy: number;
    state?: any;
    subscription: string;
    timestamp: number;
    timetoken: string;
    uuid: string;

    /**
     * @deprecated
     */
    actualChannel: string;
    /**
     * @deprecated
     */
    subscribedChannel: string;
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

  interface PublishStatus {
    operation: string; // see Pubnub.Operations
    category: string; // see Pubnub.Categories;
    error: boolean;
    errorData: Error;
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
    status?(statusEvent: StatusEvent): void;
    message?(messageEvent: MessageEvent): void;
    presence?(presenceEvent: PresenceEvent): void;
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
    channels: {
      [channel: string]: {
        name: string;
        occupancy: number;
        occupants: Array<{
          uuid: string;
          state?: any;
        }>;
      };
    };
  }

  interface HereNowStatus {
    error: boolean;
    operation: string; // see Pubnub.Operations;
    statusCode: number;
  }

  // whereNow
  interface WhereNowParameters {
    uuid?: string;
  }

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

  interface SetStateStatus {
    error: boolean;
    operation: string;
    statusCode: number;
  }

  interface SetStateResponse {
    state: any;
  }

  // getState
  interface GetStateParameters {
    uuid?: string;
    channels?: string[];
    channelGroups?: string[];
  }

  interface GetStateStatus {
    error: boolean;
    operation: string;
    statusCode: number;
  }

  interface GetStateResponse {
    channels: {
      [channel: string]: any;
    };
  }

  interface Categories {
    PNNetworkUpCategory: string;
    PNNetworkDownCategory: string;
    PNNetworkIssuesCategory: string;
    PNTimeoutCategory: string;
    PNBadRequestCategory: string;
    PNAccessDeniedCategory: string;
    PNUnknownCategory: string;
    PNReconnectedCategory: string;
    PNConnectedCategory: string;
    PNRequestMessageCountExceededCategory: string;
  }

  interface Operations {
    PNTimeOperation: string;
    PNHistoryOperation: string;
    PNDeleteMessagesOperation: string;
    PNFetchMessagesOperation: string;
    PNSubscribeOperation: string;
    PNUnsubscribeOperation: string;
    PNPublishOperation: string;
    PNPushNotificationEnabledChannelsOperation: string;
    PNRemoveAllPushNotificationsOperation: string;
    PNWhereNowOperation: string;
    PNSetStateOperation: string;
    PNHereNowOperation: string;
    PNGetStateOperation: string;
    PNHeartbeatOperation: string;
    PNChannelGroupsOperation: string;
    PNRemoveGroupOperation: string;
    PNChannelsForGroupOperation: string;
    PNAddChannelsToGroupOperation: string;
    PNRemoveChannelsFromGroupOperation: string;
    PNAccessManagerGrant: string;
    PNAccessManagerAudit: string;
  }
}

export = Pubnub;
