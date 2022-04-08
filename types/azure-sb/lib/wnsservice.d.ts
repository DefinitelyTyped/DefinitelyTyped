import NotificationHubService = require('azure-sb/lib/notificationhubservice');
import Callback = Azure.ServiceBus.ResponseCallback;
import { Azure } from 'azure-sb';
import ListNotificationHubsOptions = Azure.ServiceBus.ListNotificationHubsOptions;
import Dictionary = Azure.ServiceBus.Dictionary;

type Payload = Partial<{
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    image1src: string;
    image1alt: string;
    image2src: string;
    image2alt: string;
    image3src: string;
    image3alt: string;
    image4src: string;
    image4alt: string;
    lang: string;
    type: string;
}>;

interface Options {
    headers: Dictionary<string>;
}

type badges =
    'none'
    | 'activity'
    | 'alert'
    | 'available'
    | 'away'
    | 'busy'
    | 'newMessage'
    | 'paused'
    | 'playing'
    | 'unavailable'
    | 'error'
    | 'attention';

type types = 'wns/toast' | 'wns/badge' | 'wns/tile' | 'wns/raw';

declare class WnsService {
    constructor(service: NotificationHubService);

    public notificationHubService: NotificationHubService;

    sendTileSquareBlock(tags: string | string[],
                        payload: any,
                        optionsOrCallback: Options | Callback,
                        callback?: Callback): void;

    sendTileSquareText01(tags: string | string[],
                         payload: any,
                         optionsOrCallback: Options | Callback,
                         callback?: Callback): void;

    sendTileSquareText02(tags: string | string[],
                         payload: any,
                         optionsOrCallback: Options | Callback,
                         callback?: Callback): void;

    sendTileSquareText03(tags: string | string[],
                         payload: any,
                         optionsOrCallback: Options | Callback,
                         callback?: Callback): void;

    sendTileSquareText04(tags: string | string[],
                         payload: any,
                         optionsOrCallback: Options | Callback,
                         callback?: Callback): void;

