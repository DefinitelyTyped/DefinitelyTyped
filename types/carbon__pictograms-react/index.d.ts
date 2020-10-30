// Type definitions for @carbon/pictograms-react 10.18
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/pictograms-react
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

/** 609 total pictograms */

export interface CarbonPictogramProps
  extends Omit<
    React.SVGProps<React.ReactSVGElement>,
    "ref" | "tabIndex" | "aria-hidden"
  > {
  "aria-hidden"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  height?: number;
  preserveAspectRatio?: string;
  tabIndex?: string;
  title?: string;
  viewBox?: string;
  width?: number;
  xmlns?: string;
}

export type CarbonPictogramType = React.ForwardRefExoticComponent<
  CarbonPictogramProps & React.RefAttributes<SVGSVGElement>
>;

export * from "./lib";
import * as __esPictograms from "./es";
