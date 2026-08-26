# oidc-provider declaration mirror

`update-types.mjs` copies the declaration artifact produced by oidc-provider
into fixed generated regions in `index.d.ts` and the generated
`lib/helpers/grants.d.ts` file. Configuration structure, extension methods,
events, interaction policy declarations, errors, and grant implementation
helpers therefore share a canonical upstream source.

Run it from `types/oidc-provider` and pass an explicit oidc-provider checkout:

```sh
node scripts/update-types.mjs /path/to/oidc-provider
```

Use `--check` to verify that the committed declarations are current without
writing them:

```sh
node scripts/update-types.mjs --check /path/to/oidc-provider
```

The script invokes `node docs/update-configuration.js --types-json` in the
provider checkout. It validates the artifact schema, exact provider version,
and SHA-256 content hash before changing any declaration. That provenance is
persisted in the generated contracts region, so `--check` also detects an
upstream patch release or source change whose formatted declarations happen to
be identical. The provider and `@types/oidc-provider` major and minor versions
must match.

The script uses only Node.js built-ins. It formats `index.d.ts` with the dprint
installation from the DefinitelyTyped repository and copies the grant-helper
declaration byte-for-byte, so that repository's dependencies must be installed.
Generated regions and files must not be edited by hand.

The updater integration checks accept the same provider checkout:

```sh
node scripts/update-types.test.mjs /path/to/oidc-provider
```
