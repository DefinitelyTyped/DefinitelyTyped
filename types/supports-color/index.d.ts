export namespace supportsColor {
    interface Level {
        level: number;
        hasBasic: boolean;
        has256: boolean;
        has16m: boolean;
    }

    interface Options {
        /**
         * By default it is `true`, which instructs `supportsColor()` to sniff `process.argv`
         * for the multitude of `--color` flags (see _Info_ below).
         * If `false`, then `process.argv` is not considered when determining color support.
         * @default true
         */
        sniffFlags?: boolean | undefined;
        isTTY?: boolean | undefined;
    }

    type SupportsColor = false | Level;
}

export function supportsColor(
    stream: {
        isTTY?: boolean | undefined;
    },
    options?: supportsColor.Options,
): supportsColor.SupportsColor;

export const stdout: supportsColor.SupportsColor;
export const stderr: supportsColor.SupportsColor;
