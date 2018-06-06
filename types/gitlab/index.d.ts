// Type definitions for gitlab 1.8
// Project: https://github.com/node-gitlab/node-gitlab#readme
// Definitions by: sam <https://github.com/yanqing6628780>
//                 AryloYeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { ApiV3 } from "./ApiV3";
import { ApiBaseOptions } from "./ApiBase";

declare namespace Gitlib {
    const ApiV3: new(options: ApiBaseOptions) => ApiV3;
}

declare function Gitlib(options: ApiBaseOptions): ApiV3;

export = Gitlib;
