/// <reference types="flowjs" />

import angular = require("angular");

declare module "angular" {
    namespace flow {
        interface FlowFactory {
            create(options?: flowjs.FlowOptions): flowjs.Flow;
        }
    }
}
