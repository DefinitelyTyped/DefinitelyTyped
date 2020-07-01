
// From https://hapijs.com/api/16.1.1#serverload

import * as Hapi from 'hapi';
const server = new Hapi.Server({ load: { sampleInterval: 1000 } });

var d: number = server.load.rss;
