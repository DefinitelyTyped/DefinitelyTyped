// Type definitions for sinon-mongoose v1.3.0
// Project: https://github.com/underscopeio/sinon-mongoose
// Definitions by: stevehipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as s from "sinon";

declare module "sinon" {
  export interface SinonStub {
    /**
     * When called, the stub will create a new stub to represent a mongoose chained function.
     */
    chain(name: string): SinonStub
  }
}
