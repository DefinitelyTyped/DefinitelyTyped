import newGithubReleaseUrl = require('new-github-release-url');

// $ExpectType string
newGithubReleaseUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
});
// $ExpectType string
newGithubReleaseUrl({
    user: 'sindresorhus',
    repo: 'new-github-release-url',
});
// $ExpectError
newGithubReleaseUrl({
    user: 'sindresorhus',
});
// $ExpectError
newGithubReleaseUrl({
    repo: 'new-github-release-url',
});
// $ExpectType string
newGithubReleaseUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    tag: 'foo',
});
// $ExpectType string
newGithubReleaseUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    target: 'foo',
});
// $ExpectType string
newGithubReleaseUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    title: 'foo',
});
// $ExpectType string
newGithubReleaseUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    body: 'foo',
});
// $ExpectType string
newGithubReleaseUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    isPrerelease: true,
});
