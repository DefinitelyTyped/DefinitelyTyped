import * as ci from 'ci-info';

ci.isCI; // $ExpectType boolean
ci.isPR; // $ExpectType boolean | null
ci.name; // $ExpectType string | null

ci.APPVEYOR; // $ExpectType boolean
ci.AZURE_PIPELINES; // $ExpectType boolean
ci.BAMBOO; // $ExpectType boolean
ci.BITBUCKET; // $ExpectType boolean
ci.BITRISE; // $ExpectType boolean
ci.BUDDY; // $ExpectType boolean
ci.BUILDKITE; // $ExpectType boolean
ci.CIRCLE; // $ExpectType boolean
ci.CIRRUS; // $ExpectType boolean
ci.CODEBUILD; // $ExpectType boolean
ci.CODESHIP; // $ExpectType boolean
ci.DRONE; // $ExpectType boolean
ci.DSARI; // $ExpectType boolean
ci.GITLAB; // $ExpectType boolean
ci.GOCD; // $ExpectType boolean
ci.HUDSON; // $ExpectType boolean
ci.JENKINS; // $ExpectType boolean
ci.MAGNUM; // $ExpectType boolean
ci.NETLIFY; // $ExpectType boolean
ci.SAIL; // $ExpectType boolean
ci.SEMAPHORE; // $ExpectType boolean
ci.SHIPPABLE; // $ExpectType boolean
ci.SOLANO; // $ExpectType boolean
ci.STRIDER; // $ExpectType boolean
ci.TASKCLUSTER; // $ExpectType boolean
ci.TEAMCITY; // $ExpectType boolean
ci.TRAVIS; // $ExpectType boolean
