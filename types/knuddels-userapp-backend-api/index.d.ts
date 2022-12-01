// Type definitions for non-npm package Knuddels UserApps API 1.20220921162223
// Project: https://developer.knuddels.de
// Definitions by: Knuddels GmbH & Co. KG <https://github.com/Knuddels>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// helper types
export type JsonData = string | number | boolean | Date | Json | JsonArray | undefined;
export type KnuddelsJsonData =
    | string
    | number
    | boolean
    | Date
    | KnuddelsJson
    | KnuddelsJsonArray
    | KnuddelsSerializable
    | undefined;
export type KnuddelsSerializable = string | number | boolean | User | BotUser | undefined;
export type KnuddelsEvent = string | Json | KnuddelsEventArray;

// API
declare global {
    interface Json {
        [x: string]: JsonData | undefined;
    }

    interface KnuddelsJson {
        [x: string]: KnuddelsJsonData | undefined;
    }

    interface JsonArray extends Array<JsonData> {}

    interface KnuddelsJsonArray extends Array<KnuddelsJsonData> {}

    interface KnuddelsEventArray extends Array<string | Json | KnuddelsEventArray> {}

    /**
     * @see https://developer.knuddels.de/docs/classes/App.html
     */
    interface App {
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onDebtsUpdate
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        onDebtsUpdate?(debts: KnuddelAmount): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_mayJoinChannel
         */
        mayJoinChannel?(user: User): ChannelJoinPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onPrivateMessage
         */
        onPrivateMessage?(privateMessage: PrivateMessage): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onUserLeft
         */
        onUserLeft?(user: User): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onEventReceived
         */
        onEventReceived?(user: User, type: string, data: KnuddelsEvent, appContentSession: AppContentSession): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_mayShowPublicActionMessage
         */
        mayShowPublicActionMessage?(publicActionMessage: PublicActionMessage): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onPublicEventMessage
         */
        onPublicEventMessage?(publicEventMessage: PublicEventMessage): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onAppEventReceived
         */
        onAppEventReceived?(appInstance: AppInstance, type: string, data: KnuddelsEvent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_mayUserDice
         */
        mayUserDice?(user: User, diceConfig: DiceConfiguration): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_mayShowPublicMessage
         */
        mayShowPublicMessage?(publicMessage: PublicMessage): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onAppStart
         */
        onAppStart?(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onPublicActionMessage
         */
        onPublicActionMessage?(publicActionMessage: PublicActionMessage): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onUserJoined
         */
        onUserJoined?(user: User): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onPrepareShutdown
         */
        onPrepareShutdown?(secondsTillShutdown: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onAccountChangedKnuddelAmount
         */
        onAccountChangedKnuddelAmount?(
            user: User,
            knuddelAccount: KnuddelAccount,
            oldKnuddelAmount: KnuddelAmount,
            newKnuddelAmount: KnuddelAmount,
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onAccountReceivedKnuddel
         */
        onAccountReceivedKnuddel?(
            sender: User,
            receiver: BotUser,
            knuddelAmount: KnuddelAmount,
            transferReason: string,
            knuddelAccount: KnuddelAccount,
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onUserDeleted
         */
        onUserDeleted?(userId: number, userPersistence: UserPersistence): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onUserDiced
         */
        onUserDiced?(diceEvent: DiceEvent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onShutdown
         */
        onShutdown?(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onBeforeKnuddelReceived
         */
        onBeforeKnuddelReceived?(knuddelTransfer: KnuddelTransfer): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onDeveloperCommand
         * @since AppServer 108662, ChatServer 108662
         */
        onDeveloperCommand?(user: User, params: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onPublicMessage
         */
        onPublicMessage?(publicMessage: PublicMessage): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#method_onKnuddelReceived
         */
        onKnuddelReceived?(sender: User, receiver: BotUser, knuddelAmount: KnuddelAmount, transferReason: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/App.html#property_chatCommands
         */
        chatCommands?: { [commandName: string]: (user: User, params: string, command: string) => void };
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppAccess.html
     */
    class AppAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_registerGlobalApp
         * @since AppServer 20210803-133329
         */
        registerGlobalApp(globalAppConfig: GlobalAppConfig): GlobalAppInstance;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_getAllRunningAppsInChannel
         * @since AppServer 82904
         */
        getAllRunningAppsInChannel(includeSelf?: boolean): AppInstance[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_getGlobalAppInstance
         * @since AppServer 20210803-133329
         */
        getGlobalAppInstance(globalAppId: string): GlobalAppInstance | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_getAllGlobalAppInstances
         * @since AppServer 20210803-133329
         */
        getAllGlobalAppInstances(): GlobalAppInstance[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_getOwnInstance
         */
        getOwnInstance(): AppInstance;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_getRunningAppInChannel
         * @since AppServer 82904
         */
        getRunningAppInChannel(appId: string): AppInstance | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppAccess.html#method_unregisterGlobalApp
         * @since AppServer 20210803-133329
         */
        unregisterGlobalApp(globalAppId: string): GlobalAppInstance | null;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppContent.html
     */
    class AppContent {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_replaceWithAppContent
         */
        replaceWithAppContent(newAppContent: AppContent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getHTMLFile
         */
        getHTMLFile(): HTMLFile;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getSessions
         */
        getSessions(): AppContentSession[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_headerbarContent
         */
        static headerbarContent(htmlFile: HTMLFile, height: number): AppContent;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_setAllowJFXBrowser
         */
        setAllowJFXBrowser(allowJFXBrowser: boolean): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getWidth
         */
        getWidth(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getLoadConfiguration
         */
        getLoadConfiguration(): LoadConfiguration;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_overlayContent
         */
        static overlayContent(htmlFile: HTMLFile, width: number /* optional */, height?: number): AppContent;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_isAllowJFXBrowser
         */
        isAllowJFXBrowser(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_remove
         */
        remove(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_popupContent
         */
        static popupContent(htmlFile: HTMLFile, width: number /* optional */, height?: number): AppContent;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_isResponsive
         */
        isResponsive(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getHeight
         */
        getHeight(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_addCloseListener
         */
        addCloseListener(callback: (user: User, appContent: AppContent, replacing: boolean) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getUsers
         */
        getUsers(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_sendEvent
         */
        sendEvent(type: string, data?: KnuddelsEvent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_globalContent
         */
        static globalContent(htmlFile: HTMLFile, width: number /* optional */, height?: number): AppContent;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_getAppViewMode
         */
        getAppViewMode(): AppViewMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContent.html#method_setResponsive
         */
        setResponsive(isResponsive: boolean): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppContentSession.html
     */
    class AppContentSession {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_getGlobalAppInstance
         */
        getGlobalAppInstance(): GlobalAppInstance | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_isConnectedUsingDirectConnection
         */
        isConnectedUsingDirectConnection(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_getAppContent
         */
        getAppContent(): AppContent;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_getUser
         */
        getUser(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_sendEvent
         */
        sendEvent(type: string, data?: KnuddelsEvent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_getOpenTimestamp
         */
        getOpenTimestamp(): Date;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_getAppViewMode
         */
        getAppViewMode(): AppViewMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppContentSession.html#method_remove
         */
        remove(): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppInfo.html
     */
    class AppInfo {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppName
         */
        getAppName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getRootAppUid
         */
        getRootAppUid(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppDeveloper
         */
        getAppDeveloper(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppId
         */
        getAppId(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppKey
         */
        getAppKey(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppManagers
         */
        getAppManagers(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getTaxRate
         */
        getTaxRate(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_requestKnuddelDebts
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        requestKnuddelDebts(callback: (debts: number, result: string) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getTotalTaxKnuddelAmount
         */
        getTotalTaxKnuddelAmount(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getMaxPayoutKnuddelAmount
         */
        getMaxPayoutKnuddelAmount(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppVersion
         */
        getAppVersion(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInfo.html#method_getAppUid
         */
        getAppUid(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppInstance.html
     */
    class AppInstance {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_getStartDate
         */
        getStartDate(): Date;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_getChannelName
         */
        getChannelName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_getAllInstances
         */
        getAllInstances(includeSelf?: boolean): AppInstance[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_getRegisteredChatCommandNames
         */
        getRegisteredChatCommandNames(): string[] | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_sendAppEvent
         */
        sendAppEvent(type: string, data: KnuddelsEvent): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_getAppInfo
         */
        getAppInfo(): AppInfo;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_isRootInstance
         */
        isRootInstance(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppInstance.html#method_getRootInstance
         */
        getRootInstance(): RootAppInstance;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppPersistence.html
     */
    class AppPersistence extends Persistence {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppPersistence.html#method_getStringKeys
         * @since AppServer 20191007-160000
         */
        getStringKeys(keyPattern?: string): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppPersistence.html#method_getDatabaseFileSizeLimit
         */
        getDatabaseFileSizeLimit(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppPersistence.html#method_getDatabaseFileSize
         */
        getDatabaseFileSize(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppPersistence.html#method_getObjectKeys
         * @since AppServer 20191007-160000
         */
        getObjectKeys(keyPattern?: string): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppPersistence.html#method_getNumberKeys
         * @since AppServer 20191007-160000
         */
        getNumberKeys(keyPattern?: string): string[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppProfileEntry.html
     */
    class AppProfileEntry {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntry.html#method_getKey
         */
        getKey(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntry.html#method_getDisplayType
         */
        getDisplayType(): ToplistDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntry.html#method_getToplist
         */
        getToplist(): Toplist;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppProfileEntryAccess.html
     */
    class AppProfileEntryAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntryAccess.html#method_removeEntry
         */
        removeEntry(appProfileEntry: AppProfileEntry): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntryAccess.html#method_getAppProfileEntry
         */
        getAppProfileEntry(userPersistenceNumberKey: string): AppProfileEntry;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntryAccess.html#method_getAllProfileEntries
         */
        getAllProfileEntries(): AppProfileEntry[];
        /**
         * @see https://developer.knuddels.de/docs/classes/AppProfileEntryAccess.html#method_createOrUpdateEntry
         */
        createOrUpdateEntry(toplist: Toplist, toplistDisplayType: ToplistDisplayType): AppProfileEntry;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AppServerInfo.html
     */
    class AppServerInfo extends ServerInfo {}
    namespace AppServerInfo {}

    /**
     * @see https://developer.knuddels.de/docs/classes/AppViewMode.html
     */
    class AppViewMode {}
    namespace AppViewMode {
        /**
         * @see https://developer.knuddels.de/docs/classes/AppViewMode.html#property_Overlay
         */
        const Overlay: AppViewMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppViewMode.html#property_Popup
         */
        const Popup: AppViewMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppViewMode.html#property_Headerbar
         */
        const Headerbar: AppViewMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/AppViewMode.html#property_Global
         */
        const Global: AppViewMode;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/AuthenticityClassification.html
     */
    class AuthenticityClassification {
        /**
         * @see https://developer.knuddels.de/docs/classes/AuthenticityClassification.html#method_getDisplayText
         * @since AppServer 94663, ChatServer 94663
         */
        getDisplayText(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/AuthenticityClassification.html#property_ServiceNotAvailable
         */
        static readonly ServiceNotAvailable: AuthenticityClassification;
        /**
         * @see https://developer.knuddels.de/docs/classes/AuthenticityClassification.html#property_Unknown
         */
        static readonly Unknown: AuthenticityClassification;
        /**
         * @see https://developer.knuddels.de/docs/classes/AuthenticityClassification.html#property_Trusted
         */
        static readonly Trusted: AuthenticityClassification;
        /**
         * @see https://developer.knuddels.de/docs/classes/AuthenticityClassification.html#property_VeryTrusted
         */
        static readonly VeryTrusted: AuthenticityClassification;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/BotUser.html
     */
    class BotUser extends User {
        /**
         * @see https://developer.knuddels.de/docs/classes/BotUser.html#method_sendPublicActionMessage
         */
        sendPublicActionMessage(actionMessage: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/BotUser.html#method_sendPrivateMessage
         */
        sendPrivateMessage(message: string, users?: User[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/BotUser.html#method_sendPostMessage
         */
        sendPostMessage(topic: string, text: string, receivingUser?: User): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/BotUser.html#method_destroyKnuddel
         * @since AppServer 20200212-112449
         */
        destroyKnuddel(
            knuddelAmount: KnuddelAmount,
            reason: string,
            parameters?: {
                onSuccess?: (knuddelAmount: KnuddelAmount, reason: string) => void;
                onError?: (knuddelAmount: KnuddelAmount, reason: string, message: string) => void;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/BotUser.html#method_transferKnuddel
         */
        transferKnuddel(
            receivingUserOrAccount: User | KnuddelAccount,
            knuddelAmount: KnuddelAmount,
            parameters?: {
                displayReasonText?: string;
                transferDisplayType?: KnuddelTransferDisplayType;
                onSuccess?: () => void;
                onError?: (message: string) => void;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/BotUser.html#method_sendPublicMessage
         */
        sendPublicMessage(message: string): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Channel.html
     */
    class Channel {
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getChannelDesign
         * @since AppServer 87470, ChatServer 87470
         */
        getChannelDesign(): ChannelDesign;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getChannelName
         */
        getChannelName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getChannelConfiguration
         */
        getChannelConfiguration(): ChannelConfiguration;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_isVideoChannel
         */
        isVideoChannel(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getTalkMode
         */
        getTalkMode(): ChannelTalkMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getRootChannelName
         */
        getRootChannelName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getAllUsersWithTalkPermission
         */
        getAllUsersWithTalkPermission(...channelTalkPermission: ChannelTalkPermission[]): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_isVisible
         * @since AppServer 82202
         */
        isVisible(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getOnlineUsers
         */
        getOnlineUsers(...userType: UserType[]): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getChannelRestrictions
         */
        getChannelRestrictions(): ChannelRestrictions;
        /**
         * @see https://developer.knuddels.de/docs/classes/Channel.html#method_getVideoChannelData
         */
        getVideoChannelData(): VideoChannelData;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelConfiguration.html
     */
    class ChannelConfiguration {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelConfiguration.html#method_getChannelRights
         */
        getChannelRights(): ChannelRights;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelConfiguration.html#method_getChannelInformation
         */
        getChannelInformation(): ChannelInformation;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelDesign.html
     * @since AppServer 87470, ChatServer 87470
     */
    class ChannelDesign {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelDesign.html#method_getBackgroundColor
         * @since AppServer 87470, ChatServer 87470
         */
        getBackgroundColor(): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelDesign.html#method_getDefaultFontColor
         * @since AppServer 87470, ChatServer 87470
         */
        getDefaultFontColor(): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelDesign.html#method_getDefaultFontSize
         * @since AppServer 87470, ChatServer 87470
         */
        getDefaultFontSize(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelInformation.html
     */
    class ChannelInformation {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelInformation.html#method_getTopic
         */
        getTopic(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelInformation.html#method_setTopic
         */
        setTopic(topic: string, showMessage: boolean): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelJoinPermission.html
     */
    class ChannelJoinPermission {}
    namespace ChannelJoinPermission {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelJoinPermission.html#method_accepted
         */
        function accepted(): ChannelJoinPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelJoinPermission.html#method_denied
         */
        function denied(denyReason: string): ChannelJoinPermission;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelRestrictions.html
     */
    class ChannelRestrictions {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelRestrictions.html#method_getMutedUsers
         */
        getMutedUsers(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelRestrictions.html#method_getLockedUsers
         */
        getLockedUsers(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelRestrictions.html#method_getColorMutedUsers
         */
        getColorMutedUsers(): User[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelRights.html
     */
    class ChannelRights {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelRights.html#method_getChannelModerators
         */
        getChannelModerators(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelRights.html#method_getChannelOwners
         */
        getChannelOwners(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelRights.html#method_getEventModerators
         */
        getEventModerators(): User[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelTalkMode.html
     */
    class ChannelTalkMode {}
    namespace ChannelTalkMode {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkMode.html#property_Everyone
         */
        const Everyone: ChannelTalkMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkMode.html#property_OnlyWithTalkPermission
         */
        const OnlyWithTalkPermission: ChannelTalkMode;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkMode.html#property_FilteredByModerators
         */
        const FilteredByModerators: ChannelTalkMode;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html
     */
    class ChannelTalkPermission {}
    namespace ChannelTalkPermission {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html#property_NotInChannel
         */
        const NotInChannel: ChannelTalkPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html#property_Default
         */
        const Default: ChannelTalkPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html#property_TalkOnce
         */
        const TalkOnce: ChannelTalkPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html#property_TalkPermanent
         */
        const TalkPermanent: ChannelTalkPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html#property_VIP
         */
        const VIP: ChannelTalkPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/ChannelTalkPermission.html#property_Moderator
         */
        const Moderator: ChannelTalkPermission;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ChatServerInfo.html
     */
    class ChatServerInfo extends ServerInfo {
        /**
         * @see https://developer.knuddels.de/docs/classes/ChatServerInfo.html#method_isTestSystem
         */
        isTestSystem(): boolean;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ClientType.html
     */
    class ClientType {}
    namespace ClientType {
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Applet
         */
        const Applet: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Browser
         */
        const Browser: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Android
         */
        const Android: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_IOS
         */
        const IOS: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Offline
         */
        const Offline: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_Web
         */
        const Web: ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ClientType.html#property_MobileWeb
         */
        const MobileWeb: ClientType;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Color.html
     */
    class Color {
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_fromRGB
         */
        static fromRGB(red: number, green: number, blue: number): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_fromRGBA
         */
        static fromRGBA(red: number, green: number, blue: number, alpha: number): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_toKCode
         */
        toKCode(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_fromNumber
         */
        static fromNumber(value: number): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_getGreen
         */
        getGreen(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_getRed
         */
        getRed(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_asNumber
         */
        asNumber(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_fromHexString
         */
        static fromHexString(value: string): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_asHexString
         */
        asHexString(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_getBlue
         */
        getBlue(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/Color.html#method_getAlpha
         */
        getAlpha(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Dice.html
     */
    class Dice {
        /**
         * @see https://developer.knuddels.de/docs/classes/Dice.html#method_Dice
         */
        constructor(count: number /* optional */, value: number);
        /**
         * @see https://developer.knuddels.de/docs/classes/Dice.html#method_getNumberOfSides
         */
        getNumberOfSides(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/Dice.html#method_getAmount
         */
        getAmount(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html
     */
    class DiceConfiguration {
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html#method_isUsingPrivateThrow
         */
        isUsingPrivateThrow(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html#method_getDices
         */
        getDices(): Dice[];
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html#method_equals
         */
        equals(diceConfiguration: DiceConfiguration): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html#method_toString
         * @since AppServer 108781
         */
        toString(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html#method_isUsingOpenThrow
         */
        isUsingOpenThrow(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfiguration.html#method_getChatCommand
         * @since AppServer 82248
         */
        getChatCommand(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html
     */
    class DiceConfigurationFactory {
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html#method_setShouldUsePrivateThrow
         */
        setShouldUsePrivateThrow(shouldUsePrivateThrow: boolean): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html#method_setUseOpenThrow
         */
        setUseOpenThrow(shouldUseOpenThrow: boolean): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html#method_getDiceConfiguration
         */
        getDiceConfiguration(): DiceConfiguration;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html#method_addDice
         */
        addDice(dice: Dice): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html#method_fromString
         */
        static fromString(diceConfigurationString: string): DiceConfiguration;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceConfigurationFactory.html#method_computeCurrentDiceCount
         */
        computeCurrentDiceCount(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/DiceEvent.html
     */
    class DiceEvent {
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceEvent.html#method_getDiceResult
         */
        getDiceResult(): DiceResult;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceEvent.html#method_getUser
         */
        getUser(): User;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/DiceResult.html
     */
    class DiceResult {
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceResult.html#method_totalSum
         */
        totalSum(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceResult.html#method_getDiceConfiguration
         */
        getDiceConfiguration(): DiceConfiguration;
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceResult.html#method_getSingleDiceResults
         */
        getSingleDiceResults(): SingleDiceResult[];
        /**
         * @see https://developer.knuddels.de/docs/classes/DiceResult.html#method_toString
         * @since AppServer 108781
         */
        toString(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Domain.html
     */
    class Domain {
        /**
         * @see https://developer.knuddels.de/docs/classes/Domain.html#method_getDomainName
         */
        getDomainName(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html
     */
    class ExternalServerAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html#method_canAccessURL
         */
        canAccessURL(urlString: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html#method_getURL
         */
        getURL(
            urlString: string,
            parameters?: {
                onSuccess?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
                onFailure?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html#method_postURL
         */
        postURL(
            urlString: string,
            parameters?: {
                onSuccess?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
                onFailure?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
                data?: Json;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html#method_callURL
         */
        callURL(
            urlString: string,
            parameters?: {
                onSuccess?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
                onFailure?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
                method?: 'GET' | 'POST';
                data?: Json;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html#method_getAllAccessibleDomains
         */
        getAllAccessibleDomains(): Domain[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerAccess.html#method_touchURL
         */
        touchURL(
            urlString: string,
            parameters?: {
                onSuccess?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
                onFailure?: (responseData: string, externalServerResponse: ExternalServerResponse) => void;
            },
        ): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ExternalServerResponse.html
     */
    class ExternalServerResponse {
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerResponse.html#method_getURLString
         */
        getURLString(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerResponse.html#method_getHeaderFields
         */
        getHeaderFields(): { [key: string]: string[] };
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerResponse.html#method_getResponseCode
         */
        getResponseCode(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerResponse.html#method_getHeaderFieldNames
         * @since AppServer 108668
         */
        getHeaderFieldNames(): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ExternalServerResponse.html#method_getHeaderFieldValues
         * @since AppServer 108668
         */
        getHeaderFieldValues(headerFieldName: string): string[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Gender.html
     */
    class Gender {}
    namespace Gender {
        /**
         * @see https://developer.knuddels.de/docs/classes/Gender.html#property_Male
         */
        const Male: Gender;
        /**
         * @see https://developer.knuddels.de/docs/classes/Gender.html#property_Female
         */
        const Female: Gender;
        /**
         * @see https://developer.knuddels.de/docs/classes/Gender.html#property_Unknown
         */
        const Unknown: Gender;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html
     */
    class GenderDetailed {
        /**
         * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html#method_toGender
         * @since AppServer 20220811170542
         */
        toGender(): Gender;
        /**
         * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html#property_Male
         */
        static readonly Male: GenderDetailed;
        /**
         * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html#property_Female
         */
        static readonly Female: GenderDetailed;
        /**
         * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html#property_NonBinaryHe
         */
        static readonly NonBinaryHe: GenderDetailed;
        /**
         * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html#property_NonBinaryShe
         */
        static readonly NonBinaryShe: GenderDetailed;
        /**
         * @see https://developer.knuddels.de/docs/classes/GenderDetailed.html#property_Unknown
         */
        static readonly Unknown: GenderDetailed;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html
     * @since AppServer 20210921-153142
     */
    class GlobalAppCategory {}
    namespace GlobalAppCategory {
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Action
         */
        const Action: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Adventure
         */
        const Adventure: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Puzzle
         */
        const Puzzle: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Flirt
         */
        const Flirt: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_BoardGame
         */
        const BoardGame: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_CardGame
         */
        const CardGame: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Useful
         */
        const Useful: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Quiz
         */
        const Quiz: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_RolePlaying
         */
        const RolePlaying: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Simulation
         */
        const Simulation: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_SocialGambling
         */
        const SocialGambling: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Sport
         */
        const Sport: GlobalAppCategory;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppCategory.html#property_Strategy
         */
        const Strategy: GlobalAppCategory;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html
     * @since AppServer 20210803-133329
     */
    class GlobalAppConfig {
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getShowDeveloper
         */
        getShowDeveloper(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setMinStatus
         */
        setMinStatus(minStatus: UserStatus): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_isRestrictToOneIp
         */
        isRestrictToOneIp(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setMinAge
         */
        setMinAge(minAge: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getId
         */
        getId(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setDisplayName
         */
        setDisplayName(displayName: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getAllowedGenders
         */
        getAllowedGenders(): Gender[];
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getFeaturedImagePath
         */
        getFeaturedImagePath(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setAllowedGenders
         */
        setAllowedGenders(...allowedGenders: Gender[][]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getBlockedUserIds
         */
        getBlockedUserIds(): number[];
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getMinAge
         */
        getMinAge(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getMaxAge
         */
        getMaxAge(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getAllowedUserIds
         */
        getAllowedUserIds(): number[];
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setRestrictToOneIp
         */
        setRestrictToOneIp(restrictToOneIp: boolean): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getCategories
         */
        getCategories(): GlobalAppCategory[];
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_GlobalAppConfig
         */
        constructor(
            globalAppId: string,
            displayName: string,
            openRequestHandler: (user: User, globalAppInstance: GlobalAppInstance) => AppContent,
        );
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getMinStatus
         */
        getMinStatus(): UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setAllowedUserIds
         */
        setAllowedUserIds(allowedUserIds: number[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getSessionOpenedCallback
         */
        getSessionOpenedCallback(): undefined | ((appContentSession: AppContentSession) => void);
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setMaxAge
         */
        setMaxAge(maxAge: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setShowDeveloper
         */
        setShowDeveloper(showDeveloper?: boolean): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getOpenRequestHandler
         */
        getOpenRequestHandler(): undefined | ((user: User, globalAppInstance: GlobalAppInstance) => AppContent);
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getFeaturedCardColor
         */
        getFeaturedCardColor(): Color;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setBlockedUserIds
         */
        setBlockedUserIds(blockedUserIds: number[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setCategories
         */
        setCategories(...categories: GlobalAppCategory[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getMinRegDays
         */
        getMinRegDays(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getDisplayName
         */
        getDisplayName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setFeaturedImagePath
         */
        setFeaturedImagePath(featuredImagePath?: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_getImagePath
         */
        getImagePath(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setImagePath
         */
        setImagePath(imagePath?: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setFeaturedCardColor
         */
        setFeaturedCardColor(featuredCardColor: Color): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setMinRegDays
         */
        setMinRegDays(minRegDays: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setOpenRequestHandler
         */
        setOpenRequestHandler(
            openRequestHandler: (user: User, globalAppInstance: GlobalAppInstance) => AppContent,
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_toString
         */
        toString(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppConfig.html#method_setSessionOpenedCallback
         */
        setSessionOpenedCallback(sessionOpenedCallback?: (appContentSession: AppContentSession) => void): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html
     * @since AppServer 20210803-133329
     */
    class GlobalAppInstance {
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_setAppConfig
         */
        setAppConfig(appConfig: GlobalAppConfig): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_getAppConfig
         */
        getAppConfig(): GlobalAppConfig;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_getAddAsFavoriteChatCommand
         * @since AppServer 20220502-125000
         */
        getAddAsFavoriteChatCommand(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_getOpenAppChatCommand
         * @since AppServer 20220502-125000
         */
        getOpenAppChatCommand(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_closeActiveSessions
         */
        closeActiveSessions(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_getActiveSessions
         */
        getActiveSessions(): AppContentSession[];
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_openGlobalApp
         */
        openGlobalApp(user: User, forceReplace?: boolean): AppContentSession;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_getRemoveAsFavoriteChatCommand
         * @since AppServer 20220502-125000
         */
        getRemoveAsFavoriteChatCommand(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_getActiveSession
         */
        getActiveSession(userId: number): AppContentSession | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/GlobalAppInstance.html#method_hasAsFavorite
         * @since AppServer 20220502-152500
         */
        hasAsFavorite(user: User): boolean;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/HTMLFile.html
     */
    class HTMLFile {
        /**
         * @see https://developer.knuddels.de/docs/classes/HTMLFile.html#method_HTMLFile
         */
        constructor(assetPath: string, pageData?: Json);
        /**
         * @see https://developer.knuddels.de/docs/classes/HTMLFile.html#method_getPageData
         */
        getPageData(): Json;
        /**
         * @see https://developer.knuddels.de/docs/classes/HTMLFile.html#method_getAssetPath
         */
        getAssetPath(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html
     */
    class KnuddelAccount {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_getTotalKnuddelAmountUserToApp
         */
        getTotalKnuddelAmountUserToApp(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_getTotalKnuddelAmountAppToUser
         */
        getTotalKnuddelAmountAppToUser(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_hasEnough
         */
        hasEnough(knuddelAmount: KnuddelAmount): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_use
         */
        use(
            knuddelAmount: KnuddelAmount,
            displayReasonText: string,
            parameters?: {
                transferReason?: string;
                onError?: (message: string) => void;
                onSuccess?: () => void;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_getUser
         */
        getUser(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_getKnuddelAmountUsed
         */
        getKnuddelAmountUsed(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_getKnuddelAmount
         */
        getKnuddelAmount(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAccount.html#method_getKnuddelAmountUnused
         */
        getKnuddelAmountUnused(): KnuddelAmount;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html
     */
    class KnuddelAmount {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_KnuddelAmount
         */
        constructor(knuddel: number);
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_getKnuddelCents
         */
        getKnuddelCents(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_isNegative
         */
        isNegative(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_negate
         */
        negate(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_asNumber
         */
        asNumber(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_fromKnuddel
         */
        static fromKnuddel(knuddel: number): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelAmount.html#method_fromCents
         */
        static fromCents(knuddel: number): KnuddelAmount;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html
     */
    class KnuddelPot {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getFeeUser
         */
        getFeeUser(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_addWinner
         */
        addWinner(user: User, weight?: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getParticipants
         */
        getParticipants(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getKnuddelAmountPerParticipant
         */
        getKnuddelAmountPerParticipant(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_setFee
         */
        setFee(feeUser: BotUser, feeMultiplier: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_seal
         */
        seal(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_payout
         */
        payout(text?: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getId
         */
        getId(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getFeeMultiplier
         */
        getFeeMultiplier(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getKnuddelAmountTotal
         */
        getKnuddelAmountTotal(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getMaxFeeMultiplier
         */
        getMaxFeeMultiplier(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_getState
         */
        getState(): KnuddelPotState;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPot.html#method_refund
         */
        refund(reason?: string): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelPotState.html
     */
    class KnuddelPotState {}
    namespace KnuddelPotState {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPotState.html#property_Open
         */
        const Open: KnuddelPotState;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPotState.html#property_Sealed
         */
        const Sealed: KnuddelPotState;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelPotState.html#property_Closed
         */
        const Closed: KnuddelPotState;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelShop.html
     */
    class KnuddelShop {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShop.html#method_getShopName
         */
        getShopName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShop.html#method_getProducts
         */
        getProducts(): KnuddelShopProduct[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelShopProduct.html
     */
    class KnuddelShopProduct {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShopProduct.html#method_getNewPriceCents
         */
        getNewPriceCents(): number | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShopProduct.html#method_getNewKnuddelPayout
         */
        getNewKnuddelPayout(): number | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShopProduct.html#method_getOrigKnuddelPayout
         */
        getOrigKnuddelPayout(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShopProduct.html#method_getProductId
         */
        getProductId(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelShopProduct.html#method_getOrigPriceCents
         */
        getOrigPriceCents(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html
     */
    class KnuddelTransfer {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_addToPot
         */
        addToPot(knuddelPot: KnuddelPot): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_getReceiver
         */
        getReceiver(): BotUser;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_reject
         */
        reject(reason: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_isProcessed
         */
        isProcessed(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_canAddToPot
         */
        canAddToPot(pot: KnuddelPot): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_getKnuddelAmount
         */
        getKnuddelAmount(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_getTransferReason
         */
        getTransferReason(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_getSender
         */
        getSender(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransfer.html#method_accept
         */
        accept(): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelTransferDisplayType.html
     */
    class KnuddelTransferDisplayType {}
    namespace KnuddelTransferDisplayType {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransferDisplayType.html#property_Public
         */
        const Public: KnuddelTransferDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransferDisplayType.html#property_Private
         */
        const Private: KnuddelTransferDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransferDisplayType.html#property_Post
         */
        const Post: KnuddelTransferDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelTransferDisplayType.html#property_Silent
         */
        const Silent: KnuddelTransferDisplayType;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html
     */
    class KnuddelsServer {}
    namespace KnuddelsServer {
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getChatServerInfo
         */
        function getChatServerInfo(): ChatServerInfo;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getExternalServerAccess
         */
        function getExternalServerAccess(): ExternalServerAccess;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getDefaultBotUser
         */
        function getDefaultBotUser(): BotUser;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getAllKnuddelPots
         */
        function getAllKnuddelPots(): KnuddelPot[];
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getAppAccess
         */
        function getAppAccess(): AppAccess;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getFullImagePath
         */
        function getFullImagePath(imageName: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getPaymentAccess
         * @since AppServer 108571, ChatServer 108571
         */
        function getPaymentAccess(): PaymentAccess;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getPersistence
         */
        function getPersistence(): AppPersistence;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getChannel
         */
        function getChannel(): Channel;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getAppProfileEntryAccess
         */
        function getAppProfileEntryAccess(): AppProfileEntryAccess;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getDefaultLogger
         */
        function getDefaultLogger(): Logger;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_registerInAppChatMessage
         */
        function registerInAppChatMessage(
            chatGroupId: string,
            sender: User,
            text: string,
            receiverUserIds: number[],
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_listFiles
         */
        function listFiles(path: string): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getAppServerInfo
         */
        function getAppServerInfo(): AppServerInfo;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getToplistAccess
         */
        function getToplistAccess(): ToplistAccess;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getPerformanceStats
         */
        function getPerformanceStats(): [
            [
                {
                    hookName: string;
                    source: string;
                    time: string;
                    values: {
                        calls: number;
                        exec: number;
                        execAvg: number;
                        execMax: number;
                        memAlloc: number;
                        memAllocAvg: number;
                        memAllocMax: number;
                        wait: number;
                        waitAvg: number;
                        waitMax: number;
                    };
                },
            ],
        ];
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getKnuddelPot
         */
        function getKnuddelPot(id: number): KnuddelPot | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_execute
         */
        function execute(fileName: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_refreshHooks
         */
        function refreshHooks(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_createKnuddelPot
         */
        function createKnuddelPot(
            knuddelAmount: KnuddelAmount,
            params?: {
                payoutTimeoutMinutes?: number;
                shouldSealPot?: (pot: KnuddelPot) => boolean;
                onPotSealed?: (pot: KnuddelPot) => void;
            },
        ): KnuddelPot;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getFullSystemImagePath
         */
        function getFullSystemImagePath(imageName: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/KnuddelsServer.html#method_getUserAccess
         */
        function getUserAccess(): UserAccess;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html
     */
    class LoadConfiguration {
        /**
         * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html#method_setEnabled
         */
        setEnabled(enabled: boolean): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html#method_setBackgroundColor
         */
        setBackgroundColor(color: Color): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html#method_setBackgroundImage
         */
        setBackgroundImage(imageUrl: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html#method_setLoadingIndicatorImage
         */
        setLoadingIndicatorImage(imageUrl: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html#method_setForegroundColor
         */
        setForegroundColor(color: Color): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/LoadConfiguration.html#method_setText
         */
        setText(text: string): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Logger.html
     */
    class Logger {
        /**
         * @see https://developer.knuddels.de/docs/classes/Logger.html#method_warn
         */
        warn(...msg: any[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Logger.html#method_debug
         */
        debug(...msg: any[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Logger.html#method_error
         */
        error(...msg: any[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Logger.html#method_info
         */
        info(...msg: any[]): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Logger.html#method_fatal
         */
        fatal(...msg: any[]): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Message.html
     */
    class Message {
        /**
         * @see https://developer.knuddels.de/docs/classes/Message.html#method_getCreationDate
         */
        getCreationDate(): Date;
        /**
         * @see https://developer.knuddels.de/docs/classes/Message.html#method_getRawText
         */
        getRawText(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Message.html#method_getAuthor
         */
        getAuthor(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/Message.html#method_getText
         */
        getText(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/OwnAppInstance.html
     */
    class OwnAppInstance {
        /**
         * @see https://developer.knuddels.de/docs/classes/OwnAppInstance.html#method_getOnlineUsers
         * @since AppServer 82560
         */
        getOnlineUsers(otherAppInstance: AppInstance, ...userType: UserType[]): User[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/PaymentAccess.html
     * @since AppServer 108571, ChatServer 108571
     */
    class PaymentAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/PaymentAccess.html#method_startKnuddelPurchase
         * @since AppServer 20210315-162600, ChatServer 20210315-162600
         */
        startKnuddelPurchase(
            user: User /* optional */,
            productId: KnuddelAmount | string /* optional */,
            parameters?: any,
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/PaymentAccess.html#method_requestKnuddelShops
         * @since AppServer 20210215-140000, ChatServer 20210215-140000
         */
        requestKnuddelShops(
            user: User,
            callback: (user: User, bonusEndTimestamp: number, shops: [KnuddelShop], result: string) => void,
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/PaymentAccess.html#method_openKnuddelShop
         * @since AppServer 20210713-180000, ChatServer 20210713-180000
         */
        openKnuddelShop(user: User, transferReason?: string): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Persistence.html
     */
    class Persistence {
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_deleteNumber
         */
        deleteNumber(key: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_getObject
         */
        getObject(
            key: string,
            defaultValue?: KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable,
        ): KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_hasObject
         */
        hasObject(key: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_hasNumber
         */
        hasNumber(key: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_getString
         */
        getString(key: string, defaultValue?: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_hasString
         */
        hasString(key: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_setObject
         */
        setObject(key: string, object: KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_deleteString
         */
        deleteString(key: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_setNumber
         */
        setNumber(key: string, value: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_getNumber
         */
        getNumber(key: string, defaultValue?: number): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_setString
         */
        setString(key: string, value: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_deleteObject
         */
        deleteObject(key: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Persistence.html#method_addNumber
         */
        addNumber(key: string, value: number): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/PrivateMessage.html
     */
    class PrivateMessage extends Message {
        /**
         * @see https://developer.knuddels.de/docs/classes/PrivateMessage.html#method_getReceivingUsers
         */
        getReceivingUsers(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/PrivateMessage.html#method_sendReply
         */
        sendReply(text: string): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/PublicActionMessage.html
     */
    class PublicActionMessage extends Message {
        /**
         * @see https://developer.knuddels.de/docs/classes/PublicActionMessage.html#method_getFunctionName
         */
        getFunctionName(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/PublicEventMessage.html
     */
    class PublicEventMessage extends Message {
        /**
         * @see https://developer.knuddels.de/docs/classes/PublicEventMessage.html#method_getFunctionName
         */
        getFunctionName(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/PublicMessage.html
     */
    class PublicMessage extends Message {}
    namespace PublicMessage {}

    /**
     * @see https://developer.knuddels.de/docs/classes/Quest.html
     */
    class Quest {
        /**
         * @see https://developer.knuddels.de/docs/classes/Quest.html#method_setSolved
         * @since AppServer 82290, ChatServer 82290
         */
        setSolved(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Quest.html#method_getQuestKey
         * @since AppServer 82290, ChatServer 82290
         */
        getQuestKey(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/QuestAccess.html
     */
    class QuestAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/QuestAccess.html#method_getQuest
         * @since AppServer 82290, ChatServer 82290
         */
        getQuest(questKey: string): Quest | null;
        /**
         * @see https://developer.knuddels.de/docs/classes/QuestAccess.html#method_getUser
         * @since AppServer 82290, ChatServer 82290
         */
        getUser(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/QuestAccess.html#method_hasQuest
         * @since AppServer 82290, ChatServer 82290
         */
        hasQuest(questKey: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/QuestAccess.html#method_solvedQuest
         */
        solvedQuest(questKey: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/QuestAccess.html#method_getQuests
         * @since AppServer 82290, ChatServer 82290
         */
        getQuests(): Quest[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/RandomOperations.html
     */
    class RandomOperations {}
    namespace RandomOperations {
        /**
         * @see https://developer.knuddels.de/docs/classes/RandomOperations.html#method_nextInts
         */
        function nextInts(
            minValue: number /* optional */,
            maxValue: number,
            count: number,
            onlyDifferentNumbers: boolean,
        ): number[];
        /**
         * @see https://developer.knuddels.de/docs/classes/RandomOperations.html#method_getRandomObject
         */
        function getRandomObject<T>(objects: T[]): T;
        /**
         * @see https://developer.knuddels.de/docs/classes/RandomOperations.html#method_getRandomString
         * @since AppServer 92699
         */
        function getRandomString(length: number, allowedCharacters?: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/RandomOperations.html#method_nextInt
         */
        function nextInt(minValue: number /* optional */, maxValue: number): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/RandomOperations.html#method_shuffleObjects
         */
        function shuffleObjects<T>(objects: T[]): T[];
        /**
         * @see https://developer.knuddels.de/docs/classes/RandomOperations.html#method_flipTrue
         */
        function flipTrue(truePropability: number): boolean;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/RootAppInstance.html
     */
    class RootAppInstance extends AppInstance {
        /**
         * @see https://developer.knuddels.de/docs/classes/RootAppInstance.html#method_stopApp
         */
        stopApp(message: string /* optional */, logMessage?: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/RootAppInstance.html#method_cancelUpdateApp
         * @since AppServer 98117
         */
        cancelUpdateApp(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/RootAppInstance.html#method_invalidateClientCache
         */
        invalidateClientCache(): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/RootAppInstance.html#method_updateApp
         */
        updateApp(message: string /* optional */, logMessage?: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/RootAppInstance.html#method_updateAppFiles
         */
        updateAppFiles(): string[];
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ServerInfo.html
     */
    class ServerInfo {
        /**
         * @see https://developer.knuddels.de/docs/classes/ServerInfo.html#method_getVersion
         * @since AppServer 20191007-160000
         */
        getVersion(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/ServerInfo.html#method_getServerId
         */
        getServerId(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/SingleDiceResult.html
     */
    class SingleDiceResult {
        /**
         * @see https://developer.knuddels.de/docs/classes/SingleDiceResult.html#method_valuesRolled
         */
        valuesRolled(): number[];
        /**
         * @see https://developer.knuddels.de/docs/classes/SingleDiceResult.html#method_getDice
         */
        getDice(): Dice;
        /**
         * @see https://developer.knuddels.de/docs/classes/SingleDiceResult.html#method_sum
         */
        sum(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/String.html
     */
    interface String {
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_escapeKCode
         */
        escapeKCode(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_hasOnlyDigits
         * @since AppServer 82271
         */
        hasOnlyDigits(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_isAllowedAsChatMessage
         */
        isAllowedAsChatMessage(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_isEmpty
         * @since AppServer 92695
         */
        isEmpty(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_getPixelWidth
         */
        getPixelWidth(fontSize: number, isBold: boolean): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_limitString
         */
        limitString(fontSize: number, isBold: boolean, maxPixelWidth: number, abbreviationMarker?: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_toCamelCase
         * @since AppServer 92695
         */
        toCamelCase(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_replaceAll
         */
        replaceAll(regexp: string | RegExp, replacement: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_capitalize
         * @since AppServer 92695
         */
        capitalize(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_contains
         */
        contains(needle: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_stripKCode
         */
        stripKCode(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_minimalConversionCost
         * @since AppServer 82271
         */
        minimalConversionCost(otherString: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_isAllowedAsNick
         */
        isAllowedAsNick(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_endsWith
         */
        endsWith(suffix: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_hasOnlyAlphanumericalAndWhitespaceCharacters
         * @since AppServer 82271
         */
        hasOnlyAlphanumericalAndWhitespaceCharacters(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_hasOnlyNicknameCharacters
         * @since AppServer 82271
         */
        hasOnlyNicknameCharacters(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/String.html#method_startsWith
         */
        startsWith(prefix: string): boolean;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/Toplist.html
     */
    class Toplist {
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_getUserPersistenceNumberKey
         */
        getUserPersistenceNumberKey(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_addRankChangeListener
         */
        addRankChangeListener(listener: (rankChangeEvent: ToplistRankChangeEvent) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_getLabel
         */
        getLabel(user_or_userId: User | number): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_removeRankChangeListener
         */
        removeRankChangeListener(listener: (rankChangeEvent: ToplistRankChangeEvent) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_getDisplayName
         */
        getDisplayName(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_addLabelChangeListener
         */
        addLabelChangeListener(listener: (labelChangeEvent: ToplistLabelChangeEvent) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_removeLabelChangeListener
         */
        removeLabelChangeListener(listener: (labelChangeEvent: ToplistLabelChangeEvent) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/Toplist.html#method_getChatCommand
         */
        getChatCommand(user_or_userId?: User | number): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ToplistAccess.html
     */
    class ToplistAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistAccess.html#method_removeToplist
         */
        removeToplist(toplist: Toplist): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistAccess.html#method_getAllToplists
         */
        getAllToplists(): Toplist[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistAccess.html#method_getToplist
         */
        getToplist(userPersistenceNumberKey: string): Toplist;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistAccess.html#method_createOrUpdateToplist
         */
        createOrUpdateToplist(
            userPersistenceNumberKey: string,
            displayName: string,
            parameters?: {
                labelMapping?: { [minValue: string]: string };
                ascending?: boolean;
                sortIndex?: number;
            },
        ): Toplist;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ToplistDisplayType.html
     */
    class ToplistDisplayType {}
    namespace ToplistDisplayType {
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistDisplayType.html#property_Label
         */
        const Label: ToplistDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistDisplayType.html#property_Value
         */
        const Value: ToplistDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistDisplayType.html#property_LabelAndRank
         */
        const LabelAndRank: ToplistDisplayType;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistDisplayType.html#property_ValueAndRank
         */
        const ValueAndRank: ToplistDisplayType;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html
     */
    class ToplistLabelChangeEvent {
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html#method_getNewLabel
         */
        getNewLabel(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html#method_getUser
         */
        getUser(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html#method_getToplist
         */
        getToplist(): Toplist;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html#method_getOldValue
         */
        getOldValue(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html#method_getNewValue
         */
        getNewValue(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistLabelChangeEvent.html#method_getOldLabel
         */
        getOldLabel(): string;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html
     */
    class ToplistRankChangeEvent {
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getNewRank
         */
        getNewRank(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getUsersOvertook
         */
        getUsersOvertook(): User[];
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getUser
         */
        getUser(): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getOldRank
         */
        getOldRank(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getToplist
         */
        getToplist(): Toplist;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getOldValue
         */
        getOldValue(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/ToplistRankChangeEvent.html#method_getNewValue
         */
        getNewValue(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/User.html
     */
    class User {
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isConnectedWithK3Client
         */
        isConnectedWithK3Client(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_sendPrivateMessage
         */
        sendPrivateMessage(message: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getUserStatus
         */
        getUserStatus(): UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getAppContentSession
         */
        getAppContentSession(appViewMode: AppViewMode): AppContentSession;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getKnuddelAccount
         */
        getKnuddelAccount(): KnuddelAccount;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isLocked
         */
        isLocked(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isLikingChannel
         */
        isLikingChannel(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isAway
         */
        isAway(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getKnuddelAmount
         */
        getKnuddelAmount(): KnuddelAmount;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_triggerDice
         * @since AppServer 89159, ChatServer 89159
         */
        triggerDice(diceConfiguration: DiceConfiguration): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getChannelTalkPermission
         */
        getChannelTalkPermission(): ChannelTalkPermission;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isOnlineInChannel
         */
        isOnlineInChannel(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isAppManager
         */
        isAppManager(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getGender
         */
        getGender(): Gender;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_canShowAppViewMode
         */
        canShowAppViewMode(mode: AppViewMode): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_hasProfilePhoto
         */
        hasProfilePhoto(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isProfilePhotoVerified
         */
        isProfilePhotoVerified(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getAuthenticityClassification
         * @since AppServer 94663, ChatServer 94663
         */
        getAuthenticityClassification(): AuthenticityClassification;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isAppDeveloper
         */
        isAppDeveloper(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_canSendAppContent
         */
        canSendAppContent(appContent: AppContent): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getAge
         */
        getAge(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getGenderDetailed
         * @since AppServer 20220811170542
         */
        getGenderDetailed(): GenderDetailed;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isChannelModerator
         */
        isChannelModerator(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getAppContentSessions
         */
        getAppContentSessions(appViewMode?: AppViewMode): AppContentSession[];
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_sendAppContent
         */
        sendAppContent(appContent: AppContent): AppContentSession;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_addNicklistIcon
         */
        addNicklistIcon(imagePath: string, imageWidth: number): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isOnline
         */
        isOnline(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getLastOnlineTime
         */
        getLastOnlineTime(): Date;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getQuestAccess
         * @since AppServer 82290, ChatServer 82290
         */
        getQuestAccess(): QuestAccess;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isChannelOwner
         */
        isChannelOwner(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getRegDate
         */
        getRegDate(): Date;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getPersistence
         */
        getPersistence(): UserPersistence;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getOnlineMinutes
         */
        getOnlineMinutes(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getNick
         */
        getNick(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isColorMuted
         */
        isColorMuted(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getUserType
         */
        getUserType(): UserType;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isInTeam
         */
        isInTeam(teamName: string, subTeamName?: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_sendPostMessage
         */
        sendPostMessage(topic: string, text: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getProfileLink
         */
        getProfileLink(displayText?: string): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getClientType
         */
        getClientType(): ClientType;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isChannelCoreUser
         * @since AppServer 92701, ChatServer 92701
         */
        isChannelCoreUser(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isStreamingVideo
         */
        isStreamingVideo(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getProfilePhoto
         */
        getProfilePhoto(width: number, height: number): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_equals
         */
        equals(user: User): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getReadme
         */
        getReadme(): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_removeNicklistIcon
         */
        removeNicklistIcon(imagePath: string): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isEventModerator
         */
        isEventModerator(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_getUserId
         */
        getUserId(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isMuted
         */
        isMuted(): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/User.html#method_isAgeVerified
         */
        isAgeVerified(): boolean;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserAccess.html
     */
    class UserAccess {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_getUserById
         */
        getUserById(userId: number): User;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_isUserDeleted
         */
        isUserDeleted(userId: number): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_getAccessibleUserCount
         * @since AppServer 20200212-112449
         */
        getAccessibleUserCount(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_exists
         */
        exists(nick: string): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_mayAccess
         */
        mayAccess(userId: number): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_getNick
         */
        getNick(userId: number): string;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_getUserId
         */
        getUserId(nick: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserAccess.html#method_eachAccessibleUser
         */
        eachAccessibleUser(
            callback: (user: User, index: number, accessibleUserCount: number, key?: string) => boolean,
            parameters?: {
                onStart?: (accessibleUserCount: number, key?: string) => void;
                onEnd?: (accessibleUserCount: number, key?: string) => void;
                online?: boolean;
            },
        ): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserPersistence.html
     */
    class UserPersistence extends Persistence {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistence.html#method_deleteAllNumbers
         * @since AppServer 88569
         */
        deleteAllNumbers(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistence.html#method_deleteAllStrings
         * @since AppServer 88569
         */
        deleteAllStrings(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistence.html#method_deleteAll
         * @since AppServer 88569
         */
        deleteAll(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistence.html#method_deleteAllObjects
         * @since AppServer 88569
         */
        deleteAllObjects(): number;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumberEntry.html
     */
    class UserPersistenceNumberEntry {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumberEntry.html#method_getValue
         */
        getValue(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumberEntry.html#method_getPosition
         */
        getPosition(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumberEntry.html#method_getRank
         */
        getRank(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumberEntry.html#method_getUser
         */
        getUser(): User;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html
     */
    class UserPersistenceNumbers {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_updateValue
         */
        static updateValue(key: string, oldValue: number, newValue: number): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getSortedEntriesAdjacent
         */
        static getSortedEntriesAdjacent(
            key: string,
            user_or_userId: User | number,
            parameters?: {
                ascending?: boolean;
                count?: number;
            },
        ): UserPersistenceNumberEntry[];
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getRank
         */
        static getRank(
            key: string,
            user_or_userId: User | number,
            parameters?: {
                ascending?: boolean;
                minimumValue?: number;
            },
        ): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_updateKey
         */
        static updateKey(oldKeyName: string, newKeyName: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_deleteAll
         */
        static deleteAll(key: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getNicksByKey
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        getNicksByKey(key: string, callback: (nicks: string[]) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getSortedEntries
         */
        static getSortedEntries(
            key: string,
            parameters?: {
                ascending?: boolean;
                count?: number;
                page?: number;
                minimumValue?: number;
                maximumValue?: number;
            },
        ): UserPersistenceNumberEntry[];
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_each
         */
        static each(
            key: string,
            callback: (user: User, value: number, index: number, totalCount: number, key: string) => boolean,
            parameters?: {
                ascending?: boolean;
                minimumValue?: number;
                maximumValue?: number;
                maximumCount?: number;
                onStart?: (totalCount: number, key: string) => void;
                onEnd?: (totalCount: number, key: string) => void;
                online?: boolean;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getPosition
         */
        static getPosition(
            key: string,
            user_or_userId: User | number,
            parameters?: {
                ascending?: boolean;
                minimumValue?: number;
            },
        ): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getAllKeys
         * @since AppServer 82483
         */
        static getAllKeys(filterKey?: string): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_addNumber
         */
        static addNumber(
            key: string,
            value: number,
            parameters?: {
                minimumValue?: number;
                maximumValue?: number;
                targetUsers?: User[];
            },
        ): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getSum
         */
        static getSum(key: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getCount
         */
        static getCount(
            key: string,
            parameters?: {
                minimumValue?: number;
                maximumValue?: number;
            },
        ): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceNumbers.html#method_getUserIdsByKey
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        getUserIdsByKey(key: string, callback: (userIds: number[]) => void): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserPersistenceObjects.html
     */
    class UserPersistenceObjects {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceObjects.html#method_getAllKeys
         * @since AppServer 82483
         */
        static getAllKeys(filterKey?: string): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceObjects.html#method_deleteAll
         * @since AppServer 82478
         */
        static deleteAll(key: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceObjects.html#method_getNicksByKey
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        getNicksByKey(key: string, callback: (nicks: string[]) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceObjects.html#method_each
         */
        static each(
            key: string,
            callback: (user: User, value: object, index: number, totalCount: number, key: string) => boolean,
            parameters?: {
                maximumCount?: number;
                onStart?: (totalCount: number, key: string) => void;
                onEnd?: (totalCount: number, key: string) => void;
                online?: boolean;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceObjects.html#method_getUserIdsByKey
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        getUserIdsByKey(key: string, callback: (userIds: number[]) => void): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html
     */
    class UserPersistenceStrings {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html#method_getAllKeys
         * @since AppServer 82483
         */
        static getAllKeys(filterKey?: string): string[];
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html#method_deleteAll
         * @since AppServer 82478
         */
        static deleteAll(key: string): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html#method_exists
         * @since AppServer 88571
         */
        static exists(key: string, value: string, ignoreCase?: boolean): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html#method_getNicksByKey
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        getNicksByKey(key: string, callback: (nicks: string[]) => void): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html#method_each
         */
        static each(
            key: string,
            callback: (user: User, value: string, index: number, totalCount: number, key: string) => boolean,
            parameters?: {
                ascending?: boolean;
                maximumCount?: number;
                onStart?: (totalCount: number, key: string) => void;
                onEnd?: (totalCount: number, key: string) => void;
                online?: boolean;
            },
        ): void;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserPersistenceStrings.html#method_getUserIdsByKey
         * @since AppServer 20201113-145716, ChatServer 20201113-145716
         */
        getUserIdsByKey(key: string, callback: (userIds: number[]) => void): void;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserStatus.html
     */
    class UserStatus {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#method_isAtLeast
         */
        isAtLeast(otherUserStatus: UserStatus): boolean;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#method_getNumericStatus
         */
        getNumericStatus(): number;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_Newbie
         */
        static readonly Newbie: UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_Family
         */
        static readonly Family: UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_Stammi
         */
        static readonly Stammi: UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_HonoryMember
         */
        static readonly HonoryMember: UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_Admin
         */
        static readonly Admin: UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_SystemBot
         */
        static readonly SystemBot: UserStatus;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserStatus.html#property_Sysadmin
         */
        static readonly Sysadmin: UserStatus;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/UserType.html
     */
    class UserType {}
    namespace UserType {
        /**
         * @see https://developer.knuddels.de/docs/classes/UserType.html#property_AppBot
         */
        const AppBot: UserType;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserType.html#property_SystemBot
         */
        const SystemBot: UserType;
        /**
         * @see https://developer.knuddels.de/docs/classes/UserType.html#property_Human
         */
        const Human: UserType;
    }

    /**
     * @see https://developer.knuddels.de/docs/classes/VideoChannelData.html
     */
    class VideoChannelData {
        /**
         * @see https://developer.knuddels.de/docs/classes/VideoChannelData.html#method_getStreamingVideoUsers
         */
        getStreamingVideoUsers(): User[];
    }
}
