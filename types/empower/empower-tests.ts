import empower = require('empower');

const baseAssert: any = {};
const fakeFormatter: any = {};

{
    const assert = empower(baseAssert, fakeFormatter);
}

const option: empower.Options = {
    modifyMessageOnRethrow: false,
    saveContextOnRethrow: false,
};

{
    const assert = empower(baseAssert, fakeFormatter, option);
}
