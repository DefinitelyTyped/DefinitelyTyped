import { PageConfig } from "./page";

export interface AppConfig {
    appEvents?: string[];
    pageEvents?: string[];
    noPromiseAPI?: string[] | { [name: string]: boolean };
}

export interface AppConstructor {
    new (): app;
}

/* the supported add-ons */
export type AddOn = "requestfix" | "promisify";

export default class app {
    config: {
        window: PageConfig;
        pages: string[];
    };
    $init(wepy: any, config: AppConfig): void;
    use(addonName: AddOn, ...args: any[]): void;
    $initAPI(
        wepy: any,
        noPromiseAPI: string[] | { [name: string]: boolean }
    ): void;
}
