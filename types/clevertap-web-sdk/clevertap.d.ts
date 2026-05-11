type Region = "sg1" | "in1" | "us1" | "aps3" | "mec1" | "eu1" | "sk1";

interface PrivacyData {
    optOut?: boolean;
    useIP?: boolean;
}
interface Privacy extends Array<any> {
    push(...privacyArr: PrivacyData[]): 0;
}

type EventDataValue = string | number | boolean | Date | null | undefined;
type EventData = Record<string, EventDataValue | EventDataValue[] | Record<string, EventDataValue>[]>;
interface EventDetails {
    firstTime: Date;
    lastTime: Date;
    count: number;
}
interface EventHandler {
    push(evtName: string, evtData?: EventData): number;
    getDetails(evtName: string): EventDetails | undefined;
}
interface SiteData {
    Name?: string;
    Identity?: string | number;
    Gender?: "M" | "F";
    Employed?: "Y" | "N";
    Married?: "Y" | "N";
    Education?: "School" | "College" | "Graduate";
    Age?: string | number;
    DOB?: string | number | Date;
    Phone?: string | number;
    [key: string]: string | number | boolean | Date | null | undefined;
}
interface ProfileData {
    Site?: SiteData;
    Facebook?: string | number | boolean | Date | null | undefined;
    "Google Plus"?: string | number | boolean | Date | null | undefined;
}
interface ProfileHandler extends Array<any> {
    push(...profileData: ProfileData[]): number;
    getAttribute(profileName: string): string | number | boolean | Date | null | undefined;
}

interface UserLoginHandler extends Array<any> {
    push(...profileData: ProfileData[]): number;
    clear(): void;
}
interface NotificationData {
    titleText: string;
    bodyText: string;
    okButtonText: string;
    rejectButtonText: string;
    okButtonColor?: string;
    skipDialog?: boolean;
    askAgainTimeInSeconds?: number;
    okCallback?: () => void;
    rejectCallback?: () => void;
    subscriptionCallback?: () => void;
    hidePoweredByCT?: boolean;
    serviceWorkerPath?: string;
    httpsPopupPath?: string;
    httpsIframePath?: string;
    apnsWebPushId?: string;
    apnsWebPushServiceUrl?: string;
}
interface NotificationHandler extends Array<any> {
    push(notificationData: NotificationData): number;
    push(
        titleText: string,
        bodyText: string,
        okButtonText: string,
        rejectButtonText: string,
        okButtonColor?: string,
        skipDialog?: boolean,
        askAgainTimeInSeconds?: number,
    ): number;
}
interface User {
    getTotalVisits(): number | undefined;
    getLastVisit(): Date | undefined;
}
interface Session {
    getTimeElapsed(): number | undefined;
    getPageCount(): number | undefined;
}
interface CampaignDetail {
    wzrk_id: string;
    [key: string]: any;
}
interface notificationCallbackData {
    msgContent: string;
    msgId: string;
}
interface CustomNotificationEvent {
    msgId: string;
    pivotId?: string;
    wzrk_slideNo?: number;
    kv?: Record<string, string | number | boolean>;
    msgCTkv?: Record<string, string | number | boolean>;
}

// Inbox Interfaces
interface InboxMessageButton {
    [key: string]: string | number | boolean | undefined;
}
interface InboxMessageDisplay {
    [key: string]: string | number | boolean | undefined;
}
interface InboxMessageContent {
    title: string;
    description: string;
    onClickUrl?: string;
    openUrlInNewTab?: boolean;
    buttons?: InboxMessageButton[];
}
interface InboxMessage {
    id: string;
    date: number;
    viewed: number;
    templateType?: string;
    type: number;
    tags: string[];
    enableTags?: boolean;
    display: InboxMessageDisplay;
    msg: InboxMessageContent[];
    wzrk_ttl: number;
    wzrk_id: string;
    wzrk_pivot?: string;
}
type InboxMessagesCollection = Record<string, InboxMessage>;

// Variable Interfaces
type VariableType = "string" | "number" | "boolean" | "file" | "object";
type VariableValue = string | number | boolean | Record<string, any>;

interface Variable {
    name: string;
    defaultValue?: VariableValue;
    value?: VariableValue;
    type: VariableType;
    hadStarted: boolean;
    valueChangedCallbacks: (() => void)[];
}
declare class CleverTap {
    init(accountId: string, region?: Region, targetDomain?: string, token?: string): void;
    privacy: Privacy;
    event: EventHandler;
    profile: ProfileHandler;
    onUserLogin: UserLoginHandler;
    notifications: NotificationHandler;
    user: User;
    session: Session;
    setLogLevel(logLevel: 0 | 1 | 2 | 3 | 4): void;
    getCleverTapID(): string | null;
    logout(): void;
    clear(): void;
    pageChanged(): void;
    spa: boolean;
    enablePersonalization: boolean;
    dismissSpamControl: boolean;
    getAccountID: () => string | null;
    setMultiValuesForKey: (key: any, value: Array<string | number>) => void;
    addMultiValueForKey: (key: any, value: string | number) => void;
    addMultiValuesForKey: (key: any, value: Array<string | number>) => void;
    removeMultiValueForKey: (key: any, value: string | number) => void;
    removeMultiValuesForKey: (key: any, value: Array<string | number>) => void;
    removeValueForKey: (key: any) => void;
    handleDecrementValue: (key: any, value: number) => void;
    handleIncrementValue: (key: any, value: number) => void;
    setOffline: (arg: boolean) => void;
    renderNotificationViewed: (detail: CustomNotificationEvent) => void;
    renderNotificationClicked: (detail: CustomNotificationEvent) => void;
    notificationCallback: (arg: notificationCallbackData) => any;
    raiseNotificationClicked: () => void;
    markReadAllInboxMessage: () => void;
    markReadInboxMessagesForIds: (messageIds: string[]) => void;
    markReadInboxMessage: (messageId: string) => void;
    deleteInboxMessage: (messageId: string) => void;
    getInboxMessageForId: (messageId: string) => InboxMessage | undefined;
    getUnreadInboxMessages: () => InboxMessagesCollection;
    getAllInboxMessages: () => InboxMessagesCollection;
    getInboxMessageUnreadCount: () => number | undefined;
    getInboxMessageCount: () => number | undefined;
    getLocation: (lat: number, lng: number) => void;
    defineVariable: (name: string, defaultValue: VariableValue) => Variable;
    syncVariables(onSyncSuccess?: () => void, onSyncFailure?: (error: Error) => void): Promise<void>;
    fetchVariables(onFetchCallback?: () => void): void;
    addVariablesChangedCallback(callback: () => void): void;
    addOneTimeVariablesChangedCallback(callback: () => void): void;
    getSDKVersion: () => string;
    enableLocalStorageEncryption: (value: boolean) => void;
    isLocalStorageEncryptionEnabled: () => boolean;
    defineFileVariable: (name: string) => Variable;
    getVariables: () => Record<string, VariableValue>;
    getVariableValue: (name: string) => VariableValue | undefined;
    getAllQualifiedCampaignDetails: () => CampaignDetail[] | undefined;
}

export default CleverTap;
