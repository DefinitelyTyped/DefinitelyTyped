import injectpromise = require('injectpromise');

// $ExpectType (func: (...args: any) => any, ...args: any) => Promise<any>
injectpromise(this);
