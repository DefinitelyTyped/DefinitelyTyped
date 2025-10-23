import Hapi = require("@hapi/hapi");

export namespace plugin {
    const pkg: Record<string, any>;
    const requirements: Record<string, string>;
    function register(server: Hapi.Server): void;
}
