import { Scene, Color } from './three-core';
import { Pass } from './three-effectcomposer';
export class ClearPass extends Pass {
  constructor(clearColor?: Color | string | number | undefined, clearAlpha?: number | undefined);
  needsSwap: boolean;
  clearColor: Color | string | number | undefined;
  clearAlpha: number | undefined;
}
