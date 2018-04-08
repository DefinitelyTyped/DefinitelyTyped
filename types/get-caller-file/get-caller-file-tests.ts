import getCallerFile = require('get-caller-file');

let caller: string = getCallerFile();
caller = getCallerFile(3);
