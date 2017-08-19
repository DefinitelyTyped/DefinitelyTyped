// Type definitions for Proxyquire 1.3.0
// Project: https://github.com/thlorenz/proxyquire
// Definitions by: jt000 <https://github.com/jt000/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var p: Proxyquire;
export = p;

interface Proxyquire {

    (request: string, stubs: any): any;
    <T>(request: string, stubs: any): T;

    load(request: string, stubs: any): any;
    load<T>(request: string, stubs: any): T;

    noCallThru(): Proxyquire;
    callThru(): Proxyquire;

    noPreserveCache(): Proxyquire;
    preserveCache(): Proxyquire;
}
