import touch = require('touch');

// type value definitions
const boolVal = true;
const numVal = 0;
const strVal = "string";
const dateVal = new Date();

// Options tests
const opts: touch.Options = {};

opts.force = boolVal;

opts.time = numVal;
opts.time = strVal;
opts.time = dateVal;

opts.atime = boolVal;
opts.atime = dateVal;

opts.mtime = boolVal;
opts.mtime = dateVal;

opts.ref = strVal;

opts.nocreate = boolVal;

let str: string;
// touch API tests
touch(strVal, (e) => console.log(e));
touch(strVal, opts, (e) => console.log(e));
touch(strVal, opts, (e) => 'hi').then(s => str = s);

touch.sync(strVal);
touch.sync(strVal, opts);

// ftouch API tests
touch.ftouch(numVal, (e) => console.log(e));
touch.ftouch(numVal, opts, (e) => console.log(e));
touch.ftouch(numVal, opts, (e) => 'hi').then(s => str = s);

touch.ftouchSync(numVal);
touch.ftouchSync(numVal, opts);
