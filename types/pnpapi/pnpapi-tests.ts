import * as pnp from 'pnpapi';

if (process.versions.pnp) {
  const locator = pnp.findPackageLocator('/foo');
  if (locator !== null) {
    pnp.getPackageInformation(locator).packageDependencies;
  }

  const resolution1 = pnp.resolveRequest('lodash', '/foo', {
    considerBuiltins: false,
    extensions: ['.ts', '.js'],
  });

  let resolution2 = pnp.resolveToUnqualified('lodash', '/foo', {
    considerBuiltins: false,
  });

  if (resolution2 !== null) {
    resolution2 = pnp.resolveUnqualified(resolution2, {
      extensions: ['.ts', '.js'],
    });
  }
}
