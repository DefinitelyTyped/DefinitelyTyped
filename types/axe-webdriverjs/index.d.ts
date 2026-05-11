import { Result, RunOptions, Spec } from "axe-core";
import { WebDriver } from "selenium-webdriver";

export interface AxeAnalysis {
    inapplicable: Result[];
    incomplete: Result[];
    passes: Result[];
    timestamp: string;
    url: string;
    violations: Result[];
}

export type DeprecatedAnalyzeCallback = (results: AxeAnalysis) => void;
export type AnalyzeCallback = (err: Error | null, results: AxeAnalysis) => void;

export interface AxeBuilder {
    /**
     * Includes a selector in analysis.
     *
     * @param selector   CSS selector of the element to include.
     */
    include(selector: string): this;

    /**
     * Excludes a selector from analysis.
     *
     * @param selector   CSS selector of the element to exclude.
     */
    exclude(selector: string): this;

    /**
     * Options to directly pass to `axe.run`.
     *
     * @param options   aXe options object.
     * @remarks Will override any other configured options, including calls to `withRules` and `withTags`.
     * @see https://github.com/dequelabs/axe-core/issues/937
     */
    options(options: RunOptions): this;

    /**
     * Limits analysis to only the specified rules.
     *
     * @param rules   Array of rule IDs, or a single rule ID as a string.
     * @remarks Cannot be used with `withTags`.
     */
    withRules(rules: string | string[]): this;

    /**
     * Limist analysis to only the specified tags.
     *
     * @param rules   Array of tags, or a single tag as a string.
     * @remarks Cannot be used with `withRules`.
     */
    withTags(tags: string | string[]): this;

    /**
     * Set the list of rules to skip when running an analysis
     *
     * @param rules   Array of rule IDs, or a single rule ID as a string.
     */
    disableRules(rules: string | string[]): this;

    /**
     * Configures aXe before running analyze.
     *
     * @param config   aXe Configuration spec to use in analysis.
     */
    configure(config: Spec): this;

    /**
     * Perform analysis and retrieve results.
     * @param callback   Function to execute when analysis completes.
     */
    analyze(
        callback?: AnalyzeCallback | DeprecatedAnalyzeCallback,
    ): Promise<AxeAnalysis>;
}

export interface BuilderOptions {
    /**
     * Should errors be printed into console
     * @default true
     */
    logIframeErrors?: boolean | undefined;
}

export const AxeBuilder: {
    (driver: WebDriver, source?: string, builderOptions?: BuilderOptions): AxeBuilder;
    new(driver: WebDriver, source?: string, builderOptions?: BuilderOptions): AxeBuilder;
};
