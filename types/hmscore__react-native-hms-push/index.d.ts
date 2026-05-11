import { HmsPushEventType } from "./src/HmsPushEvent";
import { ProfileType, ProfileTypeEnum } from "./src/HmsPushProfileTypes";
import { HmsPushResultCodeInterface } from "./src/HmsPushResultCode";
import { Importance, LocalNotificationAttributes, Priority, RepeatType, Visibility } from "./src/LocalNotification";
import { BackgroundRemoteMessage, RemoteDataMessageObject, RemoteDataMessageWithExtras } from "./src/RemoteDataMessage";
import { RemoteMessageBuilderInterface } from "./src/RemoteMessageBuilder";
import { ResultResponse } from "./src/ResultResponse";
import RNRemoteMessage from "./src/RNRemoteMessage";

export type LocalNotificationOptions =
    | {
        [k in keyof LocalNotificationAttributes]?: unknown;
    }
    | { [extras: string]: unknown };

declare namespace HmsLocalNotification {
    const Attr: LocalNotificationAttributes;
    const Importance: Importance;
    const RepeatType: RepeatType;
    const Visibility: Visibility;
    const Priority: Priority;

    function localNotification(options: LocalNotificationOptions): Promise<ResultResponse<LocalNotificationAttributes>>;

    function localNotificationSchedule(
        options: LocalNotificationOptions,
    ): Promise<ResultResponse<LocalNotificationAttributes>>;

    function cancelNotificationsWithId(notificationIds: string[]): Promise<ResultResponse<boolean>>;
    function cancelAllNotifications(): Promise<ResultResponse<boolean>>;
    function cancelScheduledNotifications(): Promise<ResultResponse<boolean>>;
    function getNotifications(): Promise<ResultResponse<LocalNotificationOptions[]>>;
    function getScheduledNotifications(): Promise<ResultResponse<LocalNotificationOptions[]>>;
    function getChannels(): Promise<ResultResponse<string[]>>;
    function cancelNotifications(): Promise<ResultResponse<boolean>>;
    function cancelNotificationsWithTag(tag: string): Promise<ResultResponse<boolean>>;
    function deleteChannel(channelId: string): Promise<ResultResponse<boolean>>;
    function channelBlocked(channelId: string): Promise<ResultResponse<boolean>>;
    function channelExists(channelId: string): Promise<ResultResponse<boolean>>;
}

declare namespace HmsPushMessaging {
    function setBackgroundMessageHandler(handler: (dataMessage: BackgroundRemoteMessage) => void): void;
    function sendRemoteMessage(remoteMessageObject: { [k: string]: unknown }): Promise<ResultResponse<boolean>>;
    function turnOnPush(): Promise<ResultResponse<boolean>>;
    function turnOffPush(): Promise<ResultResponse<boolean>>;
    function subscribe(topic: string): Promise<ResultResponse<boolean>>;
    function unsubscribe(topic: string): Promise<ResultResponse<boolean>>;
    function isAutoInitEnabled(): Promise<ResultResponse<boolean>>;
    function setAutoInitEnabled(value: boolean): Promise<ResultResponse<boolean>>;
    function getInitialNotification(): Promise<ResultResponse<RemoteDataMessageWithExtras>>;
}

declare namespace HmsPushInstanceId {
    function getToken(value: string): Promise<ResultResponse<string>>;
    function getId(): Promise<ResultResponse<string>>;
    function getAAID(): Promise<ResultResponse<string>>;
    function getTokenWithSubjectId(subjectId: string): Promise<ResultResponse<string>>;
    function getCreationTime(): Promise<ResultResponse<string>>;
    function deleteToken(value: string): Promise<ResultResponse<boolean>>;
    function deleteAAID(): Promise<ResultResponse<boolean>>;
    function deleteTokenWithSubjectId(subjectId: string): Promise<ResultResponse<boolean>>;
}

declare namespace HmsPushProfile {
    const Type: Readonly<ProfileType>;

    function isSupportProfile(): Promise<ResultResponse<string>>;
    function addProfile(type: ProfileTypeEnum, profileId: string): Promise<ResultResponse<string>>;

    function addProfileWithSubjectId(
        subjectId: string,
        type: ProfileTypeEnum,
        profileId: string,
    ): Promise<ResultResponse<string>>;

    function deleteProfile(profileId: string): Promise<ResultResponse<boolean>>;
    function deleteProfileWithSubjectId(subjectId: string, profileId: string): Promise<ResultResponse<boolean>>;
}

declare namespace HmsPushOpenDevice {
    function getOdid(): Promise<ResultResponse<string>>;
}

declare const RemoteMessageBuilder: RemoteMessageBuilderInterface;
declare const HmsPushEvent: HmsPushEventType;
declare const HmsPushResultCode: HmsPushResultCodeInterface;

export {
    HmsLocalNotification,
    HmsPushEvent,
    HmsPushInstanceId,
    HmsPushMessaging,
    HmsPushOpenDevice,
    HmsPushProfile,
    HmsPushResultCode,
    RemoteMessageBuilder,
    RNRemoteMessage,
};

export {
    HmsPushEventType,
    HmsPushResultCodeInterface,
    RemoteDataMessageObject,
    RemoteDataMessageWithExtras,
    RemoteMessageBuilderInterface,
};

export default HmsPushInstanceId;
