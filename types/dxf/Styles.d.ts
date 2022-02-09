export interface Style {
  type: 'STYLE';
  name?: string;
  lineTypeName?: string;
  fixedTextHeight?: number;
  widthFactor?: number;
  obliqueAngle?: number;
  flags?: any;
  lastHeightUsed?: number;
  primaryFontFileName?: string;
  bigFontFileName?: string;
}
