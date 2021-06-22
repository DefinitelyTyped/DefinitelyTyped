import { FeatureFlagScope, add, createScope, enable, disable, merge, enabled } from "@carbon/feature-flags";

add("feature-flag-a", false);

enable("feature-flag-a");

disable("feature-flag-a");

merge({
    "feature-flag-a": true,
    "feature-flag-b": false,
    "feature-flag-c": true,
});

enabled("feature-flag-a");

const scope = new FeatureFlagScope({
    "enable-2021-release": true,
});

const scopeWithoutFlags = createScope();
const scopeWithFlags = createScope({
    "custom-flag": true,
    "enable-css-custom-properties": true,
    "enable-use-controlled-state-with-value": true,
});

scopeWithFlags.add("custom", true);
scopeWithFlags.disable("custom");
scopeWithFlags.mergeWithScope(scope);
