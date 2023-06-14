export interface Options {
    /**
     * The string formatter to use.
     * Defaults to the builtin string formatter
     */
    stringFormatter?: ((value: any) => string) | undefined;
}

export default function objectFormatter(opts?: Options): (value: any) => string;
