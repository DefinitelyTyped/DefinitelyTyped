// Type definitions for github-url-to-object 4.0
// Project: https://github.com/zeke/github-url-to-object#readme
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace gh {
    interface Options {
        enterprise?: boolean;
    }
    interface Result {
        user: string;
        repo: string;
        branch: string;
        https_url: string;
        tarball_url: string;
        clone_url: string;
        travis_url: string;
        api_url: string;
        zip_url: string;
    }
}

declare function gh(url: string | {url: string}, options?: gh.Options): gh.Result | null;

export = gh;
