import { LockDependency, PackageLock as _PackageLock } from "@npm/types";
import { PackageJson } from "@npmcli/package-json";
import { EventEmitter } from "events";
import { Options as PacoteOptions, Packument } from "pacote";

declare class Arborist extends EventEmitter {
    constructor(options?: Arborist.Options);
    cache: string;
    diff: Arborist.Diff | null;
    options: Arborist.NormalizedOptions;
    get explicitRequests(): Set<Arborist.ExplicitRequest>;
    installLinks: boolean;
    legacyPeerDeps: boolean;
    path: string;
    registry: string;
    replaceRegistryHost?: boolean;
    scriptsRun: Set<Arborist.ScriptRun>;

    auditReport?: Arborist.AuditReport | null;
    actualTree?: Arborist.Node | null;
    idealTree: Arborist.Node | null;
    virtualTree?: Arborist.Node | null;

    audit(options: Arborist.BuildIdealTreeOptions & { fix: true }): Promise<Arborist.Node>;
    audit(options?: Arborist.BuildIdealTreeOptions & { fix?: false }): Promise<Arborist.AuditReport>;
    audit(options: Arborist.BuildIdealTreeOptions & { fix?: boolean }): Promise<Arborist.Node | Arborist.AuditReport>;
    buildIdealTree(options?: Arborist.BuildIdealTreeOptions): Promise<Arborist.Node>;
    dedupe(options?: Omit<Arborist.ReifyOptions, "preferDedupe" | "names">): Promise<Arborist.Node>;
    loadActual(options?: Arborist.Options): Promise<Arborist.Node>;
    loadVirtual(options?: Arborist.Options): Promise<Arborist.Node>;
    reify(options?: Arborist.ReifyOptions): Promise<Arborist.Node>;
}

declare namespace Arborist {
    const Arborist: Arborist;
    interface Options extends PacoteOptions, Partial<Pick<import("cacache").get.Options, "memoize">> {
        path?: string;
        nodeVersion?: string;
        lockfileVersion?: number | null;
        workspacesEnabled?: boolean;
        replaceRegistryHost?: string;
        saveType?: SaveType;

        // Tracker
        progress?: boolean;

        // IdealTreeBuilder
        follow?: boolean;
        force?: boolean;
        global?: boolean;
        globalStyle?: boolean;
        idealTree?: Node | null;
        includeWorkspaceRoot?: boolean;
        installLinks?: boolean;
        legacyPeerDeps?: boolean;
        packageLock?: boolean;
        strictPeerDeps?: boolean;
        workspaces?: string[];

        // ActualLoader
        actualTree?: Node | null;

        // VirtualLoader
        virtualTree?: Node | null;

        // Builder
        ignoreScripts?: boolean;
        scriptShell?: string;
        binLinks?: boolean;
        rebuildBundle?: boolean;

        // Reifier
        savePrefix?: string;
        packageLockOnly?: boolean;
        dryRun?: boolean;
        formatPackageLock?: boolean;
    }
    interface NormalizedOptions extends Options {
        nodeVersion: NonNullable<Options["nodeVersion"]>;
        registry: NonNullable<Options["registry"]>;
        path: NonNullable<Options["path"]>;
        cache: NonNullable<Options["cache"]>;
        packumentCache: NonNullable<Options["packumentCache"]>;
        workspacesEnabled: NonNullable<Options["workspacesEnabled"]>;
        replaceRegistryHost: NonNullable<Options["replaceRegistryHost"]>;
        lockfileVersion: number | null;
    }
    type SaveType = "dev" | "optional" | "prod" | "peerOptional" | "peer";
    interface BuildIdealTreeOptions {
        rm?: string[];
        add?: string[];
        saveType?: SaveType;
        saveBundle?: boolean;
        update?: boolean | { all?: boolean; names?: string[] };
        prune?: boolean;
        preferDedupe?: boolean;
        legacyBundling?: boolean;
        engineStrict?: boolean;
    }
    interface ReifyOptions extends BuildIdealTreeOptions {
        omit?: SaveType[];
        save?: boolean;
    }
    interface AuditOptions extends BuildIdealTreeOptions {
        fix?: boolean;
        omit?: string[];
    }

    /**
     * All arborist trees are `Node` objects.  A `Node` refers
     * to a package folder, which may have children in `node_modules`.
     */
    class Node {
        protected constructor(options: never);
        /** The name of this node's folder in `node_modules`. */
        name: string;
        /**
         * Physical parent node in the tree.  The package in whose `node_modules`
         * folder this package lives.  Null if node is top of tree.
         *
         * Setting `node.parent` will automatically update `node.location` and all
         * graph edges affected by the move.
         */
        parent: Node | null;
        /**
         * A `Shrinkwrap` object which looks up `resolved` and `integrity` values
         * for all modules in this tree.  Only relevant on `root` nodes.
         */
        meta?: Shrinkwrap;

