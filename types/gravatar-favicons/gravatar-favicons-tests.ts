import gravatarFavicons = require("gravatar-favicons");
import { Options } from "gravatar-favicons";

const logger = (message: string) => {
    // no-op
};

const config: Options = {
    email: "joe@example.com",
    dest: "./out",
    faviconConfig: {
        path: "/",
        appName: "bret.io",
        appDescription: "Bret Comnes's website",
        developerName: "Bret Comnes",
        developerURL: "https://bret.io",
        dir: "auto",
        lang: "en-US",
        background: "#232830",
        theme_color: "#232830",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",
        logging: true,
        icons: {
            android: false,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            windows: true,
            yandex: false,
        },
    },
};

gravatarFavicons(config, logger, (err, results) => {});
