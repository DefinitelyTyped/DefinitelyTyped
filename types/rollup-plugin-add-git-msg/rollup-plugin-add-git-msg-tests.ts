import addGitMsg from 'rollup-plugin-add-git-msg';

addGitMsg(); // $ExpectType Plugin

addGitMsg({ copyright: 'Myself' }); // $ExpectType Plugin

addGitMsg({ copyright: 'Myself', showCommitID: true, showDate: false, showTag: false }); // $ExpectType Plugin
