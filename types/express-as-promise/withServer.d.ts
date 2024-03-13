import ExpressAsPromise = require("./index");

declare function withServer(callback: (server: ExpressAsPromise) => Promise<void>): Promise<void>;

export = withServer;
