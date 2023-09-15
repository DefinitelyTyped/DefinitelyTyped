// Type definitions for karma-sinon-chai 2.0
// Project: https://github.com/kmees/karma-sinon-chai
// Definitions by: Shenghao Lei <https://github.com/SevenOutman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />
/// <reference types="sinon" />
/// <reference types="sinon-chai" />

import "karma";

declare module "karma" {
    interface ClientOptions {
        /**
         * chai config
         */
        chai?: Partial<Chai.Config> | undefined;
    }
}

declare global {
    const should: Chai.Should;
    const expect: Chai.ExpectStatic;
    const assert: Chai.Assert;
}
