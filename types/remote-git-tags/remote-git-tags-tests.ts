import remoteGitTags from 'remote-git-tags';

remoteGitTags('https://github.com/sindresorhus/got').then(tags => {
    // $ExpectType string | undefined
    tags.get('v6.0.0');
});
