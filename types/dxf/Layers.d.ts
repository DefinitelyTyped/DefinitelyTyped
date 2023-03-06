export interface Layer {
  type: 'LAYER';
  name?: string;
  lineTypeName?: string;
  colorNumber?: number;
  flags?: any;
  plot?: boolean;
  lineWeightEnum?: number;
}
