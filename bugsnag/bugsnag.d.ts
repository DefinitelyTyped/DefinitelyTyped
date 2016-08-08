// Type definitions for Bugsnag v2.5.0
// Project: https://github.com/bugsnag/bugsnag-js
// Definitions by: Delisa Mason <https://github.com/kattrali>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BugsnagUser {
    id?:    string,
    name?:  string,
    email?: string
}

interface BugsnagStatic {
    /** Bugsnag project API key */
    apiKey: string;
    /** The client application version */
    appVersion: string;
    /** true if Bugsnag should be automatically notified of errors which are
     *  sent to `window.onerror`
     */
    autoNotify: boolean;
    /** Callback run before error reports are sent to Bugsnag.
     *  Payload and metadata information can be altered or removed altogether.
     *  To cancel sending the report, return false from this function.
     */
    beforeNotify: (payload: any, metaData: any) => boolean;
    /** The pathname of the current page, not including the fragment identifier
     *  nor search parameters
     */
    context: string;
    /** Disables console-based logging. Defaults to false. */
    disableLog: boolean;
    /** The address used to send errors to Bugsnag. The default is
     *  `https://notify.bugsnag.com/js`
     */
    endpoint: string;
    /** Enables sending inline scripts on the page to Bugsnag to assist with
     *  debugging. Defaults to true
     */
    inlineScript: boolean;
    /** The maximum depth to parse the error stack */
    maxDepth: number;
    /** Additional metadata to send to Bugsnag with every error. */
    metaData: any;
    /** The method used for the notify request. The default is a temporary
     *  JavaScript image object, however Chrome apps/extensions and other
     *  applications where XHR is needed can use `xhr` instead.
     */
    notifyHandler: string;
    /** The releases stages during which Bugsnag will be notified of errors. */
    notifyReleaseStages: string[];
    /** The recorded root of the project. The default is the current host
     *  address (protocol and domain).
     */
    projectRoot: string;
    /** Current phase of the application release process. The default is
     *  `production`
     */
    releaseStage: string;
    /** Information about the current user which is sent to Bugsnag with
     *  exception reports
     */
    user: BugsnagUser;

    /** Continue catching exceptions after the page error limit is reached.
     *  Useful for long-running single-page apps
     */
    refresh(): void;

    /** Remove Bugsnag from the window object and restore the previous
     *  binding
     */
    noConflict(): BugsnagStatic;

    /** Send caught exceptions to Bugsnag. Valid severity values are `info`,
     *  `warning`, and `error`, in order of increasing severity.
    */
    notifyException(exception: Error, name?: string, metaData?: any,
                    severity?: string): void;

    /** Send custom errors to Bugsnag */
    notify(name: string, message: string, metaData?: any,
           severity?: string): void;
}

declare var Bugsnag: BugsnagStatic;

declare module "Bugsnag" {
    export = Bugsnag;
}

