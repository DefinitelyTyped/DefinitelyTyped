import noop = require("tagged-template-noop");

const str1: string = noop`foo`;
const str2: string = noop`foo${"bar"}`;
