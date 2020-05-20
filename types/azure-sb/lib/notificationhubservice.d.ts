import { Azure } from 'azure-sb';
import Callback = Azure.ServiceBus.ResponseCallback;
import NotificationHubRegistration = Azure.ServiceBus.NotificationHubRegistration;
import ListNotificationHubsOptions = Azure.ServiceBus.ListNotificationHubsOptions;
import NotificationHubInstallation = Azure.ServiceBus.NotificationHubInstallation;

import ApnsService = require('./apnsservice');
import GcmService = require('./gcmservice');
import MpnsService = require('./mpnservice');
import WnsService = require('./wnsservice');

declare class NotificationHubService {
    constructor(hubName: string,
                endpointOrConnectionString: string,
                sharedAccessKeyName: string,
                sharedAccessKeyValue: string);

    public hubName: string;
    public wns: WnsService;
    public apns: ApnsService;
    public gcm: GcmService;
    public mpns: MpnsService;

    public send(tags: string,
                payload: object | string,
                callback: Callback): void;

    public send(tags: string,
                payload: object | string,
                options: { headers: object },
                callback: Callback): void;

    public createOrUpdateInstallation(installation: NotificationHubInstallation,
                                      callback: Callback): void;

    public createOrUpdateInstallation(installation: NotificationHubInstallation,
                                      options: any,
                                      callback: Callback): void;

    public patchInstallation(installationId: string,
                             partialUpdateOperations: any[],
                             callback: Callback): void;

    public patchInstallation(installationId: string,
                             partialUpdateOperations: any[],
                             options: any,
                             callback: Callback): void;

    public deleteInstallation(installationId: string,
                              callback: Callback): void;

    public deleteInstallation(installationId: string,
                              options: any,
                              callback: Callback): void;

    public getInstallation(installationId: string,
                           callback: Callback): void;

    public getInstallation(installationId: string,
                           options: any,
                           callback: Callback): void;

    public createRegistrationId(callback: Callback): void;

    public getRegistration(registrationId: string,
                           callback: Callback): void;

    public getRegistration(registrationId: string,
                           options: any,
                           callback: Callback): void;

    public deleteRegistration(registrationId: string,
                              callback: Callback): void;

    public deleteRegistration(registrationId: string,
                              options: { etag: any },
                              callback: Callback): void;

    public updateRegistration(registration: NotificationHubRegistration,
                              callback: Callback): void;

    public updateRegistration(registration: NotificationHubRegistration,
                              options: { etag: any },
                              callback: Callback): void;

    public createOrUpdateRegistration(registration: NotificationHubRegistration,
                                      options: { etag: any },
                                      callback: Callback): void;

    public listRegistrations(callback: Callback): void;

    public listRegistrations(options: ListNotificationHubsOptions,
                             callback: Callback): void;

    public listRegistrationsByTag(tag: string,
                                  callback: Callback): void;

    public listRegistrationsByTag(tag: string,
                                  options: ListNotificationHubsOptions,
                                  callback: Callback): void;
}

export = NotificationHubService;
