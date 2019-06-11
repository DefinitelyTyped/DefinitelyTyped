// Type definitions for little-loader 0.2
// Project: https://github.com/walmartlabs/little-loader#readme
// Definitions by: Chris Drackett <https://github.com/chrisdrackett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "little-loader" {
  function load(
    module: string,
    callBack: (err: string) => void,
    context: any
  ): void;

  export default load;
}
