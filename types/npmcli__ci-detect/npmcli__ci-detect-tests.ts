import ciDetect = require('@npmcli/ci-detect');

const isNotCI = ciDetect() === false;
const isCI = ciDetect() !== false;
const isGitHubActions = ciDetect() === 'github-actions';
