import page, { PageConstructor } from "./page";
import app, { AppConstructor, AppConfig } from "./app";

declare const defaultExport: {
    $createApp?: (appClass: AppConstructor, appConfig: AppConfig) => app;
    $createPage?: (
        pageClass: PageConstructor,
        pagePath: string | boolean
    ) => page;
};

export default defaultExport;
