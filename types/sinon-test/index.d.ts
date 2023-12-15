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
