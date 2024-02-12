interface NormalizeOptions {
    /**
     * Enables optional strict mode when applying the normalizeData step.
     */
    strict?: boolean;

    /**
     * Optional normalization steps that will be applied to the package.json
     * file, replacing the default steps.
     */
    steps?: string[];

    /**
     * Optional git root to provide when applying the gitHead step.
     */
    root?: string;

    /**
     * If provided, a message about each change that was made to the packument
     * will be added to this array.
     */
    changes?: string[];

    /**
     * Allow package names to not be lowercase.
     */
    allowLegacyCase?: boolean;
}

declare class NPMCliPackageJson {
    static normalizeSteps: readonly string[];
    static fixSteps: readonly string[];
    static prepareSteps: readonly string[];

    constructor();

    /**
     * Create a new empty package.json, so we can save at the given path even
     * though we didn't start from a parsed file.
     *
     * @async
     */
    static create: (
        path: string,
        opts?: {
            data?: NPMCliPackageJson.Content;
        },
    ) => Promise<NPMCliPackageJson>;

    /**
     * Load a package.json at given path and JSON parses.
     *
     * @async
     */
    static load: (
        path: string,
        opts?: {
            /**
             * If true, a new package.json will be created if one does not already
             * exist. Will not clobber an existing package.json that cannot be
             * parsed.
             */
            create?: boolean;
        },
    ) => Promise<NPMCliPackageJson>;

    /**
     * npm pkg fix
     *
     * @async
     */
    static fix: (path: string, opts?: Omit<NormalizeOptions, "steps">) => Promise<NPMCliPackageJson>;

    /**
     * read-package-json compatible behavior
     *
     * @async
     */
    static prepare: (path: string, opts?: NormalizeOptions) => Promise<NPMCliPackageJson>;

    /**
     * read-package-json-fast compatible behavior
     *
     * @async
     */
    static normalize: (path: string, opts?: NormalizeOptions) => Promise<NPMCliPackageJson>;

    /**
     * Load content from given path
     *
     * @async
     */
    load: (path: string, parseIndex?: boolean) => Promise<this>;

    /**
     * Load data from a JSON string
     */
    fromJSON: (data: string) => this;

    /**
     * Load data from a comment
     */
    fromComment: (data: string) => this;

    content: NPMCliPackageJson.Content;
    path: string;
    filename: string | undefined;

    create: (path: string) => this;

    update: (content: NPMCliPackageJson.Content) => this;

    /** @async */
    save: () => Promise<void>;

    /** @async */
    normalize: (opts?: NormalizeOptions) => Promise<this>;

    /** @async */
    prepare: (opts?: NormalizeOptions) => Promise<this>;

    /** @async */
    fix: (opts?: Omit<NormalizeOptions, "steps">) => Promise<this>;
}

declare namespace NPMCliPackageJson {
    type Content = PackageJsonType;

    type PackageJson = PackageJsonType;
}

export = NPMCliPackageJson;

// Copied from https://github.com/sindresorhus/type-fest/blob/c5796f5fce6fc8346792929468159648caec30e0/source/package-json.d.ts
declare namespace PackageJson {
    /**
     * A person who has been involved in creating or maintaining the package.
     */
    type Person =
        | string
        | {
            name: string;
            url?: string;
            email?: string;
        };

    type BugsLocation =
        | string
        | {
            /**
             * The URL to the package's issue tracker.
             */
            url?: string;

            /**
             * The email address to which issues should be reported.
             */
            email?: string;
        };

    interface DirectoryLocations {
        [directoryType: string]: JsonValue | undefined;

        /**
         * Location for executable scripts. Sugar to generate entries in the `bin` property by walking the folder.
         */
        bin?: string;

        /**
         * Location for Markdown files.
         */
        doc?: string;

        /**
         * Location for example scripts.
         */
        example?: string;

        /**
         * Location for the bulk of the library.
         */
        lib?: string;

        /**
         * Location for man pages. Sugar to generate a `man` array by walking the folder.
         */
        man?: string;

        /**
         * Location for test files.
         */
        test?: string;
    }

