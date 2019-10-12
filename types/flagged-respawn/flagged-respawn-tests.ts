import flaggedRespawn = require('flagged-respawn');

const flags = ['--flag'];

flaggedRespawn(flags, process.argv, (ready, child, argv) => {
    // $ExpectType boolean
    ready;
    // $ExpectType Process
    child;
    // $ExpectType string[]
    argv;
});
flaggedRespawn(flags, process.argv, '--flag', () => {});
flaggedRespawn(flags, process.argv, ['--flag'], () => {});
