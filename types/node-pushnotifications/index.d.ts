// Type definitions for node-pushnotifications 1.0
// Project: https://github.com/appfeel/node-pushnotifications
// Definitions by: Menushka Weeratunga <https://github.com/menushka>
//                 Julian Hundeloh <https://github.com/jaulz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as webPush from 'web-push';

export = PushNotifications;

declare class PushNotifications {
    constructor(settings: PushNotifications.Settings);

    setOptions(opts: PushNotifications.Settings): void;
    sendWith(method: PushNotifications.PushMethod, regIds: string[], data: PushNotifications.Data, cb: PushNotifications.Callback): void;
    send(registrationIds: PushNotifications.RegistrationId|PushNotifications.RegistrationId[], data: PushNotifications.Data, cb: PushNotifications.Callback): void;
    send(registrationIds: PushNotifications.RegistrationId|PushNotifications.RegistrationId[], data: PushNotifications.Data): Promise<PushNotifications.Result[]>;
}

declare namespace PushNotifications {
    interface Settings {
        /** Google Cloud Messaging  */
        gcm?: {
            /** GCM or FCM token */
            id?: string;
        };
        /** Apple Push Notifications */
        apn?: {
            /** APN Token */
            token?: {
                /**
                 * The filename of the provider token key (as supplied by Apple) to load from disk, or a
                 * Buffer/String containing the key data.
                 */
                key?: Buffer | string;
                /** The ID of the key issued by Apple */
                keyId?: string;
                /** ID of the team associated with the provider token key */
                teamId?: string;
            };
            /**
             * The filename of the connection certificate to load from disk, or a Buffer/String containing the
             * certificate data.
             */
            cert?: string;
            /** The filename of the connection key to load from disk, or a Buffer or String containing the key data. */
            key?: string;
            /**
             * An array of trusted certificates. Each element should contain either a filename to load, or a
             * Buffer/String (in PEM format) to be used directly. If this is omitted several well known "root" CAs
             * will be used. - You may need to use this as some environments don't include the CA used by
             * Apple (entrust_2048).
             */
            ca?: Array<Buffer | string>;
            /**
             * File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer containing
             * the PFX data. If supplied will always be used instead of certificate and key above.
             */
            pfx?: Buffer | string;
            /** The passphrase for the connection key, if required */
            passphrase?: string;
            production?: boolean;
            voip?: boolean;
            address?: string;
            port?: number;
            rejectUnauthorized?: boolean;
            connectionRetryLimit?: number;
            cacheLength?: number;
            connectionTimeout?: number;
            autoAdjustCache?: boolean;
            maxConnections?: number;
            minConnections?: number;
            connectTimeout?: number;
            buffersNotifications?: boolean;
            fastMode?: boolean;
            disableNagle?: boolean;
            disableEPIPEFix?: boolean;
        };
        /** Amazon Device Messaging */
        adm?: {
            client_id?: string;
            client_secret?: string;
        };
        /** Windows Push Notifications */
        wns?: {
            client_id?: string;
            client_secret?: string;
            accessToken?: string;
            headers?: string;
            notificationMethod?: string;
        };
        /** Microsoft Push Notification Service */
        mpns?: {
            options?: {
                client_id?: string;
                client_secret?: string;
            };
        };
        /** Web */
        web?: webPush.RequestOptions;
        /** Always use FCM? */
        isAlwaysUseFCM?: boolean;
    }
    interface Data {
        /** REQUIRED */
        title: string;
        /** REQUIRED */
        body: string;
        custom?: { [key: string]: string | number } | string;
        /**
         * gcm, apn. Supported values are 'high' or 'normal' (gcm). Will be translated to 10 and 5 for apn. Defaults
         * to 'high'
         */
        priority?: string;
        /** gcm for android, used as collapseId in apn */
        collapseKey?: string;
        /** gcm for android */
        contentAvailable?: boolean | string;
        /** gcm for android */
        delayWhileIdle?: boolean;
        /** gcm for android */
        restrictedPackageName?: string;
        /** gcm for android */
        dryRun?: boolean;
        /** gcm for android */
        icon?: string;
        /** gcm for android */
        tag?: string;
        /** gcm for android */
        color?: string;
        /** gcm for android. In ios, category will be used if not supplied */
        clickAction?: string;
        /** gcm, apn */
        locKey?: string;
        /** gcm, apn */
        bodyLocArgs?: string;
        /** gcm, apn */
        titleLocKey?: string;
        /** gcm, apn */
        titleLocArgs?: string;
        /** gcm, apn */
        retries?: number;
        /** apn */
        encoding?: string;
        /** gcm for ios, apn */
        badge?: number;
        /** gcm, apn */
        sound?: string;
        /** apn, will take precedence over title and body. It is also accepted a text message in alert */
        alert?: {} | string;
        /** apn and gcm for ios */
        launchImage?: string;
        /** apn and gcm for ios */
        action?: string;
        /** apn and gcm for ios */
        topic?: string;
        /** apn and gcm for ios */
        category?: string;
        /** apn and gcm for ios */
        mdm?: string;
        /** apn and gcm for ios */
        urlArgs?: string;
        /** apn and gcm for ios */
        truncateAtWordEnd?: boolean;
        /** apn */
        mutableContent?: number;
        /** seconds */
        expiry?: number;
        /** if both expiry and timeToLive are given, expiry will take precedency */
        timeToLive?: number;
        /** wns */
        headers?: string[];
        /** wns */
        launch?: string;
        /** wns */
        duration?: string;
        /** ADM */
        consolidationKey?: string;
    }
    interface Message {
        regId: string;
        originalRegId?: string;
        messageId?: string;
        error?: Error | null;
        errorMsg?: string;
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
