// Type definitions for azure-sb
// Project: https://github.com/Azure/azure-sdk-for-node/tree/master/lib/services/serviceBus
// Definitions by: Microsoft Azure <https://github.com/Azure/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Azure.ServiceBus {
    interface Callback {
        (error: any, response: any): void;
    }

    interface NotificationHubRegistration {
        RegistrationId: string;
        ChannelUri?: string;
        DeviceToken?: string;
        gcmRegistrationId?: string;
        Tags?: string;
        BodyTemplate?: any;
        WnsHeaders?: any;
        MpnsHeaders?: any;
        Expiry?: Date;
    }

    export class NotificationHubService {
        new(hubName: string, endpointOrConnectionString: string, sharedAccessKeyName?: string, sharedAccessKeyValue?: string): NotificationHubService;
        hubName: string;
        wns: Wns.Service;
        apns: Apns.Service;
        gcm: Gcm.Service;
        mpns: Mpns.Service;
        send(tags: string, payload: Object | string, optionsOrCallback?: { headers: Object } | Callback, callback?: Callback): void;

        createOrUpdateInstallation(installation: string, options: any, callback?: Callback): void;
        patchInstallation(installationId: string, partialUpdateOperations: any[], options: any, callback?: Callback): void;
        deleteInstallation(installationId: string, options: any, callback?: Callback): void;
        getInstallation(installationId: string, options: any, callback?: Callback): void;

        /*
        // old school?
        createRegistrationId(callback?: Callback): void;
        getRegistration(registrationId: string, options: any, callback?: Callback): void;
        deleteRegistration(registrationId: string, options?: { etag: any }, callback?: Callback): void;
        updateRegistration(registration: NotificationHubRegistration, options?: { etag: any }, callback?: Callback): void;
        createOrUpdateRegistration(registration: NotificationHubRegistration, options?: { etag: any }, callback?: Callback): void;
        listRegistrations(options?: { top: number, skip: number }, callback?: Callback): void;
        listRegistrationsByTag(tag: string, options?: { top: number, skip: number }, callback?: Callback): void;
        */
    }

    export module Apns {
        interface Payload {
            expiry?: Date;
            aps?: Object;
            badge?: number;
            alert?: string;
            sound?: string;
            payload: Object;
        }

        interface Service {
            new(service: NotificationHubService): Service;
            send(tags: string | string[], payload: Apns.Payload, callback?: Callback): void;
            createNativeRegistration(token: string, tags: string | string[], optionsOrCallback?: Object | Callback, callback?: Callback): void;
            createOrUpdateNativeRegistration(registrationId: string, token: string, tags: string | string[], optionsOrCallback?: Object | Callback, callback?: Callback): void;
            createTemplateRegistration(token: string, tags: string | string[], template: Apns.Payload, optionsOrCallback?: Object | Callback, callback?: Callback): void;
            createOrUpdateTemplateRegistration(registrationId: string, token: string, tags: string | string[], template: Apns.Payload, optionsOrCallback?: Object | Callback, callback?: Callback): void;
            updateTemplateRegistration(registrationId: string, token: string, tags: string | string[], template: Apns.Payload, optionsOrCallback?: Object | Callback, callback?: Callback): void;
            listRegistrationsByToken(token: string, optionsOrCallback?: { top: number, skip: number } | Callback, callback?: Callback): void;
        }
    }
    export module Gcm {
        interface Service {
            new(service: NotificationHubService): Service;
            send(tags: string | string[], payload: any, callback?: Callback): void;
            createNativeRegistration(gcmRegistrationId: string, tags: string | string[], optionsOrCallback?: Object | Callback, callback?: Callback): void;
            createOrUpdateNativeRegistration(registrationId: string, gcmRegistrationId: string, tags: string | string[], optionsOrCallback?: Object | Callback, callback?: Callback): void;
            createTemplateRegistration(gcmRegistrationId: string, tags: string | string[], template: any, optionsOrCallback?: Object | Callback, callback?: Callback): void;
            createOrUpdateTemplateRegistration(registrationId: string, gcmRegistrationId: string, tags: string | string[], template: any, optionsOrCallback?: Object | Callback, callback?: Callback): void;
            updateTemplateRegistration(registrationId: string, gcmRegistrationId: string, tags: string | string[], template: any, optionsOrCallback?: Object | Callback, callback?: Callback): void;
            listRegistrationsByGcmRegistrationId(gcmRegistrationId: string, optionsOrCallback?: { top: number, skip: number } | Callback, callback?: Callback): void;
        }
    }

    export module Mpns { interface Service { } }

    export module Wns {
        interface Payload {
            text1?: string;
            text2?: string;
            text3?: string;
            text4?: string;
            image1src?: string;
            image1alt?: string;
            image2src?: string;
            image2alt?: string;
            image3src?: string;
            image3alt?: string;
            image4src?: string;
            image4alt?: string;
            lang?: string;
            type?: string;
        }

        interface Options {
            headers: Object;
        }

        interface Service {
            new(service: NotificationHubService): Service;
            sendTileSquareBlock(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquareText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquareText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquareText03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquareText04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText05(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText06(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText07(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText08(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText09(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText10(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideText11(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquareImage(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquarePeekImageAndText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquarePeekImageAndText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquarePeekImageAndText03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileSquarePeekImageAndText04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideImage(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideImageCollection(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideImageAndText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideImageAndText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideBlockAndText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideBlockAndText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideSmallImageAndText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideSmallImageAndText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideSmallImageAndText03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideSmallImageAndText04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWideSmallImageAndText05(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageCollection01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageCollection02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageCollection03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageCollection04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageCollection05(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageCollection06(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageAndText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImageAndText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImage01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImage02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImage03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImage04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImage05(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendTileWidePeekImage06(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastText03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastText04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastImageAndText01(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastImageAndText02(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastImageAndText03(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendToastImageAndText04(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            // badges = ['none','activity','alert','available','away','busy','newMessage','paused','playing','unavailable','error', 'attention']
            sendBadge(tags: string | string[], value: string | number, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            sendRaw(tags: string | string[], payload: any, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            // types = ['wns/toast', 'wns/badge', 'wns/tile', 'wns/raw']
            send(tags: string | string[], payload: string, type: string, optionsOrCallback?: Options | Callback, callback?: Callback): void;
            createNativeRegistration(channel: string, tags: string | string[], optionsOrCallback?: Options | Callback, callback?: Callback): void;
            createOrUpdateNativeRegistration(registrationId: string, channel: string, tags: string | string[], optionsOrCallback?: Options | Callback, callback?: Callback): void;
            listRegistrationsByChannel(channel: string, optionsOrCallback?: { top: number, skip: number } | Callback, callback?: Callback): void;
        }
    }
}
