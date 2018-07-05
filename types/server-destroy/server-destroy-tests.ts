import enableDestroy = require('server-destroy');

import { Server } from "http";
const server = {} as any as Server;
enableDestroy(server);
server.destroy();
server.destroy(() => {});
