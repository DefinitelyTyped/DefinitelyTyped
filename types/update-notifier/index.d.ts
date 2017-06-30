// Type definitions for update-notifier 1.0
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>, Noah Chen <https://github.com/nchen63>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = UpdateNotifier;

declare function UpdateNotifier(settings?: UpdateNotifier.Settings): UpdateNotifier.UpdateNotifier;

declare namespace UpdateNotifier {
    class UpdateNotifier {
        constructor(settings?: UpdateNotifier.Settings);

        update: UpdateNotifier.UpdateInfo;
        check(): void;
        checkNpm(): void;
        notify(customMessage?: UpdateNotifier.NotifyOptions): void;
    }

    interface Settings {
        pkg?: Package;
        callback?(update?: UpdateInfo): any;
        packageName?: string;
        packageVersion?: string;
        updateCheckInterval?: number; // in milliseconds, default 1000 * 60 * 60 * 24 (1 day)
    }

    interface BoxenOptions {
        padding: number;
        margin: number;
        align: string;
        borderColor: string;
        borderStyle: string;
    }

    interface NotifyOptions {
        message: string;
        defer?: boolean;
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
