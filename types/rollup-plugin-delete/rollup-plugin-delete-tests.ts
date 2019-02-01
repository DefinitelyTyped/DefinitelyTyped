import del from 'rollup-plugin-delete';

del(); // $ExpectType Plugin

del({}); // $ExpectError

del({ targets: '/dist' }); // $ExpectType Plugin

del({ targets: ['/dist'], verbose: true }); // $ExpectType Plugin

del({ targets: ['/dist'], verbose: true, dryRun: true }); // $ExpectType Plugin

del({ targets: ['/dist'], verbose: true, dryRun: true, debug: true }); // $ExpectType Plugin
