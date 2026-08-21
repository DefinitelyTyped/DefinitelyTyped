declare function depthLimit(depthLimit: number, options?: depthLimit.Options, callback?: (obj: any) => void): any;
export = depthLimit;

declare namespace depthLimit {
    interface Options {
        ignore?: Array<string | RegExp | ((queryDepths: any[]) => boolean)>;
    }
}
