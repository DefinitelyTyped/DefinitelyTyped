export = Accepts;
declare function Accepts(request: Request): void;
declare class Accepts {
    constructor(request: Request);
    private acceptHeader_;
    private mediaTypeMap_;
    private extToMime_;
    private removeSuffix_;
    private mediaTypeEquals_;
    type(extensions: any[] | string): string | undefined;
}
declare namespace Accepts {
    export { Request };
}
type Request = import('./Request');
