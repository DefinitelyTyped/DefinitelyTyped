import npm = require('global-npm');

const installPath: string = npm.GLOBAL_NPM_PATH;
const binPath: string = npm.GLOBAL_NPM_BIN;

const list: string[] = npm.fullList;

npm.globalDir;
npm.globalBin;

npm.load({ loglevel: 'silent' }, () => {
    npm.commands.install(['typescript'], () => {});

    npm.commands.view(['typescript'], true, () => {});

    // $ExpectError
    npm.commands.install('typescript', () => {});
});
