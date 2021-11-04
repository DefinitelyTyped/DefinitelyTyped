import flat = require('./implementation');

declare function shim(): typeof flat;
export = shim;
