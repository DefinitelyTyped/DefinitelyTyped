// Type definitions for pubnub 4.29
// Project: https://github.com/pubnub/javascript
// Definitions by:  bitbankinc <https://github.com/bitbankinc>,
//                  rollymaduk <https://github.com/rollymaduk>,
//                  vitosamson <https://github.com/vitosamson>,
//                  FlorianDr <https://github.com/FlorianDr>,
//                  danduh <https://github.com/danduh>,
//                  ChristianBoehlke <https://github.com/ChristianBoehlke>,
//                  divyun <https://github.com/divyun>
//                  elviswolcott <https://github.com/elviswolcott>
//                  mohitpubnub <https://github.com/mohitpubnub>
//                  Salet <https://github.com/Salet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// @see https://www.pubnub.com/docs/web-javascript/api-reference-configuration
// TypeScript Version: 3.5

// SDK callbacks all accept Pubnub.PubnubStatus as the first argument
type Callback<ResponseType> = (status: Pubnub.PubnubStatus, response: ResponseType) => void;
type StatusCallback = (status: Pubnub.PubnubStatus) => void;
interface ObjectsResponse<DataType> {
    status: number;
    data: DataType;
}
interface PagedObjectsResponse<DataType> extends ObjectsResponse<DataType[]> {
    prev?: string;
    next?: string;
    totalCount?: number;
}
// partial but everything can be null (even with strictNullChecks)
type Nullable<T> = {
    [P in keyof T]?: T[P] | null;
};

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

    // publish

    publish(params: Pubnub.PublishParameters, callback: Callback<Pubnub.PublishResponse>): void;

    publish(params: Pubnub.PublishParameters): Promise<Pubnub.PublishResponse>;

    fire(params: Pubnub.FireParameters, callback: Callback<Pubnub.PublishResponse>): void;

    fire(params: Pubnub.FireParameters): Promise<Pubnub.PublishResponse>;

    signal(params: Pubnub.SignalParameters, callback: Callback<Pubnub.SignalResponse>): void;

    signal(params: Pubnub.SignalParameters): Promise<Pubnub.SignalResponse>;

    // history

    history(params: Pubnub.HistoryParameters, callback: Callback<Pubnub.HistoryResponse>): void;

    history(params: Pubnub.HistoryParameters): Promise<Pubnub.HistoryResponse>;

    fetchMessages(params: Pubnub.FetchMessagesParameters, callback: Callback<Pubnub.FetchMessagesResponse>): void;

    fetchMessages(params: Pubnub.FetchMessagesParameters): Promise<Pubnub.FetchMessagesResponse>;

    deleteMessages(params: Pubnub.DeleteMessagesParameters, callback: StatusCallback): void;

    deleteMessages(params: Pubnub.DeleteMessagesParameters): Promise<void>;

    messageCounts(params: Pubnub.MessageCountsParameters, callback: Callback<Pubnub.MessageCountsResponse>): void;

    messageCounts(params: Pubnub.MessageCountsParameters): Promise<Pubnub.MessageCountsResponse>;

    // subscriptions

    subscribe(params: Pubnub.SubscribeParameters): void;

    unsubscribe(params: Pubnub.UnsubscribeParameters): void;

    unsubscribeAll(): void;

    stop(): void;

    reconnect(): void;

    addListener(params: Pubnub.ListenerParameters): void;

    removeListener(params: Pubnub.ListenerParameters): void;

    getSubscribedChannels(): string[];

    getSubscribedChannelGroups(): string[];

    // presence

    hereNow(params: Pubnub.HereNowParameters, callback: Callback<Pubnub.HereNowResponse>): void;

    hereNow(params: Pubnub.HereNowParameters): Promise<Pubnub.HereNowResponse>;

    whereNow(params: Pubnub.WhereNowParameters, callback: Callback<Pubnub.WhereNowResponse>): void;

    whereNow(params: Pubnub.WhereNowParameters): Promise<Pubnub.WhereNowResponse>;

    getState(params: Pubnub.GetStateParameters, callback: Callback<Pubnub.GetStateResponse>): void;

    getState(params: Pubnub.GetStateParameters): Promise<Pubnub.GetStateResponse>;

    setState(params: Pubnub.SetStateParameters, callback: Callback<Pubnub.SetStateResponse>): void;

    setState(params: Pubnub.SetStateParameters): Promise<Pubnub.SetStateResponse>;

    // access manager

    grant(params: Pubnub.GrantParameters, callback: StatusCallback): void;

    grant(params: Pubnub.GrantParameters): Promise<void>;

    // files

    listFiles(params: Pubnub.ListFilesParameters, callback: Callback<Pubnub.ListFilesResponse>): void;

    listFiles(params: Pubnub.ListFilesParameters): Promise<Pubnub.ListFilesResponse>;

    sendFile(params: Pubnub.SendFileParameters, callback: Callback<Pubnub.SendFileResponse>): void;

    sendFile(params: Pubnub.SendFileParameters): Promise<Pubnub.SendFileResponse>;

    downloadFile(params: Pubnub.DownloadFileParameters, callback: Callback<any>): void;

    downloadFile(params: Pubnub.DownloadFileParameters): Promise<any>;

    getFileUrl(params: Pubnub.FileInputParameters): string;

    deleteFile(params: Pubnub.FileInputParameters, callback: StatusCallback): void;

    deleteFile(params: Pubnub.FileInputParameters): Promise<Pubnub.DeleteFileResponse>;

    publishFile(params: Pubnub.PublishFileParameters, callback: Callback<Pubnub.PublishFileResponse>): void;

    publishFile(params: Pubnub.PublishFileParameters): Promise<Pubnub.PublishFileResponse>;

    // objects v1

    /**
     * deprecated: For objects v2, use objects.setUUIDMetadata
     */
    createUser(params: Pubnub.UserInputParameters, callback: Callback<Pubnub.GetUserResponse>): void;

    /**
     * deprecated: For objects v2, use objects.setUUIDMetadata
     */
    createUser(params: Pubnub.UserInputParameters): Promise<Pubnub.GetUserResponse>;

    /**
     * deprecated: For objects v2, use objects.setUUIDMetadata
     */
    updateUser(params: Pubnub.UserInputParameters, callback: Callback<Pubnub.GetUserResponse>): void;

    /**
     * deprecated: For objects v2, use objects.setUUIDMetadata
     */
    updateUser(params: Pubnub.UserInputParameters): Promise<Pubnub.GetUserResponse>;

    /**
     * deprecated: For objects v2, use objects.removeUUIDMetadata
     */
    deleteUser(userId: string, callback: Callback<Pubnub.DeleteUserResponse>): void;

    /**
     * deprecated: For objects v2, use objects.removeUUIDMetadata
     */
    deleteUser(userId: string): Promise<Pubnub.DeleteUserResponse>;

    /**
     * deprecated: For objects v2, use objects.getAllUUIDMetadata
     */
    getUsers(params: Pubnub.GetObjectsParameters, callback: Callback<Pubnub.GetUsersResponse>): void;

    /**
     * deprecated: For objects v2, use objects.getAllUUIDMetadata
     */
    getUsers(params: Pubnub.GetObjectsParameters): Promise<Pubnub.GetUsersResponse>;

    /**
     * deprecated: For objects v2, use objects.getUUIDMetadata
     */
    getUser(params: Pubnub.GetUserParameters, callback: Callback<Pubnub.GetUserResponse>): void;

    /**
     * deprecated: For objects v2, use objects.getUUIDMetadata
     */
    getUser(params: Pubnub.GetUserParameters): Promise<Pubnub.GetUserResponse>;

    /**
     * deprecated: For objects v2, use objects.setChannelMetadata
     */
    createSpace(params: Pubnub.SpaceInputParameters, callback: Callback<Pubnub.GetSpaceResponse>): void;

    /**
     * deprecated: For objects v2, use objects.setChannelMetadata
     */
    createSpace(params: Pubnub.SpaceInputParameters): Promise<Pubnub.GetSpaceResponse>;

    /**
     * deprecated: For objects v2, use objects.setChannelMetadata
     */
    updateSpace(params: Pubnub.SpaceInputParameters, callback: Callback<Pubnub.GetSpaceResponse>): void;

    /**
     * deprecated: For objects v2, use objects.setChannelMetadata
     */
    updateSpace(params: Pubnub.SpaceInputParameters): Promise<Pubnub.GetSpaceResponse>;

    /**
     * deprecated: For objects v2, use objects.removeChannelMetadata
     */
    deleteSpace(spaceId: string, callback: Callback<Pubnub.DeleteSpaceResponse>): void;

    /**
     * deprecated: For objects v2, use objects.removeChannelMetadata
     */
    deleteSpace(spaceId: string): Promise<Pubnub.DeleteSpaceResponse>;

    /**
     * deprecated: For objects v2, use objects.getAllChannelMetadata
     */
    getSpaces(params: Pubnub.GetObjectsParameters, callback: Callback<Pubnub.GetSpacesResponse>): void;

    /**
     * deprecated: For objects v2, use objects.getAllChannelMetadata
     */
    getSpaces(params: Pubnub.GetObjectsParameters): Promise<Pubnub.GetSpacesResponse>;

    /**
     * deprecated: For objects v2, use objects.getChannelMetadata
     */
    getSpace(params: Pubnub.GetSpaceParameters, callback: Callback<Pubnub.GetSpaceResponse>): void;

    /**
     * deprecated: For objects v2, use objects.getChannelMetadata
     */
    getSpace(params: Pubnub.GetSpaceParameters): Promise<Pubnub.GetSpaceResponse>;

    /**
     * deprecated: For objects v2, use objects.getMemberships
     */
    getMemberships(params: Pubnub.GetMembershipsParameters, callback: Callback<Pubnub.GetMembershipsResponse>): void;

    /**
     * deprecated: For objects v2, use objects.getMemberships
     */
    getMemberships(params: Pubnub.GetMembershipsParameters): Promise<Pubnub.GetMembershipsResponse>;

    /**
     * deprecated: For objects v2, use objects.getChannelMembers
     */
    getMembers(params: Pubnub.GetMembersParameters, callback: Callback<Pubnub.GetMembersResponse>): void;

    /**
     * deprecated: For objects v2, use objects.getChannelMembers
     */
    getMembers(params: Pubnub.GetMembersParameters): Promise<Pubnub.GetMembersResponse>;

    /**
     * deprecated: For objects v2, use objects.setMemberships
     */
    joinSpaces(params: Pubnub.MembershipsInputParameters, callback: Callback<Pubnub.GetMembershipsResponse>): void;

    /**
     * deprecated: For objects v2, use objects.setMemberships
     */
    joinSpaces(params: Pubnub.MembershipsInputParameters): Promise<Pubnub.GetMembershipsResponse>;

    /**
     * deprecated: removed in objects v2
     */
    updateMemberships(
        params: Pubnub.MembershipsInputParameters,
        callback: Callback<Pubnub.GetMembershipsResponse>,
    ): void;

    /**
     * deprecated: removed in objects v2
     */
    updateMemberships(params: Pubnub.MembershipsInputParameters): Promise<Pubnub.GetMembershipsResponse>;

    /**
     * deprecated: For objects v2, use objects.removeMemberships
     */
    leaveSpaces(params: Pubnub.LeaveSpacesParameters, callback: Callback<Pubnub.GetMembershipsResponse>): void;

    /**
     * deprecated: For objects v2, use objects.removeMemberships
     */
    leaveSpaces(params: Pubnub.LeaveSpacesParameters): Promise<Pubnub.GetMembershipsResponse>;

    /**
     * deprecated: For objects v2, use objects.setChannelMembers
     */
    addMembers(params: Pubnub.MembersInputParameters, callback: Callback<Pubnub.GetMembersResponse>): void;

    /**
     * deprecated: For objects v2, use objects.setChannelMembers
     */
    addMembers(params: Pubnub.MembersInputParameters): Promise<Pubnub.GetMembersResponse>;

    /**
     * deprecated: removed in objects v2
     */
    updateMembers(params: Pubnub.MembersInputParameters, callback: Callback<Pubnub.GetMembersResponse>): void;

    /**
     * deprecated: removed in objects v2
     */
    updateMembers(params: Pubnub.MembersInputParameters): Promise<Pubnub.GetMembersResponse>;

    /**
     * deprecated: For objects v2, use objects.removeChannelMembers
     */
    removeMembers(params: Pubnub.RemoveMembersParameters, callback: Callback<Pubnub.GetMembersResponse>): void;

    /**
     * deprecated: For objects v2, use objects.removeChannelMembers
     */
    removeMembers(params: Pubnub.RemoveMembersParameters): Promise<Pubnub.GetMembersResponse>;

    // objects v2
    objects: {
        // UUID metadata
        setUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetUUIDMetadataParameters<Custom>,
            callback: Callback<Pubnub.SetUUIDMetadataResponse<Custom>>,
        ): void;
        setUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetUUIDMetadataParameters<Custom>,
        ): Promise<Pubnub.SetUUIDMetadataResponse<Custom>>;

        removeUUIDMetadata(callback: Callback<Pubnub.RemoveUUIDMetadataResponse>): void;
        removeUUIDMetadata(params?: Pubnub.RemoveUUIDMetadataParameters): Promise<Pubnub.RemoveUUIDMetadataResponse>;
        removeUUIDMetadata(
            params: Pubnub.RemoveUUIDMetadataParameters,
            callback: Callback<Pubnub.RemoveUUIDMetadataResponse>,
        ): void;

        getAllUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.GetAllUUIDMetadataResponse<Custom>>,
        ): void;
        getAllUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params?: Pubnub.GetAllMetadataParameters,
        ): Promise<Pubnub.GetAllUUIDMetadataResponse<Custom>>;
        getAllUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetAllMetadataParameters,
            callback: Callback<Pubnub.GetAllUUIDMetadataResponse<Custom>>,
        ): void;

        getUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.GetUUIDMetadataResponse<Custom>>,
        ): void;
        getUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params?: Pubnub.GetUUIDMetadataParameters,
        ): Promise<Pubnub.GetUUIDMetadataResponse<Custom>>;
        getUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetUUIDMetadataParameters,
            callback: Callback<Pubnub.GetUUIDMetadataResponse<Custom>>,
        ): void;

        // Channel Metadata
        setChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMetadataParameters<Custom>,
            callback: Callback<Pubnub.SetChannelMetadataResponse<Custom>>,
        ): void;
        setChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMetadataParameters<Custom>,
        ): Promise<Pubnub.SetChannelMetadataResponse<Custom>>;

        removeChannelMetadata(
            params: Pubnub.RemoveChannelMetadataParameters,
            callback: Callback<Pubnub.RemoveChannelMetadataResponse>,
        ): void;
        removeChannelMetadata(
            params: Pubnub.RemoveChannelMetadataParameters,
        ): Promise<Pubnub.RemoveChannelMetadataResponse>;

        getAllChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.GetAllChannelMetadataResponse<Custom>>,
        ): void;
        getAllChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params?: Pubnub.GetAllMetadataParameters,
        ): Promise<Pubnub.GetAllChannelMetadataResponse<Custom>>;
        getAllChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetAllMetadataParameters,
            callback: Callback<Pubnub.GetAllChannelMetadataResponse<Custom>>,
        ): void;

        getChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMetadataParameters,
            callback: Callback<Pubnub.GetChannelMetadataResponse<Custom>>,
        ): void;
        getChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMetadataParameters,
        ): Promise<Pubnub.GetChannelMetadataResponse<Custom>>;

        // Memberships
        getMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;
        getMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params?: Pubnub.GetMembershipsParametersv2,
        ): Promise<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>;
        getMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.GetMembershipsParametersv2,
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;

        setMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetMembershipsParameters<ChannelCustom>,
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;
        setMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetMembershipsParameters<ChannelCustom>,
        ): Promise<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>;

        removeMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveMembershipsParameters,
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;
        removeMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveMembershipsParameters,
        ): Promise<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>;

        getChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMembersParameters,
            callback: Callback<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>,
        ): void;
        getChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMembersParameters,
        ): Promise<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>;

        setChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMembersParameters<MembershipCustom>,
            callback: Callback<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>,
        ): void;
        setChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMembersParameters<MembershipCustom>,
        ): Promise<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>;

        removeChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveChannelMembersParameters,
            callback: Callback<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>,
        ): void;
        removeChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveChannelMembersParameters,
        ): Promise<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>;
    };

    // message actions

    addMessageAction(
        params: Pubnub.AddMessageActionParameters,
        callback: Callback<{ data: Pubnub.MessageAction }>,
    ): void;

    addMessageAction(params: Pubnub.AddMessageActionParameters): Promise<{ data: Pubnub.MessageAction }>;

    removeMessageAction(params: Pubnub.RemoveMessageActionParameters, callback: Callback<{ data: {} }>): void;

    removeMessageAction(params: Pubnub.RemoveMessageActionParameters): Promise<{ data: {} }>;

    getMessageActions(
        params: Pubnub.GetMessageActionsParameters,
        callback: Callback<Pubnub.GetMessageActionsResponse>,
    ): void;

    getMessageActions(params: Pubnub.GetMessageActionsParameters): Promise<Pubnub.GetMessageActionsResponse>;

    // utilities

    encrypt(data: string, customCipherKey?: string, options?: Pubnub.CryptoParameters): string;

    decrypt(data: string | object, customCipherKey?: string, options?: Pubnub.CryptoParameters): any;

    time(): Promise<Pubnub.FetchTimeResponse>;

    time(callback: Callback<Pubnub.FetchTimeResponse>): void;
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
         * deprecated:
         */
        actualChannel: string;

        /**
         * deprecated:
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
         * deprecated:
         */
        actualChannel: string;
        /**
         * deprecated:
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

    /**
     * deprecated: For objects v2, use objects.the ObjectsEvent
     */
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

    /**
     * deprecated: For objects v2, use objects.the ObjectsEvent
     */
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

    /**
     * deprecated: For objects v2, use objects.the ObjectsEvent
     */
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
        event: string;
        data: MessageAction;
    }

    interface FileEvent {
        channel: string;
        subscription: string;
        publisher: string;
        timetoken: string;
        message: any;
        file: {
            id: string;
            name: string;
            url: string;
        };
    }

    interface BaseObjectsEvent {
        channel: string;
        message: {
            event: 'set' | 'delete';
            type: 'uuid' | 'channel' | 'membership';
            data: object;
        };
        subscription: string | null;
        publisher?: string;
        timetoken: number;
    }

    interface SetUUIDMetadataEvent<UUIDCustom extends ObjectCustom> extends BaseObjectsEvent {
        message: {
            event: 'set';
            type: 'uuid';
            data: UUIDMetadataObject<UUIDCustom>;
        };
    }

    interface RemoveUUIDMetadataEvent extends BaseObjectsEvent {
        message: {
            event: 'delete';
            type: 'uuid';
            data: { id: string };
        };
    }

    interface SetChannelMetadataEvent<ChannelCustom extends ObjectCustom> extends BaseObjectsEvent {
        message: {
            event: 'set';
            type: 'channel';
            data: ChannelMetadataObject<ChannelCustom>;
        };
    }

    interface RemoveChannelMetadataEvent extends BaseObjectsEvent {
        message: {
            event: 'delete',
            type: 'channel',
            data: { id: string };
        };
    }

    interface SetMembershipEvent<MembershipCustom extends ObjectCustom> extends BaseObjectsEvent {
        message: {
            event: 'set';
            type: 'membership';
            data: {
                channel: {
                    id: string;
                };
                uuid: {
                    id: string;
                };
                custom: MembershipCustom | null;
                updated: string;
                eTag: string;
            };
        };
    }

    interface RemoveMembershipEvent extends BaseObjectsEvent {
        message: {
            event: 'delete';
            type: 'membership';
            data: {
                channel: {
                    id: string;
                };
                uuid: {
                    id: string;
                };
            };
        };
    }

    type ObjectsEvent<
        UUIDCustom extends ObjectCustom = ObjectCustom,
        ChannelCustom extends ObjectCustom = ObjectCustom,
        MembershipCustom extends ObjectCustom = ObjectCustom,
        > =
        SetUUIDMetadataEvent<UUIDCustom> |
        RemoveUUIDMetadataEvent |
        SetChannelMetadataEvent<ChannelCustom> |
        RemoveChannelMetadataEvent |
        SetMembershipEvent<MembershipCustom> |
        RemoveMembershipEvent;

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
        meta?: object;
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
        includeMessageType?: boolean;
        includeUUID?: boolean;
        includeMeta?: boolean;
        includeMessageActions?: boolean;
    }

    interface FetchMessagesResponse {
        channels: {
            [channel: string]: Array<{
                channel: string;
                message: any;
                timetoken: string | number;
                messageType?: string | number;
                uuid?: string;
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
        addChannels(params: PushChannelParameters, callback: StatusCallback): void;

        addChannels(params: PushChannelParameters): Promise<void>;

        listChannels(params: PushDeviceParameters, callback: Callback<PushListChannelsResponse>): void;

        listChannels(params: PushDeviceParameters): Promise<PushListChannelsResponse>;

        removeChannels(params: PushChannelParameters, callback: StatusCallback): void;

        removeChannels(params: PushChannelParameters): Promise<void>;

        deleteDevice(params: PushDeviceParameters, callback: StatusCallback): void;

        deleteDevice(params: PushDeviceParameters): Promise<void>;
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
        addChannels(params: AddChannelParameters, callback: StatusCallback): void;

        addChannels(params: AddChannelParameters): Promise<{}>;

        removeChannels(params: RemoveChannelParameters, callback: StatusCallback): void;

        removeChannels(params: RemoveChannelParameters): Promise<{}>;

        listChannels(params: ListChannelsParameters, callback: Callback<ListChannelsResponse>): void;

        listChannels(params: ListChannelsParameters): Promise<ListChannelsResponse>;

        listGroups(callback: Callback<ListAllGroupsResponse>): void;

        listGroups(): Promise<ListAllGroupsResponse>;

        deleteGroup(params: DeleteGroupParameters, callback: StatusCallback): void;

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

        /**
         * deprecated: For objects v2, use objects.the objects listener
         */
        user?(userEvent: UserEvent): void;

        /**
         * deprecated: For objects v2, use objects.the objects listener
         */
        space?(spaceEvent: SpaceEvent): void;

        /**
         * deprecated: For objects v2, use objects.the objects listener
         */
        membership?(membershipEvent: MembershipEvent): void;

        messageAction?(messageActionEvent: MessageActionEvent): void;

        file?(fileEvent: FileEvent): void;

        objects?(objectsEvent: ObjectsEvent): void;
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
        uuids?: string[];
        authKeys?: string[];
        ttl?: number;
        read?: boolean;
        write?: boolean;
        manage?: boolean;
        delete?: boolean;
        get?: boolean;
        join?: boolean;
        update?: boolean;
    }

    // Objects v1
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

    type DeleteObjectResponse = ObjectsResponse<null>;

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

    type GetUsersResponse = ObjectsResponse<UserData[]>;

    type DeleteUserResponse = ObjectsResponse<null>;

    interface GetUserParameters {
        userId: string;
        include?: {
            customFields?: boolean;
        };
    }

    type GetUserResponse = ObjectsResponse<UserData>;

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

    type DeleteSpaceResponse = ObjectsResponse<null>;

    type GetSpacesResponse = PagedObjectsResponse<SpaceData>;

    interface GetSpaceParameters {
        spaceId: string;
        include?: {
            customFields?: boolean;
        };
    }

    type GetSpaceResponse = ObjectsResponse<SpaceData>;

    // Memberships
    interface GetMembershipsParameters extends GetObjectsParameters {
        userId: string;
    }

    type GetMembershipsResponse = PagedObjectsResponse<ObjectData>;

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

    type GetMembersResponse = PagedObjectsResponse<ObjectData>;

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
    // files
    interface ListFilesParameters {
        channel: string;
        limit?: number;
        next?: string;
    }
    interface SendFileParameters {
        channel: string;
        file: StreamFileInput | BufferFileInput | UriFileInput;
        message?: any;
        cipherKey?: string;
        storeInHistory?: boolean;
        ttl?: number;
        meta?: any;
    }

    interface StreamFileInput {
        stream: any;
        name: string;
        mimeType?: string;
    }

    interface BufferFileInput {
        data: any;
        name: string;
        mimeType?: string;
    }

    interface UriFileInput {
        uri: string;
        name: string;
        mimeType?: string;
    }

    interface DownloadFileParameters {
        channel: string;
        id: string;
        name: string;
        cipherKey?: string;
    }

    interface FileInputParameters {
        channel: string;
        id: string;
        name: string;
    }

    interface PublishFileParameters {
        channel: string;
        message?: any;
        fileId: string;
        fileName: string;
        storeInHistory?: boolean;
        ttl?: number;
        meta?: any;
    }

    interface ListFilesResponse {
        status: number;
        data: Array<{
          name: string;
          id: string;
          size: number;
          created: string;
        }>;
        next: string;
        count: number;
      }

    interface SendFileResponse {
        timetoken: string;
        name: string;
        id: string;
      }

    interface DeleteFileResponse {
        status: number;
    }

    interface PublishFileResponse {
        timetoken: string;
    }

    // Objects v2

    // Object
    interface ObjectCustom {
        [key: string]: string | number | boolean;
    }

    interface v2ObjectData<Custom extends ObjectCustom> {
        id: string;
        eTag: string;
        updated: string;
        custom?: Custom | null;
    }

    interface v2ObjectParam<Custom extends ObjectCustom> {
        custom?: Custom;
    }

    // UUID metadata
    interface UUIDMetadataFields {
        name: string;
        externalId: string;
        profileUrl: string;
        email: string;
    }

    interface UUIDMetadata<Custom extends ObjectCustom> extends v2ObjectParam<Custom>, Partial<UUIDMetadataFields> { }

    interface UUIDMetadataObject<Custom extends ObjectCustom> extends v2ObjectData<Custom>, Nullable<UUIDMetadataFields> { }

    interface SetUUIDMetadataParameters<Custom extends ObjectCustom> {
        uuid?: string;
        data: UUIDMetadata<Custom>;
        include?: {
            customFields?: boolean;
        };
    }

    type SetUUIDMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<UUIDMetadataObject<Custom>>;

    interface RemoveUUIDMetadataParameters {
        uuid?: string;
    }

    type RemoveUUIDMetadataResponse = ObjectsResponse<{}>;

    interface GetAllMetadataParameters {
        include?: {
            totalCount?: boolean;
            customFields?: boolean;
        };
        filter?: string;
        sort?: object;
        limit?: number;
        page?: {
            next?: string;
            prev?: string;
        };
    }

    type GetAllUUIDMetadataResponse<Custom extends ObjectCustom> = PagedObjectsResponse<UUIDMetadataObject<Custom>>;

    interface GetUUIDMetadataParameters {
        uuid?: string;
        include?: {
            customFields?: boolean;
        };
    }

    type GetUUIDMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<UUIDMetadataObject<Custom>>;

    // Channel Metadata

    interface ChannelMetadataFields {
        name: string;
        description: string;
    }

    interface ChannelMetadata<Custom extends ObjectCustom> extends v2ObjectParam<Custom>, Partial<ChannelMetadataFields> { }

    interface ChannelMetadataObject<Custom extends ObjectCustom> extends v2ObjectData<Custom>, Nullable<ChannelMetadataFields> { }

    interface SetChannelMetadataParameters<Custom extends ObjectCustom> {
        channel: string;
        data: ChannelMetadata<Custom>;
        include?: {
            customFields?: boolean;
        };
    }

    type SetChannelMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<ChannelMetadataObject<Custom>>;

    interface RemoveChannelMetadataParameters {
        channel: string;
    }

    type RemoveChannelMetadataResponse = ObjectsResponse<{}>;

    type GetAllChannelMetadataResponse<Custom extends ObjectCustom> = PagedObjectsResponse<
        ChannelMetadataObject<Custom>
    >;

    interface GetChannelMetadataParameters {
        channel: string;
        include?: {
            customFields: boolean;
        };
    }

    type GetChannelMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<ChannelMetadataObject<Custom>>;

    // Memberships

    interface UUIDMembershipObject<MembershipCustom extends ObjectCustom, UUIDCustom extends ObjectCustom> extends Omit<v2ObjectData<MembershipCustom>, "id"> {
        uuid: UUIDMetadataObject<UUIDCustom> | { id: string };
    }

    interface ChannelMembershipObject<MembershipCustom extends ObjectCustom, ChannelCustom extends ObjectCustom> extends Omit<v2ObjectData<MembershipCustom>, "id"> {
        channel: ChannelMetadataObject<ChannelCustom> | { id: string };
    }

    interface UUIDMembersParameters {
        include?: {
            totalCount?: boolean;
            customFields?: boolean;
            UUIDFields?: boolean;
            customUUIDFields?: boolean;
        };
        filter?: string;
        sort?: object;
        limit?: number;
        page?: {
            next?: string;
            prev?: string;
        };
    }

    interface ChannelMembersParameters {
        include?: {
            totalCount?: boolean;
            customFields?: boolean;
            channelFields?: boolean;
            customChannelFields?: boolean;
        };
        filter?: string;
        sort?: object;
        limit?: number;
        page?: {
            next?: string;
            prev?: string;
        };
    }

    interface GetChannelMembersParameters extends UUIDMembersParameters {
        channel: string;
    }

    type ManageChannelMembersResponse<
        MembershipCustom extends ObjectCustom,
        UUIDCustom extends ObjectCustom,
        > = PagedObjectsResponse<UUIDMembershipObject<MembershipCustom, UUIDCustom>>;
    type ManageMembershipsResponse<
        MembershipCustom extends ObjectCustom,
        ChannelCustom extends ObjectCustom,
        > = PagedObjectsResponse<ChannelMembershipObject<MembershipCustom, ChannelCustom>>;

    interface GetMembershipsParametersv2 extends ChannelMembersParameters {
        uuid?: string;
    }

    interface SetCustom<Custom extends ObjectCustom> {
        id: string;
        custom?: Custom;
    }

    interface SetMembershipsParameters<Custom extends ObjectCustom> extends ChannelMembersParameters {
        uuid?: string;
        channels?: Array<string | SetCustom<Custom>>;
    }

    interface RemoveMembershipsParameters extends ChannelMembersParameters {
        uuid?: string;
        channels: string[];
    }

    interface SetChannelMembersParameters<Custom extends ObjectCustom> extends UUIDMembersParameters {
        channel: string;
        uuids: Array<string | SetCustom<Custom>>;
    }

    interface RemoveChannelMembersParameters extends UUIDMembersParameters {
        channel: string;
        uuids: string[];
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

    interface MPNSNotificationPayload extends BaseNotificationPayload {
        backContent?: string;
        backTitle?: string;
        count?: number;
        type?: string;
    }

    interface FCMNotificationPayload extends BaseNotificationPayload {
        isSilent: boolean;
        icon?: string;
        tag?: string;
    }

    interface NotificationsPayload {
        payload: { apns: object; mpns: object; fcm: object };
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
