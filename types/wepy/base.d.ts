import page, { PageConstructor } from "./page";
import app, { AppConstructor, AppConfig } from "./app";

declare const defaultExport: {
    $createApp?: ((appClass: AppConstructor, appConfig: AppConfig) => app) | undefined;
    $createPage?: ((
        pageClass: PageConstructor,
        pagePath: string | boolean
    ) => page) | undefined;
};

export default defaultExport;
