import PBL = require('paradisebotsapi.js');

const pbl = new PBL();

pbl.get('222', (data) => {}); // $ExpectType Promise<void>
