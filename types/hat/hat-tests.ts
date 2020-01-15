import hat = require('hat');

const randomId = hat();

const rack = hat.rack();
rack();
rack('car');
const tractorId = rack('tractor');
rack.get(tractorId);
rack.set(randomId, 'bicycle');
rack.hats;
