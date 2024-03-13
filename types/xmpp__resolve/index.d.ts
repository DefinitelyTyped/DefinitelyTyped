import Connection = require("@xmpp/connection");

export = resolve;

declare function resolve(params: { entity: Connection }): void;
