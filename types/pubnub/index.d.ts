// Type definitions for pubnub 4.27
// Project: https://github.com/pubnub/javascript
// Definitions by:  bitbankinc <https://github.com/bitbankinc>,
//                  rollymaduk <https://github.com/rollymaduk>,
//                  vitosamson <https://github.com/vitosamson>,
//                  FlorianDr <https://github.com/FlorianDr>,
//                  danduh <https://github.com/danduh>,
//                  ChristianBoehlke <https://github.com/ChristianBoehlke>,
//                  divyun <https://github.com/divyun>
//                  mohitpubnub <https://github.com/mohitpubnub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// @see https://www.pubnub.com/docs/web-javascript/api-reference-configuration
// TypeScript Version: 2.2

declare class Pubnub {
    constructor(config: Pubnub.PubnubConfig);

    static CATEGORIES: Pubnub.Categories;

    static OPERATIONS: Pubnub.Operations;

    static generateUUID(): string;

    static notificationPayload(title: string, body: string): Pubnub.NotificationsPayload;

    channelGroups: Pubnub.ChannelGroups;

    push: Pubnub.Push;

    setUUID(uuid: string): void;

    getUUID(): string;

    setAuthKey(authKey: string): void;

    setFilterExpression(filterExpression: string): void;

    getFilterExpression(): string;

