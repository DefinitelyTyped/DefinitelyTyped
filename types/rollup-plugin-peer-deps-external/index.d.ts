/// <reference types="node" />

import { Plugin } from "rollup";

declare namespace PeerDepsExternalPlugin {
    interface PluginPeerDepsExternalOptions {
        packageJsonPath?: string | undefined;
        includeDependencies?: boolean | undefined;
    }
}

declare function PeerDepsExternalPlugin(
    options?: PeerDepsExternalPlugin.PluginPeerDepsExternalOptions,
): Plugin;

export = PeerDepsExternalPlugin;
