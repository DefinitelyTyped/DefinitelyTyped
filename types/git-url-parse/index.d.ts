declare namespace gitUrlParse {
    interface GitUrl {
        /** An array with the url protocols (usually it has one element). */
        protocols: string[];
        port: number | null;
        /** The url domain (including subdomains). */
        resource: string;
        /** The authentication user (usually for ssh urls). */
        user: string;
        pathname: string;
        hash: string;
        search: string;
        href: string;
        protocol: string;
        /** The oauth token (could appear in the https urls). */
        token: string;
        /** The Git provider (e.g. `"github.com"`). */
        source: string;
        /** The repository owner. */
        owner: string;
        /** The repository name. */
        name: string;
        /** The repository ref (e.g., "master" or "dev"). */
        ref: string;
        /** A filepath relative to the repository root. */
        filepath: string;
        /** The type of filepath in the url ("blob" or "tree"). */
        filepathtype: string;
        /** The owner and name values in the `owner/name` format. */
        full_name: string;
        /** The organization the owner belongs to. This is CloudForge specific. */
        organization: string;
        /** Whether to add the `.git` suffix or not. */
        git_suffix?: boolean | undefined;
        toString(type?: string): string;
    }

    function stringify(url: GitUrl, type?: string): string;
}

declare function gitUrlParse(url: string): gitUrlParse.GitUrl;

export = gitUrlParse;
