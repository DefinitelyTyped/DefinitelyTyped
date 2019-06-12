// Type definitions for little-loader
// Project: https://github.com/walmartlabs/little-loader
// Definitions by: Chris Drackett <https://github.com/chrisdrackett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'little-loader' {
  function load(
    module: string,
    callBack: (err: string) => void,
    context: any,
  ): void

  export default load
}
