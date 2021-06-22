// Type definitions for @open-wc/testing-karma-bs 1.3
// Project: https://github.com/open-wc/open-wc/tree/master/packages/testing-karma-bs
// Definitions by: Peter Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2
/// <reference types="karma-browserstack-launcher" />

import karma = require('karma');

declare function testingKarma(): karma.ConfigOptions;

export = testingKarma;
