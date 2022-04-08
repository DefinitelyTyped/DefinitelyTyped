import { EJSON } from 'meteor/ejson';
declare module "meteor/tools" {
    module App {
        function accessRule(pattern: string, options?: {
            type?: string;
            launchExternal?: boolean;
        }): void;

        function configurePlugin(id: string, config: Object): void;

        function icons(icons: Object): void;

        function info(options: {
            id?: string;
            version?: string;
            name?: string;
            description?: string;
            author?: string;
            email?: string;
            website?: string;
        }): void;

        function launchScreens(launchScreens: Object): void;

        function setPreference(name: string, value: string, platform?: string): void;
    }

    function execFileAsync(command: string, args?: any[], options?: {
        cwd?: Object;
        env?: Object;
        stdio?: any[] | string;
        destination?: any;
        waitForClose?: string;
    }): any;
    function execFileSync(command: string, args?: any[], options?: {
        cwd?: Object;
        env?: Object;
        stdio?: any[] | string;
        destination?: any;
        waitForClose?: string;
    }): String;

    module Assets {
        function getBinary(assetPath: string, asyncCallback?: Function): EJSON | undefined;

        function getText(assetPath: string, asyncCallback?: Function): string | undefined;

        function absoluteFilePath(assetPath: string): string;
    }

    module Cordova {
        function depends(dependencies: {
            [id: string]: string
        }): void;
    }

    module Npm {
        function depends(dependencies: {
            [id: string]: string
        }): void;

        function require(name: string): any;
    }

    namespace Package {
        function describe(options: {
            summary?: string;
            version?: string;
            name?: string;
            git?: string;
            documentation?: string;
            debugOnly?: boolean;
            prodOnly?: boolean;
            testOnly?: boolean;
        }): void;

        function onTest(func: (api: PackageAPI) => void): void;

        function onUse(func: (api: PackageAPI) => void): void;

        function registerBuildPlugin(options?: {
            name?: string;
            use?: string | string[];
            sources?: string[];
            npmDependencies?: Object;
        }): void;
    }

    interface PackageAPI {
        new (): PackageAPI;
        addAssets(filenames: string | string[], architecture: string | string[]): void;
        addFiles(filenames: string | string[], architecture?: string | string[], options?: {
            bare?: boolean;
        }): void;
        export(exportedObjects: string | string[], architecture?: string | string[], exportOptions?: Object, testOnly?: boolean): void;
        imply(packageNames: string | string[], architecture?: string | string[]): void;
        use(packageNames: string | string[], architecture?: string | string[], options?: {
            weak?: boolean;
            unordered?: boolean;
        }): void;
        versionsFrom(meteorRelease: string | string[]): void;
    }

    var console: Console;
}
