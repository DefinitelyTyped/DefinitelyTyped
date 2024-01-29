// New Programmatic APi
import Nightwatch, { NightwatchAPI, NightwatchClient } from "nightwatch";
import { isType } from "./utils";

const client = Nightwatch.createClient({
    browserName: "firefox",
    headless: true,
});
Nightwatch.createClient();
Nightwatch.createClient({});

// test methods/properties exported on Nightwatch
new Nightwatch.by("css selector", "hello");
new Nightwatch.Capabilities();
isType<NightwatchAPI>(Nightwatch.browser);
isType<NightwatchAPI>(Nightwatch.app);
Nightwatch.Key.NULL;
// @ts-expect-error
Nightwatch.launchBrowser();
// @ts-expect-error
Nightwatch.updateCapabilities({});

// test internal methods exported on Nightwatch
const runner = Nightwatch.CliRunner();

// test Nightwatch Programmatic API
client.updateCapabilities({
    testCapability: "one, two, three",
});
client.updateCapabilities(function() {
    return {};
});

(async () => {
    const browser = await client.launchBrowser();
    isType<NightwatchAPI>(browser);

    isType<NightwatchClient>(client.nightwatch_client);
});
