import ConfigStore from 'configstore';

import type { Options as BoxenOptions } from 'boxen';

export default class UpdateNotifier {
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
    boxenOptions?: BoxenOptions | undefined;
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

export type { NotifyOptions, Package, Settings, UpdateInfo };
