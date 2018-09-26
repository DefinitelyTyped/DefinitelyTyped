// Type definitions for jsftp-lsr 1.0
// Project: https://github.com/firerap/jsftp-lsr#readme
// Definitions by: Konrad Księski <https://github.com/xyleen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Jsftp = require('jsftp');

export = JsftpLsr;

declare function JsftpLsr(jsftp: typeof Jsftp): typeof JsftpLsr.JsftpLsr;

declare namespace JsftpLsr {
    type LsrCallback = (err: Error, data: [any]) => void;

    class JsftpLsr extends Jsftp {
        lsr(root: string, callback: LsrCallback): void;
    }
}
