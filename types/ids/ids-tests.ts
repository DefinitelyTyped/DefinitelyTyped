import Ids = require('ids');

const ids = new Ids();

const next = ids.next(); // returns id

ids.claim('f71a81'); // claim id as already existing

ids.assigned('f71a81'); // true if id was already generated / claimed
