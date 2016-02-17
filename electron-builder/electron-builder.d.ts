// Type definitions for electron-builder v2.0.2
// Project: https://github.com/loopline-systems/electron-builder
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace ElectronBuilder {

    /** Electron-builder Options. */
    export interface Options {
        /** Source application path. */
        appPath: string;

        /** Platforms to build. Allowed values: win, osx, all. */
        platform: string;

        /** Path or Object. Configuration for build. */
        config: string | Config;

        /** The output directory. */
        out?: string;

    }

    /** Build configuration by platforms. */
    export interface Config {
        /** Configurations for Mac OS X. */
        osx: {
            /** Installer title. */
            title: string;
            /** Installer background. */
            background: string;
            /** Installer icon. */
            icon: string;
            /** Installer icon size. */
            "icon-size": number;
            /** Installer custom contents. */
            contents: [OsxContents, OsxContents]
        };

        /** Configurations for Windows. */
        win: {
            /** Installer title. */
            title: string;
            /** Installer icon. */
            icon: string;
        };
    }

    /** OSX Installer custom contents. */
    export interface OsxContents {
        /** Horizontal position on installer screen (in pixels). */
        x: number;
        /** Vertical position on installer screen (in pixels). */
        y: number;
        /** Content type. Allowed values are "file", "link". */
        type: string;
        /** Link only. Customize link destination path. */
        path?: string;
    }

    /** Electron-builder done callback. */
    export interface Callback {
        /**
         * Callback wich is called when electron-builder is done.
         * @param err - Contains errors if any.
         */
        (err: Error): void
    }

    /** Prototype for electron-builder. */
    export interface Builder {
        /**
         * Build the installer for given platform.
         *
         * @param opts - Options to configure installer.
         * @param callback - Callback which is called when building is done or an error occured.
         */
        build(opts: Options, callback: Callback): void;
    }
}

declare module "electron-builder" {
    export function init(): ElectronBuilder.Builder;
}

interface NodeRequireFunction {
    (id: "electron-builder"): { init(): ElectronBuilder.Builder };
}
