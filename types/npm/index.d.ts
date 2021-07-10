// Type definitions for npm 2.0.0
// Project: https://github.com/npm/npm
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare var npm: NPM.Static;
export = npm;

declare namespace NPM {
    export interface Static extends NodeJS.EventEmitter {
        config: Config;
        commands: Commands;
        rollbacks: any[];
        spinner: Spinner;
        fullList: string[];
        abbrevs: Dictionary<string>;

        prefix: string;
        bin: string;
        globalBin: string;
        dir: string;
        globalDir: string;
        root: string;
        cache: string;
        tmp: string;


        load(cli: ConfigOptions): void;
        load(callback: SimpleCallback<Config>): void;
        load(cli: ConfigOptions, callback: SimpleCallback<Config>): void;

        deref(command: string): string;
    }

    //#region Commands Interfaces

    export interface Commands {
        install: CommandFunction;
        uninstall: CommandFunction;
        cache: CommandFunction;
        config: CommandFunction;
        set: CommandFunction;
        get: CommandFunction;
        update: CommandFunction;
        outdated: CommandFunction;
        prune: CommandFunction;
        submodule: CommandFunction;
        pack: CommandFunction;
        dedupe: CommandFunction;

        rebuild: CommandFunction;
        link: CommandFunction;

        publish: CommandFunction;
        star: CommandFunction;
        stars: CommandFunction;
        tag: CommandFunction;
        adduser: CommandFunction;
        unpublish: CommandFunction;
        owner: CommandFunction;
        deprecate: CommandFunction;
        shrinkwrap: CommandFunction;

        help: CommandFunction;
        "help-search": CommandFunction;
        ls: CommandFunction;
        search: CommandFunction;
        init: CommandFunction;
        version: CommandFunction;
        edit: CommandFunction;
        explore: CommandFunction;
        docs: CommandFunction;
        repo: CommandFunction;
        bugs: CommandFunction;
        faq: CommandFunction;
        root: CommandFunction;
        prefix: CommandFunction;
        bin: CommandFunction;
        whoami: CommandFunction;

        // view and its aliases
        view(args: string[], callback: CommandCallback): void;
        view(args: string[], silent: boolean, callback: CommandCallback): void;
        info(args: string[], callback: CommandCallback): void;
        info(args: string[], silent: boolean, callback: CommandCallback): void;
        show(args: string[], callback: CommandCallback): void;
        show(args: string[], silent: boolean, callback: CommandCallback): void;
        v(args: string[], callback: CommandCallback): void;
        v(args: string[], silent: boolean, callback: CommandCallback): void;

        test: CommandFunction;
        stop: CommandFunction;
        start: CommandFunction;
        restart: CommandFunction;
        "run-script": CommandFunction;
        completion: CommandFunction;

        //Aliases
        rm: CommandFunction;               // uninstall
        r: CommandFunction;                // uninstall
        un: CommandFunction;               // uninstall
        unlink: CommandFunction;           // uninstall
        remove: CommandFunction;           // uninstall
        rb: CommandFunction;               // rebuild
        list: CommandFunction;             // ls
        la: CommandFunction;               // ls
        ll: CommandFunction;               // ls
        i: CommandFunction;                // install
        isntall: CommandFunction;          // install
        up: CommandFunction;               // update
        c: CommandFunction;                // config
        find: CommandFunction;             // search
        s: CommandFunction;                // search
        se: CommandFunction;               // search
        author: CommandFunction;           // owner
        home: CommandFunction;             // docs
        issues: CommandFunction;           // bugs
        unstar: CommandFunction;           // star
        apihelp: CommandFunction;          // help
        long: CommandFunction;             // adduser
        "add-user": CommandFunction;       // adduser
        tst: CommandFunction;              // test
        t: CommandFunction;                // test
        "find-dupes": CommandFunction;     // dedupe
        ddp: CommandFunction;              // dedupe


        // plumbing
        build: CommandFunction;
        unbuild: CommandFunction;
        xmas: CommandFunction;
        substack: CommandFunction;
        visnup: CommandFunction;

    }
    export interface CommandFunction {
        (args: string[], callback: CommandCallback): void;
    }
    export interface CommandCallback {
        (err?: Error, result?: any, result2?: any, result3?: any, result4?: any): void;
    }

    //#endregion

    //#region Other Interfaces

    export interface Spinner {
        int: string;
        started: boolean;
        start(): void;
        stop(): void;
    }

