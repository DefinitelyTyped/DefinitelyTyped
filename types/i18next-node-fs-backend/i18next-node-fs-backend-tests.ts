import i18next from "i18next";
import * as Backend from "i18next-node-fs-backend";

var options = {
    backend: {
        // path where resources get loaded from
        loadPath: "/locales/{{lng}}/{{ns}}.json",

        // path to post missing resources
        addPath: "/locales/{{lng}}/{{ns}}.missing.json",

        // jsonIndent to use when storing json files
        jsonIndent: 2
    }
};

i18next.use(Backend).init(options);
i18next.use(Backend).init({ backend: options.backend });

var parseOptions = {
    backend: {
        // path where resources get loaded from
        loadPath: "/locales/{{lng}}/{{ns}}.json",

        // path to post missing resources
        addPath: "/locales/{{lng}}/{{ns}}.missing.json",

        // jsonIndent to use when storing json files
        jsonIndent: 2,

        parse: (data: any) => {
            return data;
        },
    }
};

i18next.use(Backend).init({ backend: parseOptions });

var backend = new Backend(null, options.backend);

backend = new Backend();
backend.init(i18next.services, options.backend);
