import * as Rox from "rox-browser";

const flags = {
    superFlag: new Rox.Flag(false, { freeze: Rox.RoxFlagFreezeLevel.None }),
    superFlag2: new Rox.Flag(),
};

const stringFlags = {
    strFlag: new Rox.RoxString("value1", ["value1", "value2"]),
};

const numberFlags = {
    numFlag: new Rox.RoxNumber(12, [18, 24]),
};

// The register function should be called before the call to Rox.setup()
Rox.register("default", { ...numberFlags, ...stringFlags, ...flags });
Rox.setContext({ user: "John Doe" });
Rox.setup("ROLLOUT_IO_KEY", {
    impressionHandler,
    configurationFetchedHandler,
    dynamicPropertyRuleHandler,
}).then(linkTargetGroupAttributes);

Rox.fetch();

Rox.showOverrides(Rox.RoxOverridesPosition.BottomLeft);

Rox.dynamicApi.isEnabled("system.repotAnalytics", false);
Rox.dynamicApi.value("ui.textColor", "red");
Rox.dynamicApi.getNumber("ui.textSize", 12);

Rox.flags[0].defaultValue;
Rox.flags[0].name;

flags.superFlag.isEnabled();
flags.superFlag.isEnabled({ user: "John" });

numberFlags.numFlag.defaultValue;
numberFlags.numFlag.name;
numberFlags.numFlag.getValue();
numberFlags.numFlag.getValue({ user: "John" });

stringFlags.strFlag.defaultValue;
stringFlags.strFlag.name;
stringFlags.strFlag.getValue();
stringFlags.strFlag.getValue({ user: "John" });

Rox.unfreeze();
flags.superFlag.unfreeze();

function linkTargetGroupAttributes() {
    Rox.setCustomStringProperty("id", "someId");
    Rox.setCustomStringProperty("id", () => "someId");
    Rox.setCustomStringProperty("id", (context: any): string => context.id);

    Rox.setCustomBooleanProperty("thisIsATest", true);
    Rox.setCustomBooleanProperty("thisIsATest", () => true);
    Rox.setCustomBooleanProperty("thisIsATest", (context: any): boolean => context.value);

    Rox.setCustomNumberProperty("aNumberProperty", 17);
    Rox.setCustomNumberProperty("aNumberProperty", () => 17);
    Rox.setCustomNumberProperty("aNumberProperty", (context: any): number => context.value);
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
    if (
        fetcherResult.hasChanges
        && fetcherResult.fetcherStatus === Rox.RoxFetcherStatus.AppliedFromCache
    ) {
    }
}
