declare namespace gh {
    interface Options {
        enterprise?: boolean | undefined;
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

declare function gh(url: string | { url: string }, options?: gh.Options): gh.Result | null;

export = gh;
