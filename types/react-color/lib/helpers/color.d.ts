import { HSLColor, HSVColor, RGBColor, ColorState } from "../../index";

declare module "react-color/lib/helpers/color" {
  interface Helpers {
      simpleCheckForValidColor(data: ColorState): boolean;
      toState(data: ColorState, oldHue?: number): ColorState;
  }
}

declare const _: Helpers;
export default _;
