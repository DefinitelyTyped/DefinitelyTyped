import LightSDK = require('light-sdk');

interface Options {
    cid: string;
    iid: string;
}

LightSDK.register((options: Options) => {
    // ...
    const cidNew = options.cid;
    const iidNew = options.iid;
});
LightSDK.config.get(() => {
    // ...
});

LightSDK.openAPI.token(() => {
    // ...
});
