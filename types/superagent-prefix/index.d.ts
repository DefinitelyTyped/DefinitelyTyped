import * as request from "superagent";

declare function plugin(prefix: string): request.Plugin;

declare namespace plugin {
}

export = plugin;