    type Scripts = {
        /**
         * Run **before** the package is published (Also run on local `npm install` without any arguments).
         */
        prepublish?: string;

        /**
         * Run both **before** the package is packed and published, and on local `npm install` without any arguments. This is run **after** `prepublish`, but **before** `prepublishOnly`.
         */
        prepare?: string;

        /**
         * Run **before** the package is prepared and packed, **only** on `npm publish`.
         */
        prepublishOnly?: string;

        /**
         * Run **before** a tarball is packed (on `npm pack`, `npm publish`, and when installing git dependencies).
         */
        prepack?: string;

        /**
         * Run **after** the tarball has been generated and moved to its final destination.
         */
        postpack?: string;

        /**
         * Run **after** the package is published.
         */
        publish?: string;

        /**
         * Run **after** the package is published.
         */
        postpublish?: string;

        /**
         * Run **before** the package is installed.
         */
        preinstall?: string;

        /**
         * Run **after** the package is installed.
         */
        install?: string;

        /**
         * Run **after** the package is installed and after `install`.
         */
        postinstall?: string;

        /**
         * Run **before** the package is uninstalled and before `uninstall`.
         */
        preuninstall?: string;

        /**
         * Run **before** the package is uninstalled.
         */
        uninstall?: string;

        /**
         * Run **after** the package is uninstalled.
         */
        postuninstall?: string;

        /**
         * Run **before** bump the package version and before `version`.
         */
        preversion?: string;

        /**
         * Run **before** bump the package version.
         */
        version?: string;

        /**
         * Run **after** bump the package version.
         */
        postversion?: string;

        /**
         * Run with the `npm test` command, before `test`.
         */
        pretest?: string;

        /**
         * Run with the `npm test` command.
         */
        test?: string;

        /**
         * Run with the `npm test` command, after `test`.
         */
        posttest?: string;

        /**
         * Run with the `npm stop` command, before `stop`.
         */
        prestop?: string;

        /**
         * Run with the `npm stop` command.
         */
        stop?: string;

        /**
         * Run with the `npm stop` command, after `stop`.
         */
        poststop?: string;

        /**
         * Run with the `npm start` command, before `start`.
         */
        prestart?: string;

        /**
         * Run with the `npm start` command.
         */
        start?: string;

        /**
         * Run with the `npm start` command, after `start`.
         */
        poststart?: string;

        /**
         * Run with the `npm restart` command, before `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
         */
        prerestart?: string;

        /**
         * Run with the `npm restart` command. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
         */
        restart?: string;

        /**
         * Run with the `npm restart` command, after `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
         */
        postrestart?: string;
    } & Partial<Record<string, string>>;

    /**
     * Dependencies of the package. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or Git URL.
     */
    type Dependency = Partial<Record<string, string>>;

    /**
     * A mapping of conditions and the paths to which they resolve.
     */
    interface ExportConditions {
        [condition: string]: Exports;
    }

    /**
     * Entry points of a module, optionally with conditions and subpath exports.
     */
    type Exports =
        | null
        | string
        | Array<string | ExportConditions>
        | ExportConditions;

    /**
     * Import map entries of a module, optionally with conditions and subpath imports.
     */
    interface Imports {
        [key: `#${string}`]: Exports;
    }

    interface NonStandardEntryPoints {
        /**
         * An ECMAScript module ID that is the primary entry point to the program.
         */
        module?: string;

        /**
         * A module ID with untranspiled code that is the primary entry point to the program.
         */
        esnext?:
            | string
            | {
                [moduleName: string]: string | undefined;
                main?: string;
                browser?: string;
            };

        /**
         * A hint to JavaScript bundlers or component tools when packaging modules for client side use.
         */
        browser?:
            | string
            | Partial<Record<string, string | false>>;

        /**
         * Denote which files in your project are "pure" and therefore safe for Webpack to prune if unused.
         *
         * [Read more.](https://webpack.js.org/guides/tree-shaking/)
         */
        sideEffects?: boolean | string[];
    }

    interface TypeScriptConfiguration {
        /**
         * Location of the bundled TypeScript declaration file.
         */
        types?: string;

