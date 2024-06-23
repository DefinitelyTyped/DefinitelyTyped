export = envCi;

declare function envCi(options?: envCi.Options): envCi.CiEnv;

declare namespace envCi {
    interface Options {
        env?: { [envVar: string]: any } | undefined;
        cwd?: string | undefined;
    }

    type CiEnv = NonCiEnv | KnownCiEnv;
    type KnownCiEnv =
        | AppveyorEnv
        | BambooEnv
        | BitbucketEnv
        | BitriseEnv
        | BuddyEnv
        | BuildkiteEnv
        | CircleCiEnv
        | CirrusEnv
        | CodeBuildEnv
        | CodefreshEnv
        | CodeshipEnv
        | DroneEnv
        | GitLabEnv
        | JenkinsEnv
        | SailEnv
        | SemaphoreEnv
        | ShippableEnv
        | TeamCityEnv
        | TravisEnv
        | VstsEnv
        | WerckerEnv;

    interface NonCiEnv {
        isCi: false;
        branch?: string | undefined;
        commit?: string | undefined;
    }

    interface CiEnvBase {
        isCi: true;
    }

    interface AppveyorEnv extends CiEnvBase {
        name: "Appveyor";
        service: "appveyor";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        branch: string;
        job: string;
        jobUrl: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
        root: string;
    }

    interface BambooEnv extends CiEnvBase {
        name: "Bamboo";
        service: "bamboo";
        commit: string;
        build: string;
        buildUrl: string;
        branch: string;
        job: string;
        root: string;
    }

    interface BitbucketEnv extends CiEnvBase {
        name: "Bitbucket Pipelines";
        service: "bitbucket";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        branch: string;
        slug: string;
        root: string;
    }

    interface BitriseEnv extends CiEnvBase {
        name: "Bitrise";
        service: "bitrise";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        branch: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
    }

    interface BuddyEnv extends CiEnvBase {
        name: "Buddy";
        service: "buddy";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        branch?: string | undefined;
        pr?: string | undefined;
        isPr: boolean;
        slug: string;
    }

    interface BuildkiteEnv extends CiEnvBase {
        name: "Buildkite";
        service: "buildkite";
        build: string;
        buildUrl: string;
        commit: string;
        tag?: string | undefined;
        branch: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
        root: string;
    }

    interface CircleCiEnv extends CiEnvBase {
        name: "CircleCI";
        service: "circleci";
        build: string;
        buildUrl: string;
        job: string;
        commit: string;
        tag?: string | undefined;
        branch?: string | undefined;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
    }

    interface CirrusEnv extends CiEnvBase {
        name: "Cirrus CI";
        service: "cirrus";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        job: string;
        jobUrl: string;
        branch: string;
        pr?: string | undefined;
        isPr: boolean;
        slug: string;
        root: string;
    }

    interface CodeBuildEnv extends CiEnvBase {
        name: "AWS CodeBuild";
        service: "codebuild";
        commit: string;
        build: string;
        branch: string;
        buildUrl: string;
        root: string;
    }

    interface CodefreshEnv extends CiEnvBase {
        name: "Codefresh";
        service: "codefresh";
        commit: string;
        build: string;
        buildUrl: string;
        branch: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
        root: string;
    }

    interface CodeshipEnv extends CiEnvBase {
        name: "Codeship";
        service: "codeship";
        build: string;
        buildUrl: string;
        commit: string;
        branch: string;
        slug: string;
    }

    interface DroneEnv extends CiEnvBase {
        name: "Drone";
        service: "drone";
        commit: string;
        tag?: string | undefined;
        build: string;
        branch: string;
        job: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
    }

    interface GitLabEnv extends CiEnvBase {
        name: "GitLab CI/CD";
        service: "gitlab";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        job: string;
        jobUrl: string;
        branch: string;
        slug: string;
        root: string;
    }

    interface JenkinsEnv extends CiEnvBase {
        name: "Jenkins";
        service: "jenkins";
        commit: string;
        branch: string;
        build: string;
        buildUrl: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        root: string;
    }

    interface SailEnv extends CiEnvBase {
        name: "Sail CI";
        service: "sail";
        commit: string;
        branch?: string | undefined;
        pr?: string | undefined;
        isPr: boolean;
        slug: string;
        root: string;
    }

    interface SemaphoreEnv extends CiEnvBase {
        name: "Semaphore";
        service: "semaphore";
        commit: string;
        build: string;
        branch?: string | undefined;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
        root: string;
    }

    interface ShippableEnv extends CiEnvBase {
        name: "Shippable";
        service: "shippable";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        branch: string;
        job: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        slug: string;
        root: string;
    }

    interface TeamCityEnv extends CiEnvBase {
        name: "TeamCity";
        service: "teamcity";
        branch?: string | undefined;
        commit: string;
        build: string;
        slug: string;
        root?: string | undefined;
    }

    interface TravisEnv extends CiEnvBase {
        name: "Travis CI";
        service: "travis";
        commit: string;
        tag?: string | undefined;
        build: string;
        buildUrl: string;
        branch?: string | undefined;
        job: string;
        jobUrl: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch: string;
        slug: string;
        root: string;
    }

    interface VstsEnv extends CiEnvBase {
        name: "Visual Studio Team Services";
        service: "vsts";
        commit: string;
        build: string;
        branch: string;
        pr?: string | undefined;
        isPr: boolean;
        prBranch?: string | undefined;
        root: string;
    }

    interface WerckerEnv extends CiEnvBase {
        name: "Wercker";
        service: "wercker";
        commit: string;
        build: string;
        buildUrl: string;
        branch: string;
        slug: string;
        root: string;
    }
}
