// Type definitions for karma-junit-reporter 2.0
// Project: https://github.com/karma-runner/karma-junit-reporter#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import "karma";

declare module "karma" {
    interface ConfigOptions {
        junitReporter?: JUnitReporterConfiguration | undefined;
    }

    interface JUnitReporterConfiguration {
        /** results will be saved as $outputDir/$browserName.xml */
        outputDir?: string | undefined;
        /** if included, results will be saved as $outputDir/$browserName/$outputFile */
        outputFile?: string | undefined;
        /** suite will become the package name attribute in xml testsuite element */
        suite?: string | undefined;
        /** add browser name to report and classes names */
        useBrowserName?: boolean | undefined;
        /** function (browser, result) to customize the name attribute in xml testcase element */
        nameFormatter?: ((browser: any, result: any) => string) | undefined;
        /** function (browser, result) to customize the classname attribute in xml testcase element */
        classNameFormatter?: ((browser: any, result: any) => string) | undefined;
        /** key value pair of properties to add to the <properties> section of the report */
        properties?: {
            [key: string]: any;
        } | undefined;
        /** use '1' if reporting to be per SonarQube 6.2 XML format */
        xmlVersion?: number | null | undefined;
    }
}
