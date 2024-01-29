import { PageConfig } from "./page";

export interface AppConfig {
    appEvents?: string[] | undefined;
    pageEvents?: string[] | undefined;
    noPromiseAPI?: string[] | { [name: string]: boolean } | undefined;
}

export interface AppConstructor {
    new(): app;
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
        noPromiseAPI: string[] | { [name: string]: boolean },
    ): void;
}
