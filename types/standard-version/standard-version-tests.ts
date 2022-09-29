/* tslint:disable:no-namespace */
"use strict";

import standardVersion from "standard-version";

namespace Module {
    declare const options: standardVersion.Options;

    // $ExpectType Promise<void>
    standardVersion(options);

    // @ts-expect-error
    standardVersion();
}
