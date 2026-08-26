# oidc-provider declaration mirror

`update-types.mjs` copies the declaration artifact produced by oidc-provider
into fixed generated regions in `index.d.ts` and the generated
`lib/helpers/grants.d.ts` file. Configuration structure, extension methods,
events, interaction policy declarations, errors, and unstable grant helpers
therefore share a canonical upstream source.

Run it from `types/oidc-provider` and pass an explicit oidc-provider checkout:

```sh
node scripts/update-types.mjs /path/to/oidc-provider
```

Alternatively, consume a previously generated artifact without a provider
checkout:

```sh
node scripts/update-types.mjs --artifact /path/to/oidc-provider-types.json
```

Use `--check` to verify that the committed declarations are current without
writing them:

```sh
node scripts/update-types.mjs --check /path/to/oidc-provider
```

`--check` also accepts `--artifact`. It intentionally compares the exact
mirror, including artifact provenance, and requires matching provider and DT
major/minor version lines.

Use `--status` to decide whether a release warrants a DT pull request:

```sh
node scripts/update-types.mjs --status --artifact /path/to/oidc-provider-types.json
```

It writes deterministic JSON to stdout. The comparison formats current and
prospective declarations and ignores only artifact provenance. Declaration or
generated JSDoc changes require an update, as does a new provider major.
Patch-only and minor-only releases do not. A required update advances the DT
package to the provider's `X.Y.9999`; artifacts older than DT's tracked
major/minor line are reported and skipped. Normal update mode follows this
policy, while exact `--check` may still reject provenance drift that does not
warrant a pull request.

The script invokes `node docs/update-configuration.js --types-json` in the
provider checkout. It validates the artifact schema, exact provider version,
and SHA-256 content hash before changing any declaration. That provenance is
persisted in the generated contracts region, so `--check` also detects an
upstream patch release or source change whose formatted declarations happen to
be identical.

The script uses only Node.js built-ins. It formats `index.d.ts` with the dprint
installation from the DefinitelyTyped repository and copies the grant-helper
declaration byte-for-byte, so that repository's dependencies must be installed.
Generated regions and files must not be edited by hand.

### One-time legacy bootstrap

The automation can be merged while `@types/oidc-provider` still describes the
currently released provider. When the three generated regions and
`lib/helpers/grants.d.ts` are all absent, the updater recognizes the exact DT
baseline present when this automation was introduced. The first substantive
provider artifact then performs a hash-gated migration that:

- reorganizes the provider-owned declarations into the generated regions;
- applies the grant-helper model and token-endpoint context declarations;
- creates `lib/helpers/grants.d.ts`; and
- updates the accompanying DT acceptance tests.

The migration inputs beside the updater do not alter the declarations published
by the bootstrap DT release. A partial generated layout, an existing helper
combined with a markerless index, or an unrecognized baseline is rejected
instead of being guessed at. Once the first release update has landed, the
generated markers permanently select the normal update path; the legacy
migration files can then be removed in a follow-up.

The updater integration checks accept the same provider checkout:

```sh
node scripts/update-types.test.mjs /path/to/oidc-provider
```

Release handoffs can run the same checks without provider source:

```sh
node scripts/update-types.test.mjs --artifact /path/to/oidc-provider-types.json
```

## Release synchronization

`sync-release.mjs` turns a provider release artifact into an isolated,
validated DefinitelyTyped commit. Run it from any directory in this checkout
with a stable provider tag and exactly one artifact source:

```sh
node types/oidc-provider/scripts/sync-release.mjs \
  --tag v9.12.0 \
  --run-id 123456789

node types/oidc-provider/scripts/sync-release.mjs \
  --tag v9.12.0 \
  --artifact /path/to/oidc-provider-types.json
```

The run ID form downloads the `oidc-provider-types-v9.12.0` artifact from
`panva/node-oidc-provider` and requires its sole top-level file to be
`oidc-provider-types.json`. Before changing anything, the script verifies the
GitHub CLI login, the `origin` fork and official `upstream` remote, Git author
identity, Node.js, and pnpm. The authenticated GitHub user must own `origin`.

The script fetches `upstream/master`, creates a temporary Git worktree, installs
only the root tooling and `@types/oidc-provider` dependency closure with a
no-lockfile workspace install, and asks `update-types.mjs --status` whether the
release needs a declaration update. When it does, the script applies the
artifact and runs:

- the updater's exact `--check` mode;
- the updater artifact/status integration checks;
- dprint over `types/oidc-provider`;
- `pnpm test oidc-provider`.

The updater's reported file list must exactly match Git, and every change must
remain below `types/oidc-provider`. A successful preparation leaves the local
branch `oidc-provider-v9.12.0` containing one commit titled
`[oidc-provider] sync declarations for v9.12.0`; the temporary worktree is then
removed. Inspect and submit that retained branch using the commands printed by
the script. The submission instruction reruns the helper with the same artifact
source so it can validate and reuse the prepared branch before pushing.

Pass `--submit` to push the branch without force and open the deterministic PR
against `DefinitelyTyped/DefinitelyTyped:master`. Existing open or merged PRs
for the release branch are successful no-ops. A closed, unmerged PR or a remote
branch without a PR requires manual recovery and is never overwritten or
adopted. A matching prepared local branch can be reused safely.

Temporary state is preserved on every failure. Pass `--keep-temp` to preserve
it after success as well. The focused orchestration tests are run separately:

```sh
node --test types/oidc-provider/scripts/sync-release.test.mjs
```
