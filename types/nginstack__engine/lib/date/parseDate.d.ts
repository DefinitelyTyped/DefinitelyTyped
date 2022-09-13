declare function _exports(
    dateStr: string,
    opt_options?: {
        format?: {
            DDMMYYYY: number;
            DDMM: number;
            MMYYYY: number;
            WWYYYY: number;
            YYYYWW: number;
            MMMYYYY: number;
        };
        rangeLimit?: {
            START: number;
            END: number;
        };
        baseDate?: Date;
    }
): Date;
export = _exports;