    //#endregion

    //#region Config Interfaces

    export interface ConfigStatic {
        new (base: Config): Config;
        (base: Config): Config;
    }

    export interface Config {
        loaded: boolean;
        sources: Dictionary<ConfigSource>;
        rootConf: Config;
        usingBuiltin: boolean;
        root?: Config | undefined;
        Conf: ConfigStatic;
        defs: ConfigDefs;

        get(setting: string): any;
        set(setting: string, value: any): void;

        loadPrefix(cb: ErrorCallback): void;
        loadCAFile(caFilePath: string, cb: ErrorCallback): void;
        loadUid(cb: SimpleCallback<string>): void;
        setUser(cb: ErrorCallback): void;
        findPrefix(prefix: string, cb: SimpleCallback<string>): void;
        getCredentialsByURI(uri: string): Credentials;
        setCredentialsByURI(uri: string, cred: Credentials): void;

        loadExtras(cb: ErrorCallback): void;
        save(where: string, cb: ErrorCallback): Config;
        addFile(file: string, name: string): Config;
        parse(content: string, file: string): any;
        add(data: Object, marker: Object): any;
        addEnv(env: Dictionary<string>): any;
    }

    export interface ConfigDefs {
        defaults: ConfigOptions;
        types: ConfigTypes;
    }

    export interface ConfigOptions {
        "always-auth"?: boolean | undefined;
        "bin-links"?: boolean | undefined;
        browser?: string | undefined;

        ca?: any; // string | string[]
        cafile?: string | undefined;

        cache?: string | undefined;

        "cache-lock-stale"?: number | undefined;
        "cache-lock-retries"?: number | undefined;
        "cache-lock-wait"?: number | undefined;

        "cache-max"?: number | undefined;
        "cache-min"?: number | undefined;

        cert?: string | undefined;

        color?: any; // boolean | string ("always")
        depth?: number | undefined;
        description?: boolean | undefined;
        dev?: boolean | undefined;
        editor?: string | undefined;
        "engine-strict"?: boolean | undefined;
        force?: boolean | undefined;

        "fetch-retries"?: number | undefined;
        "fetch-retry-factor"?: number | undefined;
        "fetch-retry-mintimeout"?: number | undefined;
        "fetch-retry-maxtimeout"?: number | undefined;

        git?: string | undefined;
        "git-tag-version"?: boolean | undefined;

        global?: boolean | undefined;
        globalconfig?: string | undefined;
        group?: any; // number | string
        heading?: string | undefined;
        "ignore-scripts"?: boolean | undefined;
        "init-module"?: string | undefined;
        "init.author.name"?: string | undefined;
        "init.author.email"?: string | undefined;
        "init.author.url"?: string | undefined;
        "init.version"?: string | undefined;
        "init.license"?: string | undefined;
        json?: boolean | undefined;
        key?: string | undefined;
        link?: boolean | undefined;
        "local-address"?: string | undefined;
        loglevel?: string | undefined;
        logstream?: NodeJS.ReadWriteStream | undefined;
        long?: boolean | undefined;
        message?: string | undefined;
        "node-version"?: string | undefined;
        npat?: boolean | undefined;
        "onload-script"?: boolean | undefined;
        optional?: boolean | undefined;
        parseable?: boolean | undefined;
        prefix?: string | undefined;
        production?: boolean | undefined;
        "proprietary-attribs"?: boolean | undefined;
        proxy?: any; // boolean | string
        "https-proxy"?: string | undefined;
        "user-agent"?: string | undefined;
        "rebuild-bundle"?: boolean | undefined;
        registry?: string | undefined;
        rollback?: boolean | undefined;
        save?: boolean | undefined;
        "save-bundle"?: boolean | undefined;
        "save-dev"?: boolean | undefined;
        "save-exact"?: boolean | undefined;
        "save-optional"?: boolean | undefined;
        "save-prefix"?: string | undefined;
        scope?: string | undefined;
        searchopts?: string | undefined;
        searchexclude?: string | undefined;
        searchsort?: string | undefined;
        shell?: string | undefined;
        shrinkwrap?: boolean | undefined;
        "sign-git-tag"?: boolean | undefined;
        spin?: any; // boolean | string ("always")
        "strict-ssl"?: boolean | undefined;
        tag?: string | undefined;
        tmp?: string | undefined;
        unicode?: boolean | undefined;
        "unsafe-perm"?: boolean | undefined;
        usage?: boolean | undefined;
        user?: any; // string | number
        userconfig?: string | undefined;
        umask?: number | undefined;
        version?: boolean | undefined;
        versions?: boolean | undefined;
        viewer?: string | undefined;

