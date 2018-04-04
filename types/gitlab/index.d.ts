// Type definitions for gitlab 1.8
// Project: https://github.com/node-gitlab/node-gitlab#readme
// Definitions by: sam <https://github.com/yanqing6628780>
//                 AryloYeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ApiV3 } from "./ApiV3";

declare class GitlabApi extends ApiV3 {

    public static readonly ApiV3: ApiV3;
}

export = GitlabApi;
