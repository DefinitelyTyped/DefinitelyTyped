// Type definitions for ngCordova emailComposer plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface IEmailComposerOptions {
        to: string | Array<string>;
        cc?: string | Array<string> | undefined;
        bcc?: string | Array<string> | undefined;
        attachments?: Array<any> | undefined;
        subject?: string | undefined;
        body?: string | undefined;
        isHtml?: boolean | undefined;
    }

  export interface IEmailComposerService {

    isAvailable(): ng.IPromise<boolean>;
    open(properties: IEmailComposerOptions) : ng.IPromise<any>;
    addAlias(app: string, schema: string) : void;

  }

}
