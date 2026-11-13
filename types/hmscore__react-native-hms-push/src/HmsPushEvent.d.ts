import { NativeEventSubscription } from "react-native";
import { NotificationOpenedData, RemoteDataMessageObject } from "./RemoteDataMessage";

export interface HmsPushEvents {
    REMOTE_DATA_MESSAGE_RECEIVED: "REMOTE_DATA_MESSAGE_RECEIVED";
    ON_TOKEN_RECEIVED_EVENT: "ON_TOKEN_RECEIVED_EVENT";
    ON_TOKEN_ERROR_EVENT: "ON_TOKEN_ERROR_EVENT";
    NOTIFICATION_OPENED_EVENT: "NOTIFICATION_OPENED_EVENT";
    LOCAL_NOTIFICATION_ACTION_EVENT: "LOCAL_NOTIFICATION_ACTION_EVENT";
    ON_PUSH_MESSAGE_SENT: "ON_PUSH_MESSAGE_SENT";
    ON_PUSH_MESSAGE_SENT_ERROR: "ON_PUSH_MESSAGE_SENT_ERROR";
    ON_PUSH_MESSAGE_SENT_DELIVERED: "ON_PUSH_MESSAGE_SENT_DELIVERED";
    ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT: "ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT";
    ON_MULTI_SENDER_TOKEN_ERROR_EVENT: "ON_MULTI_SENDER_TOKEN_ERROR_EVENT";
}

export interface HmsPushEventListeners {
    onRemoteMessageReceived: (result: (result: RemoteDataMessageObject) => void) => NativeEventSubscription;
    onTokenReceived: (result: (result: { token: string }) => void) => NativeEventSubscription;
    onMultiSenderTokenReceived: (
        result: (result: { dataJSON: string; token: string }) => void,
    ) => NativeEventSubscription;
    onTokenError: (result: (result: { exception: string }) => void) => NativeEventSubscription;
    onMultiSenderTokenError: (
        result: (result: { exception: string; dataJSON: string }) => void,
    ) => NativeEventSubscription;
    onPushMessageSent: (result: (result: { msgId: string }) => void) => NativeEventSubscription;
    onPushMessageSentError: (result: (result: PushMessageSentResult) => void) => NativeEventSubscription;
    onPushMessageSentDelivered: (result: (result: PushMessageSentResult) => void) => NativeEventSubscription;
    onLocalNotificationAction: (result: (result: { dataJSON: string }) => void) => NativeEventSubscription;
    onNotificationOpenedApp: (result: (result: NotificationOpenedData) => void) => NativeEventSubscription;
}

/** Payload of `onPushMessageSentError` and `onPushMessageSentDelivered`. */
export interface PushMessageSentResult {
    /** Native error code, as a string. */
    result: string;
    msgId: string;
    resultInfo: string;
}

export type HmsPushEventType = HmsPushEvents & HmsPushEventListeners;
