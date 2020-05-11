import GitRevisionPlugin = require('git-revision-webpack-plugin');

const plugin: GitRevisionPlugin = new GitRevisionPlugin();

const emptyOptions: GitRevisionPlugin = new GitRevisionPlugin({});

const allOptions: GitRevisionPlugin = new GitRevisionPlugin({
    lightweightTags: false,
    branch: false,
    commithashCommand: 'rev-parse HEAD',
    versionCommand: 'describe --always',
    branchCommand: 'rev-parse --abbrev-ref HEAD',
    gitWorkTree: '.',
});

const version: string = plugin.version();
const commithash: string = plugin.commithash();
const branch: string = plugin.branch();
