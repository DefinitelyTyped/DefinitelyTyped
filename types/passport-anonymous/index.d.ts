// Type definitions for passport-anonymous 1.0
// Project: https://github.com/jaredhanson/passport-anonymous
// Definitions by: Pavel Puchkov <https://github.com/0x6368656174>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as passport from "passport";

export class Strategy implements passport.Strategy {
    authenticate: () => void;
}