        /** Map of packages located in the node's `node_modules` folder. */
        children: Map<string, Node | Link>;

        /**
         * Package nodes are not only found in `node_modules` folders.  They can be
         * symlinked into place from anywhere on the file system.
         *
         * If a package is underneath the folder of another Node, we call that it's
         * file system parent node, or `fsParent`.  This is relevant when looking for
         * dependencies, because Node's `require()` lookup algorithm will walk up the
         * file system looking for resolutions.
         */
        fsParent: Node | null;

        /**
         * Package nodes that are underneath this folder, but not in `node_modules`.
         * Usually, these are workspaces, but can also be other `file:` dependencies
         */
        fsChildren: Set<Node>;

        /** An index for the package objects in the lockfile. */
        inventory: Inventory;

        /** The contents of this node's `package.json` file. */
        readonly package: PackageJson;
        /**
         * File path to this package.  If the node is a link, then this is the
         * path to the link, not to the link target.  If the node is _not_ a link,
         * then this matches `node.realpath`.
         */
        path: string;
        /** The full real filepath on disk where this node lives. */
        realpath: string;
        /** The tarball url or file path where the package artifact can be found. */
        resolved: string | null;
        /** The integrity value for the package artifact. */
        integrity: string | null;
        /** A slash-normalized relative path from the root node to this node's path. */
        location: string;
        /** Whether this represents a symlink.  Always `false` for Node objects, always `true` for Link objects. */
        isLink: boolean;
        /** True if this node is a root node.  (Ie, if `node.root === node`.) */
        isRoot: boolean;
        /**
         * The root node where we are working. If not assigned to some other
         * value, resolves to the node itself. (Ie, the root node's `root`
         * property refers to itself.)
         */
        get root(): Node;
        set root(value: Node | null);
        /** True if this node is the top of its tree (ie, has no `parent`, false otherwise). */
        isTop: string;
        /**
         * The top node in this node's tree.  This will be equal to `node.root`
         * for simple trees, but link targets will frequently be outside of (or
         * nested somewhere within) a `node_modules` hierarchy, and so will have
         * a different `top`.
         */
        top: string;

        /** Indicates if this node is a dev dependency. */
        dev: boolean;
        /** Indicates if this node is an optional dependency. */
        optional: boolean;
        /** Indicates if this node is an optional dev dependency. */
        devOptional: boolean;
        /** Indicates if this node is a peer dependency. */
        peer: boolean;
        /**
         * Edges in the dependency graph indicating nodes that this node depends
         * on, which resolve its dependencies.
         */
        edgesOut: Edge[];
        /** Edges in the dependency graph indicating nodes that depend on this node. */
        edgesIn: Edge[];

        /** True if this package is not required by any other for any reason.  False for top of tree. */
        extraneous: boolean;

        workspaces: Map<string, string> | null;

        /** The canonical spec of this package version: `name@version` */
        get pkgid(): string;

        get inBundle(): boolean;

        /** Errors encountered while parsing package.json or version specifiers. */
        errors: Error[];

        /** If this is a Link, this is the node it  */
        target: Node;

        /** Identify the node that will be returned when code in this package runs `require(name)` */
        resolve(name: string): Node;

        inNodeModules(): string | false;

        querySelectorAll(query: string): Promise<Node[]>;

        toJSON(): Node;
    }

    class Link extends Node {
        isLink: true;
    }

    /**
     * Edge objects represent a dependency relationship a package node to the
     * point in the tree where the dependency will be loaded.  As nodes are
     * moved within the tree, Edges automatically update to point to the
     * appropriate location.
     */
    class Edge {
        /**
         * Creates a new edge with the specified fields.  After instantiation,
         * none of the fields can be changed directly.
         */
        constructor(fields: Pick<Edge, "from" | "type" | "name" | "spec">);
        /** The node that has the dependency. */
        from: Node;
        /** The type of dependency. */
        type: Exclude<SaveType, "peerOptional">;
        /** The name of the dependency.  Ie, the key in the relevant `package.json` dependencies object. */
        name: string;
        /**
         * The specifier that is required.  This can be a version, range, tag
         * name, git url, or tarball URL.  Any specifier allowed by npm is
         * supported.
         */
        spec: string;
        /** Automatically set to the node in the tree that matches the `name` field. */
        to: Node;
        /** True if `edge.to` satisfies the specifier. */
        valid: boolean;
        /**
         * A string indicating the type of error if there is a problem, or `null`
         * if it's valid.  Values, in order of precedence:
         * * `DETACHED` Indicates that the edge has been detached from its
         *   `edge.from` node, typically because a new edge was created when a
         *   dependency specifier was modified.
         * * `MISSING` Indicates that the dependency is unmet.  Note that this is
         *   _not_ set for unmet dependencies of the `optional` type.
         * * `PEER LOCAL` Indicates that a `peerDependency` is found in the
         *   node's local `node_modules` folder, and the node is not the top of
         *   the tree.  This violates the `peerDependency` contract, because it
         *   means that the dependency is not a peer.
         * * `INVALID` Indicates that the dependency does not satisfy `edge.spec`.
         */
        error: "DETACHED" | "MISSING" | "PEER LOCAL" | "INVALID" | null;
        reload(hard?: boolean): void;
    }

