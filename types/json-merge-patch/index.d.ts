// Type definitions for json-merge-patch
// Project: https://github.com/pierreinglebert/json-merge-patch
// Definitions by: Arsenij Schuetzer <https://github.com/senyaarseniy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "json-merge-patch" {
  function apply(target: Object, patch: Object): Object;
  function generate(before: Object, after: Object): Object;
  function merge(patch1: Object, patch2: Object): Object;
}
