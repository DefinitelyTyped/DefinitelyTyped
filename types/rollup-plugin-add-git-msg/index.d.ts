import { Plugin } from "rollup";

declare namespace addGitMsg {
    interface AddGitMsgPluginOptions {
        showDate?: boolean | undefined;
        showTag?: boolean | undefined;
        showCommitID?: boolean | undefined;
        copyright?: string | null | undefined;
    }
}

declare function addGitMsg(options?: addGitMsg.AddGitMsgPluginOptions): Plugin;

export = addGitMsg;
