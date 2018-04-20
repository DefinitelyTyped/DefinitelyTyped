// Type definitions for gulp-change 1.0
// Project: https://github.com/PoliteJS/gulp-change
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as eventStream from "event-stream";

export = GulpChange;

declare function GulpChange(transformer: GulpChange.ChangeFunction): eventStream.MapStream;

declare namespace GulpChange {
    type Callback = (err: any, content: string) => any;

    type ChangeFunction = (content: string, callback: Callback) => string | void;
}
