// Type definitions for karma-ie-launcher 1.0
// Project: https://github.com/karma-runner/karma-ie-launcher#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2
import 'karma';

declare module 'karma' {
    interface CustomLauncher {
        /** run IE in emulation mode */
        'x-ua-compatible'?: string;
    }
}
