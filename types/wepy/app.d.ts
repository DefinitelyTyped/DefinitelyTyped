export interface AppConfig {
    appEvents?: string[];
    pageEvents?: string[];
    noPromiseAPI?: string[] | { [name: string]: boolean };
}

export interface AppConstructor {
    new (): app;
}

export default class app {
    $init(wepy: any, config: AppConfig): any;
}
