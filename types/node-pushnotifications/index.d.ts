/// <reference types="node" />

import * as webPush from "web-push";

export = PushNotifications;

declare class PushNotifications {
    constructor(settings: PushNotifications.Settings);

    setOptions(opts: PushNotifications.Settings): void;
    sendWith(
        method: PushNotifications.PushMethod,
        regIds: string[],
        data: PushNotifications.Data,
        cb: PushNotifications.Callback,
    ): void;
    send(
        registrationIds: PushNotifications.RegistrationId | PushNotifications.RegistrationId[],
        data: PushNotifications.Data,
        cb: PushNotifications.Callback,
    ): void;
    send(
        registrationIds: PushNotifications.RegistrationId | PushNotifications.RegistrationId[],
        data: PushNotifications.Data,
    ): Promise<PushNotifications.Result[]>;
}

declare namespace PushNotifications {
    interface Settings {
        /** Google Cloud Messaging  */
        gcm?: {
            /** GCM or FCM token */
            id?: string | undefined;
        } | undefined;
        /** Apple Push Notifications */
        apn?: {
            /** APN Token */
            token?: {
                /**
                 * The filename of the provider token key (as supplied by Apple) to load from disk, or a
                 * Buffer/String containing the key data.
                 */
                key?: Buffer | string | undefined;
                /** The ID of the key issued by Apple */
                keyId?: string | undefined;
                /** ID of the team associated with the provider token key */
                teamId?: string | undefined;
            } | undefined;
            /**
             * The filename of the connection certificate to load from disk, or a Buffer/String containing the
             * certificate data.
             */
            cert?: string | undefined;
            /** The filename of the connection key to load from disk, or a Buffer or String containing the key data. */
            key?: string | undefined;
            /**
             * An array of trusted certificates. Each element should contain either a filename to load, or a
             * Buffer/String (in PEM format) to be used directly. If this is omitted several well known "root" CAs
             * will be used. - You may need to use this as some environments don't include the CA used by
             * Apple (entrust_2048).
             */
            ca?: Array<Buffer | string> | undefined;
            /**
             * File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer containing
             * the PFX data. If supplied will always be used instead of certificate and key above.
             */
            pfx?: Buffer | string | undefined;
            /** The passphrase for the connection key, if required */
            passphrase?: string | undefined;
            production?: boolean | undefined;
            voip?: boolean | undefined;
            address?: string | undefined;
            port?: number | undefined;
            rejectUnauthorized?: boolean | undefined;
            connectionRetryLimit?: number | undefined;
            cacheLength?: number | undefined;
            connectionTimeout?: number | undefined;
            autoAdjustCache?: boolean | undefined;
            maxConnections?: number | undefined;
            minConnections?: number | undefined;
            connectTimeout?: number | undefined;
            buffersNotifications?: boolean | undefined;
            fastMode?: boolean | undefined;
            disableNagle?: boolean | undefined;
            disableEPIPEFix?: boolean | undefined;
        } | undefined;
        /** Amazon Device Messaging */
        adm?: {
            client_id?: string | undefined;
            client_secret?: string | undefined;
        } | undefined;
        /** Windows Push Notifications */
        wns?: {
            client_id?: string | undefined;
            client_secret?: string | undefined;
            accessToken?: string | undefined;
            headers?: string | undefined;
            notificationMethod?: string | undefined;
        } | undefined;
        /** Microsoft Push Notification Service */
        mpns?: {
            options?: {
                client_id?: string | undefined;
                client_secret?: string | undefined;
            } | undefined;
        } | undefined;
        /** Web */
        web?: webPush.RequestOptions | undefined;
        /** Always use FCM? */
        isAlwaysUseFCM?: boolean | undefined;
    }
    interface Data {
        /** REQUIRED */
        title: string;
        /** REQUIRED */
        body: string;
        custom?: { [key: string]: string | number } | string | undefined;
        /**
         * gcm, apn. Supported values are 'high' or 'normal' (gcm). Will be translated to 10 and 5 for apn. Defaults
         * to 'high'
         */
        priority?: string | undefined;
        /** gcm for android, used as collapseId in apn */
        collapseKey?: string | undefined;
        /** gcm for android */
        contentAvailable?: boolean | string | undefined;
        /** gcm for android */
        delayWhileIdle?: boolean | undefined;
        /** gcm for android */
        restrictedPackageName?: string | undefined;
        /** gcm for android */
        dryRun?: boolean | undefined;
        /** gcm for android */
        icon?: string | undefined;
        /** gcm for android */
        tag?: string | undefined;
        /** gcm for android */
        color?: string | undefined;
        /** gcm for android. In ios, category will be used if not supplied */
        clickAction?: string | undefined;
        /** gcm, apn */
        locKey?: string | undefined;
        /** gcm, apn */
        bodyLocArgs?: string | undefined;
        /** gcm, apn */
        titleLocKey?: string | undefined;
        /** gcm, apn */
        titleLocArgs?: string | undefined;
        /** gcm, apn */
        retries?: number | undefined;
        /** apn */
        encoding?: string | undefined;
        /** gcm for ios, apn */
        badge?: number | undefined;
        /** gcm, apn */
        sound?: string | undefined;
        /** apn, will take precedence over title and body. It is also accepted a text message in alert */
        alert?: {} | string | undefined;
        /** apn and gcm for ios */
        launchImage?: string | undefined;
        /** apn and gcm for ios */
        action?: string | undefined;
        /** apn and gcm for ios */
        topic?: string | undefined;
        /** apn and gcm for ios */
        category?: string | undefined;
        /** apn and gcm for ios */
        mdm?: string | undefined;
        /** apn and gcm for ios */
        urlArgs?: string | undefined;
        /** apn and gcm for ios */
        truncateAtWordEnd?: boolean | undefined;
        /** apn */
        mutableContent?: number | undefined;
        /** seconds */
        expiry?: number | undefined;
        /** if both expiry and timeToLive are given, expiry will take precedency */
        timeToLive?: number | undefined;
        /** wns */
        headers?: string[] | undefined;
        /** wns */
        launch?: string | undefined;
        /** wns */
        duration?: string | undefined;
        /** ADM */
        consolidationKey?: string | undefined;
    }
    interface Message {
        regId: string;
        originalRegId?: string | undefined;
        messageId?: string | undefined;
        error?: Error | null | undefined;
        errorMsg?: string | undefined;
    }
    interface Result {
        method: string;
        success: number;
        failure: number;
        message: Message[];
    }
    type PushMethod = (regIds: string[], data: Data, settings: Settings) => void;
    type Callback = (err: any, result: any) => void;
    type RegistrationId = string | webPush.PushSubscription;
}