        /**
         * Version selection map of TypeScript.
         */
        typesVersions?: Partial<Record<string, Partial<Record<string, string[]>>>>;

        /**
         * Location of the bundled TypeScript declaration file. Alias of `types`.
         */
        typings?: string;
    }

    /**
     * An alternative configuration for workspaces.
     */
    interface WorkspaceConfig {
        /**
         * An array of workspace pattern strings which contain the workspace packages.
         */
        packages?: WorkspacePattern[];

        /**
         * Designed to solve the problem of packages which break when their `node_modules` are moved to the root workspace directory - a process known as hoisting. For these packages, both within your workspace, and also some that have been installed via `node_modules`, it is important to have a mechanism for preventing the default Yarn workspace behavior. By adding workspace pattern strings here, Yarn will resume non-workspace behavior for any package which matches the defined patterns.
         *
         * [Supported](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/) by Yarn.
         * [Not supported](https://github.com/npm/rfcs/issues/287) by npm.
         */
        nohoist?: WorkspacePattern[];
    }

    /**
     * A workspace pattern points to a directory or group of directories which contain packages that should be included in the workspace installation process.
     *
     * The patterns are handled with [minimatch](https://github.com/isaacs/minimatch).
     *
     * @example
     * `docs` → Include the docs directory and install its dependencies.
     * `packages/*` → Include all nested directories within the packages directory, like `packages/cli` and `packages/core`.
     */
    type WorkspacePattern = string;

    interface YarnConfiguration {
        /**
         * If your package only allows one version of a given dependency, and you’d like to enforce the same behavior as `yarn install --flat` on the command-line, set this to `true`.
         *
         * Note that if your `package.json` contains `"flat": true` and other packages depend on yours (e.g. you are building a library rather than an app), those other packages will also need `"flat": true` in their `package.json` or be installed with `yarn install --flat` on the command-line.
         */
        flat?: boolean;

        /**
         * Selective version resolutions. Allows the definition of custom package versions inside dependencies without manual edits in the `yarn.lock` file.
         */
        resolutions?: Dependency;
    }

    interface JSPMConfiguration {
        /**
         * JSPM configuration.
         */
        jspm?: PackageJsonType;
    }

    /**
     * Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Containing standard npm properties.
     */
    interface PackageJsonStandard {
        /**
         * The name of the package.
         */
        name?: string;

        /**
         * Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).
         */
        version?: string;

        /**
         * Package description, listed in `npm search`.
         */
        description?: string;

        /**
         * Keywords associated with package, listed in `npm search`.
         */
        keywords?: string[];

        /**
         * The URL to the package's homepage.
         */
        homepage?: LiteralUnion<".", string>;

        /**
         * The URL to the package's issue tracker and/or the email address to which issues should be reported.
         */
        bugs?: BugsLocation;

        /**
         * The license for the package.
         */
        license?: string;

        /**
         * The licenses for the package.
         */
        licenses?: Array<{
            type?: string;
            url?: string;
        }>;

        author?: Person;

        /**
         * A list of people who contributed to the package.
         */
        contributors?: Person[];

        /**
         * A list of people who maintain the package.
         */
        maintainers?: Person[];

        /**
         * The files included in the package.
         */
        files?: string[];

        /**
         * Resolution algorithm for importing ".js" files from the package's scope.
         *
         * [Read more.](https://nodejs.org/api/esm.html#esm_package_json_type_field)
         */
        type?: "module" | "commonjs";

        /**
         * The module ID that is the primary entry point to the program.
         */
        main?: string;

        /**
         * Subpath exports to define entry points of the package.
         *
         * [Read more.](https://nodejs.org/api/packages.html#subpath-exports)
         */
        exports?: Exports;

        /**
         * Subpath imports to define internal package import maps that only apply to import specifiers from within the package itself.
         *
         * [Read more.](https://nodejs.org/api/packages.html#subpath-imports)
         */
        imports?: Imports;

        /**
         * The executable files that should be installed into the `PATH`.
         */
        bin?:
            | string
            | Partial<Record<string, string>>;

        /**
         * Filenames to put in place for the `man` program to find.
         */
        man?: string | string[];