    interface AuditReport extends Map<string, Vuln> {
        report: { [dependency: string]: Advisory };
        tree: Node;
        error: Error | null;
        options: NormalizedOptions;
        topVulns: Map<string, Vuln>;
        set(key: never, value: never): never;
        toJSON(): {
            auditReportVersion: number;
            vulnerabilities: { [key: string]: VulnJson };
            metadata: {
                vulnerabilities: {
                    info: number;
                    low: number;
                    moderate: number;
                    high: number;
                    critical: number;
                    total: number;
                };
                dependencies: {
                    prod: number;
                    dev: number;
                    optional: number;
                    peer: number;
                    peerOptional: number;
                    total: number;
                };
            };
        };
        run(): Promise<AuditReport>;
    }
    interface Vuln {
        name: string;
        via: Set<Advisory>;
        advisories: Set<Advisory>;
        severity: string;
        effects: Set<Vuln>;
        topNodes: Set<Node>;
        nodes: Set<Node>;
        versions: string[];
        packument: Packument;
        get range(): string;
        get isDirect(): boolean;
        get fixAvailable(): boolean;
        toJSON(): VulnJson;
    }
    interface VulnJson {
        name: string;
        severity: string;
        isDirect: boolean;
        via: Advisory[];
        effects: string[];
        range: string;
        nodes: string[];
        fixAvailable: boolean;
    }
    interface Advisory {
        name: string;
        id: string;
        dependency: string;
        type: "advisory" | "metavuln";
        url: string;
        title: string;
        severity: string;
        range: string;
        versions: string[];
        vulnerableVersions: string[];
        source: string | number;
    }

    interface ToStringOptions {
        format?: boolean;
    }

    interface PackageLockBase extends _PackageLock {
        packages?: {
            [moduleName: string]: LockDependency & { workspaces?: string[] };
        };
    }
    interface PackageLockV1 extends PackageLockBase {
        lockfileVersion: 1;
        dependencies: NonNullable<PackageLockBase["dependencies"]>;
        packages?: never;
    }
    interface PackageLockV2 extends PackageLockBase {
        lockfileVersion: 2;
        dependencies: NonNullable<PackageLockBase["dependencies"]>;
        packages: NonNullable<PackageLockBase["packages"]>;
    }
    interface PackageLockV3 extends PackageLockBase {
        lockfileVersion: 3;
        dependencies?: never;
        packages: NonNullable<PackageLockBase["packages"]>;
    }
    type PackageLock = PackageLockV1 | PackageLockV2 | PackageLockV3;

    class Shrinkwrap {
        constructor();

        path: string;
        filename: string | null;
        type: string | null;
        loadedFromDisk: boolean;
        resolveOptions: PacoteOptions;
        commit(): PackageLock;
        toJSON(): PackageLock;
        toString(options?: ToStringOptions): string;
        save(options?: ToStringOptions): Promise<[undefined, undefined | false]>;
    }
    interface ExplicitRequest {
        from: Node;
        name: string;
        action?: "DELETE";
    }
    interface Inventory extends Omit<Map<string, Node>, "delete" | "set" | "has"> {
        get primaryKey(): string;
        get indexes(): string[];
        filter(fn: (node: Node) => boolean): Generator<Node, void>;
        add(node: Node): void;
        delete(node: Node): void;
        query(key: string, val: Node): Set<string>;
        query(key: string, val?: never): Set<Node>;
        has(node: Node): boolean;
        set?(k: never, v: never): never;
    }
    interface Diff {
        filterSet: Set<Node>;
        shrinkwrapInflated: Set<Node>;
        children: Diff[];
        actual: Node;
        ideal: Node;
        resolved: Node["resolved"];
        integrity: Node["integrity"];
        action: "REMOVE" | "ADD" | "CHANGE" | null;
        parent: Diff | null;
        leaves: Node[];
        unchanged: Node[];
        removed: Node[];
    }
    interface ScriptRun {
        pkg: PackageJson;
        path: Node["path"];
        event: string;
        cmd: string;
        env: NodeJS.ProcessEnv;
        code: number;
        signal: NodeJS.Signals;
        stdout: string;
        stderr: string;
    }
}

export = Arborist;
