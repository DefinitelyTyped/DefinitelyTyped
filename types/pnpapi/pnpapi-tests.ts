/// <reference types="node"/>
import * as pnp from "pnpapi";

const information1 = pnp.getPackageInformation(pnp.topLevel);
const information2 = pnp.getPackageInformation(pnp.getLocator("foo", "bar"));

const locator = pnp.findPackageLocator("/foo");
if (locator !== null) {
    const info = pnp.getPackageInformation(locator);
    if (info !== null) {
        info.packageDependencies; // $ExpectType Map<string, string>
    }
}

const resolution1 = pnp.resolveRequest("lodash", "/foo");

let resolution2 = pnp.resolveToUnqualified("lodash", "/foo");
if (resolution2 !== null) {
    resolution2 = pnp.resolveUnqualified(resolution2);
}

process.versions.pnp; // $ExpectType string | undefined
