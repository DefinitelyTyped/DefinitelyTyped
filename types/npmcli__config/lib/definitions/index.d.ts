import Config = require("@npmcli/config");

declare const definitionsModule: {
    defaults: Record<string, any>;
    definitions: Config.DefinitionsObject;
    flatten: (obj: Record<string, any>, flat?: Record<string, any>) => Record<string, any>;
    nerfDarts: string[];
    proxyEnv: string[];
    shorthands: Config.ShortFlags;
};

export = definitionsModule;
