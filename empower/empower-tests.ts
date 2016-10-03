/// <reference path="./empower.d.ts" />

var baseAssert:any;
var fakeFormatter:any;

()=> {
    var assert = empower(baseAssert, fakeFormatter);
};

var option:empower.Options = {
    modifyMessageOnRethrow: false,
    saveContextOnRethrow: false
};

()=> {
    var assert = empower(baseAssert, fakeFormatter, option);
};
