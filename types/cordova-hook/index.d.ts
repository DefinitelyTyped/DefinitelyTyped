// Type definitions for cordova hooks
// Project: https://cordova.apache.org/docs/en/latest/guide/appdev/hooks/
// Definitions by: kkordinia <https://github.com/kkordinia>
// TypeScript Version: 4.0

/// <reference types="cordova" />

type HookType = "before_platform_add"
    | "after_platform_add"
    | "before_platform_rm"
    | "after_platform_rm"
    | "before_platform_ls"
    | "after_platform_ls"
    | "before_prepare"
    | "after_prepare"
    | "before_compile"
    | "after_compile"
    | "before_deploy"
    | "before_build"
    | "after_build"
    | "before_emulate"
    | "after_emulate"
    | "before_run"
    | "after_run"
    | "before_serve"
    | "after_serve"
    | "before_clean"
    | "after_clean"
    | "before_plugin_add"
    | "after_plugin_add"
    | "before_plugin_rm"
    | "after_plugin_rm"
    | "before_plugin_ls"
    | "after_plugin_ls"
    | "before_plugin_install"
    | "after_plugin_install"
    | "before_plugin_uninstall";

interface HookOptions {
    projectRoot: string;
    cordova: {
        platforms: string[];
        plugins: string[];
        version: string;
    };
    options: {
        [key: string]: string | string[] | boolean;
        argv: string[];
        buildConfig: string;
    };
    verbose: boolean;
    silent: boolean;
    browserify: boolean;
    fetch: boolean;
    nohooks: any[];
    searchpath: string | undefined;
    save: boolean;
    paths: string[];
}

interface PluginOptions {
    id: string;
    pluginInfo: any;
    platform: string;
    dir: string;
}

export default interface Context {
    hook: HookType;
    scriptLocation: string;
    cmdLine: string;
    opts: HookOptions;
    plugin: PluginOptions;
    cordova: Cordova;
    requireCordovaModule<T = any>(name: string): T;
}
