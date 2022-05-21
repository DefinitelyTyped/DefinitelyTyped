import { Color } from './color';
import { LayoutGridPatternEnum, LayoutGridAlignEnum } from './enums';

export interface LayoutGrid {
  pattern: LayoutGridPatternEnum;
  sectionSize: number;
  visible: boolean;
  color: Color;
  alignment: LayoutGridAlignEnum;
  gutterSize: number;
  offset: number;
  count: number;
}
