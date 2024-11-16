declare function nums2wordsBG(number: string, options?: { gender: "" | string | undefined }): string;

declare namespace nums2wordsBG {
    function currency(
        amount: string,
        options?: {
            separator?: string | undefined;
            /**
             * Label for the whole currency unit (before the decimal)
             */
            labelBig?: string | undefined;
            /**
             * Label for the currency decimal unit
             */
            labelSmall?: string | undefined;
            /**
             * Should the whole currency unit (before the decimal) be displayed?
             */
            displayBig?: boolean | undefined;
            /**
             * Should the decimal currency unit be displayed?
             */
            displaySmall?: boolean | undefined;
            /**
             * Supported currencies by default are "btc", "cny", "rub", "usd".
             */
            currency?: "btc" | "cny" | "rub" | "usd" | string | undefined;
        },
        customCurrencyFunction?: () => {
            [key: string]: {
                /**
                 * Label for the whole currency unit (before the decimal)
                 */
                labelBig: string | undefined;
                /**
                 * Label for the currency decimal unit
                 */
                labelSmall: string | undefined;
                /**
                 * ```
                 * lv: Singular version of whole currency unit (before the decimal)
                 * st: Singular version of currency decimal unit
                 * ```
                 */
                singular: { lv: string; st: string } | undefined;
                /**
                 * Number of units currency is subdivided into (example: 100)
                 */
                decimals: number | undefined;
                /**
                 * ```
                 * lv: Gender of whole currency unit (before the decimal)
                 * st: Gender of currency decimal unit
                 * ```
                 */
                def: { lv: "m" | "f" | string; st: "m" | "f" | string } | undefined;
                /**
                 * ```
                 * 1: Male and female gender versions of the singular of the currency unit (example: { m: "един", f: "една" })
                 * 2: Male and female gender versions of the double of the currency unit (example: { m: "два", f: "две" },)
                 * ```
                 */
                gender: {
                    1: { m: string; f: string };
                    2: { m: string; f: string };
                } | undefined;
            };
        } | undefined,
    ): string;

    function time(
        time: string,
        options?: {
            labelHour?: string | undefined;
            labelMinute?: string | undefined;
            labelSecond?: string | undefined;
            separator?: string | undefined;
            displayHour?: boolean | undefined;
            displayMinute?: boolean | undefined;
            displaySecond?: boolean | undefined;
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
            format?: string | undefined;
            separator?: string | undefined;
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
            } | undefined;
        },
    ): string;

    export { nums2wordsBG as translate };
    export { currency };
    export { time };
    export { date };
}

export default nums2wordsBG;
