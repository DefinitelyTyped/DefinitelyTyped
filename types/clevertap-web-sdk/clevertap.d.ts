type Region = "sg1" | "in1" | "us1" | "aps3" | "mec1";

interface PrivacyData {
    optOut?: boolean;
    useIP?: boolean;
}
interface Privacy extends Array<any> {
    push(...privacyArr: PrivacyData[]): 0;
}

type EventName = string;
type EventData = object;
type EventNameOrData = EventName | EventData;
interface EventDetails {
    firstTime: Date;
    lastTime: Date;
    count: number;
}
interface EventHandler extends Array<any> {
    push(evtName: string, ...evtNameOrData: EventNameOrData[]): 0;
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
    [key: string]: any;
}
interface ProfileData {
    Site?: SiteData;
    Facebook?: object;
    "Google Plus"?: object;
}
interface ProfileHandler extends Array<any> {
    push(...profileData: ProfileData[]): 0;
    getAttribute(profileName: string): any;
}

interface UserLoginHandler extends Array<any> {
    push(...profileData: ProfileData[]): 0;
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
    push(notificationData: NotificationData): 0;
    push(
        titleText: string,
        bodyText: string,
        okButtonText: string,
        rejectButtonText: string,
        okButtonColor?: string,
        skipDialog?: boolean,
        askAgainTimeInSeconds?: number,
    ): 0;
}
interface User {
    getTotalVisits(): number | undefined;
    getLastVisit(): Date | undefined;
}
interface Session {
    getTimeElapsed(): number | undefined;
    getPageCount(): number | undefined;
}
interface notificationCallbackData {
    msgContent: string;
    msgId: string;
}
interface CustomNotificationEvent {
    msgId: string;
    pivotId?: string;
    wzrk_slideNo?: number;
    // evtData?: any;
    kv?: any;
    msgCTkv?: any;
}
declare class CleverTap {
    init(accountId: string, region?: Region, targetDomain?: string): void;
    privacy: Privacy;
    event: EventHandler;
    profile: ProfileHandler;
    onUserLogin: UserLoginHandler;
    notifications: NotificationHandler;
    user: User;
    session: Session;
    setLogLevel(logLevel: 0 | 1 | 2 | 3): void;
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
    getInboxMessageForId: (messageId: string) => void;
    getUnreadInboxMessages: () => any;
    getAllInboxMessages: () => any;
    getInboxMessageUnreadCount: () => number | undefined;
    getInboxMessageCount: () => number | undefined;
    getLocation: (lat: number, lng: number) => void;
}

export default CleverTap;
