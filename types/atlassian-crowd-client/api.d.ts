import { Settings } from "./settings";

declare class CrowdApi {
    settings: Settings;
    constructor(settings: Settings);
    request(method: string, path: string, data?: any): Promise<any>;
    log(...args: any[]): void;
}

export = CrowdApi;
