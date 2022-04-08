import { FluentBundle, FluentDateTime, FluentError, FluentNumber, FluentResource, Scope } from '@fluent/bundle';
import { mapBundleSync, mapBundleAsync } from "@fluent/sequence";

const bundles = [
    new FluentBundle(["en-US", "en-GB", "en"]),
    new FluentBundle(["pl"]),
    new FluentBundle("it")
];

// mapSync examples:
const msBundle1 = mapBundleSync(bundles, "message-id");
if (msBundle1) {
    console.log(msBundle1.getMessage("message_id"));
}
const msBundleIds = ["message-id-1", "message-id-2"];
const msBundles = mapBundleSync(bundles, msBundleIds);
for (let i = 0; i < msBundles.length; ++i) {
    const msBundle = msBundles[i];
    if (msBundle) {
        console.log(`${msBundleIds[i]} = ${msBundle.getMessage(msBundleIds[i])}`);
    }
}

// mapAsync examples:
class AsyncBundlesWrapper {
    async *[Symbol.asyncIterator]() {
        for (const bundle of bundles) {
            yield bundle;
        }
    }
}

async function asyncTest() {
    const bundlesWrapper = new AsyncBundlesWrapper();
    const asBundle1 = await mapBundleAsync(bundlesWrapper, "message-id");
    if (asBundle1) {
        console.log(asBundle1.getMessage("message_id"));
    }

    const asBundleIds = ["message-id-1", "message-id-2"];
    const asBundles = await mapBundleAsync(bundlesWrapper, asBundleIds);
    for (let i = 0; i < asBundles.length; ++i) {
        const asBundle = asBundles[i];
        if (asBundle) {
            console.log(`${asBundleIds[i]} = ${asBundle.getMessage(asBundleIds[i])}`);
        }
    }
}
