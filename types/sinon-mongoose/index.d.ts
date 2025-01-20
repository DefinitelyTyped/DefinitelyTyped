import * as s from "sinon";

declare module "sinon" {
    export interface SinonStub {
        /**
         * When called, the stub will create a new stub to represent a mongoose chained function.
         */
        chain(name: string): SinonStub;
    }
}
