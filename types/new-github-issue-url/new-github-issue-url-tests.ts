import newGithubIssueUrl = require('new-github-issue-url');

// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-issue-url.git',
});
// $ExpectType string
newGithubIssueUrl({
    user: 'sindresorhus',
    repo: 'new-github-issue-url',
});
// $ExpectError
newGithubIssueUrl({
    user: 'sindresorhus',
});
// $ExpectError
newGithubIssueUrl({
    repo: 'new-github-issue-url',
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    body: 'foo',
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    title: 'foo',
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    template: 'unicorn.md',
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    labels: ['foo', 'bar'],
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    milestone: 'foo',
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    assignee: 'sindresorhus',
});
// $ExpectType string
newGithubIssueUrl({
    repoUrl: 'https://github.com/sindresorhus/new-github-release-url.git',
    projects: ['some-repo/3'],
});
