// https://github.com/mrdoob/three.js/blob/master/examples/js/math/Lut.js

import { Color, Mesh, Vector3 } from './three-core';

export type ColorMapKeyword = 'rainbow'|'cooltowarm'|'blackbody'|'grayscale';

export class Lut {
  constructor(colormap: ColorMapKeyword, numberofcolors: number);

  addColorMap(colormapName: string, arrayOfColors: Array<[number, string]>) : void;

  changeColorMap(colormap: ColorMapKeyword): Lut;

  changeNumberOfColors(numberofcolors: number): Lut;

  copy(lut: Lut): void;

  getColor(alpha: number): Color;

  setLegendLayout(layout: 'horizontal'|'vertical'): void;

  setLegendOff(): void;

  setLegendOn(): Mesh;

  setLegendPosition(position: Vector3): void;

  setMax(max: number): void;

  setMin(min: number): void;
}