        _exit?: boolean | undefined;
    }

    export interface ConfigTypes {
        "always-auth": typeof Boolean;
        "bin-links": typeof Boolean;
        browser: any[];

        ca: any[];
        cafile: typeof String;
        cache: typeof String;

        "cache-lock-stale": typeof Number;
        "cache-lock-retries": typeof Number;
        "cache-lock-wait": typeof Number;

        "cache-max": typeof Number;
        "cache-min": typeof Number;

        cert: typeof String;

        color: any[];
        depth: typeof Number;
        description: typeof Boolean;
        dev: typeof Boolean;
        editor: typeof String;
        "engine-strict": typeof Boolean;
        force: typeof Boolean;

        "fetch-retries": typeof Number;
        "fetch-retry-factor": typeof Number;
        "fetch-retry-mintimeout": typeof Number;
        "fetch-retry-maxtimeout": typeof Number;

        git: typeof String;
        "git-tag-version": typeof Boolean;

        global: typeof Boolean;
        globalconfig: typeof String;
        group: any[];
        heading: typeof String;
        "ignore-scripts": typeof Boolean;
        "init-module": typeof String;
        "init.author.name": typeof String;
        "init.author.email": typeof String;
        "init.author.url": typeof String;
        "init.version": typeof String;
        "init.license": typeof String;
        json: typeof Boolean;
        key: any[];
        link: typeof Boolean;
        "local-address": typeof String;
        loglevel: any[];
        logstream: any; // typeof stream.Stream
        long: typeof Boolean;
        message: typeof String;
        "node-version": any[];
        npat: typeof Boolean;
        "onload-script": any[];
        optional: typeof Boolean;
        parseable: typeof Boolean;
        prefix: typeof String;
        production: typeof Boolean;
        "proprietary-attribs": typeof Boolean;
        proxy: any[];
        "https-proxy": any[];
        "user-agent": typeof String;
        "rebuild-bundle": Boolean;
        registry: any[];
        rollback: typeof Boolean;
        save: typeof Boolean;
        "save-bundle": typeof Boolean;
        "save-dev": typeof Boolean;
        "save-exact": typeof Boolean;
        "save-optional": typeof Boolean;
        "save-prefix": typeof String;
        scope: typeof String;
        searchopts: typeof String;
        searchexclude: any[];
        searchsort: any[];
        shell: typeof String;
        shrinkwrap: typeof Boolean;
        "sign-git-tag": typeof Boolean;
        spin: any[];
        "strict-ssl": typeof Boolean;
        tag: typeof String;
        tmp: typeof String;
        unicode: typeof Boolean;
        "unsafe-perm": typeof Boolean;
        usage: typeof Boolean;
        user: any; // String | Number
        userconfig: typeof String;
        umask: typeof Number;
        version: typeof Boolean;
        versions: typeof Boolean;
        viewer: typeof String;

        _exit: typeof Boolean;
    }

    export interface ConfigShorthands {
        s: any[];
        d: any[];
        dd: any[];
        ddd: any[];
        noreg: any[];
        N: any[];
        reg: any[];
        "no-reg": any[];
        silent: any[];
        verbose: any[];
        quiet: any[];
        q: any[];
        h: any[];
        H: any[];
        "?": any[];
        help: any[];
        v: any[];
        f: any[];
        gangster: any[];
        gangsta: any[];
        desc: any[];
        "no-desc": any[];
        "local": any[];
        l: any[];
        m: any[];
        p: any[];
        porcelain: any[];
        g: any[];
        S: any[];
        D: any[];
        E: any[];
        O: any[];
        y: any[];
        n: any[];
        B: any[];
        C: any[];
    }

    export interface ConfigSource {
        path: string;
        type: string;
    }

    export interface Credentials {
        scope: string;
        token?: string | undefined;
        password?: string | undefined;
        username?: string | undefined;
        email?: string | undefined;
        auth?: string | undefined;
    }

    //#endregion

    //#region Utilities Interfaces

    export interface Dictionary<T> {
        [key: string]: T;
    }

    export interface ErrorCallback {
        (err?: Error): void;
    }

    export interface SimpleCallback<T> {
        (err?: Error, result?: T): void;
    }

    //#endregion
}
