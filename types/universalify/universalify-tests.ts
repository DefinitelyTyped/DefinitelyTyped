import universalify = require("universalify");

universalify.fromCallback(() => { }); // $ExpectType (...args: any[]) => void | Promise<any>
universalify.fromPromise(() => { }); // $ExpectType (...args: any[]) => void | Promise<any>
