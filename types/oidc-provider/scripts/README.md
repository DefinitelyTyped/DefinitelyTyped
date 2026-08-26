# Configuration documentation and type generator

`update-configuration.mjs` copies the metadata used to generate
oidc-provider's configuration documentation into `index.d.ts`. It updates the
marked `ConfigurationOptionTypes` region and the JSDoc attached to properties
marked with `@configuration-docs` comments.

Run it from `types/oidc-provider` and pass an explicit oidc-provider checkout:

```sh
node scripts/update-configuration.mjs /path/to/oidc-provider
```

Use `--check` to verify that the committed declarations are current without
writing them:

```sh
node scripts/update-configuration.mjs --check /path/to/oidc-provider
```

The oidc-provider checkout must have its documentation dependencies installed.
The script rejects checkouts whose major and minor version do not match this
package. The script itself uses only Node.js built-ins and formats its output
with the dprint installation from the DefinitelyTyped repository, so that
repository's dependencies must also be installed.

Individual option types and property documentation are generated. Configuration
structure, optionality, enabled-feature requirements, and cross-feature
relationships remain hand-written.
