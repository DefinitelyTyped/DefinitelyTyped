import app, { AppConfig, AppConstructor } from "./app";
import page, { PageConstructor } from "./page";

declare const defaultExport: {
    $createApp?: ((appClass: AppConstructor, appConfig: AppConfig) => app) | undefined;
    $createPage?:
        | ((
            pageClass: PageConstructor,
            pagePath: string | boolean,
        ) => page)
        | undefined;
};

export default defaultExport;
