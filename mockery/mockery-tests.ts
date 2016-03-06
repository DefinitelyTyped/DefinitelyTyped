/// <reference path="mockery.d.ts" />

import mockery = require('mockery');

mockery.enable();
mockery.enable({});
mockery.enable({
    useCleanCache: true,
    warnOnReplace: true,
    warnOnUnregistered: true
});

mockery.disable();

var fsMock = {
    stat: (path: any, cb: any) => { /* your mock code */ }
};
mockery.registerMock('fs', fsMock);

mockery.deregisterMock('fs');

mockery.registerSubstitute('fs', 'fs-mock');

mockery.deregisterSubstitute('fs');

mockery.registerAllowable('./my-source-under-test');
mockery.registerAllowable('./my-source-under-test', true);

mockery.deregisterAllowable('./my-source-under-test');

mockery.registerAllowables(['async', 'path', 'util']);

mockery.deregisterAllowables(['async', 'path', 'util']);

mockery.deregisterAll();

mockery.resetCache();

mockery.warnOnUnregistered(false);

mockery.warnOnReplace(false);