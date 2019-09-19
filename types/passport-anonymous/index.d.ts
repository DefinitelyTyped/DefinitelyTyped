// Type definitions for passport-anonymous 1.0
// Project: https://github.com/jaredhanson/passport-anonymous
// Definitions by: Pavel Puchkov <https://github.com/0x6368656174>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as passport from "passport";

export class Strategy extends passport.Strategy {
    authenticate(): void;
}
