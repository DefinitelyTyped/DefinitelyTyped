// Type definitions for update-notifier
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ISettings {
    pkg?: IPackage;
    callback?: (update?: IUpdateInfo) => any;
    packageName?: string; 
    packageVersion?: string; 
    updateCheckInterval?: number; // default 1000 * 60 * 60 * 24 (1 day)
}

export interface IBoxenOptions {
    padding: number;
    margin: number;
    align: string;
    borderColor: string;
    borderStyle: string;
}

export interface INotifyOptions {
    message: string;
    defer?: boolean;
    boxenOpts?: IBoxenOptions;
}   

export interface IPackage {
    name: string;
    version: string;
}

export interface IUpdateInfo {
    latest: string;
    current: string;
    type: string;
    name: string;
}

export declare class UpdateNotifier {
    constructor(settings?: ISettings);
    
    update: IUpdateInfo;
    notify(message?: INotifyOptions): void;
}
