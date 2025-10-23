// From https://hapijs.com/api/16.1.1#serverload

import Hapi = require("hapi");
const server = new Hapi.Server({ load: { sampleInterval: 1000 } });

var d: number = server.load.rss;
