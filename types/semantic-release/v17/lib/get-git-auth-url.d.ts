import { Context } from "../index";

declare function getGitAuthUrl(
    context: Context,
): Promise<string>;

export = getGitAuthUrl;