        /**
         * Indicates the structure of the package.
         */
        directories?: DirectoryLocations;

        /**
         * Location for the code repository.
         */
        repository?:
            | string
            | {
                type: string;
                url: string;

                /**
                 * Relative path to package.json if it is placed in non-root directory (for example if it is part of a monorepo).
                 *
                 * [Read more.](https://github.com/npm/rfcs/blob/latest/implemented/0010-monorepo-subdirectory-declaration.md)
                 */
                directory?: string;
            };

        /**
         * Script commands that are run at various times in the lifecycle of the package. The key is the lifecycle event, and the value is the command to run at that point.
         */
        scripts?: Scripts;

        /**
         * Is used to set configuration parameters used in package scripts that persist across upgrades.
         */
        config?: JsonObject;

        /**
         * The dependencies of the package.
         */
        dependencies?: Dependency;

        /**
         * Additional tooling dependencies that are not required for the package to work. Usually test, build, or documentation tooling.
         */
        devDependencies?: Dependency;

        /**
         * Dependencies that are skipped if they fail to install.
         */
        optionalDependencies?: Dependency;

        /**
         * Dependencies that will usually be required by the package user directly or via another dependency.
         */
        peerDependencies?: Dependency;

        /**
         * Indicate peer dependencies that are optional.
         */
        peerDependenciesMeta?: Partial<Record<string, { optional: true }>>;

        /**
         * Package names that are bundled when the package is published.
         */
        bundledDependencies?: string[];

        /**
         * Alias of `bundledDependencies`.
         */
        bundleDependencies?: string[];

        /**
         * Engines that this package runs on.
         */
        engines?: {
            [EngineName in "npm" | "node" | string]?: string;
        };

        /**
         * @deprecated
         */
        engineStrict?: boolean;

        /**
         * Operating systems the module runs on.
         */
        os?: Array<
            LiteralUnion<
                | "aix"
                | "darwin"
                | "freebsd"
                | "linux"
                | "openbsd"
                | "sunos"
                | "win32"
                | "!aix"
                | "!darwin"
                | "!freebsd"
                | "!linux"
                | "!openbsd"
                | "!sunos"
                | "!win32",
                string
            >
        >;

        /**
         * CPU architectures the module runs on.
         */
        cpu?: Array<
            LiteralUnion<
                | "arm"
                | "arm64"
                | "ia32"
                | "mips"
                | "mipsel"
                | "ppc"
                | "ppc64"
                | "s390"
                | "s390x"
                | "x32"
                | "x64"
                | "!arm"
                | "!arm64"
                | "!ia32"
                | "!mips"
                | "!mipsel"
                | "!ppc"
                | "!ppc64"
                | "!s390"
                | "!s390x"
                | "!x32"
                | "!x64",
                string
            >
        >;

        /**
         * If set to `true`, a warning will be shown if package is installed locally. Useful if the package is primarily a command-line application that should be installed globally.
         *
         * @deprecated
         */
        preferGlobal?: boolean;

        /**
         * If set to `true`, then npm will refuse to publish it.
         */
        private?: boolean;

        /**
         * A set of config values that will be used at publish-time. It's especially handy to set the tag, registry or access, to ensure that a given package is not tagged with 'latest', published to the global public registry or that a scoped module is private by default.
         */
        publishConfig?: PublishConfig;

        /**
         * Describes and notifies consumers of a package's monetary support information.
         *
         * [Read more.](https://github.com/npm/rfcs/blob/latest/accepted/0017-add-funding-support.md)
         */
        funding?: string | {
            /**
             * The type of funding.
             */
            type?: LiteralUnion<
                | "github"
                | "opencollective"
                | "patreon"
                | "individual"
                | "foundation"
                | "corporation",
                string
            >;

            /**
             * The URL to the funding page.
             */
            url: string;
        };

        /**
         * Used to configure [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) / [Yarn workspaces](https://classic.yarnpkg.com/docs/workspaces/).
         *
         * Workspaces allow you to manage multiple packages within the same repository in such a way that you only need to run your install command once in order to install all of them in a single pass.
         *
         * Please note that the top-level `private` property of `package.json` **must** be set to `true` in order to use workspaces.
         */
        workspaces?: WorkspacePattern[] | WorkspaceConfig;
    }

