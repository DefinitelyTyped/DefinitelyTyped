// Type definitions for sinon-test 2.4
// Project: https://github.com/sinonjs/sinon-test
// Definitions by: Francis Saul <https://github.com/mummybot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Sinon from "sinon";

interface Configuration {
    injectIntoThis?: boolean | undefined;
    injectInto?: any;
    properties?: Array<"spy" | "stub" | "mock" | "clock" | "server" | "requests"> | undefined;
    useFakeTimers?: boolean | undefined;
    useFakeServer?: boolean | undefined;
}

declare function sinonTest(sinon: Sinon.SinonStatic, config?: Configuration): any;
declare namespace sinonTest {
    function configureTest(sinon: Sinon.SinonStatic, config?: Configuration): any;
}

export = sinonTest;
