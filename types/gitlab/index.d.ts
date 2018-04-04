// Type definitions for gitlab 1.8
// Project: https://github.com/node-gitlab/node-gitlab#readme
// Definitions by: sam <https://github.com/yanqing6628780>
//                 AryloYeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ApiV3 } from "./ApiV3";
import { IApiBase } from "./ApiBase";

declare namespace Gitlib {
    const ApiV3: new(options: IApiBase) => ApiV3;
}

declare function Gitlib(options: IApiBase): ApiV3;

export = Gitlib;
