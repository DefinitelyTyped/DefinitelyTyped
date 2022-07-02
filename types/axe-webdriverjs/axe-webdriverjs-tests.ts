import { Result, RunOptions, Spec } from 'axe-core';
import { AxeAnalysis, AxeBuilder, BuilderOptions } from 'axe-webdriverjs';
import { Builder, WebDriver } from 'selenium-webdriver';

const inTest = async (webDriver: WebDriver, source?: string, builderOptions?: BuilderOptions) => {
    const [builderCalled, builderNewed, ...builders] = [
        AxeBuilder(webDriver),
        new AxeBuilder(webDriver),
        AxeBuilder(webDriver, source),
        new AxeBuilder(webDriver, source),
        AxeBuilder(webDriver, source, builderOptions),
        new AxeBuilder(webDriver, source, builderOptions),
    ];

    const runOptions: RunOptions = {};
    const spec: Spec = {};

    const analysis: AxeAnalysis = await AxeBuilder(webDriver)
        .include("include")
        .exclude("exclude")
        .options(runOptions)
        .withRules("rule")
        .withRules(["rule", "rule"])
        .withTags("tag")
        .withTags(["tag", "tag"])
        .disableRules("rule")
        .disableRules(["rule", "rule"])
        .configure(spec)
        .analyze((err: Error | null, internalResults: AxeAnalysis) => {});

    const deprecatedAnalysis: AxeAnalysis = await AxeBuilder(webDriver).analyze(
        (internalResults: AxeAnalysis) => {}
    );

    const inapplicable: Result[] = analysis.inapplicable;
    const incomplete: Result[] = analysis.incomplete;
    const passes: Result[] = analysis.passes;
    const timestamp: string = analysis.timestamp;
    const url: string = analysis.url;
    const violations: Result[] = analysis.violations;
};

const driver = new Builder().forBrowser('firefox').build();
const axeSource = 'some string literal';
const axeBuilderOptions: BuilderOptions = {
    logIframeErrors: false,
};
inTest(driver, axeSource, axeBuilderOptions);
