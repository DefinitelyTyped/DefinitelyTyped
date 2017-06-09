import gitRemoteOriginUrl = require('git-remote-origin-url');

const url1: Promise<string> = gitRemoteOriginUrl();
const url2: Promise<string> = gitRemoteOriginUrl('my-custom-path');
