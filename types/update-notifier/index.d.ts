// Type definitions for update-notifier 5.1
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>
//                 Noah Chen <https://github.com/nchen63>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Michael Grinich <https://github.com/grinich>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import boxen = require('boxen');
import ConfigStore = require('configstore');

export = UpdateNotifier;

/** Checks if there is an available update */
declare function UpdateNotifier(settings?: UpdateNotifier.Settings): UpdateNotifier.UpdateNotifier;

declare namespace UpdateNotifier {
    class UpdateNotifier {
        constructor(settings?: Settings);

        readonly config: ConfigStore;
        readonly update?: UpdateInfo | undefined;
        check(): void;
        /**
         * Check update information
         * @async
         */
        fetchInfo(): UpdateInfo | Promise<UpdateInfo>;
        /** Convenience method to display a notification message */
        notify(customMessage?: NotifyOptions): void;
    }

    interface Settings {
        /**
         * Which dist-tag to use to find the latest version
         * @default 'latest'
         */
        distTag?: string | undefined;
        pkg?: Package | undefined;
        /**
         * @deprecated use `pkg.name`
         */
        packageName?: string | undefined;
        /**
         * @deprecated use `pkg.version`
         */
        packageVersion?: string | undefined;
        /** How often to check for updates */
        updateCheckInterval?: number | undefined;
        /** Allows notification to be shown when running as an npm script */
        shouldNotifyInNpmScript?: boolean | undefined;
    }

    interface NotifyOptions {
        /** Message that will be shown when an update is available */
        message?: string | undefined;
        /** Defer showing the notification to after the process has exited */
        defer?: boolean | undefined;
        /** Include the -g argument in the default message's npm i recommendation */
        isGlobal?: boolean | undefined;
        /**
         * Options object that will be passed to `boxen`
         * See https://github.com/sindresorhus/boxen/blob/master/index.d.ts
         */
        boxenOptions?: boxen.Options | undefined;
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
