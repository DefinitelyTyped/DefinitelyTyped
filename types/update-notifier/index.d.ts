// Type definitions for update-notifier 2.5
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>
//                 Noah Chen <https://github.com/nchen63>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Michael Grinich <https://github.com/grinich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = UpdateNotifier;

declare function UpdateNotifier(
    settings?: UpdateNotifier.Settings
): UpdateNotifier.UpdateNotifier;

declare namespace UpdateNotifier {
    class UpdateNotifier {
        constructor(settings?: Settings);

        update?: UpdateInfo;
        check(): void;
        checkNpm(): void;
        notify(customMessage?: NotifyOptions): void;
    }

    interface Settings {
        pkg?: Package;
        callback?(error: Error | null, update?: UpdateInfo): any;
        packageName?: string;
        packageVersion?: string;
        updateCheckInterval?: number; // in milliseconds, default 1000 * 60 * 60 * 24 (1 day)
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
        message?: string;
        defer?: boolean;
        isGlobal?: boolean;
        boxenOpts?: BoxenOptions;
    }

    interface Package {
        name: string;
        version: string;
    }

    interface UpdateInfo {
        latest: string;
        current: string;
        type: string;
        name: string;
    }
}
