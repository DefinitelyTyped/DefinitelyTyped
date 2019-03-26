import caller = require('caller');

const callerFile: string = caller();
const callerFile2: string = caller(1);
