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

export interface WindowConfig {
    backgroundTextStyle: string;
    navigationBarBackgroundColor: string;
    navigationBarTitleText: string;
    navigationBarTextStyle: string;
}

export default class app {
    config: {
        window: WindowConfig;
        pages: string[];
    };
    $init(wepy: any, config: AppConfig): void;
    use(addonName: AddOn, ...args: any[]): void;
    $initAPI(
        wepy: any,
        noPromiseAPI: string[] | { [name: string]: boolean }
    ): void;
}
