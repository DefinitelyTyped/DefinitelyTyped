declare function _exports(
    func: () => boolean,
    timeout: number,
    opt_options?: {
        interval?: number;
        thisArg?: any;
    }
): boolean;
export = _exports;
