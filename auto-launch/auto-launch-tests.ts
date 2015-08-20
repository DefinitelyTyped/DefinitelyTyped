/// <reference path="auto-launch.d.ts" />

import AutoLaunch = require('auto-launch');

var a1 = new AutoLaunch({
    name: 'Foo',
});

var a2 = new AutoLaunch({
    name: 'Foo',
    path: '/Applications/Foo.app',
    isHidden: true,
});

a1.enable();
a2.disable();
var enabled: boolean = a1.isEnabled();
