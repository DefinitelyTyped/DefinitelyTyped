import envCi = require('env-ci');

const res = envCi();
envCi({ env: { foo: 'bar' } });
envCi({ cwd: '.' });

if (!res.isCi) {
    res.name; // $ExpectError
    res.service; // $ExpectError
    res.commit; // $ExpectType string | undefined
    res.tag; // $ExpectError
    res.build; // $ExpectError
    res.buildUrl; // $ExpectError
    res.branch; // $ExpectType string | undefined
    res.job; // $ExpectError
    res.jobUrl; // $ExpectError
    res.pr; // $ExpectError
    res.isPr; // $ExpectError
    res.prBranch; // $ExpectError
    res.slug; // $ExpectError
    res.root; // $ExpectError
} else {
    if (res.service === 'appveyor') {
        res.name; // $ExpectType "Appveyor"
        res.service; // $ExpectType "appveyor"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectType string
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'bamboo') {
        res.name; // $ExpectType "Bamboo"
        res.service; // $ExpectType "bamboo"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectError
        res.root; // $ExpectType string
    }
    if (res.service === 'bitbucket') {
        res.name; // $ExpectType "Bitbucket Pipelines"
        res.service; // $ExpectType "bitbucket"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'bitrise') {
        res.name; // $ExpectType "Bitrise"
        res.service; // $ExpectType "bitrise"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectError
    }
    if (res.service === 'buddy') {
        res.name; // $ExpectType "Buddy"
        res.service; // $ExpectType "buddy"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string | undefined
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectError
    }
    if (res.service === 'buildkite') {
        res.name; // $ExpectType "Buildkite"
        res.service; // $ExpectType "buildkite"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'circleci') {
        res.name; // $ExpectType "CircleCI"
        res.service; // $ExpectType "circleci"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string | undefined
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectError
    }
    if (res.service === 'cirrus') {
        res.name; // $ExpectType "Cirrus CI"
        res.service; // $ExpectType "cirrus"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectType string
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'codebuild') {
        res.name; // $ExpectType "AWS CodeBuild"
        res.service; // $ExpectType "codebuild"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectError
        res.root; // $ExpectType string
    }
    if (res.service === 'codefresh') {
        res.name; // $ExpectType "Codefresh"
        res.service; // $ExpectType "codefresh"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'codeship') {
        res.name; // $ExpectType "Codeship"
        res.service; // $ExpectType "codeship"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectError
    }
    if (res.service === 'drone') {
        res.name; // $ExpectType "Drone"
        res.service; // $ExpectType "drone"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectError
        res.branch; // $ExpectType string
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectError
    }
    if (res.service === 'gitlab') {
        res.name; // $ExpectType "GitLab CI/CD"
        res.service; // $ExpectType "gitlab"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectType string
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'jenkins') {
        res.name; // $ExpectType "Jenkins"
        res.service; // $ExpectType "jenkins"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectError
        res.root; // $ExpectType string
    }
    if (res.service === 'sail') {
        res.name; // $ExpectType "Sail CI"
        res.service; // $ExpectType "sail"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectError
        res.buildUrl; // $ExpectError
        res.branch; // $ExpectType string | undefined
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'semaphore') {
        res.name; // $ExpectType "Semaphore"
        res.service; // $ExpectType "semaphore"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectError
        res.branch; // $ExpectType string | undefined
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'shippable') {
        res.name; // $ExpectType "Shippable"
        res.service; // $ExpectType "shippable"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'teamcity') {
        res.name; // $ExpectType "TeamCity"
        res.service; // $ExpectType "teamcity"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectError
        res.branch; // $ExpectType string | undefined
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectType string | undefined
    }
    if (res.service === 'travis') {
        res.name; // $ExpectType "Travis CI"
        res.service; // $ExpectType "travis"
        res.commit; // $ExpectType string
        res.tag; // $ExpectType string | undefined
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string | undefined
        res.job; // $ExpectType string
        res.jobUrl; // $ExpectType string
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
    if (res.service === 'vsts') {
        res.name; // $ExpectType "Visual Studio Team Services"
        res.service; // $ExpectType "vsts"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectError
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectType string | undefined
        res.isPr; // $ExpectType boolean
        res.prBranch; // $ExpectType string | undefined
        res.slug; // $ExpectError
        res.root; // $ExpectType string
    }
    if (res.service === 'wercker') {
        res.name; // $ExpectType "Wercker"
        res.service; // $ExpectType "wercker"
        res.commit; // $ExpectType string
        res.tag; // $ExpectError
        res.build; // $ExpectType string
        res.buildUrl; // $ExpectType string
        res.branch; // $ExpectType string
        res.job; // $ExpectError
        res.jobUrl; // $ExpectError
        res.pr; // $ExpectError
        res.isPr; // $ExpectError
        res.prBranch; // $ExpectError
        res.slug; // $ExpectType string
        res.root; // $ExpectType string
    }
}
