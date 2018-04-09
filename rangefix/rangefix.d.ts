// Type definitions for rangefix v^0.2.5
// Project: https://github.com/edg2s/rangefix
// Definitions by: Sean P Ippolito <https://github.com/seanippolito/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "rangefix" {
  function withRangeFix(
    factory: any,
    isBroken: any,
    getClientRects: any,
    getBoundingClientRect: any
  ): any;
  namespace withRangeFix {}
  export = withRangeFix;
}
