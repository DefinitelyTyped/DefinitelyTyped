declare function _exports(
    val: number,
    format:
        | {
              DDD_DDDDD: number;
              DDD_MM_MMM_DIR: number;
              DDD_MM_SS_S_DIR: number;
          }
        | number
): string;
export = _exports;
