export interface PluginParams {}
export interface IPlugin {
    name: string;
}
export declare class Plugin implements Plugin {
    name: string;
    constructor(ctx: any);
}
