declare function _exports(
    date: Date,
    opt_options?: {
        format?: {
            DDMMYYYY: number;
            DDMM: number;
            MMYYYY: number;
            WWYYYY: number;
            YYYYWW: number;
            MMMYYYY: number;
        };
    }
): string;
export = _exports;
