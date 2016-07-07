declare module "json-merge-patch" {
  function apply(target, patch): any;
  function generate(before, after): any;
  function merge(patch1, patch2): any;
}