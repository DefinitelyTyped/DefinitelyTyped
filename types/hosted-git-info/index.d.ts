// Type definitions for hosted-git-info 3.0
// Project: https://github.com/npm/hosted-git-info
// Definitions by: Jason <https://github.com/OiyouYeahYou>, Michael <https://github.com/Ovyerus>, Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class GitHost {
    constructor(
        type: GitHost.Hosts,
        user: string,
        auth: string | undefined,
        project: string,
        committish?: string,
        defaultRepresentation?: GitHost.Representation,
        opts?: GitHost.FillOptions,
    );

    type: GitHost.Hosts;
    user: string;
    auth?: string;
    project: string;
    committish?: string;
    default?: string;
    opts: GitHost.Options;
    protocols: string[];
    domain: string;
    treepath?: string;

    // Templates
    sshtemplate: string;
    sshurltemplate: string;
    browsetemplate: string;
    browsefiletemplate: string;
    docstemplate: string;
    httpstemplate: string;
    filetemplate: string;
    shortcuttemplate: string;
    pathtemplate: string;
    bugstemplate: string;
    gittemplate?: string;
    tarballtemplate: string;

    pathmatch: RegExp;
    protocols_re: RegExp;
    hashformat(fragment: string): string;

    hash(): string;
    ssh(opts?: GitHost.FillOptions): string;
    sshurl(opts?: GitHost.FillOptions): string;
    browse(opts?: GitHost.FillOptions): string;
    browse(path: string, opts?: GitHost.FillOptions): string;
    browse(path: string, fragment: string, opts?: GitHost.FillOptions): string;
    docs(opts?: GitHost.FillOptions): string;
    bugs(opts?: GitHost.FillOptions): string;
    https(opts?: GitHost.FillOptions): string;
    git(opts?: GitHost.FillOptions): string;
    shortcut(opts?: GitHost.FillOptions): string;
    path(opts?: GitHost.FillOptions): string;
    tarball(opts?: GitHost.FillOptions): string;
    file(path: string, opts?: GitHost.FillOptions): string;
    getDefaultRepresentation(): GitHost.Representation | undefined;
    toString(opts?: GitHost.FillOptions): string;
}

declare namespace GitHost {
    function fromUrl(gitUrl: string, opts?: Options): GitHost | undefined;

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

    type Hosts = 'github' | 'bitbucket' | 'gitlab' | 'gist';

    type Representation =
        | 'hash'
        | 'ssh'
        | 'sshurl'
        | 'browse'
        | 'docs'
        | 'bugs'
        | 'https'
        | 'git'
        | 'shortcut'
        | 'path'
        | 'tarball'
        | 'file';
}

export = GitHost;
