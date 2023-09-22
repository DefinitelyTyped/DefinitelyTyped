import { NativeEventSubscription } from "react-native";
import { RemoteDataMessageObject, RemoteDataMessageWithExtras } from "./RemoteDataMessage";
import { ResultResponse } from "./ResultResponse";

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
    onTokenError: (result: (result: ResultResponse<string>) => void) => NativeEventSubscription;
    onMultiSenderTokenError: (result: (result: ResultResponse<string>) => void) => NativeEventSubscription;
    onPushMessageSent: (result: (result: { msgId: string }) => void) => NativeEventSubscription;
    onPushMessageSentError: (
        result: (result: { resultInfo: string; msgId: string; result: string }) => void,
    ) => NativeEventSubscription;
    onPushMessageSentDelivered: (result: (result: ResultResponse<boolean>) => void) => NativeEventSubscription;
    onLocalNotificationAction: (result: (result: { dataJSON: string }) => void) => NativeEventSubscription;
    onNotificationOpenedApp: (result: (result: RemoteDataMessageWithExtras) => void) => NativeEventSubscription;
}

export type HmsPushEventType = HmsPushEvents & HmsPushEventListeners;
