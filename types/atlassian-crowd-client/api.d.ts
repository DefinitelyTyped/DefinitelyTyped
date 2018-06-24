import { Settings } from "./settings";

export default class CrowdApi {
    settings: Settings;
    constructor(settings: Settings);
    request(method: string, path: string, data?: any): Promise<any>;
    log(...args: any[]): void;
}
