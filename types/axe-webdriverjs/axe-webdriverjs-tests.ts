import { Result, RunOptions, Spec } from "axe-core";
import { AxeBuilder, AxeAnalysis } from "axe-webdriverjs";
import { WebDriver } from "selenium-webdriver";

const inTest = async (webDriver: WebDriver) => {
    const builderCalled: AxeBuilder = AxeBuilder(webDriver);
    const builderNewed: AxeBuilder = new AxeBuilder(webDriver);

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
