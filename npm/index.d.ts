// Type definitions for npm 2.0.0
// Project: https://github.com/npm/npm
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
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
        // Commands
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
        view: CommandFunction;
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
        info: CommandFunction;             // view
        show: CommandFunction;             // view
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
        v: CommandFunction;                // view

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
        root?: Config;
        Conf: ConfigStatic;
        defs: ConfigDefs;

        get(setting: string): string;
        set(setting: string, value: string): void;

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
        "always-auth"?: boolean;
        "bin-links"?: boolean;
        browser?: string;

        ca?: any; // string | string[]
        cafile?: string;

        cache?: string;

        "cache-lock-stale"?: number;
        "cache-lock-retries"?: number;
        "cache-lock-wait"?: number;

        "cache-max"?: number;
        "cache-min"?: number;

        cert?: string;

        color?: any; // boolean | string ("always")
        depth?: number;
        description?: boolean;
        dev?: boolean;
        editor?: string;
        "engine-strict"?: boolean;
        force?: boolean;

        "fetch-retries"?: number;
        "fetch-retry-factor"?: number;
        "fetch-retry-mintimeout"?: number;
        "fetch-retry-maxtimeout"?: number;

        git?: string;
        "git-tag-version"?: boolean;

        global?: boolean;
        globalconfig?: string;
        group?: any; // number | string
        heading?: string;
        "ignore-scripts"?: boolean;
        "init-module"?: string;
        "init.author.name"?: string;
        "init.author.email"?: string;
        "init.author.url"?: string;
        "init.version"?: string;
        "init.license"?: string;
        json?: boolean;
        key?: string;
        link?: boolean;
        "local-address"?: string;
        loglevel?: string;
        logstream?: NodeJS.ReadWriteStream;
        long?: boolean;
        message?: string;
        "node-version"?: string;
        npat?: boolean;
        "onload-script"?: boolean;
        optional?: boolean;
        parseable?: boolean;
        prefix?: string;
        production?: boolean;
        "proprietary-attribs"?: boolean;
        proxy?: any; // boolean | string
        "https-proxy"?: string;
        "user-agent"?: string;
        "rebuild-bundle"?: boolean;
        registry?: string;
        rollback?: boolean;
        save?: boolean;
        "save-bundle"?: boolean;
        "save-dev"?: boolean;
        "save-exact"?: boolean;
        "save-optional"?: boolean;
        "save-prefix"?: string;
        scope?: string;
        searchopts?: string;
        searchexclude?: string;
        searchsort?: string;
        shell?: string;
        shrinkwrap?: boolean;
        "sign-git-tag"?: boolean;
        spin?: any; // boolean | string ("always")
        "strict-ssl"?: boolean;
        tag?: string;
        tmp?: string;
        unicode?: boolean;
        "unsafe-perm"?: boolean;
        usage?: boolean;
        user?: any; // string | number
        userconfig?: string;
        umask?: number;
        version?: boolean;
        versions?: boolean;
        viewer?: string;

        _exit?: boolean;
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
        token?: string;
        password?: string;
        username?: string;
        email?: string;
        auth?: string;
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
