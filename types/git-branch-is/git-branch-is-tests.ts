/// <reference types="node" />

import gitBranchIs = require('git-branch-is');

gitBranchIs('master', (err, result) => {
    if (err) console.error(err);
    else console.log(result ? 'On master' : 'Not on master');
});

gitBranchIs('master').then(
    result => {
        console.log(result ? 'On master' : 'Not on master');
    },
    err => {
        console.error(err);
    },
);

gitBranchIs(branchName => {
    return /^master$/.test(branchName);
}).then(
    result => {
        console.log(result ? 'On master' : 'Not on master');
    },
    err => {
        console.error(err);
    },
);

gitBranchIs(branchName => {
    return Promise.resolve(branchName === 'master');
}).then(
    result => {
        console.log(result ? 'On master' : 'Not on master');
    },
    err => {
        console.error(err);
    },
);
