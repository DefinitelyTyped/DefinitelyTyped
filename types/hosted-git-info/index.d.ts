/// <reference types="node" />

export = GitHost;

declare class GitHost {
    constructor(
        type: GitHost.Hosts,
        user: string | null,
        auth: string | null,
        project: string,
        committish?: string | null,
        defaultRepresentation?: string,
        opts?: GitHost.FillOptions,
    );

    type: GitHost.Hosts;
    user: string | null;
    auth: string | null;
    project: string;
    committish?: string | null | undefined;
    /** The name of the representation method used by `toString()`. */
    default?: string | undefined;
    opts: GitHost.Options;
    domain: string;
    treepath?: string | undefined;
    protocols: string[];

    /**
     * Accepts a URL of a git repository or a SCP-style specifier of one and
     * returns a `GitHost` object, or `undefined` if the url cannot be matched
     * with a git host.
     */
    static fromUrl(gitUrl: string, opts?: GitHost.Options): GitHost | undefined;

    /**
     * Accepts a package manifest and returns a `GitHost` object for its
     * `repository` field, or, if the repository url cannot be matched with a
     * known git host, a fallback url derived from it, or `null` if no fallback
     * url could be derived.
     *
     * Throws an error if the manifest has no `repository` url.
     */
    static fromManifest(
        manifest: GitHost.Manifest,
        opts?: GitHost.Options,
    ): GitHost | string | null | undefined;

    /**
     * Parses a git url into a `URL` object, correcting scp-style urls so that
     * they can be parsed. Returns `undefined` if the url cannot be parsed.
     */
    static parseUrl(url: string): URL | undefined;

    /**
     * Registers a new git host, making it available to `GitHost.fromUrl` and
     * `GitHost.fromManifest`.
     */
    static addHost(name: string, host: GitHost.HostDefinition): void;

    hash(): string;
    ssh(opts?: GitHost.FillOptions): string | null;
    sshurl(opts?: GitHost.FillOptions): string | null;
    browse(opts?: GitHost.FillOptions): string | null;
    browse(path: string, opts?: GitHost.FillOptions): string | null;
    browse(path: string, fragment: string, opts?: GitHost.FillOptions): string | null;
    /**
     * If the path is known to be a file, then `browseFile` should be used instead of
     * `browse`. For some hosts the url is the same, but for others like GitHub a file
     * can use both `/tree/` and `/blob/` in the path.
     */
    browseFile(path: string, opts?: GitHost.FillOptions): string | null;
    browseFile(path: string, fragment: string, opts?: GitHost.FillOptions): string | null;
    docs(opts?: GitHost.FillOptions): string | null;
    bugs(opts?: GitHost.FillOptions): string | null;
    https(opts?: GitHost.FillOptions): string | null;
    git(opts?: GitHost.FillOptions): string | null;
    shortcut(opts?: GitHost.FillOptions): string | null;
    path(opts?: GitHost.FillOptions): string | null;
    tarball(opts?: GitHost.FillOptions): string | null;
    edit(path: string, opts?: GitHost.FillOptions): string | null;
    file(path: string, opts?: GitHost.FillOptions): string | null;
    getDefaultRepresentation(): string | undefined;
    toString(opts?: GitHost.FillOptions): string | null;
}

declare namespace GitHost {
    /** A package manifest, such as that returned by `pacote.manifest()`. */
    interface Manifest {
        repository?: string | { url?: string } | undefined;
    }

    interface Options {
        noCommittish?: boolean | undefined;
        noGitPlus?: boolean | undefined;
    }

    interface FillOptions extends Options {
        path?: string | undefined;
        auth?: string | null | undefined;
        fragment?: string | undefined;
        committish?: string | null | undefined;
        treepath?: string | undefined;
    }

    /**
     * A url template function. Returns `null` when the url is not available
     * for the host.
     */
    type Template = (options: TemplateOptions) => string | null;

    interface TemplateOptions extends FillOptions {
        type: string;
        user: string | null;
        project: string;
        domain: string;
        blobpath?: string | undefined;
        editpath?: string | undefined;
        /**
         * Only present when the host defines one; the built-in hosts always
         * do, but hosts registered with `addHost` do not inherit it.
         */
        hashformat?: ((fragment: string) => string) | undefined;
    }

    interface HostDefinition {
        /** The domain for git protocol use. */
        domain: string;
        /** The protocols that may be used to match urls for this host. */
        protocols?: string[] | undefined;
        treepath?: string | undefined;
        blobpath?: string | undefined;
        editpath?: string | undefined;
        /** Extracts `user`, `project` and `committish` from a parsed url. */
        extract?: ((url: URL) => HostSegments | undefined) | undefined;
        sshtemplate?: Template | undefined;
        sshurltemplate?: Template | undefined;
        edittemplate?: Template | undefined;
        browsetemplate?: Template | undefined;
        browsetreetemplate?: Template | undefined;
        browseblobtemplate?: Template | undefined;
        docstemplate?: Template | undefined;
        httpstemplate?: Template | undefined;
        filetemplate?: Template | undefined;
        shortcuttemplate?: Template | undefined;
        pathtemplate?: Template | undefined;
        bugstemplate?: Template | undefined;
        gittemplate?: Template | undefined;
        tarballtemplate?: Template | undefined;
        hashformat?: ((fragment: string) => string) | undefined;
    }

    interface HostSegments {
        user: string | null;
        project: string;
        committish: string | null;
    }

    type Hosts = "github" | "bitbucket" | "gitlab" | "gist" | "sourcehut";

    /** The names of the methods that return a url representation of the host. */
    type Representation =
        | "hash"
        | "ssh"
        | "sshurl"
        | "browse"
        | "browseFile"
        | "docs"
        | "bugs"
        | "https"
        | "git"
        | "shortcut"
        | "path"
        | "tarball"
        | "edit"
        | "file";
}