    /**
     * Type for [`package.json` file used by the Node.js runtime](https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions).
     */
    interface NodeJsStandard {
        /**
         * Defines which package manager is expected to be used when working on the current project. It can set to any of the [supported package managers](https://nodejs.org/api/corepack.html#supported-package-managers), and will ensure that your teams use the exact same package manager versions without having to install anything else than Node.js.
         *
         * __This field is currently experimental and needs to be opted-in; check the [Corepack](https://nodejs.org/api/corepack.html) page for details about the procedure.__
         *
         * @example
         * ```json
         * {
         * "packageManager": "<package manager name>@<version>"
         * }
         * ```
         */
        packageManager?: string;
    }

    interface PublishConfig {
        /**
         * Additional, less common properties from the [npm docs on `publishConfig`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#publishconfig).
         */
        [additionalProperties: string]: JsonValue | undefined;

        /**
         * When publishing scoped packages, the access level defaults to restricted. If you want your scoped package to be publicly viewable (and installable) set `--access=public`. The only valid values for access are public and restricted. Unscoped packages always have an access level of public.
         */
        access?: "public" | "restricted";

        /**
         * The base URL of the npm registry.
         *
         * Default: `'https://registry.npmjs.org/'`
         */
        registry?: string;

        /**
         * The tag to publish the package under.
         *
         * Default: `'latest'`
         */
        tag?: string;
    }
}

/**
 * Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript and Yarn.
 *
 * @category File
 */
type PackageJsonType =
    & JsonObject
    & PackageJson.NodeJsStandard
    & PackageJson.PackageJsonStandard
    & PackageJson.NonStandardEntryPoints
    & PackageJson.TypeScriptConfiguration
    & PackageJson.YarnConfiguration
    & PackageJson.JSPMConfiguration;

// Copied from https://github.com/sindresorhus/type-fest/blob/e02f228f6391bb2b26c32a55dfe1e3aa2386d515/source/basic.d.ts
/**
 * Matches a JSON object.
 *
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.
 *
 * @category JSON
 */
type JsonObject = { [Key in string]: JsonValue } & { [Key in string]?: JsonValue | undefined };

/**
 * Matches a JSON array.
 *
 * @category JSON
 */
type JsonArray = JsonValue[] | readonly JsonValue[];

/**
 * Matches any valid JSON primitive value.
 *
 * @category JSON
 */
type JsonPrimitive = string | number | boolean | null;

/**
 * Matches any valid JSON value.
 *
 * @see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.
 *
 * @category JSON
 */
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

// Copied from https://github.com/sindresorhus/type-fest/blob/e02f228f6391bb2b26c32a55dfe1e3aa2386d515/source/literal-union.d.ts
/**
 * Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.
 *
 * Currently, when a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals. Thus, when such type
 * is used in an IDE with autocompletion, no suggestions are made for the declared literals.
 *
 * This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729). It will be removed as soon as it's not needed anymore.
 *
 * @example
 * ```
 * import type {LiteralUnion} from 'type-fest';
 *
 * // Before
 *
 * type Pet = 'dog' | 'cat' | string;
 *
 * const pet: Pet = '';
 * // Start typing in your TypeScript-enabled IDE.
 * // You **will not** get auto-completion for `dog` and `cat` literals.
 *
 * // After
 *
 * type Pet2 = LiteralUnion<'dog' | 'cat', string>;
 *
 * const pet: Pet2 = '';
 * // You **will** get auto-completion for `dog` and `cat` literals.
 * ```
 *
 * @category Type
 */
type LiteralUnion<LiteralType, BaseType extends Primitive> = LiteralType | (BaseType & Record<never, never>);

// Copied from https://github.com/sindresorhus/type-fest/blob/e02f228f6391bb2b26c32a55dfe1e3aa2386d515/source/primitive.d.ts
/**
 * Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 *
 * @category Type
 */
type Primitive = null | undefined | string | number | boolean | symbol | bigint;
