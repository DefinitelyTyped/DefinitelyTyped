export = RequestBody;
declare function RequestBody(request: Request): void;
declare class RequestBody {
    constructor(request: Request);
    private request_;
    asJson(): any;
    asText(): string;
    asFile(): File;
}
declare namespace RequestBody {
    export { Request };
}
import File = require('../io/File.js');
type Request = import('./Request');
