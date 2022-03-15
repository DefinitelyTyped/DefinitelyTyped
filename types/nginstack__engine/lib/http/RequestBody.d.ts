export = RequestBody;
declare function RequestBody(request: Request): void;
declare class RequestBody {
    constructor(request: Request);
    private request_;
    asJson(): any;
    asText(): string;
}
declare namespace RequestBody {
    export { Request };
}
type Request = import('./Request');
