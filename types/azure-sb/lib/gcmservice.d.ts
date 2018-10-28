import { Azure } from '../index';
import NotificationHubService = require('azure-sb/lib/notificationhubservice');
import ResponseCallback = Azure.ServiceBus.ResponseCallback;
import NotificationHubRegistration = Azure.ServiceBus.NotificationHubRegistration;
import ListNotificationHubsOptions = Azure.ServiceBus.ListNotificationHubsOptions;
import Dictionary = Azure.ServiceBus.Dictionary;

type Template = Partial<{}>;

declare class GcmService {
    constructor(notificationHubService: NotificationHubService);

    public notificationHubService: NotificationHubService;

    public send(tags: string | string[],
                payload: object | string,
                callback: ResponseCallback): void;

    public createNativeRegistration(gcmRegistrationId: string,
                                    tags: string | string[],
                                    callback: ResponseCallback): void;

    public createNativeRegistration(token: string,
                                    tags: string | string[],
                                    options: object,
                                    callback: ResponseCallback): void;

    public createOrUpdateNativeRegistration(registrationId: string,
                                            gcmRegistrationId: string,
                                            tags: string | string[],
                                            callback: ResponseCallback): void;

    public createOrUpdateNativeRegistration(registrationId: string,
                                            gcmRegistrationId: string,
                                            tags: string | string[],
                                            options: object,
                                            callback: ResponseCallback): void;

    public createTemplateRegistration(gcmRegistrationId: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      callback: ResponseCallback): void;

    public createTemplateRegistration(gcmRegistrationId: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      options: object,
                                      callback: ResponseCallback): void;

    public updateTemplateRegistration(registrationId: string,
                                      gcmRegistrationId: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      callback: ResponseCallback): void;

    public updateTemplateRegistration(registrationId: string,
                                      gcmRegistrationId: string,
                                      tags: string | string[],
                                      template: Template | string,
                                      options: { headers: Dictionary<string> },
                                      callback: ResponseCallback): void;

    public listRegistrationsByGcmRegistrationId(gcmRegistrationId: string,
                                                callback: ResponseCallback): void;

    public listRegistrationsByGcmRegistrationId(gcmRegistrationId: string,
                                                options: ListNotificationHubsOptions,
                                                callback: ResponseCallback): void;
}

export = GcmService;
