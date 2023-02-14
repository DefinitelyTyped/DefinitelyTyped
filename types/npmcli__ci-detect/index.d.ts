// Type definitions for @npmcli/ci-detect 2.0
// Project: https://github.com/npm/ci-detect
// Definitions by: Amin Yahyaabadi <https://github.com/aminya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns one of the following strings, or `false` if none match, by looking at the appropriate environment variables.
 *
 * - `'gerrit'` Gerrit
 * - `'gitlab'` GitLab
 * - `'circleci'` Circle-CI
 * - `'semaphore'` Semaphore
 * - `'drone'` Drone
 * - `'github-actions'` GitHub Actions
 * - `'tddium'` TDDium
 * - `'jenkins'` Jenkins
 * - `'bamboo'` Bamboo
 * - `'gocd'` GoCD
 * - `'wercker'` Oracle Wercker
 * - `'netlify'` Netlify
 * - `'now-github'` Zeit.co's Now for GitHub deployment service
 * - `'now-bitbucket'` Zeit.co's Now for BitBucket deployment service
 * - `'now-gitlab'` Zeit.co's Now for GitLab deployment service
 * - `'now'` Zeit.co's Now service, but not GitHub/BitBucket/GitLab
 * - `'azure-pipelines'` Azure Pipelines
 * - `'bitbucket-pipelines'` Bitbucket Pipelines
 * - `'bitrise'` Bitrise
 * - `'buddy'` Buddy
 * - `'buildkite'` Buildkite
 * - `'cirrus'` Cirrus CI
 * - `'dsari'` dsari CI
 * - `'screwdriver'` Screwdriver CI
 * - `'strider'` Strider CI
 * - `'taskcluster'` Mozilla Taskcluster
 * - `'hudson'` Hudson CI
 * - `'magnum'` Magnum CI
 * - `'nevercode'` Nevercode
 * - `'render'` Render CI
 * - `'sail'` Sail CI
 * - `'shippable'` Shippable
 * - `'heroku'` Heroku
 * - `'codeship'` CodeShip
 * - `'teamcity'` TeamCity
 * - `'vercel'` Vercel
 * - `'vercel-github'` Vercel GitHub
 * - `'vercel-gitlab'` Vercel Gitlab
 * - `'vercel-bitbucket'` Vercel Bitbucket
 * - Anything that sets the `CI_NAME` environment variable will return the value as the result. (This is how CodeShip is
 *   detected.)
 * - `'travis-ci'` Travis-CI - A few other CI systems set `TRAVIS=1` in the environment, because devs use that to
 *   indicate "test mode", so this one can get some false positives, and is tested later in the process to minimize
 *   this effect.
 * - `'aws-codebuild'` AWS CodeBuild
 * - `'builder'` Google Cloud Builder - This one is a bit weird. It doesn't really set anything that can be reliably
 *   detected except `BUILDER_OUTPUT`, so it can get false positives pretty easily.
 * - `'custom'` anything else that sets `CI` environment variable to either `'1'` or `'true'`.
 */
declare function ciDetect():
    | false
    | 'gerrit'
    | 'azure-pipelines'
    | 'bitrise'
    | 'buddy'
    | 'buildkite'
    | 'cirrus'
    | 'gitlab'
    | 'appveyor'
    | 'circle-ci'
    | 'semaphore'
    | 'drone'
    | 'dsari'
    | 'github-actions'
    | 'tddium'
    | 'screwdriver'
    | 'strider'
    | 'taskcluster'
    | 'jenkins'
    | 'bamboo'
    | 'gocd'
    | 'hudson'
    | 'wercker'
    | 'netlify'
    | 'now-github'
    | 'now-gitlab'
    | 'now-bitbucket'
    | 'bitbucket-pipelines'
    | 'now'
    | 'vercel-github'
    | 'vercel-gitlab'
    | 'vercel-bitbucket'
    | 'vercel'
    | 'magnum'
    | 'nevercode'
    | 'render'
    | 'sail'
    | 'shippable'
    | 'teamcity'
    | 'heroku'
    | 'travis-ci'
    | 'aws-codebuild'
    | 'custom'
    | 'builder';
export = ciDetect;
