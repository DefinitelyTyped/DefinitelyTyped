import * as Rox from "rox-react-native";

const flags = {
    superFlag: new Rox.Flag(false, { freeze: Rox.FreezeOptions.freezeOptionNone }),
    superFlag2: new Rox.Flag(),
};

const stringFlags = {
    strFlag: new Rox.RoxString("value1", ["value1", "value2"]),
};

const numberFlags = {
    numFlag: new Rox.RoxNumber(12, [18, 24]),
};

// The register function should be called before the call to Rox.setup()
Rox.register("default", { ...stringFlags, ...numberFlags, ...flags });
Rox.setup("ROLLOUT_IO_KEY", {
    impressionHandler,
    configurationFetchedHandler,
    dynamicPropertyRuleHandler,
}).then(linkTargetGroupAttributes);

Rox.dynamicApi.isEnabled("system.repotAnalytics", false);
Rox.dynamicApi.value("ui.textColor", "red");

Rox.flags[0].defaultValue;
Rox.flags[0].name;

flags.superFlag.isEnabled();

numberFlags.numFlag.defaultValue;
numberFlags.numFlag.name;
numberFlags.numFlag.getValue();

stringFlags.strFlag.defaultValue;
stringFlags.strFlag.name;
stringFlags.strFlag.getValue();

Rox.unfreeze();
flags.superFlag.unfreeze();

function linkTargetGroupAttributes() {
    Rox.setCustomStringProperty("id", "someId");
    Rox.setCustomStringProperty("id", () => "someId");

    Rox.setCustomBooleanProperty("thisIsATest", true);
    Rox.setCustomBooleanProperty("thisIsATest", () => true);

    Rox.setCustomNumberProperty("aNumberProperty", 17);
    Rox.setCustomNumberProperty("aNumberProperty", () => 17);
}

function dynamicPropertyRuleHandler(propName: string, _context: unknown) {
    return propName === "myPropName";
}

function impressionHandler(
    _reporting: Rox.RoxReporting,
) {
    // If _reporting.targeting is false, it mean there were no dashboard conditions, and default value was used
}

function configurationFetchedHandler(fetcherResult: Rox.RoxFetcherResult) {
    if (fetcherResult.hasChanges && fetcherResult.fetcherStatus === Rox.RoxFetcherStatus.AppliedFromCache) {
    }
}
