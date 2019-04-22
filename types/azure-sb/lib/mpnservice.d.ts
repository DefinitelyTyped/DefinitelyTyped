import { Azure } from '../index';
import NotificationHubService = require('azure-sb/lib/notificationhubservice');
import ResponseCallback = Azure.ServiceBus.ResponseCallback;
import NotificationHubRegistration = Azure.ServiceBus.NotificationHubRegistration;
import ListNotificationHubsOptions = Azure.ServiceBus.ListNotificationHubsOptions;
import Dictionary = Azure.ServiceBus.Dictionary;

type Template = TileTemplate | FlipTileTemplate | ToastTemplate;

interface TileTemplate {
    backgroundImage: string;
    count: string;
    title: string;
    backBackgroundImage: string;
    backTitle: string;
    backContent: string;
    id: string;
}

interface FlipTileTemplate extends TileTemplate {
    smallBackgroundImage: string;
    wideBackgroundImage: string;
    wideBackContent: string;
    wideBackBackgroundImage: string;
}

interface ToastTemplate {
    text1: string;
    text2: string;
    param?: string;
}

declare class MpnsService {
    constructor(notificationHubService: NotificationHubService);

    public notificationHubService: NotificationHubService;

    public send(tags: string | string[],
                payload: object | string,
                targetName: string,
                notificationClass: string,
                callback: ResponseCallback): void;

    public send(tags: string | string[],
                payload: object | string,
                targetName: string,
                notificationClass: string,
                options: { headers: Dictionary<string> },
                callback: ResponseCallback): void;

    public createNativeRegistration(channel: string,
                                    tags: string | string[],
                                    callback: ResponseCallback): void;

    public createNativeRegistration(channel: string,
                                    tags: string | string[],
                                    options: object,
                                    callback: ResponseCallback): void;

    public createOrUpdateNativeRegistration(registrationId: string,
                                            channel: string,
                                            tags: string | string[],
                                            callback: ResponseCallback): void;

    public createOrUpdateNativeRegistration(registrationId: string,
                                            channel: string,
                                            tags: string | string[],
                                            options: object,
                                            callback: ResponseCallback): void;

    public createRawTemplateRegistration(channel: string,
                                         tags: string | string[],
                                         template: Template | string,
                                         callback: ResponseCallback): void;

    public createRawTemplateRegistration(channel: string,
                                         tags: string | string[],
                                         template: Template | string,
                                         options: object,
                                         callback: ResponseCallback): void;

    public createOrUpdateRawTemplateRegistration(registrationId: string,
                                                 channel: string,
                                                 tags: string | string[],
                                                 template: Template | string,
                                                 callback: ResponseCallback): void;

    public createOrUpdateRawTemplateRegistration(registrationId: string,
                                                 channel: string,
                                                 tags: string | string[],
                                                 template: Template | string,
                                                 options: object,
                                                 callback: ResponseCallback): void;

    public updatesRawTemplateRegistration(registrationId: string,
                                          channel: string,
                                          tags: string | string[],
                                          template: Template | string,
                                          callback: ResponseCallback): void;

    public updatesRawTemplateRegistration(registrationId: string,
                                          channel: string,
                                          tags: string | string[],
                                          template: Template | string,
                                          options: object,
                                          callback: ResponseCallback): void;

    public listRegistrationsByChannel(channel: string,
                                      callback: ResponseCallback): void;

    public listRegistrationsByChannel(channel: string,
                                      options: ListNotificationHubsOptions,
                                      callback: ResponseCallback): void;
}

export = MpnsService;
