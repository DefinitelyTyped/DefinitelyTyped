import { Azure } from '../index';
import NotificationHubService = require('azure-sb/lib/notificationhubservice');
import ResponseCallback = Azure.ServiceBus.ResponseCallback;
import NotificationHubRegistration = Azure.ServiceBus.NotificationHubRegistration;
import ListNotificationHubsOptions = Azure.ServiceBus.ListNotificationHubsOptions;
import Dictionary = Azure.ServiceBus.Dictionary;

type Template = Partial<{
    expiry: Date;
    aps: object;
    badge: number;
    alert: string;
    sound: string;
    payload: object;
}>;

declare class ApnsService {
    constructor(notificationHubService: NotificationHubService);

    public notificationHubService: NotificationHubService;

    public send(tags: string | string[],
                payload: object | string,
                callback: ResponseCallback): void;

    public send(tags: string | string[],
                payload: object | string,
                options: { headers: Dictionary<string> },
                callback: ResponseCallback): void;

    public createNativeRegistration(token: string,
                                    tags: string | string[],
                                    callback: ResponseCallback): void;

    public createNativeRegistration(token: string,
                                    tags: string | string[],
                                    options: object,
                                    callback: ResponseCallback): void;

    public createOrUpdateNativeRegistration(registrationId: string,
                                            token: string,
                                            tags: string | string[],
                                            callback: ResponseCallback): void;

    public createOrUpdateNativeRegistration(registrationId: string,
                                            token: string,
                                            tags: string | string[],
                                            options: object,
                                            callback: ResponseCallback): void;

    public createTemplateRegistration(token: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      callback: ResponseCallback): void;

    public createTemplateRegistration(token: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      options: object,
                                      callback: ResponseCallback): void;

    public updateTemplateRegistration(registrationId: string,
                                      token: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      callback: ResponseCallback): void;

    public updateTemplateRegistration(registrationId: string,
                                      token: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      options: { headers: Dictionary<string> },
                                      callback: ResponseCallback): void;

    public listRegistrationsByToken(token: string,
                                    callback: ResponseCallback): void;

    public listRegistrationsByToken(token: string,
                                    options: ListNotificationHubsOptions,
                                    callback: ResponseCallback): void;
}

export = ApnsService;
