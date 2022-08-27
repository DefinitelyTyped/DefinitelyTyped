import injectpromise from "injectpromise";

// $ExpectType (func: (...args: any) => any, ...args: any) => Promise<any>
injectpromise(this);
