declare namespace ErrorUtils {
    function guard(callback: any, name?: string): any;
    function applyWithGuard(callback: any, context?: any, args?: any, onError?: any, name?: string): any;
}
// eslint-disable-next-line export-just-namespace
export = ErrorUtils;
