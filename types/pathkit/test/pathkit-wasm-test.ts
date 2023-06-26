import PathKitInit from 'pathkit-wasm/bin/pathkit.js';
import TestPathKitAPI from './test-pathkit-api';

PathKitInit().then((PathKit) => {
    TestPathKitAPI(PathKit);
});

PathKitInit({}).then((PathKit) => {
    TestPathKitAPI(PathKit);
});

PathKitInit({
    locateFile: (file) => '/node_modules/pathkit-wasm/bin/' + file,
}).then((PathKit) => {
    TestPathKitAPI(PathKit);
});
