// Type definitions for hosted-git-info 2.7
// Project: https://github.com/npm/hosted-git-info
// Definitions by: Jason <https://github.com/OiyouYeahYou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class HostedGitInfo {
    host: HostedGitInfo.hosts;
    user: string | null;
    auth: string | null;
    project: string | null;
    committish: string | null;
    default: string;
    opts: HostedGitInfo.Options;

    constructor(
        host: HostedGitInfo.hosts,
        user: string | null,
        auth: string | null,
        project: string | null,
        committish: string | null,
        defaultRepresentation: string,
        opts?: HostedGitInfo.Options
    );

    // From git-host-info

    // defaults
    sshtemplate: string;
    sshurltemplate: string;
    browsetemplate: string;
    docstemplate: string;
    filetemplate: string;
    shortcuttemplate: string;
    pathtemplate: string;

    pathmatch: RegExp;
    protocols_re: RegExp;
    hashformat(fragment: string): string;

    // special
    protocols: string[];
    domain: string;
    bugstemplate: string;
    gittemplate: string;
    browsefiletemplate: string;
    httpstemplate: string;
    treepath: string;
    tarballtemplate: string;

    // /From git-host-info

    hash(): string;
    ssh(opts?: HostedGitInfo.FillOptions): string | undefined;
    sshurl(opts?: HostedGitInfo.FillOptions): string | undefined;
    browse(
        path: string,
        fragment: string,
        opts?: HostedGitInfo.FillOptions
    ): string | undefined;
    browse(path: string, opts?: HostedGitInfo.FillOptions): string | undefined;
    browse(opts?: HostedGitInfo.FillOptions): string | undefined;
    docs(opts?: HostedGitInfo.FillOptions): string | undefined;
    bugs(opts?: HostedGitInfo.FillOptions): string | undefined;
    https(opts?: HostedGitInfo.FillOptions): string | undefined;
    git(opts?: HostedGitInfo.FillOptions): string | undefined;
    shortcut(opts?: HostedGitInfo.FillOptions): string | undefined;
    path(opts?: HostedGitInfo.FillOptions): string | undefined;
    tarball(opts?: HostedGitInfo.FillOptions): string | undefined;
    file(path: string, opts?: HostedGitInfo.FillOptions): string | undefined;
    getDefaultRepresentation(): string;
    toString(opts?: HostedGitInfo.FillOptions): string | undefined;

    static fromUrl(
        gitUrl: string,
        options?: HostedGitInfo.Options
    ): HostedGitInfo;
}

declare namespace HostedGitInfo {
    interface Options {
        noCommittish?: boolean;
        noGitPlus?: boolean;
    }

    interface FillOptions extends Options {
        path?: string;
        auth?: string;
        fragment?: string;
        committish?: string;
        treepath?: string;
    }

    type hosts = 'github' | 'bitbucket' | 'gitlab' | 'gist';
}

export = HostedGitInfo;
