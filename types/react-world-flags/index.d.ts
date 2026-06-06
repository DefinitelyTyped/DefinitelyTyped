import * as React from "react";

declare namespace Flag {
    interface FlagProps extends Omit<React.HTMLProps<HTMLImageElement>, "src"> {
        /**
         * code is the two letter, three letter or three digit country code.
         */
        code?: string | undefined;

        /**
         * You can also pass an optional fallback which renders if the given code doesn't correspond to a flag
         */
        fallback?: React.ReactNode | null | undefined;
    }
}

/**
 * Easy to use SVG flags of the world for react
 */
declare const Flag: React.FC<Flag.FlagProps>;

export = Flag;