    publish(
        params: Pubnub.PublishParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.PublishResponse) => void,
    ): void;

    publish(params: Pubnub.PublishParameters): Promise<Pubnub.PublishResponse>;

    fire(
        params: Pubnub.FireParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.PublishResponse) => void,
    ): void;

    fire(params: Pubnub.FireParameters): Promise<Pubnub.PublishResponse>;

    signal(
        params: Pubnub.SignalParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.SignalResponse) => void,
    ): void;

    signal(params: Pubnub.SignalParameters): Promise<Pubnub.SignalResponse>;

    history(
        params: Pubnub.HistoryParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.HistoryResponse) => void,
    ): void;

    history(params: Pubnub.HistoryParameters): Promise<Pubnub.HistoryResponse>;

    fetchMessages(
        params: Pubnub.FetchMessagesParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.FetchMessagesResponse) => void,
    ): void;

    fetchMessages(params: Pubnub.FetchMessagesParameters): Promise<Pubnub.FetchMessagesResponse>;

    deleteMessages(params: Pubnub.DeleteMessagesParameters, callback: (status: Pubnub.PubnubStatus) => void): void;

    deleteMessages(params: Pubnub.DeleteMessagesParameters): Promise<void>;

    messageCounts(
        params: Pubnub.MessageCountsParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.MessageCountsResponse) => void,
    ): void;

    messageCounts(params: Pubnub.MessageCountsParameters): Promise<Pubnub.MessageCountsResponse>;

    subscribe(params: Pubnub.SubscribeParameters): void;

    unsubscribe(params: Pubnub.UnsubscribeParameters): void;

    unsubscribeAll(): void;

    stop(): void;

    reconnect(): void;

    addListener(params: Pubnub.ListenerParameters): void;

    removeListener(params: Pubnub.ListenerParameters): void;

    hereNow(
        params: Pubnub.HereNowParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.HereNowResponse) => void,
    ): void;

    hereNow(params: Pubnub.HereNowParameters): Promise<Pubnub.HereNowResponse>;

    whereNow(
        params: Pubnub.WhereNowParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.WhereNowResponse) => void,
    ): void;

    whereNow(params: Pubnub.WhereNowParameters): Promise<Pubnub.WhereNowResponse>;

    getState(
        params: Pubnub.GetStateParameters,
        callback: (status: Pubnub.PubnubStatus, state: Pubnub.GetStateResponse) => void,
    ): void;

    getState(params: Pubnub.GetStateParameters): Promise<Pubnub.GetStateResponse>;

    setState(
        params: Pubnub.SetStateParameters,
        callback: (status: Pubnub.PubnubStatus, state: Pubnub.SetStateResponse) => void,
    ): void;

    setState(params: Pubnub.SetStateParameters): Promise<Pubnub.SetStateResponse>;

    grant(params: Pubnub.GrantParameters, callback: (status: Pubnub.PubnubStatus, response: {}) => void): void;

    grant(params: Pubnub.GrantParameters): Promise<{}>;

    createUser(
        params: Pubnub.UserInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetUserResponse) => void,
    ): void;

    createUser(params: Pubnub.UserInputParameters): Promise<Pubnub.GetUserResponse>;

    updateUser(
        params: Pubnub.UserInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetUserResponse) => void,
    ): void;

    updateUser(params: Pubnub.UserInputParameters): Promise<Pubnub.GetUserResponse>;

    deleteUser(
        userId: string,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.DeleteUserResponse) => void,
    ): void;

    deleteUser(userId: string): Promise<Pubnub.DeleteUserResponse>;

    getUsers(
        params: Pubnub.GetObjectsParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetUsersResponse) => void,
    ): void;

    getUsers(params: Pubnub.GetObjectsParameters): Promise<Pubnub.GetUsersResponse>;

    getUser(
        params: Pubnub.GetUserParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetUserResponse) => void,
    ): void;

    getUser(params: Pubnub.GetUserParameters): Promise<Pubnub.GetUserResponse>;

    createSpace(
        params: Pubnub.SpaceInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetSpaceResponse) => void,
    ): void;

    createSpace(params: Pubnub.SpaceInputParameters): Promise<Pubnub.GetSpaceResponse>;

    updateSpace(
        params: Pubnub.SpaceInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetSpaceResponse) => void,
    ): void;

    updateSpace(params: Pubnub.SpaceInputParameters): Promise<Pubnub.GetSpaceResponse>;

    deleteSpace(
        spaceId: string,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.DeleteSpaceResponse) => void,
    ): void;

    deleteSpace(spaceId: string): Promise<Pubnub.DeleteSpaceResponse>;

    getSpaces(
        params: Pubnub.GetObjectsParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetSpacesResponse) => void,
    ): void;

    getSpaces(params: Pubnub.GetObjectsParameters): Promise<Pubnub.GetSpacesResponse>;

    getSpace(
        params: Pubnub.GetSpaceParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetSpaceResponse) => void,
    ): void;

    getSpace(params: Pubnub.GetSpaceParameters): Promise<Pubnub.GetSpaceResponse>;

    getMemberships(
        params: Pubnub.GetMembershipsParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembershipsResponse) => void,
    ): void;

    getMemberships(params: Pubnub.GetMembershipsParameters): Promise<Pubnub.GetMembershipsResponse>;

    getMembers(
        params: Pubnub.GetMembersParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembersResponse) => void,
    ): void;

    getMembers(params: Pubnub.GetMembersParameters): Promise<Pubnub.GetMembersResponse>;

    joinSpaces(
        params: Pubnub.MembershipsInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembershipsResponse) => void,
    ): void;

    joinSpaces(params: Pubnub.MembershipsInputParameters): Promise<Pubnub.GetMembershipsResponse>;

    updateMemberships(
        params: Pubnub.MembershipsInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembershipsResponse) => void,
    ): void;

    updateMemberships(params: Pubnub.MembershipsInputParameters): Promise<Pubnub.GetMembershipsResponse>;

    leaveSpaces(
        params: Pubnub.LeaveSpacesParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembershipsResponse) => void,
    ): void;

    leaveSpaces(params: Pubnub.LeaveSpacesParameters): Promise<Pubnub.GetMembershipsResponse>;

    addMembers(
        params: Pubnub.MembersInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembersResponse) => void,
    ): void;

    addMembers(params: Pubnub.MembersInputParameters): Promise<Pubnub.GetMembersResponse>;

    updateMembers(
        params: Pubnub.MembersInputParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembersResponse) => void,
    ): void;

    updateMembers(params: Pubnub.MembersInputParameters): Promise<Pubnub.GetMembersResponse>;

    removeMembers(
        params: Pubnub.RemoveMembersParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMembersResponse) => void,
    ): void;

    removeMembers(params: Pubnub.RemoveMembersParameters): Promise<Pubnub.GetMembersResponse>;

    addMessageAction(
        params: Pubnub.AddMessageActionParameters,
        callback: (status: Pubnub.PubnubStatus, response: { data: Pubnub.MessageAction }) => void,
    ): void;

    addMessageAction(params: Pubnub.AddMessageActionParameters): Promise<{ data: Pubnub.MessageAction }>;

    removeMessageAction(
        params: Pubnub.RemoveMessageActionParameters,
        callback: (status: Pubnub.PubnubStatus, response: { data: {} }) => void,
    ): void;

    removeMessageAction(params: Pubnub.RemoveMessageActionParameters): Promise<{ data: {} }>;

    getMessageActions(
        params: Pubnub.GetMessageActionsParameters,
        callback: (status: Pubnub.PubnubStatus, response: Pubnub.GetMessageActionsResponse) => void,
    ): void;

    getMessageActions(params: Pubnub.GetMessageActionsParameters): Promise<Pubnub.GetMessageActionsResponse>;

    encrypt(data: string, customCipherKey?: string, options?: Pubnub.CryptoParameters): string;

    decrypt(data: string | object, customCipherKey?: string, options?: Pubnub.CryptoParameters): any;

    time(): Promise<Pubnub.FetchTimeResponse>;

    time(callback: (status: Pubnub.PubnubStatus, response: Pubnub.FetchTimeResponse) => void): void;
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
        requestMessageCountThreshold?: number;
        autoNetworkDetection?: boolean;
        listenToBrowserNetworkEvents?: boolean;
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

    interface SignalEvent {
        channel: string;
        subscription: string;
        timetoken: string;
        message: any;
        publisher: string;
    }

    interface UserEvent {
        channel: string;
        subscription: string;
        timetoken: string;
        message: {
            event: string;
            type: string;
            data: UserData;
        };
        publisher: string;
    }

    interface SpaceEvent {
        channel: string;
        subscription: string;
        timetoken: string;
        message: {
            event: string;
            type: string;
            data: SpaceData;
        };
        publisher: string;
    }

    interface MembershipData {
        userId: string;
        spaceId: string;
        eTag: string;
        created: string;
        updated: string;
        custom?: object | null;
    }

    interface MembershipEvent {
        channel: string;
        subscription: string;
        timetoken: string;
        message: {
            event: string;
            type: string;
            data: MembershipData;
        };
        publisher: string;
    }

    interface MessageActionEvent {
        channel: string;
        publisher: string;
        subscription?: string;
        timetoken: string;
        message: {
            event: string;
            data: MessageAction;
        };
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

    // signal

    interface SignalParameters {
        message: any;
        channel: string;
    }

    interface SignalResponse {
        timetoken: number;
    }

    interface HistoryParameters {
        channel: string;
        count: number;
        stringifiedTimeToken?: boolean;
        includeTimetoken?: boolean;
        reverse?: boolean;
        start?: string | number; // timetoken
        end?: string | number; // timetoken
        includeMeta?: boolean;
    }

    interface HistoryMessage {
        entry: any;
        timetoken?: string | number;
        meta?: {
            [key: string]: string;
        };
    }

    interface HistoryResponse {
        endTimeToken?: string | number;
        startTimeToken?: string | number;
        messages: HistoryMessage[];
    }

    interface FetchMessagesParameters {
        channels: string[];
        count?: number;
        stringifiedTimeToken?: boolean;
        start?: string | number; // timetoken
        end?: string | number; // timetoken
        withMessageActions?: boolean;
        includeMeta?: boolean;
        includeMessageActions?: boolean;
    }

    interface FetchMessagesResponse {
        channels: {
            [channel: string]: Array<{
                message: any;
                timetoken: string | number;
                meta?: {
                    [key: string]: any;
                };
                actions: {
                    [type: string]: {
                        [value: string]: Array<{
                            uuid: string;
                            actionTimetoken: string | number; // timetoken
                        }>;
                    };
                };
            }>;
        };
    }

    interface DeleteMessagesParameters {
        channel: string;
        start?: string | number; // timetoken
        end?: string | number; // timetoken
    }

    interface MessageCountsParameters {
        channels: string[];
        channelTimetokens: string[] | number[];
    }

    interface MessageCountsResponse {
        channels: {
            [channel: string]: number;
        };
    }

    interface Push {
        addChannels(params: PushChannelParameters, callback: (status: PubnubStatus) => void): void;

        addChannels(params: PushChannelParameters): Promise<{}>;

        listChannels(
            params: PushDeviceParameters,
            callback: (status: PubnubStatus, response: PushListChannelsResponse) => void,
        ): void;

        listChannels(params: PushDeviceParameters): Promise<PushListChannelsResponse>;

        removeChannels(params: PushChannelParameters, callback: (status: PubnubStatus) => void): void;

        removeChannels(params: PushChannelParameters): Promise<{}>;

        deleteDevice(params: PushDeviceParameters, callback: (status: PubnubStatus) => void): void;

        deleteDevice(params: PushDeviceParameters): Promise<{}>;
    }

    interface PushChannelParameters {
        channels: string[];
        device: string;
        pushGateway: string;
    }

    interface PushDeviceParameters {
        device: string;
        pushGateway: string;
    }

    interface PushListChannelsResponse {
        channels: string[];
    }

    interface PubnubStatus {
        error: boolean;
        category?: string; // see Pubnub.Categories
        operation: string; // see Pubnub.Operations
        statusCode: number;
        errorData?: Error;
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

    // channelGroups
    interface ChannelGroups {
        addChannels(params: AddChannelParameters, callback: (status: PubnubStatus) => void): void;

        addChannels(params: AddChannelParameters): Promise<{}>;

        removeChannels(params: RemoveChannelParameters, callback: (status: PubnubStatus) => void): void;

        removeChannels(params: RemoveChannelParameters): Promise<{}>;

        listChannels(
            params: ListChannelsParameters,
            callback: (status: PubnubStatus, response: ListChannelsResponse) => void,
        ): void;

        listChannels(params: ListChannelsParameters): Promise<ListChannelsResponse>;

        listGroups(callback: (status: PubnubStatus, response: ListAllGroupsResponse) => void): void;

        listGroups(): Promise<ListAllGroupsResponse>;

        deleteGroup(params: DeleteGroupParameters, callback: (status: PubnubStatus) => void): void;

        deleteGroup(params: DeleteGroupParameters): Promise<{}>;
    }

    interface AddChannelParameters {
        channels: string[];
        channelGroup: string;
    }

    interface RemoveChannelParameters {
        channels: string[];
        channelGroup: string;
    }

    interface ListChannelsParameters {
        channelGroup: string;
    }

    interface DeleteGroupParameters {
        channelGroup: string;
    }

    interface ListAllGroupsResponse {
        groups: string[];
    }

    interface ListChannelsResponse {
        channels: string[];
    }

    // addListener
    interface ListenerParameters {
        status?(statusEvent: StatusEvent): void;

        message?(messageEvent: MessageEvent): void;

        presence?(presenceEvent: PresenceEvent): void;

        signal?(signalEvent: SignalEvent): void;

        user?(userEvent: UserEvent): void;

        space?(spaceEvent: SpaceEvent): void;

        membership?(membershipEvent: MembershipEvent): void;

        messageAction?(messageActionEvent: MessageActionEvent): void;
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

    // whereNow
    interface WhereNowParameters {
        uuid?: string;
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

    interface SetStateResponse {
        state: any;
    }

    // getState
    interface GetStateParameters {
        uuid?: string;
        channels?: string[];
        channelGroups?: string[];
    }

    interface GetStateResponse {
        channels: {
            [channel: string]: any;
        };
    }

    // grant
    interface GrantParameters {
        channels?: string[];
        channelGroups?: string[];
        authKeys?: string[];
        ttl?: number;
        read?: boolean;
        write?: boolean;
        manage?: boolean;
    }

    // Object

    interface ObjectData {
        id: string;
        eTag: string;
        created: string;
        updated: string;
        custom?: {
            [key: string]: string;
        } | null;
    }

    interface GetObjectsParameters {
        limit?: number;
        page?: {
            next?: string;
            prev?: string;
        };
        include?: {
            customFields?: boolean;
        };
    }

    interface DeleteObjectResponse {
        status: number;
        data: null;
    }

    // User
    interface UserData extends ObjectData {
        name: string;
        externalId?: string | null;
        profileUrl?: string | null;
        email?: string | null;
    }

    interface UserInputParameters {
        id: string;
        name: string;
        externalId?: string | null;
        profileUrl?: string | null;
        email?: string | null;
        custom?: object | null;
        include?: {
            customFields?: boolean;
        };
    }

    interface GetUsersResponse {
        data: UserData[];
        status: number;
    }

    interface DeleteUserResponse {
        data: null;
        status: number;
    }

    interface GetUserParameters {
        userId: string;
        include?: {
            customFields?: boolean;
        };
    }

    interface GetUserResponse {
        data: UserData;
        status: number;
    }

    // Space
    interface SpaceData extends ObjectData {
        id: string;
        name: string;
        description?: string | null;
    }

    interface SpaceInputParameters {
        id: string;
        name: string;
        description?: string | null;
        custom?: object | null;
        include?: {
            customFields?: boolean;
        };
    }

    interface DeleteSpaceResponse {
        status: number;
    }

    interface GetSpacesResponse {
        data: SpaceData[];
        prev?: string;
        next?: string;
        status: number;
    }

    interface GetSpaceParameters {
        spaceId: string;
        include?: {
            customFields?: boolean;
        };
    }

    interface GetSpaceResponse {
        data: SpaceData;
        status: number;
    }

    // Membership
    interface GetMembershipsParameters extends GetObjectsParameters {
        userId: string;
    }

    interface GetMembershipsResponse {
        data: ObjectData[];
        prev?: string;
        next?: string;
        status: number;
    }

    interface MembershipsInputParameters extends GetObjectsParameters {
        userId: string;
        spaces: Array<{
            id: string;
            custom?: object | null;
        }>;
    }

    interface LeaveSpacesParameters extends GetObjectsParameters {
        userId: string;
        spaces: string[];
    }

    // Member
    interface GetMembersParameters extends GetObjectsParameters {
        spaceId: string;
    }

    interface GetMembersResponse {
        data: ObjectData[];
        prev?: string;
        next?: string;
        status: number;
    }

    interface MembersInputParameters extends GetObjectsParameters {
        spaceId: string;
        users: Array<{
            id: string;
            custom?: object | null;
        }>;
    }

    interface RemoveMembersParameters extends GetObjectsParameters {
        spaceId: string;
        users: string[];
    }

    interface AddMessageActionParameters {
        channel: string;
        messageTimetoken: string;
        action: {
            type: string;
            value: string;
        };
    }

    interface MessageAction {
        type: string;
        value: string;
        uuid: string;
        actionTimetoken: string;
        messageTimetoken: string;
    }

    interface RemoveMessageActionParameters {
        channel: string;
        messageTimetoken: string;
        actionTimetoken: string;
    }

    interface GetMessageActionsParameters {
        channel: string;
        start?: string;
        end?: string;
        limit?: number;
    }

    interface GetMessageActionsResponse {
        data: MessageAction[];
        start?: string;
        end?: string;
    }

    // encrypt & decrypt
    interface CryptoParameters {
        encryptKey?: boolean;
        keyEncoding?: string;
        keyLength?: number;
        mode?: string;
    }

    // fetch time
    interface FetchTimeResponse {
        timetoken: number;
    }

    // APNS2
    interface APNS2Configuration {
        collapseId?: string;
        expirationDate?: Date;
        targets: APNS2Target[];
    }

    interface APNS2Target {
        topic: string;
        environment?: 'development' | 'production';
        excludedDevices?: string[];
    }
    // NotificationPayloads

    interface BaseNotificationPayload {
        subtitle?: string;
        payload: object;
        badge?: number;
        sound?: string;
        title?: string;
        body?: string;
    }

    interface APNSNotificationPayload extends BaseNotificationPayload {
        configurations: APNS2Configuration[];
        apnsPushType?: string;
        isSilent: boolean;
    }

    interface MPNSNotificationPayload extends BaseNotificationPayload  {
        backContent?: string;
        backTitle?: string;
        count?: number;
        type?: string;
    }

    interface FCMNotificationPayload extends BaseNotificationPayload  {
        isSilent: boolean;
        icon?: string;
        tag?: string;
    }

    interface NotificationsPayload {
        payload: {apns: object, mpns: object, fcm: object};
        debugging: boolean;
        subtitle?: string;
        badge?: number;
        sound?: string;
        title?: string;
        body?: string;
        apns: APNSNotificationPayload;
        mpns: MPNSNotificationPayload;
        fcm: FCMNotificationPayload;

        buildPayload(platforms: string[]): object;
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
        PNRequestMessageCountExceedCategory: string;
        PNMalformedResponseCategory: string;
    }

    interface Operations {
        PNTimeOperation: string;
        PNHistoryOperation: string;
        PNDeleteMessagesOperation: string;
        PNFetchMessagesOperation: string;
        PNMessageCountsOperation: string;
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
        PNCreateUserOperation: string;
        PNUpdateUserOperation: string;
        PNDeleteUserOperation: string;
        PNGetUsersOperation: string;
        PNCreateSpaceOperation: string;
        PNUpdateSpaceOperation: string;
        PNDeleteSpaceOperation: string;
        PNGetSpacesOperation: string;
        PNGetMembershipsOperation: string;
        PNGetMembersOperation: string;
        PNUpdateMembershipsOperation: string;
        PNAddMessageActionOperation: string;
        PNRemoveMessageActionOperation: string;
        PNGetMessageActionsOperation: string;
    }
}

export = Pubnub;
