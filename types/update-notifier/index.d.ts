// Type definitions for update-notifier 4.1
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>
//                 Noah Chen <https://github.com/nchen63>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Michael Grinich <https://github.com/grinich>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ConfigStore = require('configstore');

export = UpdateNotifier;

/** Checks if there is an available update */
declare function UpdateNotifier(settings?: UpdateNotifier.Settings): UpdateNotifier.UpdateNotifier;

declare namespace UpdateNotifier {
    class UpdateNotifier {
        constructor(settings?: Settings);

        readonly config: ConfigStore;
        readonly update?: UpdateInfo;
        check(): void;
        /** Check update information */
        fetchInfo(): UpdateInfo | Promise<UpdateInfo>;
        /** Convenience method to display a notification message */
        notify(customMessage?: NotifyOptions): void;
    }

    interface Settings {
        /** Which dist-tag to use to find the latest version */
        distTag?: string;
        pkg?: Package;
        /**
         * @deprecated use `pkg.name`
         */
        packageName?: string;
        /**
         * @deprecated use `pkg.version`
         */
        packageVersion?: string;
        /** How often to check for updates */
        updateCheckInterval?: number;
        /** Allows notification to be shown when running as an npm script */
        shouldNotifyInNpmScript?: boolean;
    }

    interface BoxenOptions {
        padding?: number;
        margin?: number;
        align?: string;
        borderColor?: string;
        borderStyle?: string;
    }

    interface NotifyOptions {
        /** Message that will be shown when an update is available */
        message?: string;
        /** Defer showing the notification to after the process has exited */
        defer?: boolean;
        /** Include the -g argument in the default message's npm i recommendation */
        isGlobal?: boolean;
        /** Options object that will be passed to `boxen` */
        boxenOptions?: BoxenOptions;
    }

    interface Package {
        name: string;
        version: string;
    }

    interface UpdateInfo {
        /** Latest version */
        readonly latest: string;
        /** Current version */
        readonly current: string;
        /** Type of current update */
        readonly type: 'latest' | 'major' | 'minor' | 'patch' | 'prerelease' | 'build';
        /** Package name */
        name: string;
    }
}
