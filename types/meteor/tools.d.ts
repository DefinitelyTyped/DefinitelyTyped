import { EJSON } from 'meteor/ejson';
declare module 'meteor/tools' {
    namespace App {
        function accessRule(
            pattern: string,
            options?: {
                type?: string | undefined;
                launchExternal?: boolean | undefined;
            },
        ): void;

        function configurePlugin(id: string, config: Object): void;

        function icons(icons: Object): void;

        function info(options: {
            id?: string | undefined;
            version?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            email?: string | undefined;
            website?: string | undefined;
        }): void;

        function launchScreens(launchScreens: Object): void;

        function setPreference(name: string, value: string, platform?: string): void;
    }

    function execFileAsync(
        command: string,
        args?: any[],
        options?: {
            cwd?: Object | undefined;
            env?: Object | undefined;
            stdio?: any[] | string | undefined;
            destination?: any;
            waitForClose?: string | undefined;
        },
    ): any;
    function execFileSync(
        command: string,
        args?: any[],
        options?: {
            cwd?: Object | undefined;
            env?: Object | undefined;
            stdio?: any[] | string | undefined;
            destination?: any;
            waitForClose?: string | undefined;
        },
    ): String;

    namespace Assets {
        function getBinary(assetPath: string, asyncCallback?: Function): EJSON | undefined;

        function getText(assetPath: string, asyncCallback?: Function): string | undefined;

        function absoluteFilePath(assetPath: string): string;
    }

    namespace Cordova {
        function depends(dependencies: { [id: string]: string }): void;
    }

    namespace Npm {
        function depends(dependencies: { [id: string]: string }): void;

        function require(name: string): any;
    }

    namespace Package {
        function describe(options: {
            summary?: string | undefined;
            version?: string | undefined;
            name?: string | undefined;
            git?: string | undefined;
            documentation?: string | undefined;
            debugOnly?: boolean | undefined;
            prodOnly?: boolean | undefined;
            testOnly?: boolean | undefined;
        }): void;

        function onTest(func: (api: PackageAPI) => void): void;

        function onUse(func: (api: PackageAPI) => void): void;

        function registerBuildPlugin(options?: {
            name?: string | undefined;
            use?: string | string[] | undefined;
            sources?: string[] | undefined;
            npmDependencies?: Object | undefined;
        }): void;
    }

    interface PackageAPI {
        new (): PackageAPI;
        addAssets(filenames: string | string[], architecture: string | string[]): void;
        addFiles(
            filenames: string | string[],
            architecture?: string | string[],
            options?: { bare?: boolean | undefined },
        ): void;
        export(
            exportedObjects: string | string[],
            architecture?: string | string[],
            exportOptions?: Object,
            testOnly?: boolean,
        ): void;
        imply(packageNames: string | string[], architecture?: string | string[]): void;
        use(
            packageNames: string | string[],
            architecture?: string | string[],
            options?: {
                weak?: boolean | undefined;
                unordered?: boolean | undefined;
            },
        ): void;
        versionsFrom(meteorRelease: string | string[]): void;
    }

    var console: Console;
}
