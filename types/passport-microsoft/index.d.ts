// Type definitions for passport-microsoft 0.0
// Project: https://github.com/seanfisher/passport-microsoft#readme
// Definitions by: Eitan Levi <https://github.com/skrud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as oauth2 from 'passport-oauth2';

// Disable automatic exporting
export {};

// The passport-microsoft library provides defaults for these fields, so they become optional
// when calling the constructor. (No need to export this).
type OptionalOptionParameters = 'authorizationURL' | 'tokenURL' | 'scopeSeparator' | 'customHeaders';

export type MicrosoftStrategyOptions = Omit<oauth2.StrategyOptions, OptionalOptionParameters> & Partial<oauth2.StrategyOptions>;
export type MicrosoftStrategyOptionsWithRequest = Omit<oauth2.StrategyOptionsWithRequest, OptionalOptionParameters> & Partial<oauth2.StrategyOptionsWithRequest>;

export class Strategy extends oauth2.Strategy {
    constructor(options: MicrosoftStrategyOptions, verify: oauth2.VerifyFunction);
    constructor(options: MicrosoftStrategyOptionsWithRequest, verify: oauth2.VerifyFunctionWithRequest);
}
