// Type definitions for sinon-test 1.0
// Project: https://github.com/sinonjs/sinon-test
// Definitions by: Francis Saul <https://github.com/mummybot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Sinon from 'sinon';

interface Configuration {
    injectIntoThis?: boolean;
    injectInto?: any;
    properties?: Array<"spy"| "stub"| "mock"| "clock"| "server"| "requests">;
    useFakeTimers?: boolean;
    useFakeServer?: boolean;
}

interface sinonTest {
    configureTest(sinon: Sinon.SinonStatic, config?: Configuration): any;
    configureTestCase(sinon: Sinon.SinonStatic, config?: Configuration): any;
}

declare var sinonTest: sinonTest;

export = sinonTest;
