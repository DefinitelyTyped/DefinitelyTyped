/// <reference types="node" />

import { gitToJs, checkoutCommit, gitDiff, gitPull } from 'git-parse';

const repoPath = '.';
const commitsPromise = gitToJs(repoPath);

commitsPromise.then(commits => console.log(JSON.stringify(commits, null, 2)));

async () => {
    try {
        await checkoutCommit('.', 'invalidHash');
        const parsedRepo = await gitToJs(repoPath);
    } catch (e) {
        //
    }
};

gitToJs('/some_crazy_directory_that_does_not_exist/asdfasdfasdfasdfxxxx').catch(() => {
    //
});
gitToJs(repoPath).then(data => {
    console.log(data);
});

gitDiff(repoPath, '3bbdbc5').then(diff => console.log(diff));

gitPull(repoPath)
    .then(() => console.log('Done'))
    .catch(err => console.log(err));
