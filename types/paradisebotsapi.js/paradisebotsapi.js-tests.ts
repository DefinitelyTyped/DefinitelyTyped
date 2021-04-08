import PBL = require('paradisebotsapi.js');

const pbl = new PBL.get('111122222', 'xxx-xx-x');

pbl.post(1, 1); // $ExpectType Promise<void>
