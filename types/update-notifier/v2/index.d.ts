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

        update?: UpdateInfo | undefined;
        check(): void;
        checkNpm(): void;
        notify(customMessage?: NotifyOptions): void;
    }

    interface Settings {
        pkg?: Package | undefined;
        callback?(error: Error | null, update?: UpdateInfo): any;
        packageName?: string | undefined;
        packageVersion?: string | undefined;
        updateCheckInterval?: number | undefined; // in milliseconds, default 1000 * 60 * 60 * 24 (1 day)
        shouldNotifyInNpmScript?: boolean | undefined;
    }

    interface BoxenOptions {
        padding?: number | undefined;
        margin?: number | undefined;
        align?: string | undefined;
        borderColor?: string | undefined;
        borderStyle?: string | undefined;
    }

    interface NotifyOptions {
        message?: string | undefined;
        defer?: boolean | undefined;
        isGlobal?: boolean | undefined;
        boxenOpts?: BoxenOptions | undefined;
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
