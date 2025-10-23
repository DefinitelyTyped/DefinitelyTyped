/// <reference types="angular" />

import angular = require("angular");

declare module "angular" {
    interface IAngularStatic {
        throttle: (
            fn: Function,
            throttle: number,
            options?: { leading?: boolean | undefined; trailing?: boolean | undefined },
        ) => Function;
    }
}
