// Type definitions for rollup-plugin-peer-deps-external 2.2
// Project: https://github.com/Updater/rollup-plugin-peer-deps-external
// Definitions by: Nick <https://github.com/fobdy>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { Plugin } from 'rollup';

declare namespace PeerDepsExternalPlugin {
    interface PluginPeerDepsExternalOptions {
        packageJsonPath?: string;
        includeDependencies?: boolean;
    }
}

declare function PeerDepsExternalPlugin(
    options?: PeerDepsExternalPlugin.PluginPeerDepsExternalOptions
): Plugin;

export = PeerDepsExternalPlugin;
