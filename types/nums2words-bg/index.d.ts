declare function nums2wordsBG(number: string, options?: { gender: "" | string }): string;

declare namespace nums2wordsBG {
    function currency(
        amount: string,
        options?: {
            separator?: string;
            /**
             * Label for the whole currency unit (before the decimal)
             */
            labelBig?: string;
            /**
             * Label for the currency decimal unit
             */
            labelSmall?: string;
            /**
             * Should the whole currency unit (before the decimal) be displayed?
             */
            displayBig?: boolean;
            /**
             * Should the decimal currency unit be displayed?
             */
            displaySmall?: boolean;
            /**
             * Supported currencies by default are "btc", "cny", "rub", "usd".
             */
            currency?: "btc" | "cny" | "rub" | "usd" | string;
        },
        customCurrencyFunction?: () => {
            [key: string]: {
                /**
                 * Label for the whole currency unit (before the decimal)
                 */
                labelBig: string;
                /**
                 * Label for the currency decimal unit
                 */
                labelSmall: string;
                /**
                 * ```
                 * lv: Singular version of whole currency unit (before the decimal)
                 * st: Singular version of currency decimal unit
                 * ```
                 */
                singular: { lv: string; st: string };
                /**
                 * Number of units currency is subdivided into (example: 100)
                 */
                decimals: number;
                /**
                 * ```
                 * lv: Gender of whole currency unit (before the decimal)
                 * st: Gender of currency decimal unit
                 * ```
                 */
                def: { lv: "m" | "f" | string; st: "m" | "f" | string };
                /**
                 * ```
                 * 1: Male and female gender versions of the singular of the currency unit (example: { m: "един", f: "една" })
                 * 2: Male and female gender versions of the double of the currency unit (example: { m: "два", f: "две" },)
                 * ```
                 */
                gender: {
                    1: { m: string; f: string };
                    2: { m: string; f: string };
                };
            };
        },
    ): string;

    function time(
        time: string,
        options?: {
            labelHour?: string;
            labelMinute?: string;
            labelSecond?: string;
            separator?: string;
            displayHour?: boolean;
            displayMinute?: boolean;
            displaySecond?: boolean;
        },
    ): string;

    function date(
        date: string,
        options?: {
            /**
             * The following characters will be replaced with the respective parts of the date:
             * ```
             * d: day
             * w: week
             * m: month
             * y: year
             * a: age
             * ```
             */
            format?: string;
            separator?: string;
            /**
             * Replaces the labels used by format, as follows:
             * ```
             * d: day
             * w: week
             * m: month
             * y: year
             * a: age
             * ```
             */
            labels?: {
                d: string;
                w: string;
                m: string;
                y: string;
                a: string;
            };
        },
    ): string;

    export { nums2wordsBG as translate };
    export { currency };
    export { time };
    export { date };
}

export default nums2wordsBG;
