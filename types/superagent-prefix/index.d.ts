import request = require("superagent");

declare function plugin(prefix: string): request.Plugin;

declare namespace plugin {
}

export = plugin;
