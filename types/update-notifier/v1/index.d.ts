// Type definitions for update-notifier 1.0
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>, Noah Chen <https://github.com/nchen63>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = UpdateNotifier;

declare function UpdateNotifier(settings?: UpdateNotifier.Settings): UpdateNotifier.UpdateNotifier;

declare namespace UpdateNotifier {
    class UpdateNotifier {
        constructor(settings?: Settings);

        update: UpdateInfo;
        check(): void;
        checkNpm(): void;
        notify(customMessage?: NotifyOptions): void;
    }

    interface Settings {
        pkg?: Package | undefined;
        callback?(update?: UpdateInfo): any;
        packageName?: string | undefined;
        packageVersion?: string | undefined;
        updateCheckInterval?: number | undefined; // in milliseconds, default 1000 * 60 * 60 * 24 (1 day)
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
