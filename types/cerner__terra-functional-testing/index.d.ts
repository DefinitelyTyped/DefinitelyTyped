// Type definitions for @cerner/terra-functional-testing 2.5
// Project: https://github.com/cerner/terra-toolkit/tree/main/packages/terra-functional-testing
// Definitions by: Juzer Zarif <https://github.com/juzerzarif>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Suite } from 'mocha';
import { RunOptions } from 'axe-core';

export {};

type MochaTestFn = (this: Suite) => void;
type AxeOptions = RunOptions;

declare global {
    namespace Terra {
        type FormFactor = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'enormous';

        type Locale =
            | 'en'
            | 'en-AU'
            | 'en-CA'
            | 'en-US'
            | 'en-GB'
            | 'es'
            | 'es-US'
            | 'es-ES'
            | 'de'
            | 'fr'
            | 'fr-FR'
            | 'nl'
            | 'nl-BE'
            | 'pt'
            | 'pt-BR'
            | 'sv'
            | 'sv-SE';

        type Theme = 'terra-default-theme' | 'orion-fusion-theme' | 'clinical-lowlight-theme';

        interface FormFactorDimensions {
            height: number;
            width: number;
            name: FormFactor;
        }

        interface DescribeTestsOptions {
            /**
             * The form factors that the block of tests only execute in.
             */
            formFactors?: FormFactor[];
            /**
             * The language locales that the block of tests only execute in.
             */
            locales?: Locale[];
            /**
             * The themes that the block of tests only execute in.
             */
            themes?: Theme[];
        }

        interface ValidationOptions {
            /**
             * The axe rules to use to assert accessibility
             */
            rules?: AxeOptions['rules'];
            /**
             * The mismatch tolerance for the screenshot comparison
             */
            mismatchTolerance?: number;
            /**
             * The element selector to use for the screenshot comparison
             */
            selector?: string;
        }

        /**
         * Mocha `describe` block to run tests through a defined list of viewports.
         * This is intended to be used as an alias replacement for the root-level Mocha `describe`.
         * Note: If a FORM_FACTOR has been specified for the test run only that form factor will be run.
         *
         * @param title - The `describe` block title
         * @param formFactors - A list of form factors.
         * @param fn - The block of tests to execute against each viewport.
         */
        function describeViewports(title: string, formFactors: FormFactor[], fn: MochaTestFn): void;

        /**
         * Mocha describe block to filter tests based on form factors, locales, and themes.
         * The block of tests will only execute if the form factor, locale, and theme in the current configuration match what is defined in the options.
         * If any option is not defined, then the block of tests will not be filtered based on that particular option.
         *
         * @param title - The `describe` block title.
         * @param options - An object containing arrays of formFactors, locales, and themes that the block of tests will only qualify to execute in.
         * @param fn - The block of tests to execute based on the defined form factor, locale, and theme.
         */
        function describeTests(title: string, options: DescribeTestsOptions | undefined, fn: MochaTestFn): void;

        /**
         * Hides the blinking input caret that appears within editable text areas to prevent inconsistent test failures.
         *
         * @param selector - The target element selector.
         */
        function hideInputCaret(selector: string): void;

        /**
         * Updates terra-application's locale via custom event
         *
         * @param locale - name of locale to update to
         */
        function setApplicationLocale(locale: Locale): void;

        /**
         * Returns an array of viewport dimensions.
         *
         * @param sizes - A list of Terra viewport sizes.
         * @return An array of viewports. Returns all viewports if sizes are not provided.
         */
        function viewports(...sizes: FormFactor[]): FormFactorDimensions[];

        const serviceOptions: {
            selector: '[data-terra-test-content] *:first-child';
            theme: Theme;
            formFactor: FormFactor;
            locale: Locale;
            ignoreScreenshotMismatch?: boolean;
        };

        const axe: {
            rules: {
                /**
                 * This rule was introduced in axe-core v3.3 and causes failures in many Terra components.
                 * The solution to address this failure vary by component. It is being disabled until a solution is identified in the future.
                 *
                 * Reference: https://github.com/cerner/terra-framework/issues/991
                 */
                'scrollable-region-focusable': { enabled: false };
                /**
                 * True for all themes except clinical-lowlight-theme.
                 * The lowlight theme adheres to a non-default color contrast ratio and fails the default ratio check.
                 * The color-contrast ratio check is disabled for lowlight theme testing.
                 */
                'color-contrast': { enabled: boolean };
            };
        };

        const validates: {
            /**
             * Analyzes the current documentation for accessibility violations.
             *
             * @param options - Optional axe configuration overrides.
             */
            accessibility: (options?: AxeOptions) => void;

            /**
             * An assertion method to assert the page is accessible and the screenshot comparison result is within
             * the mismatch tolerance.
             *
             * This should be used within a Mocha `it` block.
             *
             * @param testName - The required test case name.
             * @param options - The test options
             */
            element: (testName: string, options?: ValidationOptions) => void;

            /**
             * The screenshot comparisons.  It will capture screenshots of a specified element
             * and assert the screenshot comparison results are within the mismatch tolerance or are an exact match
             *
             * This should be used within an `it` block.
             *
             * @param testName - The required test case name.
             * @param options - The visual regression test options. Options include mismatchTolerance and selector
             */
            screenshot: (testName: string, options?: Omit<ValidationOptions, 'rules'>) => void;
        };
    }
}
