export interface Options {
    /** Separator to replace `.` */
    separator?: string | undefined;
    /** Amount of decimals to keep */
    decimals?: number | undefined;
}

export default function numberFormatter(opts?: Options): (value: number) => string;