    sendTileWideText01(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText02(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText03(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText04(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText05(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText06(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText07(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText08(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText09(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText10(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileWideText11(tags: string | string[],
                       payload: any,
                       optionsOrCallback: Options | Callback,
                       callback?: Callback): void;

    sendTileSquareImage(tags: string | string[],
                        payload: any,
                        optionsOrCallback: Options | Callback,
                        callback?: Callback): void;

    sendTileSquarePeekImageAndText01(tags: string | string[],
                                     payload: any,
                                     optionsOrCallback: Options | Callback,
                                     callback?: Callback): void;

    sendTileSquarePeekImageAndText02(tags: string | string[],
                                     payload: any,
                                     optionsOrCallback: Options | Callback,
                                     callback?: Callback): void;

    sendTileSquarePeekImageAndText03(tags: string | string[],
                                     payload: any,
                                     optionsOrCallback: Options | Callback,
                                     callback?: Callback): void;

    sendTileSquarePeekImageAndText04(tags: string | string[],
                                     payload: any,
                                     optionsOrCallback: Options | Callback,
                                     callback?: Callback): void;

    sendTileWideImage(tags: string | string[],
                      payload: any,
                      optionsOrCallback: Options | Callback,
                      callback?: Callback): void;

    sendTileWideImageCollection(tags: string | string[],
                                payload: any,
                                optionsOrCallback: Options | Callback,
                                callback?: Callback): void;

    sendTileWideImageAndText01(tags: string | string[],
                               payload: any,
                               optionsOrCallback: Options | Callback,
                               callback?: Callback): void;

    sendTileWideImageAndText02(tags: string | string[],
                               payload: any,
                               optionsOrCallback: Options | Callback,
                               callback?: Callback): void;

    sendTileWideBlockAndText01(tags: string | string[],
                               payload: any,
                               optionsOrCallback: Options | Callback,
                               callback?: Callback): void;

    sendTileWideBlockAndText02(tags: string | string[],
                               payload: any,
                               optionsOrCallback: Options | Callback,
                               callback?: Callback): void;

    sendTileWideSmallImageAndText01(tags: string | string[],
                                    payload: any,
                                    optionsOrCallback: Options | Callback,
                                    callback?: Callback): void;

    sendTileWideSmallImageAndText02(tags: string | string[],
                                    payload: any,
                                    optionsOrCallback: Options | Callback,
                                    callback?: Callback): void;

    sendTileWideSmallImageAndText03(tags: string | string[],
                                    payload: any,
                                    optionsOrCallback: Options | Callback,
                                    callback?: Callback): void;

    sendTileWideSmallImageAndText04(tags: string | string[],
                                    payload: any,
                                    optionsOrCallback: Options | Callback,
                                    callback?: Callback): void;

    sendTileWideSmallImageAndText05(tags: string | string[],
                                    payload: any,
                                    optionsOrCallback: Options | Callback,
                                    callback?: Callback): void;

    sendTileWidePeekImageCollection01(tags: string | string[],
                                      payload: any,
                                      optionsOrCallback: Options | Callback,
                                      callback?: Callback): void;

    sendTileWidePeekImageCollection02(tags: string | string[],
                                      payload: any,
                                      optionsOrCallback: Options | Callback,
                                      callback?: Callback): void;

    sendTileWidePeekImageCollection03(tags: string | string[],
                                      payload: any,
                                      optionsOrCallback: Options | Callback,
                                      callback?: Callback): void;

    sendTileWidePeekImageCollection04(tags: string | string[],
                                      payload: any,
                                      optionsOrCallback: Options | Callback,
                                      callback?: Callback): void;

    sendTileWidePeekImageCollection05(tags: string | string[],
                                      payload: any,
                                      optionsOrCallback: Options | Callback,
                                      callback?: Callback): void;

    sendTileWidePeekImageCollection06(tags: string | string[],
                                      payload: any,
                                      optionsOrCallback: Options | Callback,
                                      callback?: Callback): void;

    sendTileWidePeekImageAndText01(tags: string | string[],
                                   payload: any,
                                   optionsOrCallback: Options | Callback,
                                   callback?: Callback): void;

    sendTileWidePeekImageAndText02(tags: string | string[],
                                   payload: any,
                                   optionsOrCallback: Options | Callback,
                                   callback?: Callback): void;

    sendTileWidePeekImage01(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendTileWidePeekImage02(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendTileWidePeekImage03(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendTileWidePeekImage04(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendTileWidePeekImage05(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendTileWidePeekImage06(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendToastText01(tags: string | string[],
                    payload: any,
                    optionsOrCallback: Options | Callback,
                    callback?: Callback): void;

    sendToastText02(tags: string | string[],
                    payload: any,
                    optionsOrCallback: Options | Callback,
                    callback?: Callback): void;

    sendToastText03(tags: string | string[],
                    payload: any,
                    optionsOrCallback: Options | Callback,
                    callback?: Callback): void;

    sendToastText04(tags: string | string[],
                    payload: any,
                    optionsOrCallback: Options | Callback,
                    callback?: Callback): void;

    sendToastImageAndText01(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendToastImageAndText02(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendToastImageAndText03(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendToastImageAndText04(tags: string | string[],
                            payload: any,
                            optionsOrCallback: Options | Callback,
                            callback?: Callback): void;

    sendBadge(tags: badges | badges[],
              value: string | number,
              callback?: Callback): void;

    sendBadge(tags: badges | badges[],
              value: string | number,
              options: Options,
              callback?: Callback): void;

    sendRaw(tags: string | string[],
            payload: any,
            callback?: Callback): void;

    sendRaw(tags: string | string[],
            payload: any,
            options: Options,
            callback?: Callback): void;

    send(tags: string | string[],
         payload: string,
         type: types,
         callback?: Callback): void;

    send(tags: string | string[],
         payload: string,
         type: types,
         options: Options,
         callback: Callback): void;

    createNativeRegistration(channel: string,
                             tags: string | string[],
                             callback: Callback): void;

    createNativeRegistration(channel: string,
                             tags: string | string[],
                             options: Options,
                             callback: Callback): void;

    createOrUpdateNativeRegistration(registrationId: string,
                                     channel: string,
                                     tags: string | string[],
                                     callback: Callback): void;

    createOrUpdateNativeRegistration(registrationId: string,
                                     channel: string,
                                     tags: string | string[],
                                     options: Options,
                                     callback: Callback): void;

    listRegistrationsByChannel(channel: string,
                               callback: Callback): void;

    listRegistrationsByChannel(channel: string,
                               options: ListNotificationHubsOptions,
                               callback: Callback): void;

}

export = WnsService;
