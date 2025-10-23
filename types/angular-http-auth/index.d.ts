/// <reference types="angular" />

import ng = require("angular");

declare module "angular" {
    export namespace httpAuth {
        interface IAuthService {
            loginConfirmed(data?: any, configUpdater?: Function): void;
            loginCancelled(data?: any, reason?: any): void;
        }

        interface IHttpBuffer {
            append(config: ng.IRequestConfig, deferred: { resolve(data: any): void; reject(data: any): void }): void;
            rejectAll(reason?: any): void;
            retryAll(updater?: Function): void;
        }
    }
}
