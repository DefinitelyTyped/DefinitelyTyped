/// <reference types="node"/>
import * as pnp from 'pnpapi';

const information = pnp.getPackageInformation(pnp.topLevel);

const locator = pnp.findPackageLocator('/foo');
if (locator !== null) {
    pnp.getPackageInformation(locator).packageDependencies;
}

const resolution1 = pnp.resolveRequest('lodash', '/foo');

let resolution2 = pnp.resolveToUnqualified('lodash', '/foo');
if (resolution2 !== null) {
    resolution2 = pnp.resolveUnqualified(resolution2);
}

process.versions.pnp; // $ExpectType string | undefined
