// Type definitions for rollup-plugin-add-git-msg 1.1
// Project: https://github.com/oplinjie/rollup-plugin-add-git-msg
// Definitions by: Jakub Jirutka <https://github.com/jirutka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />
import { Plugin } from 'rollup';

declare namespace addGitMsg {
    interface AddGitMsgPluginOptions {
        showDate?: boolean;
        showTag?: boolean;
        showCommitID?: boolean;
        copyright?: string | null;
    }
}

declare function addGitMsg(options?: addGitMsg.AddGitMsgPluginOptions): Plugin;

export = addGitMsg;
