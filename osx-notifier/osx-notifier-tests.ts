// Tests for osx-notifier.d.ts
// Project: https://www.npmjs.com/package/osx-notifier
// Definitions by: ZongJing Lu <https://github.com/SONIC3D>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Tests taken from documentation samples.

///<reference path="../osx-notifier/osx-notifier.d.ts" />

import notify = require('osx-notifier');

let duration: number = 45;
notify({
    type: 'pass',
    title: 'Taskdoer Report',
    subtitle: 'Task completed',
    message: 'Took ' + duration + ' seconds.',
    group: 'taskdoer',
});
