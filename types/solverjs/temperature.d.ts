/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/units/temperature/temperature.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * the celToFah function are convert the celsius value to fahrenheit.
         */
        celToFah(c: number): number;

        /**
         * the celToKel function are convert the calsius value to kelvin value.
         */
        celToKel(c: number): number;

        /**
         * the fahToCel function are convert the fahrenheit value to celsius.
         */
        fahToCel(f: number): number;

        /**
         * the fahToKel function are convert the fahrenheit value to kelvin.
         */
        fahToKel(f: number): number;

        /**
         * the kelToCel function are convert the kelvin vlaue to celsius.
         */
        kelToCel(k: number): number;

        /**
         * the kelToFah function are convert the kelvin value to fahrenheit.
         */
        kelToFah(k: number): number;
    }
}
