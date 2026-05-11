import * as React from "react";

declare namespace Icofont {
    interface IcofontProps extends Partial<React.JSX.IntrinsicElements["i"]> {
        /**
         * Any valid icon name from the icofont website (https://icofont.com/icons).
         * Guess what, if you copy the class name that includes the prefix (icofont-), it will also work fine.
         */
        icon: string;

        /**
         * Currently rotate angles `90`, `180`, `270` values are supported.
         * The rotate angle values are in degree.
         */
        rotate?: "90" | "180" | "270" | undefined;

        /**
         * `horizontal` or `h` and `vertical` or `v`.
         * You can also do, flip="h v" or flip="horizontal vertical" for flipping both horizontally and vertically.
         */
        flip?: "h" | "horizontal" | "v" | "vertical" | "h v" | "horizontal vertical" | undefined;

        /**
         * Size can have value from 1 to 10.
         * For example, setting size="2" will make the icon twice as big.
         */
        size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | undefined;

        /**
         * In the case of true value, the icon will spin endlessly. You can spin any icon.
         */
        spin?: boolean | undefined;
    }
}

declare class Icofont extends React.Component<Icofont.IcofontProps> {}

export = Icofont;
